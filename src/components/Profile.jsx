import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../services/userService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Mail, Calendar, Award, Clock, Zap, Book } from 'lucide-react';

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="p-10 text-center">Profile not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        {/* Sidebar / User Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full overflow-hidden bg-secondary mb-4">
                <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-muted-foreground mb-4">{profile.role}</p>
              
              <div className="w-full space-y-3 text-sm text-left">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {new Date(profile.joinDate).toLocaleDateString()}</span>
                </div>
              </div>

              <Button className="w-full mt-6" variant="outline">Edit Profile</Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content / Stats */}
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center justify-center text-center">
                <Zap className="h-8 w-8 text-yellow-500 mb-2" />
                <div className="text-2xl font-bold">{profile.stats.totalXp}</div>
                <p className="text-xs text-muted-foreground">Total XP</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center justify-center text-center">
                <Award className="h-8 w-8 text-primary mb-2" />
                <div className="text-2xl font-bold">{profile.stats.streak}</div>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center justify-center text-center">
                <Book className="h-8 w-8 text-blue-500 mb-2" />
                <div className="text-2xl font-bold">{profile.stats.coursesCompleted}</div>
                <p className="text-xs text-muted-foreground">Courses Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center justify-center text-center">
                <Clock className="h-8 w-8 text-green-500 mb-2" />
                <div className="text-2xl font-bold">{profile.stats.hoursLearned}</div>
                <p className="text-xs text-muted-foreground">Hours Learned</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profile.recentActivity && profile.recentActivity.length > 0 ? (
                  profile.recentActivity.map((activity) => (
                    <div key={activity.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 last:border-0 last:pb-0 gap-2">
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.target}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.date}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-sm">No recent activity.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}