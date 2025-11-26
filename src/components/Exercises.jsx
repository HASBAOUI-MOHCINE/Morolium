import React, { useState, useEffect } from 'react';
import { getExercises } from '../services/exerciseService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from 'lucide-react'; // Using lucide icons as badges for now or just text

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await getExercises();
        setExercises(data);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  const filteredExercises = filter === 'All' 
    ? exercises 
    : exercises.filter(ex => ex.difficulty === filter || ex.topic === filter);

  const categories = ['All', 'Easy', 'Medium', 'Hard', 'JavaScript', 'CSS', 'React'];

  if (loading) {
    return <div className="p-10 text-center">Loading exercises...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Coding Exercises</h1>
        <p className="text-muted-foreground mb-6">Sharpen your skills with hands-on practice problems.</p>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Button 
              key={cat} 
              variant={filter === cat ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredExercises.map((exercise) => (
          <Card key={exercise.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{exercise.title}</CardTitle>
                <span className={`px-2 py-1 rounded text-xs font-semibold 
                  ${exercise.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 
                    exercise.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' : 
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'}`}>
                  {exercise.difficulty}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-muted-foreground">Topic: {exercise.topic}</span>
                <span className="text-sm font-medium text-primary">{exercise.xp} XP</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${
                  exercise.status === 'Completed' ? 'text-green-600' : 
                  exercise.status === 'Locked' ? 'text-muted-foreground' : 'text-blue-600'
                }`}>
                  {exercise.status}
                </span>
                <Button size="sm" disabled={exercise.status === 'Locked'}>
                  {exercise.status === 'Completed' ? 'Review' : 'Solve'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}