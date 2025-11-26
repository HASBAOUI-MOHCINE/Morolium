import React, { useState, useEffect } from 'react';
import { getTracks } from '../services/trackService';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Tracks() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const data = await getTracks();
        setTracks(data);
      } catch (error) {
        console.error("Failed to fetch tracks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading tracks...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Learning Tracks</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Structured paths to guide you from beginner to expert in specific domains.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <Card key={track.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{track.title}</CardTitle>
              <CardDescription>{track.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>Progress</span>
                  <span>{track.progress}%</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-500 ease-out" 
                    style={{ width: `${track.progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {track.completedCourses} of {track.totalCourses} courses completed
                </p>
              </div>
              
              <Button asChild className="w-full mt-4">
                <Link to={`/tracks/${track.id}`}>
                  {track.progress > 0 ? 'Continue Track' : 'Start Track'}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}