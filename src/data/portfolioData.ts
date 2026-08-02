import { PortfolioItem, ServiceItem, SkillCategory, ExperienceItem } from '../types';

export const GOOGLE_DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1U41cf3pbylT29RUXFL-A0lLINjp0_nBI?usp=sharing";

export const initialServices: ServiceItem[] = [
  {
    id: 'ppt-design',
    titleAr: 'تصميم عروض بوربوينت احترافية (PowerPoint)',
    titleEn: 'Professional PowerPoint Presentation Design',
    descAr: 'تصميم عروض برزنتيشن طليعية بألوان متناسقة وسلايدات مميزة للمؤتمرات والأبحاث الطبية والأكاديمية مع إنفوجرافيك جذاب.',
    descEn: 'Designing premium presentation slide decks with harmonic color palettes, custom charts, and smooth visual transitions for medical conferences & research defenses.',
    iconName: 'Presentation',
    featuresAr: [
      'تنسيق هويّة بصرية وسلايدات ديناميكية',
      'رسوم بيانية طليعية وإنفوجرافيك طبي',
      'دعم كامل للغتين العربية والإنجليزية',
      'تسليم بصيغ PPTX, PDF, ومقاطع شارحة'
    ],
    featuresEn: [
      'Dynamic visual themes & slide master layouts',
      'Custom medical infographics & charts',
      'Full bilingual Arabic & English support',
      'Deliverables in editable PPTX & PDF formats'
    ],
    recommendedForAr: 'الأطباء، الباحثين، وطلاب الكليات الطبية والتمريض',
    recommendedForEn: 'Doctors, researchers, nursing & medical students'
  },
  {
    id: 'word-formatting',
    titleAr: 'تنسيق وتأطير أبحاث ومستندات وورد (Word)',
    titleEn: 'Word Document Formatting & Academic Layout',
    descAr: 'تنسيق المستندات، التقارير، وأوراق العمل الطبية ببرنامج Word بجودة طباعة دور النشر مع فهرسة وجداول احترافية.',
    descEn: 'Formatting clinical reports, research papers, and Word documents to publication standard with automated tables of contents and clean layout.',
    iconName: 'FileText',
    featuresAr: [
      'ضبط خطوط وعناوين وهوامش الأبحاث الطبية',
      'إنشاء جداول وفهارس تلقائية',
      'تنسيق المراجع العلمية بصيغة احترافية',
      'تحويل بين Word و PDF بسلاسة'
    ],
    featuresEn: [
      'Academic typography, margins & styling setup',
      'Automated table of contents & figures',
      'Citation and reference list styling',
      'Seamless Word to PDF conversion'
    ],
    recommendedForAr: 'الباحثين وأصحاب مشاريع التخرج والأبحاث العلمية',
    recommendedForEn: 'Researchers & thesis authors'
  },
  {
    id: 'graphic-posters',
    titleAr: 'بوسترات طبية وتصاميم جرافيك (Graphics & Posters)',
    titleEn: 'Medical Posters & Graphic Design',
    descAr: 'تصميم ملصقات وبوسترات تثقيفية علمية مناسبة للحملات التوعوية، الأيام العالمية للصحة، والمعارض الطبية.',
    descEn: 'Crafting visually arresting medical and educational posters tailored for public health campaigns, international health days, and scientific exhibitions.',
    iconName: 'Image',
    featuresAr: [
      'تنسيق المقاسات للطباعة أو النشر الرقمي',
      'إنفوجرافيك مبسط لتعليم المرضى',
      'ألوان جذابة ومريحة للعين',
      'جودة عالية دقة HD/4K'
    ],
    featuresEn: [
      'Sized for high-res print or digital publication',
      'Simplified patient-friendly medical diagrams',
      'Eye-safe, vibrant color harmony',
      'High-resolution HD/4K output'
    ],
    recommendedForAr: 'المستشفيات، الجمعيات الطبية، وحملات التوعية',
    recommendedForEn: 'Hospitals, health organizations & public awareness teams'
  },
  {
    id: 'video-editing',
    titleAr: 'مونتاج وتعديل الفيديوهات (Video Editing & Reels)',
    titleEn: 'Short Video Editing & Motion Graphics',
    descAr: 'مونتاج الفيديوهات التثقيفية القصيرة والريلز الطبية مع إضافة المؤثرات، النصوص الشارحة، والموسيقى التناغمية.',
    descEn: 'Editing educational healthcare short videos and Reels with subtitles, motion transitions, and background audio harmony.',
    iconName: 'Film',
    featuresAr: [
      'مونتاج احترافي للفيديوهات التوعوية',
      'إضافة كتابة توضيحية (Subtitles)',
      'تأثيرات انتقالية ناعمة ومؤثرات صوتية',
      'صيغة ريلز ورأسية تناسب الهاتف'
    ],
    featuresEn: [
      'Engaging short-form video assembly',
      'Subtitles & animated captions',
      'Smooth transitions & audio leveling',
      'Vertical format optimized for Reels/TikTok'
    ],
    recommendedForAr: 'صانعي الفيديوهات التوعوية والمنصات الطبية والتعليمية',
    recommendedForEn: 'Medical influencers & public health creators'
  },
  {
    id: 'social-media',
    titleAr: 'تصاميم السوشيال ميديا (Social Media Banners)',
    titleEn: 'Social Media Graphic Designs',
    descAr: 'تصاميم بوستات، ستوريز، وبنرات منصات التواصل الاجتماعي للمحتوى الطبي والتثقيفي بأسلوب عصري ومبهر.',
    descEn: 'Creating engaging posts, stories, and carousel banners tailored for medical content, healthcare tips, and community awareness.',
    iconName: 'Share2',
    featuresAr: [
      'مقاسات مخصصة لانستجرام، فيسبوك، ولينكد إن',
      'قوالب سوشيال ميديا موحدة للهوية',
      'تنسيق نصوص طبية وجاذبة للجمهور',
      'تسليم الملفات جاهزة للنشر المباشر'
    ],
    featuresEn: [
      'Custom sizing for Instagram, Facebook & LinkedIn',
      'Branded theme consistency across posts',
      'Engaging medical copywriting & typography',
      'Ready-to-publish digital formats'
    ],
    recommendedForAr: 'صُنّاع المحتوى الطبي والعيادات التخصصية والفرق التطوعية',
    recommendedForEn: 'Medical creators & specialized clinics'
  },
  {
    id: 'canva-pro',
    titleAr: 'تصاميم كانفا إبداعية (Canva Pro Templates)',
    titleEn: 'Creative Canva Pro Templates',
    descAr: 'إعداد قوالب كانفا قابلة للتعديل والتعاون للمؤسسات مع حزم جرافيك متكاملة سهلة الاستخدام.',
    descEn: 'Crafting editable Canva master templates for healthcare organizations to maintain branding and post speed.',
    iconName: 'Sparkles',
    featuresAr: [
      'روابط قوالب قابلة للتعديل المباشر في Canva',
      'تصاميم انسيابية وألوان أنيقة',
      'كتالوجات بروشور وبطاقات تعريف',
      'سهولة تعديل النصوص والصور'
    ],
    featuresEn: [
      'Direct editable share links on Canva',
      'Elegant layouts & color palettes',
      'Brochures, flyers & badge design',
      'Easy end-user text & image customization'
    ],
    recommendedForAr: 'فرق التسويق والفرق الطلابية والمؤسسات الصحية',
    recommendedForEn: 'Student teams & marketing committees'
  }
];

