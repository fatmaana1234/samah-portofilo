import React from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { Stethoscope, Linkedin, Mail, FolderOpen } from 'lucide-react';
import { GOOGLE_DRIVE_FOLDER_URL } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
  theme: Theme;
}

export const Footer: React.FC<FooterProps> = ({ lang, theme }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t ${
      isDark ? 'bg-slate-950 border-emerald-900/30 text-slate-400' : 'bg-emerald-950 text-emerald-100 border-emerald-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-emerald-900/40">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-400 text-white flex items-center justify-center font-bold">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="text-start">
              <div className="text-base font-extrabold text-white">
                {t.name}
              </div>
              <div className="text-xs text-emerald-300">
                {lang === 'ar' ? 'امتياز تمريض بالمنصورة & مصممة محتوى وجرافيك متكاملة' : 'Nursing Intern & Comprehensive Digital Designer'}
              </div>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a href="#home" className="hover:text-sky-300 transition-colors">{t.navHome}</a>
            <a href="#about" className="hover:text-sky-300 transition-colors">{t.navAbout}</a>
            <a href="#services" className="hover:text-sky-300 transition-colors">{t.navServices}</a>
            <a href="#skills" className="hover:text-sky-300 transition-colors">{t.navSkills}</a>
            <a href="#portfolio" className="hover:text-sky-300 transition-colors">{t.navPortfolio}</a>
            <a href="#experience" className="hover:text-sky-300 transition-colors">{t.navExperience}</a>
            <a href="#contact" className="hover:text-sky-300 transition-colors">{t.navContact}</a>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/samah-rabie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-sky-600/80 hover:bg-sky-500 text-white transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:samahrabea06@gmail.com"
              className="p-2.5 rounded-xl bg-teal-600/80 hover:bg-teal-500 text-white transition-all"
              title="Email: samahrabea06@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={GOOGLE_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-600/80 hover:bg-emerald-500 text-white transition-all"
              title="Google Drive Portfolio"
            >
              <FolderOpen className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-950/80 border border-emerald-700/50 text-sky-300 hover:bg-emerald-900 transition-all flex items-center gap-1.5"
            >
              <span>{t.btnBackToTop}</span>
            </button>
          </div>
        </div>

        <div className="text-center text-xs opacity-75 flex flex-col items-center gap-2">
          <p>{t.footerRights}</p>
          <p className="flex items-center gap-1">
            <span>{t.footerSub}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
