import React, { useState, useEffect } from 'react';
import courseService from '../services/courseService';
import { getAllUsers } from '../services/userService';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AdminDashboard = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    image: '',
    difficulty: 'Beginner',
    category: 'General',
    duration: '',
    xp: 100,
    sections: []
  });
  const [translations, setTranslations] = useState({
    fr: { title: '', description: '' },
    ar: { title: '', description: '' }
  });
  const [sectionTranslations, setSectionTranslations] = useState({
    fr: { title: '', content: '' },
    ar: { title: '', content: '' }
  });
  const [isTranslating, setIsTranslating] = useState(false);
  const [isSectionTranslating, setIsSectionTranslating] = useState(false);

  const [sectionData, setSectionData] = useState({
    title: '',
    content: '',
    xp: 10
  });
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchCourses();
  }, []);

  const handleAutoTranslate = async () => {
    if (!courseData.title || !courseData.description) {
      alert('Please fill in English title and description first.');
      return;
    }
    setIsTranslating(true);
    try {
      const [frTitle, frDesc, arTitle, arDesc] = await Promise.all([
        courseService.translateText(courseData.title, 'fr'),
        courseService.translateText(courseData.description, 'fr'),
        courseService.translateText(courseData.title, 'ar'),
        courseService.translateText(courseData.description, 'ar')
      ]);
      setTranslations({
        fr: { title: frTitle, description: frDesc },
        ar: { title: arTitle, description: arDesc }
      });
    } catch (error) {
      console.error('Translation failed', error);
      alert('Auto translation failed. Please try again.');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSectionAutoTranslate = async () => {
    if (!sectionData.title || !sectionData.content) {
      alert('Please fill in English section title and content first.');
      return;
    }
    setIsSectionTranslating(true);
    try {
      const [frTitle, frContent, arTitle, arContent] = await Promise.all([
        courseService.translateText(sectionData.title, 'fr'),
        courseService.translateText(sectionData.content, 'fr'),
        courseService.translateText(sectionData.title, 'ar'),
        courseService.translateText(sectionData.content, 'ar')
      ]);
      setSectionTranslations({
        fr: { title: frTitle, content: frContent },
        ar: { title: arTitle, content: arContent }
      });
    } catch (error) {
      console.error('Translation failed', error);
      alert('Section auto translation failed. Please try again.');
    } finally {
      setIsSectionTranslating(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users', error);
    }
  };

  const fetchCourses = async () => {
    try {
      const data = await courseService.getCourses();
      setCourses(data);
    } catch (error) {
      console.error('Failed to fetch courses', error);
    }
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await courseService.deleteCourse(id);
        setCourses(courses.filter(course => course._id !== id));
        alert('Course deleted successfully');
      } catch (error) {
        console.error('Failed to delete course', error);
        alert('Failed to delete course');
      }
    }
  };

  const handleCourseChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSectionChange = (e) => {
    setSectionData({ ...sectionData, [e.target.name]: e.target.value });
  };

  const addSection = () => {
    if (!sectionData.title) return;
    setCourseData({
      ...courseData,
      sections: [...courseData.sections, { ...sectionData, translations: sectionTranslations }]
    });
    setSectionData({ title: '', content: '', xp: 10 });
    setSectionTranslations({
        fr: { title: '', content: '' },
        ar: { title: '', content: '' }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await courseService.createCourse({ ...courseData, translations });
      alert('Course created successfully!');
      setCourseData({
        title: '',
        description: '',
        image: '',
        difficulty: 'Beginner',
        duration: '',
        xp: 100,
        sections: []
      });
      setTranslations({
        fr: { title: '', description: '' },
        ar: { title: '', description: '' }
      });
    } catch (error) {
      console.error(error);
      const message = error.response?.data?.message || error.message || 'Failed to create course';
      alert(`Error: ${message}`);
    }
  };

  return (
    <div className="p-8 container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <Tabs defaultValue="create-course" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
          <TabsTrigger value="create-course">Create Course</TabsTrigger>
          <TabsTrigger value="manage-courses">Manage Courses</TabsTrigger>
          <TabsTrigger value="manage-users">Manage Users</TabsTrigger>
        </TabsList>
        
        <TabsContent value="create-course">
          <Card>
            <CardHeader>
              <CardTitle>Add New Course</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={courseData.title} onChange={handleCourseChange} required />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <textarea 
                id="description" 
                name="description" 
                value={courseData.description} 
                onChange={handleCourseChange} 
                required 
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="border p-4 rounded-md space-y-4 bg-muted/20">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Translations</h3>
                    <Button type="button" onClick={handleAutoTranslate} disabled={isTranslating} variant="outline" size="sm">
                        {isTranslating ? 'Translating...' : 'Auto Translate (AI)'}
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>French Title</Label>
                        <Input 
                            value={translations.fr.title} 
                            onChange={(e) => setTranslations({...translations, fr: {...translations.fr, title: e.target.value}})} 
                            placeholder="Titre en français"
                        />
                        <Label>French Description</Label>
                        <textarea 
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            value={translations.fr.description} 
                            onChange={(e) => setTranslations({...translations, fr: {...translations.fr, description: e.target.value}})} 
                            placeholder="Description en français"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Arabic Title</Label>
                        <Input 
                            value={translations.ar.title} 
                            onChange={(e) => setTranslations({...translations, ar: {...translations.ar, title: e.target.value}})} 
                            dir="rtl"
                            placeholder="العنوان بالعربية"
                        />
                        <Label>Arabic Description</Label>
                        <textarea 
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            value={translations.ar.description} 
                            onChange={(e) => setTranslations({...translations, ar: {...translations.ar, description: e.target.value}})} 
                            dir="rtl"
                            placeholder="الوصف بالعربية"
                        />
                    </div>
                </div>
            </div>

            <div>
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" name="image" value={courseData.image} onChange={handleCourseChange} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <select 
                    id="difficulty" 
                    name="difficulty" 
                    value={courseData.difficulty} 
                    onChange={handleCourseChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" name="category" value={courseData.category} onChange={handleCourseChange} />
                </div>
                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Input id="duration" name="duration" value={courseData.duration} onChange={handleCourseChange} />
                </div>
            </div>

            <div className="border p-4 rounded-md">
                <h3 className="font-semibold mb-2">Add Section</h3>
                <div className="space-y-2">
                    <div>
                        <Label htmlFor="sectionTitle">Section Title</Label>
                        <Input id="sectionTitle" name="title" value={sectionData.title} onChange={handleSectionChange} />
                    </div>
                    <div>
                        <Label htmlFor="sectionContent">Content (URL/Text)</Label>
                        <textarea 
                            id="sectionContent" 
                            name="content" 
                            value={sectionData.content} 
                            onChange={handleSectionChange} 
                            className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>

                    <div className="border p-4 rounded-md space-y-4 bg-muted/20">
                        <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm">Section Translations</h4>
                            <Button type="button" onClick={handleSectionAutoTranslate} disabled={isSectionTranslating} variant="outline" size="sm">
                                {isSectionTranslating ? 'Translating...' : 'Auto Translate Section'}
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-xs">French Title</Label>
                                <Input 
                                    value={sectionTranslations.fr.title} 
                                    onChange={(e) => setSectionTranslations({...sectionTranslations, fr: {...sectionTranslations.fr, title: e.target.value}})} 
                                    placeholder="Titre de section en français"
                                    className="h-8 text-xs"
                                />
                                <Label className="text-xs">French Content</Label>
                                <textarea 
                                    className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-xs ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    value={sectionTranslations.fr.content} 
                                    onChange={(e) => setSectionTranslations({...sectionTranslations, fr: {...sectionTranslations.fr, content: e.target.value}})} 
                                    placeholder="Contenu en français"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs">Arabic Title</Label>
                                <Input 
                                    value={sectionTranslations.ar.title} 
                                    onChange={(e) => setSectionTranslations({...sectionTranslations, ar: {...sectionTranslations.ar, title: e.target.value}})} 
                                    dir="rtl"
                                    placeholder="عنوان القسم بالعربية"
                                    className="h-8 text-xs"
                                />
                                <Label className="text-xs">Arabic Content</Label>
                                <textarea 
                                    className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-xs ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    value={sectionTranslations.ar.content} 
                                    onChange={(e) => setSectionTranslations({...sectionTranslations, ar: {...sectionTranslations.ar, content: e.target.value}})} 
                                    dir="rtl"
                                    placeholder="محتوى القسم بالعربية"
                                />
                            </div>
                        </div>
                    </div>

                    <Button type="button" onClick={addSection} variant="outline" className="mt-2">Add Section</Button>
                </div>
                <div className="mt-4">
                    <h4 className="text-sm font-medium">Sections Added:</h4>
                    <ul className="list-disc pl-5">
                        {courseData.sections.map((s, i) => (
                            <li key={i}>{s.title}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <Button type="submit" className="w-full">Create Course</Button>
          </form>
        </CardContent>
      </Card>
      </TabsContent>

      <TabsContent value="manage-courses">
        <Card>
          <CardHeader>
            <CardTitle>Manage Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map(course => (
                <div key={course._id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg gap-4">
                  <div>
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-sm text-gray-500">{course.category} • {course.difficulty}</p>
                  </div>
                  <Button variant="destructive" onClick={() => handleDeleteCourse(course._id)} className="w-full sm:w-auto">Delete</Button>
                </div>
              ))}
              {courses.length === 0 && <p className="text-center text-gray-500">No courses found.</p>}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="manage-users">
        <Card>
            <CardHeader>
                <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                  {users.map(user => (
                    <div key={user._id} className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                        <div>
                          <h3 className="font-semibold">{user.name}</h3>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs w-fit ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                          {user.role}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                        <div>
                          <span className="text-gray-500">Total XP:</span>
                          <span className="ml-2 font-medium">{user.stats?.totalXp || 0}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Courses Completed:</span>
                          <span className="ml-2 font-medium">{user.stats?.coursesCompleted || 0}</span>
                        </div>
                      </div>
                      {user.courseProgress && user.courseProgress.length > 0 && (
                        <div className="mt-3">
                          <h4 className="text-xs font-semibold text-gray-500 mb-1">Course Progress:</h4>
                          <div className="space-y-1">
                            {user.courseProgress.map((progress, idx) => {
                                const courseName = courses.find(c => c._id === progress.course)?.title || 'Unknown Course';
                                return (
                                    <div key={idx} className="flex items-center justify-between text-xs">
                                        <span>{courseName}</span>
                                        <span>{Math.round(progress.progress)}%</span>
                                    </div>
                                )
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {users.length === 0 && <p className="text-center text-gray-500">No users found.</p>}
                </div>
            </CardContent>
        </Card>
      </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
