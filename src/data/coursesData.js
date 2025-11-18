// Course data for the DevLearn platform
// Add new courses by adding objects to this array

export const coursesData = [
  {
    id: 1,
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of the web with HTML5, semantic markup, forms, and accessibility.',
    level: 'Beginner',
    duration: '4 weeks',
    category: 'HTML',
    color: 'bg-orange-500',
    modules: [
      { id: 1, title: 'Introduction to HTML', lessons: 5 },
      { id: 2, title: 'HTML Elements & Attributes', lessons: 8 },
      { id: 3, title: 'Forms & Input Types', lessons: 6 },
      { id: 4, title: 'Semantic HTML & Accessibility', lessons: 5 }
    ],
    learningOutcomes: [
      'Understand HTML document structure',
      'Create semantic, accessible web pages',
      'Build functional forms with validation',
      'Use modern HTML5 features'
    ],
    prerequisites: 'None - perfect for beginners!'
  },
  {
    id: 2,
    title: 'CSS Mastery',
    description: 'Master styling with CSS3, Flexbox, Grid, animations, and responsive design principles.',
    level: 'Beginner',
    duration: '6 weeks',
    category: 'CSS',
    color: 'bg-blue-500',
    modules: [
      { id: 1, title: 'CSS Basics & Selectors', lessons: 6 },
      { id: 2, title: 'Box Model & Layout', lessons: 7 },
      { id: 3, title: 'Flexbox Mastery', lessons: 8 },
      { id: 4, title: 'CSS Grid Layout', lessons: 8 },
      { id: 5, title: 'Animations & Transitions', lessons: 6 },
      { id: 6, title: 'Responsive Design', lessons: 7 }
    ],
    learningOutcomes: [
      'Style websites with CSS3',
      'Master Flexbox and Grid layouts',
      'Create smooth animations',
      'Build responsive, mobile-first designs'
    ],
    prerequisites: 'Basic HTML knowledge'
  },
  {
    id: 3,
    title: 'JavaScript Essentials',
    description: 'Learn core JavaScript concepts: variables, functions, arrays, objects, and DOM manipulation.',
    level: 'Beginner',
    duration: '8 weeks',
    category: 'JavaScript',
    color: 'bg-yellow-500',
    modules: [
      { id: 1, title: 'JavaScript Basics', lessons: 7 },
      { id: 2, title: 'Functions & Scope', lessons: 6 },
      { id: 3, title: 'Arrays & Objects', lessons: 8 },
      { id: 4, title: 'DOM Manipulation', lessons: 9 },
      { id: 5, title: 'Events & Event Handling', lessons: 7 },
      { id: 6, title: 'Asynchronous JavaScript', lessons: 8 },
      { id: 7, title: 'Error Handling', lessons: 5 },
      { id: 8, title: 'Building Real Projects', lessons: 10 }
    ],
    learningOutcomes: [
      'Write clean, modern JavaScript',
      'Manipulate the DOM effectively',
      'Handle asynchronous operations',
      'Build interactive web applications'
    ],
    prerequisites: 'HTML & CSS knowledge'
  },
  {
    id: 4,
    title: 'Advanced JavaScript',
    description: 'Dive deep into ES6+, async/await, promises, closures, prototypes, and design patterns.',
    level: 'Intermediate',
    duration: '8 weeks',
    category: 'JavaScript',
    color: 'bg-yellow-600',
    modules: [
      { id: 1, title: 'ES6+ Features', lessons: 9 },
      { id: 2, title: 'Closures & Scope', lessons: 7 },
      { id: 3, title: 'Prototypes & Inheritance', lessons: 8 },
      { id: 4, title: 'Promises & Async/Await', lessons: 9 },
      { id: 5, title: 'Modules & Bundlers', lessons: 6 },
      { id: 6, title: 'Design Patterns', lessons: 10 },
      { id: 7, title: 'Testing & Debugging', lessons: 7 },
      { id: 8, title: 'Performance Optimization', lessons: 6 }
    ],
    learningOutcomes: [
      'Master ES6+ syntax and features',
      'Understand JavaScript internals',
      'Write efficient, maintainable code',
      'Apply design patterns effectively'
    ],
    prerequisites: 'JavaScript fundamentals'
  },
  {
    id: 5,
    title: 'React Fundamentals',
    description: 'Build modern UIs with React: components, hooks, state management, and routing.',
    level: 'Intermediate',
    duration: '6 weeks',
    category: 'React',
    color: 'bg-cyan-500',
    modules: [
      { id: 1, title: 'React Basics & JSX', lessons: 6 },
      { id: 2, title: 'Components & Props', lessons: 8 },
      { id: 3, title: 'State & Lifecycle', lessons: 7 },
      { id: 4, title: 'React Hooks', lessons: 10 },
      { id: 5, title: 'React Router', lessons: 6 },
      { id: 6, title: 'State Management & Context', lessons: 8 }
    ],
    learningOutcomes: [
      'Build component-based UIs',
      'Master React Hooks',
      'Implement routing in SPAs',
      'Manage application state'
    ],
    prerequisites: 'JavaScript (ES6+) & HTML/CSS'
  },
  {
    id: 6,
    title: 'TypeScript for Front-End',
    description: 'Add type safety to your JavaScript projects with TypeScript and improve code quality.',
    level: 'Intermediate',
    duration: '5 weeks',
    category: 'TypeScript',
    color: 'bg-blue-600',
    modules: [
      { id: 1, title: 'TypeScript Basics', lessons: 6 },
      { id: 2, title: 'Types & Interfaces', lessons: 8 },
      { id: 3, title: 'Generics & Advanced Types', lessons: 7 },
      { id: 4, title: 'TypeScript with React', lessons: 9 },
      { id: 5, title: 'Best Practices & Tooling', lessons: 5 }
    ],
    learningOutcomes: [
      'Add type safety to JavaScript',
      'Use TypeScript with React',
      'Write maintainable code',
      'Catch errors at compile time'
    ],
    prerequisites: 'JavaScript and React experience'
  },
  {
    id: 7,
    title: 'Tailwind CSS',
    description: 'Build beautiful, responsive interfaces rapidly with the utility-first CSS framework.',
    level: 'Beginner',
    duration: '3 weeks',
    category: 'CSS',
    color: 'bg-teal-500',
    modules: [
      { id: 1, title: 'Tailwind Setup & Basics', lessons: 5 },
      { id: 2, title: 'Utility Classes & Layout', lessons: 8 },
      { id: 3, title: 'Customization & Plugins', lessons: 6 }
    ],
    learningOutcomes: [
      'Build UIs with utility classes',
      'Create responsive designs quickly',
      'Customize Tailwind configuration',
      'Integrate with modern frameworks'
    ],
    prerequisites: 'Basic CSS knowledge'
  },
  {
    id: 8,
    title: 'Responsive Web Design',
    description: 'Create mobile-first, responsive layouts that work across all devices and screen sizes.',
    level: 'Beginner',
    duration: '4 weeks',
    category: 'CSS',
    color: 'bg-purple-500',
    modules: [
      { id: 1, title: 'Mobile-First Approach', lessons: 6 },
      { id: 2, title: 'Media Queries', lessons: 7 },
      { id: 3, title: 'Responsive Images & Videos', lessons: 5 },
      { id: 4, title: 'Testing & Best Practices', lessons: 6 }
    ],
    learningOutcomes: [
      'Design mobile-first layouts',
      'Use media queries effectively',
      'Optimize for different devices',
      'Test responsive designs'
    ],
    prerequisites: 'HTML & CSS basics'
  },
  {
    id: 9,
    title: 'Git & Version Control',
    description: 'Master Git workflows, branching, merging, and collaboration with GitHub.',
    level: 'Beginner',
    duration: '3 weeks',
    category: 'Tools',
    color: 'bg-gray-600',
    modules: [
      { id: 1, title: 'Git Basics & Setup', lessons: 5 },
      { id: 2, title: 'Branching & Merging', lessons: 7 },
      { id: 3, title: 'GitHub & Collaboration', lessons: 8 }
    ],
    learningOutcomes: [
      'Track code changes with Git',
      'Collaborate using GitHub',
      'Manage branches effectively',
      'Resolve merge conflicts'
    ],
    prerequisites: 'Basic command line knowledge'
  },
  {
    id: 10,
    title: 'Web Performance Optimization',
    description: 'Learn techniques to optimize loading times, rendering, and overall web performance.',
    level: 'Advanced',
    duration: '4 weeks',
    category: 'Performance',
    color: 'bg-green-600',
    modules: [
      { id: 1, title: 'Performance Metrics', lessons: 6 },
      { id: 2, title: 'Loading Optimization', lessons: 8 },
      { id: 3, title: 'Rendering Performance', lessons: 7 },
      { id: 4, title: 'Advanced Techniques', lessons: 7 }
    ],
    learningOutcomes: [
      'Measure web performance',
      'Optimize loading times',
      'Improve rendering performance',
      'Implement advanced optimizations'
    ],
    prerequisites: 'HTML, CSS, JavaScript proficiency'
  },
  {
    id: 11,
    title: 'Web Accessibility (a11y)',
    description: 'Build inclusive web applications following WCAG guidelines and best practices.',
    level: 'Intermediate',
    duration: '4 weeks',
    category: 'Accessibility',
    color: 'bg-indigo-500',
    modules: [
      { id: 1, title: 'Accessibility Fundamentals', lessons: 6 },
      { id: 2, title: 'ARIA & Screen Readers', lessons: 8 },
      { id: 3, title: 'Keyboard Navigation', lessons: 6 },
      { id: 4, title: 'Testing & WCAG Compliance', lessons: 7 }
    ],
    learningOutcomes: [
      'Understand accessibility principles',
      'Implement ARIA correctly',
      'Support keyboard navigation',
      'Meet WCAG guidelines'
    ],
    prerequisites: 'HTML & JavaScript knowledge'
  },
  {
    id: 12,
    title: 'Vue.js Essentials',
    description: 'Learn Vue.js framework, components, directives, and state management with Vuex.',
    level: 'Intermediate',
    duration: '6 weeks',
    category: 'Vue',
    color: 'bg-emerald-500',
    modules: [
      { id: 1, title: 'Vue Basics & Templates', lessons: 6 },
      { id: 2, title: 'Components & Props', lessons: 8 },
      { id: 3, title: 'Directives & Computed Properties', lessons: 7 },
      { id: 4, title: 'Vue Router', lessons: 6 },
      { id: 5, title: 'Vuex State Management', lessons: 8 },
      { id: 6, title: 'Building Production Apps', lessons: 7 }
    ],
    learningOutcomes: [
      'Build Vue.js applications',
      'Master Vue components',
      'Implement routing with Vue Router',
      'Manage state with Vuex'
    ],
    prerequisites: 'JavaScript (ES6+) knowledge'
  },
  // Add new courses below this line
  // Template:
  // {
  //   id: 13, // Increment ID
  //   title: 'Course Title',
  //   description: 'Course description here',
  //   level: 'Beginner' | 'Intermediate' | 'Advanced',
  //   duration: 'X weeks',
  //   category: 'HTML' | 'CSS' | 'JavaScript' | 'React' | 'Vue' | 'TypeScript' | 'Tools' | 'Performance' | 'Accessibility',
  //   color: 'bg-{color}-500' // Tailwind color class
  // },
];

// Available categories for filtering
export const categories = [
  { value: 'All', label: 'All' },
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'React', label: 'React' },
  { value: 'Vue', label: 'Vue' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'Tools', label: 'Tools' },
  { value: 'Performance', label: 'Performance' },
  { value: 'Accessibility', label: 'Accessibility' }
];

// Available color classes for course cards
export const availableColors = [
  'bg-orange-500',
  'bg-blue-500',
  'bg-yellow-500',
  'bg-cyan-500',
  'bg-teal-500',
  'bg-purple-500',
  'bg-green-500',
  'bg-indigo-500',
  'bg-emerald-500',
  'bg-red-500',
  'bg-pink-500',
  'bg-gray-600'
];
