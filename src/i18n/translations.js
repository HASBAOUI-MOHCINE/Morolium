const baseFeatures = [
  { title: 'Structured Learning', description: 'Follow curated journeys that stack knowledge intentionally.' },
  { title: 'Portfolio Projects', description: 'Craft beautiful interfaces with production-ready briefs.' },
  { title: 'Mentor Guidance', description: 'Stay on track with checkpoints and actionable feedback.' },
  { title: 'Inclusive by Design', description: 'Accessibility-first patterns built into every module.' },
  { title: 'Performance Mindset', description: 'Ship sites that feel instant on any device.' },
  { title: 'Hiring Readiness', description: 'Interview drills and Git workflows baked in.' },
]

const baseStats = [
  { label: 'Expert-led lessons', value: '200+' },
  { label: 'Career-focused tracks', value: '12' },
  { label: 'Practice projects', value: '45' },
]

const baseLearningPath = ['HTML & CSS foundations', 'Modern JavaScript depth', 'Framework mastery & ops']
const baseWeeklyFocus = [
  { label: 'Live studio sessions', value: '4 hrs' },
  { label: 'Hands-on labs', value: '6 hrs' },
  { label: 'Portfolio critiques', value: '2 hrs' },
]

export const strings = {
  en: {
    nav: ['Overview', 'Courses', 'Tracks', 'Exercises', 'Resources', 'Profile'],
    heroTitle: 'Morolium',
    heroSubtitle: 'Master Front-End Development with Interactive Courses',
    heroLead:
      'From HTML basics to advanced React - learn at your own pace with hands-on projects and real-world examples',
    browseCourses: 'Browse Courses',
    viewTracks: 'View Learning Tracks',
    whyChoose: 'Why Choose Morolium?',
    whyChooseLead: 'A studio-inspired program for the next wave of creative engineers.',
    features: baseFeatures,
    stats: baseStats,
    learningPathTitle: 'Learning Path',
    learningPath: baseLearningPath,
    weeklyFocusTitle: 'Weekly Focus',
    weeklyFocus: baseWeeklyFocus,
    ctaTitle: 'Ready to build luminous interfaces?',
    ctaLead: 'Join thousands of creatives learning to design, develop, and deploy stunning experiences with modern tooling.',
    ctaPrimary: 'Explore cohorts',
    ctaSecondary: 'Get notified',
    coursesTitle: 'Front-End Development Courses',
    coursesLead: 'Master essential skills with curated cohorts, gold-standard projects, and clear readiness signals.',
    categoryLabels: {
      All: 'All',
      HTML: 'HTML',
      CSS: 'CSS',
      JavaScript: 'JavaScript',
      React: 'React',
      Vue: 'Vue',
      TypeScript: 'TypeScript',
      Tools: 'Tools',
      Performance: 'Performance',
      Accessibility: 'Accessibility',
    },
    levels: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      Advanced: 'Advanced',
    },
    courseCopy: {
      1: {
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of the web with HTML5, semantic markup, forms, and accessibility.',
      },
      2: {
        title: 'CSS Mastery',
        description: 'Master styling with CSS3, Flexbox, Grid, animations, and responsive design principles.',
      },
      3: {
        title: 'JavaScript Essentials',
        description: 'Learn core JavaScript concepts: variables, functions, arrays, objects, and DOM manipulation.',
      },
      4: {
        title: 'Advanced JavaScript',
        description: 'Dive deep into ES6+, async/await, promises, closures, prototypes, and design patterns.',
      },
      5: {
        title: 'React Fundamentals',
        description: 'Build modern UIs with React: components, hooks, state management, and routing.',
      },
      6: {
        title: 'TypeScript for Front-End',
        description: 'Add type safety to your JavaScript projects with TypeScript and improve code quality.',
      },
      7: {
        title: 'Tailwind CSS',
        description: 'Build beautiful, responsive interfaces rapidly with the utility-first CSS framework.',
      },
      8: {
        title: 'Responsive Web Design',
        description: 'Create mobile-first, responsive layouts that work across all devices and screen sizes.',
      },
      9: {
        title: 'Git & Version Control',
        description: 'Master Git workflows, branching, merging, and collaboration with GitHub.',
      },
      10: {
        title: 'Web Performance Optimization',
        description: 'Learn techniques to optimize loading times, rendering, and overall web performance.',
      },
      11: {
        title: 'Web Accessibility (a11y)',
        description: 'Build inclusive web applications following WCAG guidelines and best practices.',
      },
      12: {
        title: 'Vue.js Essentials',
        description: 'Learn Vue.js framework, components, directives, and state management with Vuex.',
      },
    },
    comingSoon: 'Coming soon — this page will be available shortly.',
    noCourses: 'No courses found in this category.',
    enrollNow: 'Enroll Now',
    profile: 'Profile',
    resources: 'Resources',
    signOut: 'Sign out',
  },
  fr: {
    nav: ['Aperçu', 'Cours', 'Parcours', 'Exercices', 'Ressources', 'Profil'],
    heroTitle: 'Morolium',
    heroSubtitle: 'Maîtrisez le développement Front-End avec des cours interactifs',
    heroLead:
      'Des bases HTML à React avancé - apprenez à votre rythme avec des projets pratiques et des exemples réels',
    browseCourses: 'Parcourir les cours',
    viewTracks: 'Voir les parcours',
    whyChoose: 'Pourquoi choisir Morolium ?',
    whyChooseLead: 'Un programme inspiré des studios pour la nouvelle génération d’ingénieurs créatifs.',
    features: [
      { title: 'Parcours structuré', description: 'Suivez des trajets sélectionnés qui consolident les acquis étape par étape.' },
      { title: 'Projets de portfolio', description: 'Créez de superbes interfaces grâce à des briefs prêts pour la production.' },
      { title: 'Mentorat dédié', description: 'Restez aligné avec des jalons clairs et des retours actionnables.' },
      { title: 'Inclusif par conception', description: 'Des patterns accessibles intégrés dans chaque module.' },
      { title: 'Culture performance', description: 'Livrez des sites ultra-rapides sur tous les appareils.' },
      { title: 'Prêt pour l’emploi', description: 'Simulations d’entretiens et workflows Git intégrés.' },
    ],
    stats: [
      { label: 'Cours dirigés par des experts', value: '200+' },
      { label: 'Parcours orientés carrière', value: '12' },
      { label: 'Projets pratiques', value: '45' },
    ],
    learningPathTitle: 'Parcours pédagogique',
    learningPath: ['Fondations HTML & CSS', 'JavaScript moderne approfondi', 'Maîtrise des frameworks & opérations'],
    weeklyFocusTitle: 'Focus hebdomadaire',
    weeklyFocus: [
      { label: 'Studios en direct', value: '4 h' },
      { label: 'Laboratoires pratiques', value: '6 h' },
      { label: 'Revues de portfolio', value: '2 h' },
    ],
    ctaTitle: 'Prêt à créer des interfaces lumineuses ?',
    ctaLead: 'Rejoignez des milliers de créatifs qui conçoivent, développent et déploient des expériences modernes.',
    ctaPrimary: 'Explorer les cohortes',
    ctaSecondary: 'Être averti',
    coursesTitle: 'Parcours de développement Front-End',
    coursesLead: 'Maîtrisez les compétences essentielles avec des cohortes guidées et des projets de référence.',
    categoryLabels: {
      All: 'Tous',
      HTML: 'HTML',
      CSS: 'CSS',
      JavaScript: 'JavaScript',
      React: 'React',
      Vue: 'Vue',
      TypeScript: 'TypeScript',
      Tools: 'Outils',
      Performance: 'Performance',
      Accessibility: 'Accessibilité',
    },
    levels: {
      Beginner: 'Débutant',
      Intermediate: 'Intermédiaire',
      Advanced: 'Avancé',
    },
    courseCopy: {
      1: {
        title: 'Fondamentaux HTML',
        description: 'Apprenez les bases du web avec HTML5, un balisage sémantique, des formulaires et l’accessibilité.',
      },
      2: {
        title: 'Maîtrise de CSS',
        description: 'Maîtrisez CSS3, Flexbox, Grid, les animations et les principes de conception responsive.',
      },
      3: {
        title: 'Principes essentiels de JavaScript',
        description: 'Découvrez les notions clés : variables, fonctions, tableaux, objets et manipulation du DOM.',
      },
      4: {
        title: 'JavaScript avancé',
        description: 'Plongez dans ES6+, async/await, les promesses, les closures, les prototypes et les design patterns.',
      },
      5: {
        title: 'Fondamentaux de React',
        description: 'Créez des interfaces modernes avec composants, hooks, gestion d’état et routage.',
      },
      6: {
        title: 'TypeScript pour le Front-End',
        description: 'Ajoutez de la sûreté de typage à vos projets JavaScript et améliorez la qualité du code.',
      },
      7: {
        title: 'Tailwind CSS',
        description: 'Construisez rapidement des interfaces responsives avec la philosophie utility-first.',
      },
      8: {
        title: 'Conception Web Responsive',
        description: 'Créez des mises en page mobile-first adaptées à tous les écrans.',
      },
      9: {
        title: 'Git et contrôle de version',
        description: 'Maîtrisez les workflows Git, les branches, les fusions et la collaboration sur GitHub.',
      },
      10: {
        title: 'Optimisation des performances web',
        description: 'Apprenez à optimiser le chargement, le rendu et les performances globales des sites.',
      },
      11: {
        title: 'Accessibilité Web (a11y)',
        description: 'Créez des applications inclusives conformes aux directives WCAG.',
      },
      12: {
        title: 'Essentiels de Vue.js',
        description: 'Apprenez Vue, ses composants, directives et la gestion d’état avec Vuex.',
      },
    },
    comingSoon: 'Bientôt disponible — cette page sera accessible prochainement.',
    noCourses: 'Aucun cours trouvé dans cette catégorie.',
    enrollNow: 'S’inscrire',
    profile: 'Profil',
    resources: 'Ressources',
    signOut: 'Déconnexion',
  },
  ar: {
    nav: ['نظرة عامة', 'الدورات', 'المسارات', 'التمارين', 'الموارد', 'الملف الشخصي'],
    heroTitle: 'موروليوم',
    heroSubtitle: 'أتقن تطوير الواجهة الأمامية عبر مسارات تفاعلية',
    heroLead:
      'من أساسيات HTML إلى React المتقدم — تعلّم وفق وتيرتك مع مشاريع تطبيقية وأمثلة حقيقية',
    browseCourses: 'استعراض الدورات',
    viewTracks: 'عرض المسارات التعليمية',
    whyChoose: 'لماذا تختار موروليوم؟',
    whyChooseLead: 'برنامج بروح الاستوديو لأجيال المهندسين المبدعين القادمة.',
    features: [
      { title: 'تعلّم منظّم', description: 'اتّبع رحلات منسّقة تبني معرفتك خطوة بخطوة.' },
      { title: 'مشاريع ملفّ أعمال', description: 'أنشئ واجهات مبهرة انطلاقًا من موجزات جاهزة للإنتاج.' },
      { title: 'إرشاد الخبراء', description: 'حافظ على وتيرتك عبر نقاط تفتيش وتعقيبات قابلة للتنفيذ.' },
      { title: 'شمولية في الجوهر', description: 'أنماط تراعي الوصول مدمجة في كل وحدة تعليمية.' },
      { title: 'عقلية الأداء', description: 'قدّم مواقع تستجيب فورًا على أي جهاز.' },
      { title: 'جاهزية للتوظيف', description: 'تدريبات مقابلات وسير عمل Git مضمنة مسبقًا.' },
    ],
    stats: [
      { label: 'دروس بقيادة خبراء', value: '200+' },
      { label: 'مسارات تركّز على المسار المهني', value: '12' },
      { label: 'مشاريع عملية', value: '45' },
    ],
    learningPathTitle: 'مسار التعلّم',
    learningPath: ['أساسيات HTML وCSS', 'تعمّق في JavaScript الحديثة', 'إتقان الأُطر والعمليات'],
    weeklyFocusTitle: 'التركيز الأسبوعي',
    weeklyFocus: [
      { label: 'جلسات مباشرة', value: '٤ ساعات' },
      { label: 'مختبرات تطبيقية', value: '٦ ساعات' },
      { label: 'مراجعات الملفّات', value: '٢ ساعات' },
    ],
    ctaTitle: 'هل أنت مستعد لتصميم واجهات متألّقة؟',
    ctaLead: 'انضم إلى الآلاف من المبدعين الذين يتعلّمون تصميم وتطوير ونشر تجارب رقمية مذهلة.',
    ctaPrimary: 'استكشف الدورات',
    ctaSecondary: 'احصل على تنبيه',
    coursesTitle: 'دورات تطوير الواجهة الأمامية',
    coursesLead: 'أتقن المهارات الجوهرية عبر دفعات منتقاة ومشاريع معيارية ومؤشرات جاهزية واضحة.',
    categoryLabels: {
      All: 'الكل',
      HTML: 'HTML',
      CSS: 'CSS',
      JavaScript: 'JavaScript',
      React: 'React',
      Vue: 'Vue',
      TypeScript: 'TypeScript',
      Tools: 'الأدوات',
      Performance: 'الأداء',
      Accessibility: 'إمكانية الوصول',
    },
    levels: {
      Beginner: 'مبتدئ',
      Intermediate: 'متوسط',
      Advanced: 'متقدم',
    },
    courseCopy: {
      1: {
        title: 'أساسيات HTML',
        description: 'تعرّف على لبنات بناء الويب عبر HTML5 والعنونة الدلالية والنماذج وإمكانية الوصول.',
      },
      2: {
        title: 'إتقان CSS',
        description: 'أتقن CSS3 وFlexbox وGrid والرسوم المتحركة ومبادئ التصميم المتجاوب.',
      },
      3: {
        title: 'أساسيات JavaScript',
        description: 'تعلّم المفاهيم الجوهرية مثل المتغيّرات والدوال والمصفوفات والكائنات والتعامل مع DOM.',
      },
      4: {
        title: 'JavaScript المتقدم',
        description: 'تعمّق في ES6+ وasync/await والوعود والإغلاق والكائنات النموذجية وأنماط التصميم.',
      },
      5: {
        title: 'أساسيات React',
        description: 'ابنِ واجهات حديثة باستخدام المكوّنات والـ Hooks وإدارة الحالة والتوجيه.',
      },
      6: {
        title: 'TypeScript للواجهة الأمامية',
        description: 'أضف الأمان النوعي إلى مشاريع JavaScript وحسّن جودة الشفرة.',
      },
      7: {
        title: 'Tailwind CSS',
        description: 'أنشئ واجهات جميلة ومتجاوبة بسرعة باستخدام إطار CSS القائم على الأدوات.',
      },
      8: {
        title: 'تصميم الويب المتجاوب',
        description: 'اصنع تخطيطات مرنة تركّز على الأجهزة المحمولة وتعمل على جميع الشاشات.',
      },
      9: {
        title: 'Git وإدارة الإصدارات',
        description: 'أتقن مسارات العمل في Git والتفرّعات والدمج والتعاون عبر GitHub.',
      },
      10: {
        title: 'تحسين أداء الويب',
        description: 'تعلّم تقنيات لتحسين أوقات التحميل والرسم والأداء العام للمواقع.',
      },
      11: {
        title: 'إتاحة الويب (a11y)',
        description: 'أنشئ تطبيقات شاملة تتوافق مع إرشادات WCAG وأفضل الممارسات.',
      },
      12: {
        title: 'أساسيات Vue.js',
        description: 'تعلّم إطار Vue والمكوّنات والتوجيه وإدارة الحالة باستخدام Vuex.',
      },
    },
    comingSoon: 'قريبًا — ستكون هذه الصفحة متاحة قريبًا.',
    noCourses: 'لا توجد دورات في هذه الفئة.',
    enrollNow: 'سجّل الآن',
    profile: 'الملف الشخصي',
    resources: 'الموارد',
    signOut: 'تسجيل الخروج',
  },
}

export default strings
