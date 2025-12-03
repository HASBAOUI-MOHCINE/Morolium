import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import courseService from '../services/courseService';
import { getUserProfile } from '../services/userService';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { PlayCircle, CheckCircle } from 'lucide-react';
import { useTranslation } from '../i18n/TranslationProvider';
import { strings } from '../i18n/translations';

const CourseDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completedSections, setCompletedSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseData, userData] = await Promise.all([
            courseService.getCourseById(id),
            getUserProfile()
        ]);
        setCourse(courseData);
        
        const progress = userData.courseProgress.find(cp => cp.course === id);
        if (progress) {
            setCompletedSections(progress.completedSections);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!course) return <div className="p-8 text-center">Course not found</div>;

  // Find translation key by matching English title
  let translationKey = null;
  if (strings.en.courseCopy) {
    for (const [key, value] of Object.entries(strings.en.courseCopy)) {
        if (value.title === course.title) {
            translationKey = key;
            break;
        }
    }
  }

  // Translation fallback logic
  const translatedTitle = translationKey ? t.courseCopy?.[translationKey]?.title : course.title;
  const translatedDescription = translationKey ? t.courseCopy?.[translationKey]?.description : course.description;
  const translatedCategory = t.categoryLabels?.[course.category] ?? course.category;
  const translatedLevel = t.levels?.[course.difficulty] ?? course.difficulty;

  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{translatedTitle}</h1>
        <p className="text-muted-foreground text-lg mb-6">{translatedDescription}</p>
        <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="bg-secondary px-3 py-1 rounded-full">{translatedCategory}</span>
            <span className="bg-secondary px-3 py-1 rounded-full">{translatedLevel}</span>
            <span className="bg-secondary px-3 py-1 rounded-full">{course.duration}</span>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-6">{t.courseContent ?? 'Course Content'}</h2>
      <div className="space-y-4">
        {course.sections && course.sections.length > 0 ? (
            course.sections.map((section, index) => {
                const isCompleted = completedSections.includes(section._id);
                return (
                <Link to={`/courses/${id}/section/${section._id}`} key={section._id} className="block">
                    <Card className={`hover:shadow-md transition-shadow cursor-pointer border-l-4 ${isCompleted ? 'border-l-green-500' : 'border-l-primary'}`}>
                        <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <div className={`p-3 rounded-full shrink-0 ${isCompleted ? 'bg-green-100 text-green-600' : 'bg-primary/10 text-primary'}`}>
                                    {isCompleted ? <CheckCircle size={24} /> : <PlayCircle size={24} />}
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-semibold text-lg truncate">{t.section ?? 'Section'} {index + 1}: {section.title}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-1">
                                        {section.content.substring(0, 100)}...
                                    </p>
                                </div>
                            </div>
                            <Button variant={isCompleted ? "outline" : "ghost"} size="sm" className={`w-full sm:w-auto ${isCompleted ? "text-green-600 border-green-200 hover:bg-green-50" : ""}`}>
                                {isCompleted ? (t.completed ?? "Completed") : (t.start ?? "Start")}
                            </Button>
                        </CardContent>
                    </Card>
                </Link>
            )})
        ) : (
            <p className="text-muted-foreground">{t.noSections ?? 'No sections available for this course yet.'}</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