export const initialSkills: SkillCategory[] = [
  {
    titleAr: 'برامج التصميم والتقنية الجرافيكية',
    titleEn: 'Design & Graphic Software Tools',
    skills: [
      { nameAr: 'Microsoft PowerPoint', nameEn: 'Microsoft PowerPoint', level: 98, iconName: 'Presentation' },
      { nameAr: 'Microsoft Word', nameEn: 'Microsoft Word', level: 96, iconName: 'FileText' },
      { nameAr: 'Canva Pro Design', nameEn: 'Canva Pro Design', level: 95, iconName: 'Sparkles' },
      { nameAr: 'Graphic Design & Infographics', nameEn: 'Graphic Design', level: 92, iconName: 'Palette' },
      { nameAr: 'Video Editing & Motion', nameEn: 'Video Editing', level: 88, iconName: 'Film' },
      { nameAr: 'Microsoft Excel', nameEn: 'Microsoft Excel', level: 85, iconName: 'FileSpreadsheet' }
    ]
  },
  {
    titleAr: 'المهارات التمريضية والتثقيفية',
    titleEn: 'Clinical Nursing & Health Awareness',
    skills: [
      { nameAr: 'Clinical Nursing Practice', nameEn: 'Clinical Nursing Practice', level: 96, iconName: 'Stethoscope' },
      { nameAr: 'Patient Education & Awareness', nameEn: 'Patient Education', level: 96, iconName: 'HeartPulse' },
      { nameAr: 'Public Health Campaigns', nameEn: 'Public Health Campaigns', level: 95, iconName: 'Activity' },
      { nameAr: 'Medical Content Writing', nameEn: 'Medical Content Writing', level: 93, iconName: 'BookOpen' },
      { nameAr: 'Medical Research & Synthesis', nameEn: 'Medical Research', level: 90, iconName: 'Search' }
    ]
  },
  {
    titleAr: 'المهارات القيادية والشخصية',
    titleEn: 'Leadership & Human Resources',
    skills: [
      { nameAr: 'Communication & Presentation Skills', nameEn: 'Communication & Presentation', level: 96, iconName: 'MessageSquare' },
      { nameAr: 'Human Resources (HR Volunteering)', nameEn: 'Human Resources (HR)', level: 94, iconName: 'UserCheck' },
      { nameAr: 'Public Health Committee Management', nameEn: 'Committee Management', level: 93, iconName: 'Users' },
      { nameAr: 'Problem Solving & Critical Thinking', nameEn: 'Critical Thinking', level: 92, iconName: 'Brain' },
      { nameAr: 'Teamwork & Organization', nameEn: 'Teamwork & Organization', level: 96, iconName: 'Heart' }
    ]
  }
];

