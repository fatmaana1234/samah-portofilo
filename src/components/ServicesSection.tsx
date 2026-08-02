import React from 'react';
import { Language, Theme } from '../types';
import { initialServices } from '../data/portfolioData';
import { translations } from '../data/translations';
import { 
  Presentation, 
  Image as ImageIcon, 
  Share2, 
  FileText, 
  HeartPulse, 
  Film, 
  Sparkles, 
  Stethoscope,
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  theme: Theme;
  onOpenOrderModal: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  theme,
  onOpenOrderModal
}) => {
  const t = translations[lang];
  const isDark = theme === 'dark';
  const isRtl = lang === 'ar';

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Presentation': return Presentation;
      case 'Image': return ImageIcon;
      case 'Share2': return Share2;
      case 'FileText': return FileText;
      case 'HeartPulse': return HeartPulse;
      case 'Film': return Film;
      case 'Sparkles': return Sparkles;
      case 'Stethoscope': return Stethoscope;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      
      {/* Background Accent Gradient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-900/40 text-emerald-300 border border-emerald-700/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{t.servicesTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              {t.servicesSubtitle}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto rounded-full" />
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialServices.map((service) => {
            const IconComp = getServiceIcon(service.iconName);
            const title = lang === 'ar' ? service.titleAr : service.titleEn;
            const desc = lang === 'ar' ? service.descAr : service.descEn;
            const features = lang === 'ar' ? service.featuresAr : service.featuresEn;
            const recommended = lang === 'ar' ? service.recommendedForAr : service.recommendedForEn;

            return (
              <div
                key={service.id}
                className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  isDark
                    ? 'bg-slate-900/80 border-emerald-800/40 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-900/20'
                    : 'bg-white border-emerald-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10'
                }`}
              >
                <div>
                  {/* Card Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-sky-500 text-white flex items-center justify-center mb-5 shadow-md shadow-emerald-600/20">
                    <IconComp className="w-7 h-7 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-lg font-bold mb-2 leading-snug ${isDark ? 'text-slate-100' : 'text-slate-900 font-extrabold'}`}>
                    {title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-slate-400' : 'text-slate-700 font-medium'
                  }`}>
                    {desc}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-6">
                    {features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs font-medium">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDark ? 'text-sky-400' : 'text-emerald-600'}`} />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-800 font-medium'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Recommended Target Audience */}
                  <div className={`pt-4 border-t mb-5 text-[11px] font-semibold ${
                    isDark ? 'border-emerald-900/30 text-emerald-400' : 'border-emerald-200 text-emerald-800'
                  }`}>
                    <span className={`font-bold me-1 ${isDark ? 'text-emerald-300' : 'text-emerald-900'}`}>{t.recommendedLabel}</span>
                    <span>{recommended}</span>
                  </div>

                  {/* Request Service Button */}
                  <button
                    onClick={() => onOpenOrderModal(service.id)}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                      isDark
                        ? 'bg-gradient-to-r from-emerald-900/60 to-teal-900/60 text-emerald-200 border border-emerald-700/40 hover:from-emerald-600 hover:to-teal-600 hover:text-white hover:border-transparent'
                        : 'bg-emerald-100/80 text-emerald-900 border border-emerald-300 hover:bg-emerald-600 hover:text-white hover:border-transparent shadow-sm'
                    }`}
                  >
                    <span>{t.btnRequestService}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
