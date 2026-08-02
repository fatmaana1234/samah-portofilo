import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { 
  Presentation, 
  ChevronRight, 
  ChevronLeft, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  Stethoscope, 
  Award,
  Layers
} from 'lucide-react';

interface PresentationSimulatorProps {
  lang: Language;
  theme: Theme;
}

export const PresentationSimulator: React.FC<PresentationSimulatorProps> = ({ lang, theme }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const t = translations[lang];
  const isDark = theme === 'dark';
  const isRtl = lang === 'ar';

  const sampleSlides = [
    {
      id: 1,
      tagAr: 'السلايد 01: الغلاف والرؤية الطبية',
      tagEn: 'Slide 01: Cover & Medical Title',
      titleAr: 'عناية التمريض والتوعية بمرض السكري',
      titleEn: 'Nursing Care & Public Education in Diabetes',
      subtitleAr: 'إعداد وتصميم: سماح ربيع محمود علي - امتياز تمريض وقابلة للتخصيص الكامل',
      subtitleEn: 'Designed by: Samah Rabie Mahmoud Ali - Nursing Intern & Content Specialist',
      bgGradient: 'from-emerald-950 via-teal-950 to-slate-950',
      pointsAr: [
        'تنسيق هويّة بصرية بألوان تمريضية مريحة للعين',
        'دقة في استعراض الأبعاد الطبية للمرض',
        'تصميم يناسب المناقشات العلمية والمؤتمرات الطبية'
      ],
      pointsEn: [
        'Emerald green & ocean blue harmonic color layout',
        'Clinical accuracy in presenting disease pathways',
        'Optimal layout for medical defenses & conferences'
      ]
    },
    {
      id: 2,
      tagAr: 'السلايد 02: الخريطة الذهنية الطبية',
      tagEn: 'Slide 02: Medical Mindmap & Infographics',
      titleAr: 'تصنيف مرض السكري وخطة التثقيف الصحي',
      titleEn: 'Diabetes Classification & Health Education Plan',
      subtitleAr: 'إنفوجرافيك تفاعلي مبسط يوضح الفروق الجوهرية وطرق المتابعة',
      subtitleEn: 'Simplified infographics illustrating diabetes types & clinical care steps',
      bgGradient: 'from-teal-950 via-slate-950 to-emerald-950',
      pointsAr: [
        'السكري من النوع الأول (Type 1) - الاعتماد على الأنسولين',
        'السكري من النوع الثاني (Type 2) - نمط الحياة والتغذية العلاجية',
        'علامات التحذير والمتابعة الميدانية الدورية'
      ],
      pointsEn: [
        'Type 1 Diabetes - Insulin replacement therapy',
        'Type 2 Diabetes - Lifestyle modification & medical nutrition',
        'Early warning signs & regular diagnostic tracking'
      ]
    },
    {
      id: 3,
      tagAr: 'السلايد 03: خطة التمريض (SOAPE Pattern)',
      tagEn: 'Slide 03: Structured Nursing Care Plan',
      titleAr: 'التقييم التمريضي والتدخلات الوقائية',
      titleEn: 'Nursing Assessment & Preventive Interventions',
      subtitleAr: 'جدول منسق بخطوات التقييم، التشخيص، والتنفيذ بالبرزنتيشن',
      subtitleEn: 'Formatted clinical table detailing Assessment, Nursing Diagnosis & Interventions',
      bgGradient: 'from-slate-950 via-emerald-950 to-teal-950',
      pointsAr: [
        'تقييم المستوى التثقيفي للمريض وعائلته',
        'التدخلات التمريضية لحماية قدم السكري والوقاية من المضاعفات',
        'جدول رعاية أسبوعي متكامل وسهل التتبع'
      ],
      pointsEn: [
        'Evaluating patient & family health literacy level',
        'Nursing interventions for diabetic foot prevention',
        'Comprehensive weekly care schedule easy to follow'
      ]
    }
  ];

  const slide = sampleSlides[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % sampleSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + sampleSlides.length) % sampleSlides.length);
  };

  return (
    <div className="my-12">
      <div className={`p-6 sm:p-8 rounded-3xl border shadow-2xl relative overflow-hidden transition-all ${
        isDark ? 'bg-slate-900/90 border-emerald-800/40' : 'bg-white border-emerald-200 shadow-emerald-500/10'
      }`}>
        
        {/* Top Header Simulator Controls */}
        <div className={`flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b ${isDark ? 'border-emerald-900/30' : 'border-emerald-200'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-sky-500 text-white flex items-center justify-center font-bold">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <h4 className={`text-base font-bold ${isDark ? 'text-slate-100' : 'text-slate-900 font-black'}`}>
                {t.presentationDemoTitle}
              </h4>
              <p className={`text-xs ${isDark ? 'text-emerald-400' : 'text-emerald-700 font-bold'}`}>
                {lang === 'ar' ? 'نموذج عرض سلايد بوربوينت حقيقي من تصميم سماح ربيع' : 'Live Interactive Slide Viewer Demo'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
              isDark ? 'bg-emerald-950 text-emerald-300 border-emerald-800/40' : 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold'
            }`}>
              {t.slideCounter} {currentSlideIndex + 1} / {sampleSlides.length}
            </span>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className={`p-2 rounded-xl border transition-all ${
                isDark ? 'bg-emerald-950/60 border-emerald-800/40 text-emerald-300 hover:bg-emerald-900/60' : 'bg-emerald-50 border-emerald-300 text-emerald-900 hover:bg-emerald-100'
              }`}
              title={t.btnFullscreen}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Presentation Screen Viewport */}
        <div className={`relative rounded-2xl p-6 sm:p-10 border shadow-inner transition-all duration-500 bg-gradient-to-br ${slide.bgGradient} border-emerald-700/50 min-h-[320px] flex flex-col justify-between`}>
          
          {/* Top Slide Tag */}
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 rounded-lg bg-purple-900/60 border border-purple-700/50 text-purple-300 text-xs font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'ar' ? slide.tagAr : slide.tagEn}</span>
            </span>
            <div className="flex items-center gap-1 text-xs text-cyan-300 font-semibold">
              <Stethoscope className="w-4 h-4" />
              <span>Samah Rabie PowerPoint</span>
            </div>
          </div>

          {/* Slide Main Content */}
          <div className="my-auto">
            <h3 className="text-xl sm:text-3xl font-black text-white mb-2 leading-tight">
              {lang === 'ar' ? slide.titleAr : slide.titleEn}
            </h3>
            <p className="text-xs sm:text-sm text-purple-200 mb-6 font-medium opacity-90">
              {lang === 'ar' ? slide.subtitleAr : slide.subtitleEn}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(lang === 'ar' ? slide.pointsAr : slide.pointsEn).map((point, ptIdx) => (
                <div
                  key={ptIdx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-purple-500/20 text-xs text-slate-200 flex items-start gap-2"
                >
                  <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Footer */}
          <div className="mt-6 pt-4 border-t border-purple-800/30 flex items-center justify-between text-[11px] text-purple-300/80 font-mono">
            <span>© Medical Presentation Series</span>
            <span>Slide {slide.id} of {sampleSlides.length}</span>
          </div>

        </div>

        {/* Bottom Navigation Buttons */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-purple-950/60 text-purple-200 border border-purple-800/50 hover:bg-purple-900 hover:text-white transition-all"
          >
            {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            <span>{t.btnPrevSlide}</span>
          </button>

          <div className="flex items-center gap-1.5">
            {sampleSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentSlideIndex ? 'bg-cyan-400 w-6' : 'bg-purple-900 hover:bg-purple-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-purple-950/60 text-purple-200 border border-purple-800/50 hover:bg-purple-900 hover:text-white transition-all"
          >
            <span>{t.btnNextSlide}</span>
            {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </div>
  );
};