export const initialExperiences: ExperienceItem[] = [
  {
    id: 'nursing-intern',
    roleAr: 'امتياز تمريض (Nursing Intern)',
    roleEn: 'Nursing Intern',
    organizationAr: 'كلية التمريض - جامعة قنا والمستشفيات الجامعية',
    organizationEn: 'Faculty of Nursing, Qena University & Hospitals',
    periodAr: 'حالياً (سنة الامتياز)',
    periodEn: 'Present (Internship Year)',
    type: 'work',
    descAr: 'تطبيق الرعاية التمريضية المباشرة للمرضى، التثقيف الصحي الميداني، والمشاركة في خطط الرعاية الطبية مع الكوادر الطبية بجامعة قنا.',
    descEn: 'Delivering direct clinical nursing care, patient health education, and contributing to comprehensive care plans in university clinical departments in Qena.',
    highlightsAr: [
      'تطبيق أعلى معايير سلامة المرضى والرعاية التمريضية بالمستشفيات الجامعية',
      'تثقيف المرضى وعائلاتهم حول الرعاية الذاتية والوقاية في أقسام التمريض المختلفة',
      'تقديم عروض مناقشة الحالات الطبية (Clinical Case Presentations) بسلايدات احترافية'
    ],
    highlightsEn: [
      'Executing high patient safety and clinical standards at university hospitals',
      'Educating patients and families on post-discharge self care',
      'Delivering concise clinical case presentations with professional PowerPoint decks'
    ]
  },
  {
    id: 'yly-hr',
    roleAr: 'متطوعة في الموارد البشرية (HR Volunteer)',
    roleEn: 'HR Volunteer at Youth Leading Youth (YLY)',
    organizationAr: 'مبادرة Youth Leading Youth (YLY) - وزارة الشباب والرياضة',
    organizationEn: 'Youth Leading Youth (YLY) Initiative',
    periodAr: 'فترة عمل تطوعية قيادية',
    periodEn: 'Volunteering Leadership',
    type: 'volunteer',
    descAr: 'إدارة وتنسيق طاقات الشباب، متابعة الأداء، تنظيم الورش التدريبية، وتطوير المهارات الشخصية للفريق التطوعي.',
    descEn: 'Managing youth talent, evaluating performance, organizing training workshops, and fostering leadership within the volunteering network.',
    highlightsAr: [
      'إجراء المقابلات وتجهيز برامج استقبال المتطوعين الجدد',
      'تنظيم فعاليات وتدريبات تطوير الذات والمهارات',
      'بناء بيئة عمل مشجعة وإيجابية لفرق الشباب'
    ],
    highlightsEn: [
      'Conducting volunteer onboarding & interviews',
      'Organizing personal development workshops',
      'Fostering team cohesion and positive culture'
    ]
  },
  {
    id: 'head-public-health',
    roleAr: 'رئيس لجنة الصحة العامة (Head of Public Health Committee)',
    roleEn: 'Head of Public Health Committee',
    organizationAr: 'لجان المبادرات والأنشطة الطلابية والتوعوية بجامعة قنا',
    organizationEn: 'Public Health Committees & Student Initiatives',
    periodAr: 'دور قيادي سابق',
    periodEn: 'Previous Leadership Role',
    type: 'volunteer',
    descAr: 'قيادة التخطيط والتنفيذ لحملات التوعية الصحية الميدانية والرقمية، وتوزيع الأدوار وتصميم المحتوى التوعوي.',
    descEn: 'Leading public health campaign planning, field campaigns, and digital awareness material distribution across community channels.',
    highlightsAr: [
      'إطلاق وتوجيه حملات التوعية ضد الأمراض المزمنة والصحة الوقائية',
      'إشراف كامل على المحتوى البصري والبوسترات التثقيفية',
      'قيادة فريق التطوع الصحي وتحقيق أثر مجتمعي واسع'
    ],
    highlightsEn: [
      'Launching campaigns on chronic disease prevention',
      'Supervising visual posters & public health graphics',
      'Leading volunteers for measurable community impact'
    ]
  },
  {
    id: 'digital-content-designer',
    roleAr: 'مصممة محتوى رقمي وجرافيك (Digital Content & Graphic Designer)',
    roleEn: 'Digital Content & Graphic Designer',
    organizationAr: 'عمل حر ومشاريع مستمرة (Freelance)',
    organizationEn: 'Freelance & Institutional Collaborations',
    periodAr: 'مستمر',
    periodEn: 'Ongoing',
    type: 'work',
    descAr: 'تصميم العشرات من عروض البوربوينت، ملفات الوورد المنسقة، البوسترات الطبية والجرافيكية، فيديوهات التوعية، وتصاميم السوشيال ميديا.',
    descEn: 'Crafting PowerPoint decks, formatted Word documents, medical posters, video editing, and social media graphic assets.',
    highlightsAr: [
      'إخراج عروض بوربوينت وأبحاث وورد منسقة بدقة أكاديمية طليعية',
      'تصميم بوسترات جرافيك ومونتاج فيديوهات تثقيفية للريلز والمنصات',
      'تخزين وتنظيم جميع الأعمال والمشاريع على Google Drive لسهولة المشاركة'
    ],
    highlightsEn: [
      'Designing visually compelling PowerPoint decks & formatted Word papers',
      'Designing graphic posters and editing short awareness video reels',
      'Maintaining an organized Google Drive master portfolio'
    ]
  },
  {
    id: 'education-nursing',
    roleAr: 'بكالوريوس التمريض - تقدير ممتاز',
    roleEn: 'Bachelor of Nursing - Graduated with Excellent Distinction',
    organizationAr: 'كلية التمريض - جامعة قنا (Qena University)',
    organizationEn: 'Faculty of Nursing, Qena University',
    periodAr: 'جامعة قنا، مصر',
    periodEn: 'Qena, Egypt',
    type: 'education',
    descAr: 'التخرج بتقدير عام "ممتاز" طوال سنوات الدراسة الأكاديمية بكلية التمريض جامعة قنا، مع التميز في مشاريع التثقيف الصحي والعروض التقديمية.',
    descEn: 'Graduated with "Excellent" academic performance throughout university years at Qena University Faculty of Nursing.',
    highlightsAr: [
      'تقدير ممتاز طوال سنوات الدراسة الأكاديمية بجامعة قنا',
      'المشاركة النشطة في المؤتمرات العلمية والأنشطة الطلابية والتثقيف الطبي',
      'إعداد وتصميم مادة العروض التقديمية والأبحاث الأكاديمية بأسلوب جرافيكي مميز'
    ],
    highlightsEn: [
      'Maintained Excellent grade distinction at Qena University',
      'Active participant in scientific symposiums & healthcare awareness',
      'Designed presentation decks and academic research papers'
    ]
  }
];

