import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { getStories } from './services/api';

export const Browse = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  useEffect(() => {
    console.log(stories);
  }, [stories]);

  const fetchStories = async () => {
    try {
      const data = await getStories();
      setStories(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen max-h-screen overflow-y-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stories.map(story => (
          <Card key={story._id} className="w-full">
            <CardHeader>
              <CardTitle>{story.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{story.content}</p>
            </CardContent>
            <CardFooter>
              <p>{story.date}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
