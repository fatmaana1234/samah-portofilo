import React, { useState } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { Sun, Moon, Globe, Menu, X, Smartphone, Sparkles, Stethoscope } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  onOpenAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  theme,
  setTheme,
  onOpenAppModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const navLinks = [
    { href: '#home', label: t.navHome },
    { href: '#about', label: t.navAbout },
    { href: '#services', label: t.navServices },
    { href: '#skills', label: t.navSkills },
    { href: '#portfolio', label: t.navPortfolio },
    { href: '#experience', label: t.navExperience },
    { href: '#contact', label: t.navContact }
  ];

  const toggleLanguage = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    setLang(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? 'bg-slate-950/80 border-b border-emerald-900/30 text-slate-100 backdrop-blur-md'
          : 'bg-white/85 border-b border-emerald-200 text-slate-800 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-500 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className={`w-full h-full rounded-[14px] flex items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
              <div className="flex items-center gap-0.5 text-emerald-500">
                <Stethoscope className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight flex items-center gap-1.5">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                {t.shortName}
              </span>
            </span>
            <span className="text-[11px] font-medium opacity-70 tracking-wide">
              {lang === 'ar' ? 'امتياز تمريض & مصممة' : 'Nursing Intern & Designer'}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isDark
                  ? 'text-slate-300 hover:text-white hover:bg-emerald-900/30'
                  : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Toggles */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* App Convert Button */}
          <button
            onClick={onOpenAppModal}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-emerald-600 to-sky-600 text-white shadow-md hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all"
            title={t.navConvertApp}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{t.navConvertApp}</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              isDark
                ? 'border-emerald-800/60 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/60'
                : 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
          </button>

          {/* Theme Toggle Button (Day / Night) */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all border ${
              isDark
                ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800 hover:scale-105'
                : 'border-emerald-200 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:scale-105'
            }`}
            title={isDark ? 'الوضع النهاري (Light Mode)' : 'الوضع الليلي (Dark Mode)'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all ${
              isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-2 pb-6 flex flex-col gap-2 ${
            isDark ? 'bg-slate-950/95 border-purple-900/30 text-slate-100' : 'bg-white/95 border-purple-200 text-slate-800'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isDark ? 'hover:bg-purple-900/30 hover:text-purple-300' : 'hover:bg-purple-50 hover:text-purple-700'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-purple-900/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
            >
              <Smartphone className="w-4 h-4" />
              <span>{t.navConvertApp}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