export const samplePortfolioProjects: PortfolioItem[] = [
  // ==========================================
  // --- 1. EXCEL SECTION (قسم الإكسيل 📊) ---
  // ==========================================
  {
    id: 'excel-patient-care-tracker',
    titleAr: 'جدول تحليل وتتبع بيانات المرضى والرعاية التمريضية',
    titleEn: 'Clinical Nursing & Patient Care Data Tracker',
    category: 'excel',
    descriptionAr: 'شيت إكسيل احترافي مخصص لتنظيم وتتبع بيانات المرضى، التحاليل الطبية، والعلامات الحيوية بمخططات بيانية ومعادلات إكسيل دقيقة.',
    descriptionEn: 'Professional Excel spreadsheet designed for clinical patient tracking, lab metrics analysis, and dynamic healthcare data charts.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/spreadsheets/d/17W3iHFg4t3v6CvqVy35CtFTrd3jKJO82/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['Microsoft Excel', 'Patient Care', 'Clinical Data', 'Analytics'],
    software: ['Microsoft Excel', 'Data Formulas'],
    featured: true
  },
  {
    id: 'excel-hospital-statistics-matrix',
    titleAr: 'جدول إدارة وإحصائيات المستشفيات واللجان الصحية',
    titleEn: 'Healthcare Statistics & Hospital Management Matrix',
    category: 'excel',
    descriptionAr: 'جدول إكسيل تفاعلي يشتمل على جداول محورية (Pivot Tables) ورسوم بيانية لإدارة الموارد الصحية وإحصائيات المستشفيات والمبادرات.',
    descriptionEn: 'Interactive Excel workbook featuring pivot tables, metric visualizers, and hospital administration resource matrices.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/spreadsheets/d/1j6sL29WPZp29wjGJuwAgtrR25bNARSgr/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['Microsoft Excel', 'Pivot Tables', 'Healthcare Admin', 'Statistics'],
    software: ['Microsoft Excel', 'Pivot Tables', 'Visual Charts'],
    featured: true
  },

  // ==============================================
  // --- 2. POWERPOINT SECTION (قسم البوربوينت 🖥️) ---
  // ==============================================
  {
    id: 'ppt-presentation-01',
    titleAr: 'عرض التثقيف الصحي والأبحاث التمريضية (العمل الأول)',
    titleEn: 'Clinical Nursing & Healthcare Presentation 01',
    category: 'powerpoint',
    descriptionAr: 'عرض بوربوينت أكاديمي احترافي مصمم بأعلى معايير الجرافيك وتناسيق الألوان المريحة للعين للمناقشات الطبية.',
    descriptionEn: 'Academic PowerPoint presentation featuring custom slide layouts, infographics, and clear medical visual hierarchy.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/1tJ1G4mtMIbRXJ9-JpJcnkmDmtbv4taaM/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'Medical Presentation', 'Slide Design', 'Mansoura University'],
    software: ['Microsoft PowerPoint', 'Canva Pro'],
    slidesCount: 18,
    featured: true,
    slides: [
      {
        slideNumber: 1,
        titleAr: 'عرض التثقيف الصحي - تصميم سماح ربيع',
        titleEn: 'Healthcare Education Slide Deck - Designed by Samah Rabie',
        contentAr: 'إعداد وتنسيق: سماح ربيع محمود علي | امتياز تمريض ومصممة محتوى',
        contentEn: 'Designed by: Samah Rabie | Nursing Intern & Visual Designer',
        bgColor: 'from-emerald-900 to-teal-950'
      },
      {
        slideNumber: 2,
        titleAr: 'العلامات الحيوية ورعاية المرضى',
        titleEn: 'Vital Signs & Clinical Patient Protocol',
        contentAr: 'إنفوجرافيك توضيحي وسلس يستعرض الخطوات والتقييمات التمريضية.',
        contentEn: 'Clear visual infographic outlining vital steps and nursing assessment.',
        bgColor: 'from-cyan-950 to-emerald-950'
      },
      {
        slideNumber: 3,
        titleAr: 'عرض الملف المباشر على Google Drive',
        titleEn: 'Open Original Google Presentation File',
        contentAr: 'يمكنك فتح العرض كاملاً وبدقة عالية مباشرة على Google Presentation.',
        contentEn: 'View and present the original full slide deck directly on Google Slides.',
        bgColor: 'from-blue-900 to-teal-950'
      }
    ]
  },
  {
    id: 'ppt-presentation-02',
    titleAr: 'عرض مناقشة الحالات السريرية والتحاليل الطبية (العمل الثاني)',
    titleEn: 'Clinical Case Defense & Medical Research Deck 02',
    category: 'powerpoint',
    descriptionAr: 'برزنتيشن بوربوينت مخصص لمناقشات الحالات الطبية المعقدة، يتضمن جداول تحاليل ورسوم إنفوجرافيك تناغمية.',
    descriptionEn: 'Comprehensive research defense presentation deck equipped with clinical diagnostic charts and structured flowcharts.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/1Djyinq2KIiuPjOFfp0egES8p8Ru0ceva/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'Case Defense', 'Medical Analysis', 'Research'],
    software: ['Microsoft PowerPoint'],
    slidesCount: 20,
    featured: true
  },
  {
    id: 'ppt-presentation-03',
    titleAr: 'عرض التوعية بالصحة العامة والوقاية من الأمراض (العمل الثالث)',
    titleEn: 'Public Health Campaign & Prevention Presentation 03',
    category: 'powerpoint',
    descriptionAr: 'برزنتيشن توعوي لحملات التوعية المجتمعية والوقاية من الأمراض المزمنة بأسلوب بصري سلس وشديد التميز.',
    descriptionEn: 'Public health awareness slide deck focused on chronic disease prevention and community health guidelines.',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/1CIVoiV_FyrIWOEB5rUmQm6BUt_54fig1/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'Public Health', 'Disease Prevention', 'Awareness'],
    software: ['Microsoft PowerPoint', 'Canva Pro'],
    slidesCount: 16,
    featured: true
  },
  {
    id: 'ppt-presentation-04',
    titleAr: 'عرض إدارة الجودة والرعاية التمريضية بالمستشفيات (العمل الرابع)',
    titleEn: 'Healthcare Quality Standards & Nursing Deck 04',
    category: 'powerpoint',
    descriptionAr: 'عرض تقديمي شامل عن خطط الجودة والسلامة داخل أروقة المستشفيات ومعايير مكافحة العدوى والقيادة الصحية.',
    descriptionEn: 'High-impact presentation deck covering hospital infection control, healthcare quality benchmarks, and clinical leadership.',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/1ebFAiRqIfKhsCCUPeA0P2G3cQQq8X7pH/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'Hospital Quality', 'Nursing Leadership', 'Infection Control'],
    software: ['Microsoft PowerPoint'],
    slidesCount: 22,
    featured: true
  },
  {
    id: 'ppt-presentation-05',
    titleAr: 'عرض التوعية والإسعافات الأولية الطبية (العمل الخامس)',
    titleEn: 'First Aid & Emergency Response Presentation Deck 05',
    category: 'powerpoint',
    descriptionAr: 'برزنتيشن بوربوينت لخطوات الإسعاف الأولية والتعامل مع الحالات الطارئة برسم بيكتوجرام مريح مخصص للشرح والتثقيف.',
    descriptionEn: 'Step-by-step emergency response and first-aid visual guide presentation designed for quick learning and teaching.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/1PcHD3Cl7RO20R6MgfkZxwJcWxewLwpMv/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'First Aid', 'Emergency Care', 'Infographic'],
    software: ['Microsoft PowerPoint'],
    slidesCount: 15,
    featured: false
  },
  {
    id: 'ppt-presentation-06',
    titleAr: 'عرض التوعية بالتغذية ونمط الحياة الصحي (العمل السادس)',
    titleEn: 'Clinical Nutrition & Health Wellness Slide Deck 06',
    category: 'powerpoint',
    descriptionAr: 'عرض تقديمي إنفوجرافيك يشرح أساسيات التغذية العلاجية وبناء عادات صحية مستدامة للمرضى وللجمهور.',
    descriptionEn: 'Visual slide deck explaining dietary nutrition guidelines, wellness metrics, and healthcare balance.',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/13SLDFpSzC8ieOL61UUvTyErvbpX4xZic/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'Nutrition', 'Healthy Living', 'Wellness'],
    software: ['Microsoft PowerPoint', 'Canva Pro'],
    slidesCount: 14,
    featured: false
  },
  {
    id: 'ppt-presentation-07',
    titleAr: 'عرض إدارة التطوع والموارد البشرية YLY (العمل السابع)',
    titleEn: 'Youth Leadership & HR Volunteering Presentation 07',
    category: 'powerpoint',
    descriptionAr: 'عرض بوربوينت قيادي حول الموارد البشرية والمهارات التطوعية ومشاركة الشباب في مبادرة YLY التابعة لوزارة الشباب.',
    descriptionEn: 'Leadership and human resources presentation focused on youth engagement and organizational volunteer development.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/1p9emjEsn0Il3229tqCB1PH-7s06f2wTa/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'HR', 'YLY Initiative', 'Leadership'],
    software: ['Microsoft PowerPoint'],
    slidesCount: 19,
    featured: false
  },
  {
    id: 'ppt-presentation-08',
    titleAr: 'عرض التثقيف الطبي وإرشادات الخروج (العمل الثامن)',
    titleEn: 'Patient Education & Clinical Discharge Presentation 08',
    category: 'powerpoint',
    descriptionAr: 'عرض تقديمي توعوي مصمم بدقة لعرض تعليمات الخروج ورعاية المرضى ذاتياً بعد الإقامة بالمستشفيات الجامعية.',
    descriptionEn: 'Patient education deck detailing post-discharge care protocols and recovery guidelines.',
    imageUrl: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/18XsWB7D2oAD5yUMrt0o2PHtdYhiWQqFL/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'Discharge Guide', 'Patient Care', 'Health Literacy'],
    software: ['Microsoft PowerPoint'],
    slidesCount: 17,
    featured: false
  },
  {
    id: 'ppt-presentation-09',
    titleAr: 'عرض المحاضرات الأكاديمية والندوات العلمية (العمل التاسع)',
    titleEn: 'Academic Seminar & Scientific Lecture Slide Deck 09',
    category: 'powerpoint',
    descriptionAr: 'عرض شرائح بوربوينت مميز للمحاضرات الجامعية والندوات العلمية بتنسيق بصري جذاب وأسلوب أكاديمي منظم.',
    descriptionEn: 'Slide deck designed for academic lectures, university seminars, and scientific presentation halls.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/1aBLNyQ2-SIZBA3q2ermk6Q20je9MsGW8/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'Academic Seminar', 'Lecture Deck', 'Nursing Research'],
    software: ['Microsoft PowerPoint'],
    slidesCount: 24,
    featured: false
  },
  {
    id: 'ppt-presentation-10',
    titleAr: 'عرض التثقيف الصحي للطفل والأمومة (العمل العاشر)',
    titleEn: 'Maternal & Pediatric Health Presentation 10',
    category: 'powerpoint',
    descriptionAr: 'عرض بوربوينت موجه للتوعية بصحة الأم والطفل ومراحل النمو، مصمم بألوان زاهية وأشكال توضيحية راقية.',
    descriptionEn: 'Presentation deck covering maternal wellness, pediatric milestones, and family care education.',
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/1tkPrS2kBIzmJvxi66WReN8gDhlePNzuC/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'Pediatric Care', 'Maternal Health', 'Infographic'],
    software: ['Microsoft PowerPoint', 'Canva Pro'],
    slidesCount: 18,
    featured: false
  },
  {
    id: 'ppt-presentation-11',
    titleAr: 'عرض بروتوكولات التمريض والرعاية الحرجة (العمل الحادي عشر)',
    titleEn: 'Critical Care Nursing Protocol Presentation 11',
    category: 'powerpoint',
    descriptionAr: 'عرض تقديمي يناقش بروتوكولات العناية المركزة والرعاية الحرجة بأسلوب بصري مرتب وسهل المتابعة.',
    descriptionEn: 'Presentation deck detailing intensive care nursing standards and critical care emergency protocols.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/1xjzpqMUNac-mFPlcdvzxC6izS1S-wnOa/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'Critical Care', 'Nursing Protocol', 'ICU'],
    software: ['Microsoft PowerPoint'],
    slidesCount: 21,
    featured: false
  },
  {
    id: 'ppt-presentation-12',
    titleAr: 'عرض المبادرات التوعوية والورش الطلابية (العمل الثاني عشر)',
    titleEn: 'Student Awareness Campaign & Workshop Deck 12',
    category: 'powerpoint',
    descriptionAr: 'عرض بوربوينت إبداعي لإطلاق الأنشطة والورش التوعوية الطلابية بالمنصورة بتصاميم عصرية ومتجددة.',
    descriptionEn: 'Creative presentation deck for student workshops, awareness launches, and interactive field events.',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/presentation/d/1daVz8NHXiVF6Cu0EI5DHoSc1O4rJwWC_/edit?usp=drive_link&ouid=103224641045054112535&rtpof=true&sd=true',
    tags: ['PowerPoint', 'Student Workshop', 'Awareness Campaign', 'Presentation'],
    software: ['Microsoft PowerPoint', 'Canva Pro'],
    slidesCount: 16,
    featured: false
  },

  // ==========================================
  // --- 3. WORD SECTION (قسم مستندات وورد 📄) ---
  // ==========================================
  {
    id: 'word-doc-01',
    titleAr: 'مستند وورد: بحث وتنسيق أكاديمي طبي (الملف الأول)',
    titleEn: 'Formatted Medical Research Word Document 01',
    category: 'word',
    descriptionAr: 'تنسيق وتأطير بحث طبي وأكاديمي ببرنامج Word مع ضبط الهوامش، العناوين، والجداول وفهرسة مراجع دقيقة.',
    descriptionEn: 'Professionally formatted Word document featuring automated tables of contents, academic typography, and clean margins.',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/document/d/1AsgswAopwkDhVmzh7oihorLg_aIXTgk5/edit?usp=drive_link&ouid=102103134286103692522&rtpof=true&sd=true',
    tags: ['Microsoft Word', 'Medical Research', 'Academic Formatting', 'Word Document'],
    software: ['Microsoft Word', 'Citation Tools'],
    featured: true
  },
  {
    id: 'word-doc-02',
    titleAr: 'مستند وورد: تقرير الرعاية التمريضية السريرية (الملف الثاني)',
    titleEn: 'Clinical Nursing & Research Word Report 02',
    category: 'word',
    descriptionAr: 'تقرير تمريضي وسريري منسق بدقة متناهية يشتمل على جداول علامات حيوية وهيكلة احترافية.',
    descriptionEn: 'Formatted clinical nursing research document with structured headings, diagnostic tables, and citation references.',
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/document/d/1-qoO2GCW-yfa2ZHUySx8B_CNQ1fmK8O4/edit?usp=drive_link&ouid=102103134286103692522&rtpof=true&sd=true',
    tags: ['Microsoft Word', 'Clinical Nursing', 'Report Formatting', 'Word'],
    software: ['Microsoft Word'],
    featured: true
  },
  {
    id: 'word-doc-03',
    titleAr: 'مستند وورد: دراسة حالة وتثقيف صحي (الملف الثالث)',
    titleEn: 'Medical Case Study & Education Word Doc 03',
    category: 'word',
    descriptionAr: 'تنسيق وتأطير دراسة حالة طبية وتوثيق الأبحاث والنصوص بأسلوب نشر دقيق ومريح للعين.',
    descriptionEn: 'Clinical case study report formatted to publication standard with styled figures and reference lists.',
    imageUrl: 'https://images.unsplash.com/photo-1584697964400-2ae6a2f620ac?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/document/d/1PTRmuGevFujLR0TW42smqLOWVZqxSEZE/edit?usp=drive_link&ouid=102103134286103692522&rtpof=true&sd=true',
    tags: ['Microsoft Word', 'Case Study', 'Medical Research'],
    software: ['Microsoft Word'],
    featured: true
  },
  {
    id: 'word-doc-04',
    titleAr: 'مستند وورد: مشروع تخرج وأوراق علمية (الملف الرابع)',
    titleEn: 'Academic Thesis & Graduation Project Word Doc 04',
    category: 'word',
    descriptionAr: 'تنسيق أوراق العمل ومشروع التخرج الأكاديمي مع فهارس تلقائية وضبط العناوين الرئيسية والفرعية.',
    descriptionEn: 'Academic graduation thesis formatted in Word with standardized margins, table of contents, and headers.',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/document/d/1_w1zW3mEy6r1MWhS-RjgsrQixTabUpmY/edit?usp=drive_link&ouid=102103134286103692522&rtpof=true&sd=true',
    tags: ['Microsoft Word', 'Graduation Thesis', 'Academic Paper'],
    software: ['Microsoft Word'],
    featured: true
  },
  {
    id: 'word-doc-05',
    titleAr: 'مستند وورد: دليل إرشادات الرعاية الصحية (الملف الخامس)',
    titleEn: 'Healthcare Guidelines & Clinical Manual Word Doc 05',
    category: 'word',
    descriptionAr: 'تأطير ودليل إرشادات سريرية منسق ببرنامج Word مع إبراز الفقرات وجداول التقييم الطبي.',
    descriptionEn: 'Clinical practice manual formatted with custom tables, styled callouts, and clean section breaks.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/document/d/1bZlm74vtP_Q5X8Ngn-Lvgv0TwD3FjdQZ/edit?usp=drive_link&ouid=102103134286103692522&rtpof=true&sd=true',
    tags: ['Microsoft Word', 'Healthcare Manual', 'Clinical Protocol'],
    software: ['Microsoft Word'],
    featured: false
  },
  {
    id: 'word-doc-06',
    titleAr: 'مستند وورد: تقرير التثقيف والمبادرات الطبية (الملف السادس)',
    titleEn: 'Public Health Campaign Report Word Doc 06',
    category: 'word',
    descriptionAr: 'تنسيق تقرير المبادرات والحملات الصحية بإخراج متميز وجداول إحصائية منظمة.',
    descriptionEn: 'Public health initiative summary report formatted with structured tables and clear layout.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/document/d/1jzX9e4udUG_iVaXe6sG0zq7-1aL2V2_N/edit?usp=drive_link&ouid=102103134286103692522&rtpof=true&sd=true',
    tags: ['Microsoft Word', 'Health Campaign', 'Report Formatting'],
    software: ['Microsoft Word'],
    featured: false
  },
  {
    id: 'word-doc-07',
    titleAr: 'مستند وورد: بحث أكاديمي وتوثيق مراجع (الملف السابع)',
    titleEn: 'Academic Research & Citation Document Word Doc 07',
    category: 'word',
    descriptionAr: 'تنسيق وتوثيق المراجع والأبحاث العلمية وفق القياسات المعتمَدة دور النشر والجامعات.',
    descriptionEn: 'Academic research paper with citation styling, automated lists, and standardized typography.',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/document/d/1HwYx574fPP00aIYFJmhOTh-ke-0CuYA4/edit?usp=drive_link&ouid=102103134286103692522&rtpof=true&sd=true',
    tags: ['Microsoft Word', 'Academic Citation', 'Research Paper'],
    software: ['Microsoft Word'],
    featured: false
  },
  {
    id: 'word-doc-08',
    titleAr: 'مستند وورد: ملف البروتوكولات التمريضية (الملف الثامن)',
    titleEn: 'Nursing Protocol & Discharge Care Manual Word Doc 08',
    category: 'word',
    descriptionAr: 'تنسيق وتأطير ملف الإرشادات والبروتوكولات التمريضية بأسلوب واضح ومريح وجاهز للطباعة.',
    descriptionEn: 'Nursing protocols and discharge care manual styled with clean typography and structured lists.',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://docs.google.com/document/d/1uHyHbUQXVj9okU4vFj_7qwhymTEgvGOY/edit?usp=drive_link&ouid=102103134286103692522&rtpof=true&sd=true',
    tags: ['Microsoft Word', 'Nursing Protocols', 'Care Manual'],
    software: ['Microsoft Word'],
    featured: false
  },

  // ====================================================
  // --- 4. GRAPHIC DESIGN & POSTERS (قسم الجرافيك 🎨) ---
  // ====================================================
  {
    id: 'graphic-design-master-folder-posters',
    titleAr: 'مجلد تصاميم الجرافيك والبوسترات الطبية الشامل (الفولدر الكامل)',
    titleEn: 'Complete Graphic Design & Medical Posters Drive Folder',
    category: 'posters',
    descriptionAr: 'المجلد الكامل الشامل على Google Drive لجميع تصاميم الجرافيك، البوسترات الطبية، والإنفوجرافيك التوعوي. يمكنك استعراض وتحميل كافة الأعمال مباشرة.',
    descriptionEn: 'Full Google Drive folder featuring the complete catalog of graphic design artwork, healthcare posters, and medical infographics.',
    fileUrl: 'https://drive.google.com/drive/folders/1GVqS4OyJq_LR847M9pogCr6XMzuRQTiJ?usp=drive_link',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Graphic Design', 'Medical Posters', 'Infographics', 'Drive Folder', 'Full Collection'],
    software: ['Graphic Design', 'Canva Pro', 'Photoshop'],
    featured: true
  },
  {
    id: 'graphic-design-master-folder-social',
    titleAr: 'معرض تصاميم السوشيال ميديا والبنرات الرقمية (الفولدر الشامل)',
    titleEn: 'Full Social Media Graphic Design & Banners Folder',
    category: 'social',
    descriptionAr: 'فولدر Google Drive الشامل الذي يحتوي على كافة تصاميم السوشيال ميديا، البنرات التثقيفية، والستوريز المصممة للأنشطة والخدمات الطبية.',
    descriptionEn: 'Comprehensive Google Drive folder containing all social media graphics, Instagram carousels, and digital banner assets.',
    fileUrl: 'https://drive.google.com/drive/folders/1GVqS4OyJq_LR847M9pogCr6XMzuRQTiJ?usp=drive_link',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    tags: ['Social Media Design', 'Banners', 'Full Folder', 'Google Drive'],
    software: ['Graphic Design', 'Canva Pro', 'Social Media'],
    featured: true
  },

  // ==========================================
  // --- 5. VIDEOS SECTION (قسم الفيديوز 🎬) ---
  // ==========================================
  {
    id: 'video-work-01',
    titleAr: 'فيديو مونتاج توعوي وتثقيفي قصير (الفيديو الأول)',
    titleEn: 'Educational Healthcare Awareness Short Video 01',
    category: 'video',
    descriptionAr: 'فيديو تثقيفي مكلل بمؤثرات بصرية ونصوص شارحة توضح الخطوات الصحية والإرشادات الطبية الميدانية.',
    descriptionEn: 'Short educational video clip styled with text captions and dynamic video editing.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://drive.google.com/file/d/1lgynlaKnlQVGsobpUPREmPI7tksZhsvk/view?usp=drive_link',
    videoUrl: 'https://drive.google.com/file/d/1lgynlaKnlQVGsobpUPREmPI7tksZhsvk/view?usp=drive_link',
    tags: ['Video Editing', 'Healthcare Video', 'Subtitles', 'Reels'],
    software: ['Video Editing', 'CapCut', 'Canva Video'],
    featured: true
  },
  {
    id: 'video-work-02',
    titleAr: 'فيديو ريلز الإسعافات الأولية والتوعية (الفيديو الثاني)',
    titleEn: 'First Aid & Emergency Response Video Reel 02',
    category: 'video',
    descriptionAr: 'فيديو ريلز رأسية تفاعلية تعرض كيفية التعامل السريع مع الحالات الطارئة والإسعافية بوضوح.',
    descriptionEn: 'Vertical reels video demonstrating emergency response steps and first aid actions.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://drive.google.com/file/d/1bRTF3I7MQoPqyminpxmMjZ_ijhZ8PqwU/view?usp=drive_link',
    videoUrl: 'https://drive.google.com/file/d/1bRTF3I7MQoPqyminpxmMjZ_ijhZ8PqwU/view?usp=drive_link',
    tags: ['Video Editing', 'First Aid', 'Short Reels', 'Emergency Response'],
    software: ['Video Editing', 'Motion Graphics'],
    featured: true
  },
  {
    id: 'video-work-03',
    titleAr: 'فيديو التوعية بالتعقيم وغسل الأيدي (الفيديو الثالث)',
    titleEn: 'Infection Control & Hand Hygiene Video 03',
    category: 'video',
    descriptionAr: 'فيديو تثقيفي يوضح خطوات التعقيم النظيف لغسيل الأيدي والوقاية داخل المنشآت الصحية والمستشفيات.',
    descriptionEn: 'Instructional medical video showcasing clinical hand hygiene and infection control techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://drive.google.com/file/d/1kdIgL_s9hoXl3E_yUEoPbJXhw3NgdC_1/view?usp=drive_link',
    videoUrl: 'https://drive.google.com/file/d/1kdIgL_s9hoXl3E_yUEoPbJXhw3NgdC_1/view?usp=drive_link',
    tags: ['Video Editing', 'Infection Control', 'Hand Hygiene', 'Hospital Safety'],
    software: ['Video Editing', 'Subtitling Tools'],
    featured: true
  },
  {
    id: 'video-work-04',
    titleAr: 'فيديو التثقيف بالصحة العامة والوقاية (الفيديو الرابع)',
    titleEn: 'Public Health Prevention Short Video 04',
    category: 'video',
    descriptionAr: 'مونتاج فيديو توعوي قصير عن الوقاية من الأمراض وتعديل نمط الحياة موجه للجمهور بأسلوب جذاب.',
    descriptionEn: 'Public health campaign short video clip edited with animated captions and clear visual pacing.',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://drive.google.com/file/d/1Q1WUVM_k5x1RhowVRaIU5np5-2K6cRUo/view?usp=drive_link',
    videoUrl: 'https://drive.google.com/file/d/1Q1WUVM_k5x1RhowVRaIU5np5-2K6cRUo/view?usp=drive_link',
    tags: ['Video Editing', 'Public Health', 'Disease Prevention', 'Awareness'],
    software: ['Video Editing', 'Motion Graphics'],
    featured: true
  },
  {
    id: 'video-work-05',
    titleAr: 'فيديو ريلز التثقيف الطبي ورعاية الأطفال (الفيديو الخامس)',
    titleEn: 'Pediatric Care & Child Health Video Reel 05',
    category: 'video',
    descriptionAr: 'فيديو ريلز جذاب للتوعية برعاية الأطفال وتوجيه النصائح الصحية للوالدين بأسلوب مشوق ومؤثر.',
    descriptionEn: 'Engaging video reel focusing on pediatric healthcare tips and parental awareness.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://drive.google.com/file/d/1IFrZAQm4yFz58T_i5rL1OEvEpQh1FEn_/view?usp=drive_link',
    videoUrl: 'https://drive.google.com/file/d/1IFrZAQm4yFz58T_i5rL1OEvEpQh1FEn_/view?usp=drive_link',
    tags: ['Video Editing', 'Pediatric Care', 'Reels', 'Child Health'],
    software: ['Video Editing', 'CapCut'],
    featured: false
  },
  {
    id: 'video-work-06',
    titleAr: 'فيديو التوعية بالصحة النفسية وجودة الحياة (الفيديو السادس)',
    titleEn: 'Mental Health & Wellness Short Video 06',
    category: 'video',
    descriptionAr: 'فيديو مريح بصرياً يتناول التوعية بالصحة النفسية وتقليل الضغوط بأسلوب مونتاج راقٍ ومؤثر.',
    descriptionEn: 'Soothing video production centered around mental health awareness and employee wellness.',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://drive.google.com/file/d/1Uszq_4xqM9hr6SJPtezeEPjorD47HnIA/view?usp=drive_link',
    videoUrl: 'https://drive.google.com/file/d/1Uszq_4xqM9hr6SJPtezeEPjorD47HnIA/view?usp=drive_link',
    tags: ['Video Editing', 'Mental Health', 'Wellness', 'Short Clip'],
    software: ['Video Editing', 'Audio Leveling'],
    featured: false
  },
  {
    id: 'video-work-07',
    titleAr: 'فيديو فعاليات وأنشطة مبادرة YLY (الفيديو السابع)',
    titleEn: 'Youth Leading Youth Campaign Video Highlight 07',
    category: 'video',
    descriptionAr: 'فيديو وثائقي ومونتاج لفعاليات لجنة الموارد البشرية والأنشطة الشبابية التطوعية بمبادرة YLY.',
    descriptionEn: 'Video highlight showcasing volunteer activities, team building, and youth leadership events.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://drive.google.com/file/d/1oep829aVgpYc5jfecb0oIQlWcb6vzJcH/view?usp=drive_link',
    videoUrl: 'https://drive.google.com/file/d/1oep829aVgpYc5jfecb0oIQlWcb6vzJcH/view?usp=drive_link',
    tags: ['Video Editing', 'YLY Initiative', 'Volunteering', 'Highlights'],
    software: ['Video Editing', 'Color Correction'],
    featured: false
  },
  {
    id: 'video-work-08',
    titleAr: 'فيديو التثقيف بالتغذية ونمط الحياة الصحي (الفيديو الثامن)',
    titleEn: 'Nutrition & Healthy Lifestyle Short Video 08',
    category: 'video',
    descriptionAr: 'مونتاج فيديو قصير يشرح السلوكيات التغذوية الصحية ونظام الوجبات بأسلوب بصري ديناميكي.',
    descriptionEn: 'Dynamic short video presenting healthy dietary habits and wellness guidelines.',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://drive.google.com/file/d/1YAvIDSIZKgGN_7FKYi41BeXaBygSE-HT/view?usp=drive_link',
    videoUrl: 'https://drive.google.com/file/d/1YAvIDSIZKgGN_7FKYi41BeXaBygSE-HT/view?usp=drive_link',
    tags: ['Video Editing', 'Clinical Nutrition', 'Healthy Living', 'Video'],
    software: ['Video Editing', 'Subtitles'],
    featured: false
  },
  {
    id: 'video-work-09',
    titleAr: 'فيديو توعوي: سلامة المرضى بالمستشفيات (الفيديو التاسع)',
    titleEn: 'Clinical Patient Safety Awareness Video 09',
    category: 'video',
    descriptionAr: 'فيديو توعوي مخصص للمستشفيات والكوادر التمريضية حول معايير سلامة وحماية المرضى.',
    descriptionEn: 'Educational video explaining hospital patient safety measures and clinical care standards.',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://drive.google.com/file/d/1uq0GjZWD4PoGn2A23RuWyvwyCMG9zJMt/view?usp=drive_link',
    videoUrl: 'https://drive.google.com/file/d/1uq0GjZWD4PoGn2A23RuWyvwyCMG9zJMt/view?usp=drive_link',
    tags: ['Video Editing', 'Patient Safety', 'Hospital Care', 'Nursing'],
    software: ['Video Editing', 'Motion Graphics'],
    featured: false
  },
  {
    id: 'video-work-10',
    titleAr: 'فيديو الشرح الميداني والأنشطة الصحية (الفيديو العاشر)',
    titleEn: 'Clinical Nursing Field Practice Video 10',
    category: 'video',
    descriptionAr: 'فيديو شارح يبرز الأنشطة الميدانية والتدريب التمريضي لجامعة قنا بأسلوب مونتاج مميز.',
    descriptionEn: 'Field video presentation demonstrating clinical nursing training and hospital practice.',
    imageUrl: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://drive.google.com/file/d/1f3gMFKPgIQI-AZQAjEEWaMhVJzlabjq2/view?usp=drive_link',
    videoUrl: 'https://drive.google.com/file/d/1f3gMFKPgIQI-AZQAjEEWaMhVJzlabjq2/view?usp=drive_link',
    tags: ['Video Editing', 'Nursing Fieldwork', 'Clinical Practice', 'Qena University'],
    software: ['Video Editing', 'Audio Leveling'],
    featured: false
  },
  {
    id: 'video-work-11',
    titleAr: 'فيديو توعوي ختامي: ملخص الحملات والتثقيف (الفيديو الحادي عشر)',
    titleEn: 'Public Health Awareness Campaign Summary Video 11',
    category: 'video',
    descriptionAr: 'فيديو توعوي ملخص يستعرض أهم مخرجات حملات التوعية الصحية والأنشطة المجتمعية.',
    descriptionEn: 'Summary campaign video showcasing public health achievements and community impact.',
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
    fileUrl: 'https://drive.google.com/file/d/1IdP66KHhcM7X7ISJdS8pEDXmzNauNoMQ/view?usp=drive_link',
    videoUrl: 'https://drive.google.com/file/d/1IdP66KHhcM7X7ISJdS8pEDXmzNauNoMQ/view?usp=drive_link',
    tags: ['Video Editing', 'Public Health', 'Campaign Summary', 'Impact'],
    software: ['Video Editing', 'Motion Graphics'],
    featured: false
  }
];
