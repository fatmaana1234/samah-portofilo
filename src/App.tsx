import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppConvertModal } from './components/AppConvertModal';
import { ServiceOrderModal } from './components/ServiceOrderModal';
import { AiChatModal } from './components/AiChatModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('dark');
  const [isAppModalOpen, setIsAppModalOpen] = useState<boolean>(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Sync theme to root element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#09221a] text-emerald-50 selection:bg-emerald-500 selection:text-white font-sans antialiased';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#f0fdf4] text-slate-900 selection:bg-emerald-500 selection:text-white font-sans antialiased';
    }
  }, [theme]);

  // Sync dir & lang
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleOpenOrderModal = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsOrderModalOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${
      theme === 'dark' ? 'bg-[#09221a] text-emerald-50' : 'bg-[#f0fdf4] text-slate-900'
    }`}>
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        onOpenAppModal={() => setIsAppModalOpen(true)}
      />

      {/* Hero Header */}
      <Hero
        lang={lang}
        theme={theme}
        onOpenOrderModal={handleOpenOrderModal}
      />

      {/* About Section */}
      <AboutSection
        lang={lang}
        theme={theme}
      />

      {/* Services Section */}
      <ServicesSection
        lang={lang}
        theme={theme}
        onOpenOrderModal={handleOpenOrderModal}
      />

      {/* Skills & Expertise */}
      <SkillsSection
        lang={lang}
        theme={theme}
      />

      {/* Filterable Portfolio & Slide Viewer */}
      <PortfolioSection
        lang={lang}
        theme={theme}
      />

      {/* Experience & Education */}
      <ExperienceTimeline
        lang={lang}
        theme={theme}
      />

      {/* Contact Section */}
      <ContactSection
        lang={lang}
        theme={theme}
      />

      {/* Footer */}
      <Footer
        lang={lang}
        theme={theme}
      />

      {/* Floating AI Chatbot Widget (with light emerald green touch) */}
      <AiChatModal
        lang={lang}
        theme={theme}
      />

      {/* App Convert & PWA Setup Modal */}
      {isAppModalOpen && (
        <AppConvertModal
          lang={lang}
          theme={theme}
          onClose={() => setIsAppModalOpen(false)}
        />
      )}

      {/* Service Order Modal */}
      {isOrderModalOpen && (
        <ServiceOrderModal
          lang={lang}
          theme={theme}
          selectedServiceId={selectedServiceId}
          onClose={() => setIsOrderModalOpen(false)}
        />
      )}
    </div>
  );
}
