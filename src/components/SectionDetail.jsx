import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import courseService from '../services/courseService';
import { getUserProfile } from '../services/userService';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/TranslationProvider';

const SectionDetail = () => {
  const { id, sectionId } = useParams();
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseData, userData] = await Promise.all([
            courseService.getCourseById(id),
            getUserProfile()
        ]);
        setCourse(courseData);
        
        if (courseData.sections && Array.isArray(courseData.sections)) {
            const index = courseData.sections.findIndex(s => s._id === sectionId);
            if (index !== -1) {
                setSection(courseData.sections[index]);
                setCurrentIndex(index);
            } else {
                console.error("Section not found");
            }
        }

        const progress = userData.courseProgress.find(cp => cp.course === id);
        if (progress && progress.completedSections.includes(sectionId)) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, sectionId]);

  const handleCompleteSection = async () => {
      try {
          await courseService.updateProgress(id, sectionId);
          setIsCompleted(true);
      } catch (error) {
          console.error('Error updating progress:', error);
      }
  }

  const goToNext = () => {
      if (currentIndex < course.sections.length - 1) {
          const nextSection = course.sections[currentIndex + 1];
          navigate(`/courses/${id}/section/${nextSection._id}`);
      }
  };

  const goToPrevious = () => {
      if (currentIndex > 0) {
          const prevSection = course.sections[currentIndex - 1];
          navigate(`/courses/${id}/section/${prevSection._id}`);
      }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!course || !section) return <div className="p-8 text-center">Section not found</div>;

  const sectionTranslation = section.translations?.[language];
  const sectionTitle = sectionTranslation?.title || section.title;
  const sectionContent = sectionTranslation?.content || section.content;

  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to={`/courses/${id}`} className="text-primary hover:underline flex items-center gap-2 mb-4">
            <ArrowLeft size={16} /> Back to Course Overview
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold">{course.title}</h1>
        <p className="text-muted-foreground mt-2">Section {currentIndex + 1} of {course.sections.length}</p>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">{sectionTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none mb-8">
              {/* Render content here. */}
              {sectionContent.startsWith('http') ? (
                  sectionContent.includes('youtube.com') || sectionContent.includes('youtu.be') ? (
                    <div className="aspect-video w-full">
                        <iframe 
                            src={sectionContent.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/')} 
                            title={sectionTitle}
                            className="w-full h-full rounded-md"
                            allowFullScreen
                        />
                    </div>
                  ) : (
                    <a href={sectionContent} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                        View External Content: {sectionContent}
                    </a>
                  )
              ) : (
                  <div className="whitespace-pre-wrap">{sectionContent}</div>
              )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4 border-t">
            <Button 
                variant="outline" 
                onClick={goToPrevious} 
                disabled={currentIndex === 0}
                className="w-full sm:w-auto"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>

            <Button 
                onClick={handleCompleteSection} 
                disabled={isCompleted}
                className={`w-full sm:w-auto ${isCompleted ? 'bg-green-600 hover:bg-green-700 cursor-default' : 'bg-primary hover:bg-primary/90'}`}
            >
                {isCompleted ? (
                    <>
                        <CheckCircle className="mr-2 h-4 w-4" /> Completed
                    </>
                ) : (
                    "Mark as Completed"
                )}
            </Button>

            <Button 
                variant="outline" 
                onClick={goToNext} 
                disabled={currentIndex === course.sections.length - 1}
                className="w-full sm:w-auto"
            >
                Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SectionDetail;
