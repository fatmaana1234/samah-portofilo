import React, { useState, useEffect } from 'react';
import { Language, Theme, PortfolioCategory, PortfolioItem } from '../types';
import { samplePortfolioProjects, GOOGLE_DRIVE_FOLDER_URL } from '../data/portfolioData';
import { translations } from '../data/translations';
import { AdminLoginModal } from './AdminLoginModal';
import { 
  Sparkles, 
  Presentation, 
  FileText, 
  FileSpreadsheet,
  Image as ImageIcon, 
  Share2, 
  Film, 
  Plus, 
  FolderPlus, 
  ExternalLink, 
  Eye, 
  X, 
  FolderOpen,
  Layers,
  Lock,
  Unlock,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  CheckCircle2,
  ZoomIn,
  Award,
  Stethoscope
} from 'lucide-react';

interface PortfolioSectionProps {
  lang: Language;
  theme: Theme;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ lang, theme }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [useSampleData, setUseSampleData] = useState<boolean>(true);
  const [uploadedProjects, setUploadedProjects] = useState<PortfolioItem[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState<boolean>(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const t = translations[lang];
  const isDark = theme === 'dark';

  // Load uploaded projects from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('samah_portfolio_custom_items');
      if (saved) {
        setUploadedProjects(JSON.parse(saved));
      }
      const auth = sessionStorage.getItem('samah_admin_auth');
      if (auth === 'true') {
        setIsAdminLoggedIn(true);
      }
    } catch (e) {
      console.error('Failed to parse saved projects', e);
    }
  }, []);

  const handleAdminSuccess = () => {
    setIsAdminLoggedIn(true);
    sessionStorage.setItem('samah_admin_auth', 'true');
    setIsAddModalOpen(true);
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('samah_admin_auth');
  };

  const handleOpenAddProject = () => {
    if (isAdminLoggedIn) {
      setIsAddModalOpen(true);
    } else {
      setIsAdminLoginOpen(true);
    }
  };

  // Save uploaded projects to localStorage
  const handleSaveNewProject = (newProj: PortfolioItem) => {
    const updated = [newProj, ...uploadedProjects];
    setUploadedProjects(updated);
    try {
      localStorage.setItem('samah_portfolio_custom_items', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
    setIsAddModalOpen(false);
    setUseSampleData(false); // Switch to custom view so new work is seen!
  };

  const currentList = useSampleData ? samplePortfolioProjects : uploadedProjects;

  const filteredProjects = activeCategory === 'all'
    ? currentList
    : currentList.filter(p => p.category === activeCategory);

  const categories = [
    { key: 'all' as PortfolioCategory, label: t.catAll, icon: Layers },
    { key: 'excel' as PortfolioCategory, label: t.catExcel, icon: FileSpreadsheet },
    { key: 'powerpoint' as PortfolioCategory, label: t.catPowerpoint, icon: Presentation },
    { key: 'word' as PortfolioCategory, label: t.catWord, icon: FileText },
    { key: 'posters' as PortfolioCategory, label: t.catPosters, icon: ImageIcon },
    { key: 'social' as PortfolioCategory, label: t.catSocial, icon: Share2 },
    { key: 'video' as PortfolioCategory, label: t.catVideo, icon: Film },
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-900/40 text-emerald-300 border border-emerald-700/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>{t.portfolioTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              {t.portfolioSubtitle}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-sky-400 mx-auto rounded-full mb-8" />

          {/* Master Google Drive Folder Banner */}
          <div className={`p-6 sm:p-8 rounded-3xl border mb-10 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 ${
            isDark 
              ? 'bg-gradient-to-r from-emerald-950/90 via-teal-950 to-slate-950 border-emerald-700/50' 
              : 'bg-gradient-to-r from-emerald-100 via-teal-50 to-white border-emerald-300'
          }`}>
            <div className="flex items-center gap-4 text-start">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-sky-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/30">
                <FolderOpen className="w-8 h-8 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-100 mb-1">
                  {t.driveBannerTitle}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-300/90 leading-relaxed">
                  {t.driveBannerDesc}
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl font-black text-xs sm:text-sm bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white shadow-xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0"
            >
              <span>{t.btnOpenDriveFolder}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mode Switch & Admin Protected Control Notice */}
          <div className={`p-4 sm:p-5 rounded-2xl border mb-8 flex flex-wrap items-center justify-between gap-4 ${
            isDark ? 'bg-emerald-950/40 border-emerald-800/40' : 'bg-emerald-50 border-emerald-200'
          }`}>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-300 text-start">
              {isAdminLoggedIn ? (
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 rounded-full">
                  <Unlock className="w-3.5 h-3.5" />
                  <span>{t.adminLoggedInStatus}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-emerald-300 text-xs">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.portfolioProtectedNotice}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setUseSampleData(true)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  useSampleData
                    ? 'bg-emerald-600 text-white shadow-md'
                    : isDark ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-white text-slate-600'
                }`}
              >
                {t.btnToggleSampleMode}
              </button>
              <button
                onClick={() => setUseSampleData(false)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  !useSampleData
                    ? 'bg-teal-600 text-white shadow-md'
                    : isDark ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-white text-slate-600'
                }`}
              >
                {t.btnToggleUploadMode} ({uploadedProjects.length})
              </button>

              <button
                onClick={handleOpenAddProject}
                className="px-4 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>{t.btnAddNewWork}</span>
              </button>

              {isAdminLoggedIn && (
                <button
                  onClick={handleAdminLogout}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold border border-rose-800/50 bg-rose-950/40 text-rose-300 hover:bg-rose-900/60 transition-all flex items-center gap-1"
                  title="تسجيل الخروج"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{t.btnAdminLogout}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 to-sky-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                    : isDark
                      ? 'bg-slate-900 border border-emerald-900/30 text-slate-300 hover:border-emerald-700'
                      : 'bg-white border border-emerald-200 text-slate-700 hover:bg-emerald-50 shadow-sm'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid or Empty Uploaded Notice */}
        {filteredProjects.length === 0 ? (
          <div className={`p-12 rounded-3xl border text-center max-w-xl mx-auto ${
            isDark ? 'bg-slate-900/60 border-purple-800/40 text-slate-300' : 'bg-white border-purple-100 text-slate-700'
          }`}>
            <FolderPlus className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-bounce" />
            <h3 className="text-xl font-bold mb-2">{t.noUploadedWorksTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
              {t.noUploadedWorksDesc}
            </p>
            <button
              onClick={handleOpenAddProject}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-600/30 hover:scale-105 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>{t.btnAddNewWork}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const title = lang === 'ar' ? project.titleAr : project.titleEn;
              const desc = lang === 'ar' ? project.descriptionAr : project.descriptionEn;

                  return (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className={`rounded-3xl border overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
                        isDark
                          ? 'bg-slate-900/80 border-emerald-800/40 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-900/30'
                          : 'bg-white border-emerald-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10'
                      }`}
                    >
                      <div>
                        {/* Project Image Container */}
                        <div className="relative h-52 overflow-hidden bg-slate-950">
                          {project.imageUrl ? (
                            <img
                              src={project.imageUrl}
                              alt={title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-950 flex items-center justify-center p-6 text-center">
                              <Presentation className="w-16 h-16 text-emerald-400/50" />
                            </div>
                          )}

                          {/* Category Badge Over Image */}
                          <div className="absolute top-4 start-4 z-10">
                            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-slate-950/85 backdrop-blur-md text-emerald-300 border border-emerald-500/40">
                              {project.category.toUpperCase()}
                            </span>
                          </div>

                          {/* Quick Overlay Action */}
                          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-4 z-10">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(project);
                              }}
                              className="px-3.5 py-2.5 rounded-2xl bg-emerald-600 text-white shadow-lg hover:scale-105 transition-all flex items-center gap-1.5 text-xs font-bold"
                            >
                              <Eye className="w-4 h-4" />
                              <span>{lang === 'ar' ? 'معاينة العمل بالتفصيل' : 'View Work Details'}</span>
                            </button>
                            <a
                              href={project.fileUrl || `${GOOGLE_DRIVE_FOLDER_URL}#item-${project.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="px-3.5 py-2.5 rounded-2xl bg-sky-600 text-white shadow-lg hover:scale-105 transition-all flex items-center gap-1.5 text-xs font-bold"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>{lang === 'ar' ? 'فتح رابط العمل' : 'Direct Link'}</span>
                            </a>
                          </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-6">
                          <h3 className={`text-lg font-bold mb-2 leading-snug transition-colors ${
                            isDark ? 'text-slate-100 group-hover:text-emerald-300' : 'text-slate-900 font-extrabold group-hover:text-emerald-700'
                          }`}>
                            {title}
                          </h3>
                          <p className={`text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 ${
                            isDark ? 'text-slate-400' : 'text-slate-700 font-medium'
                          }`}>
                            {desc}
                          </p>

                          {/* Software Badges */}
                          <div className="flex flex-wrap items-center gap-1.5 mb-4">
                            {project.software.map((sw, swIdx) => (
                              <span
                                key={swIdx}
                                className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold ${
                                  isDark
                                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40'
                                    : 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                                }`}
                              >
                                {sw}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Action */}
                      <div className="p-6 pt-0 flex gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                            isDark
                              ? 'bg-emerald-950/50 border border-emerald-800/40 text-emerald-300 hover:bg-emerald-900/60 hover:text-white'
                              : 'bg-emerald-50 border border-emerald-300 text-emerald-900 hover:bg-emerald-600 hover:text-white'
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{lang === 'ar' ? 'معاينة هذا العمل' : 'Inspect Work'}</span>
                        </button>

                        <a
                          href={project.fileUrl || `${GOOGLE_DRIVE_FOLDER_URL}#item-${project.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                            isDark
                              ? 'bg-sky-950/50 border border-sky-800/40 text-sky-300 hover:bg-sky-900/60 hover:text-white'
                              : 'bg-sky-50 border border-sky-300 text-sky-900 hover:bg-sky-600 hover:text-white'
                          }`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{lang === 'ar' ? 'رابط العمل المباشر 🔗' : 'Direct Work Link 🔗'}</span>
                        </a>
                      </div>
                    </div>
                  );
            })}
          </div>
        )}

      </div>

      {/* Admin Login Password Modal */}
      {isAdminLoginOpen && (
        <AdminLoginModal
          lang={lang}
          theme={theme}
          onSuccess={handleAdminSuccess}
          onClose={() => setIsAdminLoginOpen(false)}
        />
      )}

      {/* Add New Project Modal */}
      {isAddModalOpen && (
        <AddProjectModal
          lang={lang}
          theme={theme}
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleSaveNewProject}
        />
      )}

      {/* Project Inspector Detail Modal */}
      {selectedProject && (
        <ProjectInspectorModal
          project={selectedProject}
          lang={lang}
          theme={theme}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

// Sub-component: Add Project Modal Form
interface AddProjectModalProps {
  lang: Language;
  theme: Theme;
  onClose: () => void;
  onSave: (proj: PortfolioItem) => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ lang, theme, onClose, onSave }) => {
  const [titleAr, setTitleAr] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [category, setCategory] = useState<PortfolioCategory>('powerpoint');
  const [descAr, setDescAr] = useState('');
  const [descEn, setDescEn] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [fileUrl, setFileUrl] = useState(GOOGLE_DRIVE_FOLDER_URL);
  const [videoUrl, setVideoUrl] = useState('');
  const [softwareStr, setSoftwareStr] = useState('PowerPoint, Word');

  const t = translations[lang];
  const isDark = theme === 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleAr && !titleEn) return;

    const newItem: PortfolioItem = {
      id: 'custom-' + Date.now(),
      titleAr: titleAr || titleEn,
      titleEn: titleEn || titleAr,
      category,
      descriptionAr: descAr || titleAr,
      descriptionEn: descEn || titleEn,
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      fileUrl: fileUrl || GOOGLE_DRIVE_FOLDER_URL,
      videoUrl,
      tags: [category, 'Custom Upload'],
      software: softwareStr.split(',').map(s => s.trim()).filter(Boolean),
      dateAdded: new Date().toISOString()
    };

    onSave(newItem);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className={`w-full max-w-2xl rounded-3xl border p-6 sm:p-8 relative shadow-2xl my-8 ${
        isDark ? 'bg-slate-900 border-purple-800/60 text-slate-100' : 'bg-white border-purple-200 text-slate-800'
      }`}>
        <button
          onClick={onClose}
          className="absolute top-6 end-6 p-2 rounded-full hover:bg-purple-900/40 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold">
            <FolderPlus className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{t.modalAddTitle}</h3>
            <p className="text-xs text-purple-400">
              {lang === 'ar' ? 'إضافة عمل جديد فورياً إلى المعرض وبتقسيمه المخصص' : 'Add new item directly to portfolio list'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold mb-1">{t.labelProjTitleAr}</label>
              <input
                type="text"
                required
                value={titleAr}
                onChange={(e) => setTitleAr(e.target.value)}
                placeholder="مثال: عرض البوربوينت التثقيفي لرعاية صحة المرضى"
                className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                  isDark ? 'bg-slate-950 border-purple-900/50 text-white focus:border-purple-500' : 'bg-slate-50 border-purple-200'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-1">{t.labelProjTitleEn}</label>
              <input
                type="text"
                value={titleEn}
                onChange={(e) => setTitleEn(e.target.value)}
                placeholder="e.g. Public Health Presentation Deck"
                className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                  isDark ? 'bg-slate-950 border-purple-900/50 text-white focus:border-purple-500' : 'bg-slate-50 border-purple-200'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold mb-1">{t.labelCategory}</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as PortfolioCategory)}
              className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                isDark ? 'bg-slate-950 border-purple-900/50 text-white focus:border-purple-500' : 'bg-slate-50 border-purple-200'
              }`}
            >
              <option value="powerpoint">عروض بوربوينت 📊 (PowerPoint Presentations)</option>
              <option value="word">ملفات الوورد 📄 (Word Documents)</option>
              <option value="posters">بوسترات وتصاميم جرافيك 🖼️ (Graphic Posters)</option>
              <option value="social">السوشيال ميديا 📱 (Social Media Designs)</option>
              <option value="video">مشاريع الفيديو 🎬 (Video Projects)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold mb-1">{t.labelDescAr}</label>
              <textarea
                rows={3}
                value={descAr}
                onChange={(e) => setDescAr(e.target.value)}
                placeholder="وصف مختصر لمحتوى العمل..."
                className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                  isDark ? 'bg-slate-950 border-purple-900/50 text-white focus:border-purple-500' : 'bg-slate-50 border-purple-200'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-1">{t.labelDescEn}</label>
              <textarea
                rows={3}
                value={descEn}
                onChange={(e) => setDescEn(e.target.value)}
                placeholder="Brief summary of project scope..."
                className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                  isDark ? 'bg-slate-950 border-purple-900/50 text-white focus:border-purple-500' : 'bg-slate-50 border-purple-200'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold mb-1">{t.labelImageUrl}</label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://domain.com/image.jpg"
                className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                  isDark ? 'bg-slate-950 border-purple-900/50 text-white focus:border-purple-500' : 'bg-slate-50 border-purple-200'
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-bold mb-1">{t.labelFileUrl}</label>
              <input
                type="url"
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
                placeholder="Google Drive / PDF Link"
                className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                  isDark ? 'bg-slate-950 border-purple-900/50 text-white focus:border-purple-500' : 'bg-slate-50 border-purple-200'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold mb-1">{t.labelSoftware}</label>
            <input
              type="text"
              value={softwareStr}
              onChange={(e) => setSoftwareStr(e.target.value)}
              placeholder="PowerPoint, Word, Video Editing, Canva"
              className={`w-full px-4 py-2.5 rounded-xl text-xs border outline-none ${
                isDark ? 'bg-slate-950 border-purple-900/50 text-white focus:border-purple-500' : 'bg-slate-50 border-purple-200'
              }`}
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-purple-900/30">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              {t.btnCancel}
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg hover:scale-105 transition-all"
            >
              {t.btnSaveProject}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Sub-component: Project Inspector Modal (Interactive Item Viewer for Specific Works)
interface ProjectInspectorModalProps {
  project: PortfolioItem;
  lang: Language;
  theme: Theme;
  onClose: () => void;
}

const ProjectInspectorModal: React.FC<ProjectInspectorModalProps> = ({ project, lang, theme, onClose }) => {
  const t = translations[lang];
  const isDark = theme === 'dark';
  const isRtl = lang === 'ar';
  const title = lang === 'ar' ? project.titleAr : project.titleEn;
  const desc = lang === 'ar' ? project.descriptionAr : project.descriptionEn;

  // State for interactive features
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeDocTab, setActiveDocTab] = useState<'cover' | 'content' | 'references'>('content');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showFullResolutionImage, setShowFullResolutionImage] = useState(false);

  // Custom slides if present, or generated interactive slides for PowerPoint
  const pptSlides = project.slides || [
    {
      slideNumber: 1,
      titleAr: `شريحة الغلاف 01: ${title}`,
      titleEn: `Cover Slide 01: ${title}`,
      contentAr: `تصميم وإعداد: منى كامل | ${desc}`,
      contentEn: `Prepared by: Mona Kamel | ${desc}`,
      bgColor: 'from-emerald-950 via-teal-950 to-slate-950'
    },
    {
      slideNumber: 2,
      titleAr: 'المحاور الرئيسية والتقسيم الهيكلي للعمل',
      titleEn: 'Main Structural Pillars & Layout',
      contentAr: 'تنسيق هويّة بصرية متسقة، رسم مخططات توضيحية، واستعراض النقاط الأساسية بدقة متناهية.',
      contentEn: 'Consistent visual branding, diagrams, and precise layout structure.',
      bgColor: 'from-slate-950 via-emerald-950 to-teal-950'
    },
    {
      slideNumber: 3,
      titleAr: 'التوصيات والملف المباشر الكامل',
      titleEn: 'Recommendations & Direct File Access',
      contentAr: 'هذا العمل متاح بالكامل وصالح للتعديل أو الطباعة من خلال الرابط المباشر.',
      contentEn: 'This work is available for direct view/download via the direct link.',
      bgColor: 'from-cyan-950 via-slate-950 to-emerald-950'
    }
  ];

  const currentSlide = pptSlides[activeSlideIndex % pptSlides.length];
  const directLink = project.fileUrl || `${GOOGLE_DRIVE_FOLDER_URL}#item-${project.id}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className={`w-full max-w-4xl rounded-3xl border p-5 sm:p-8 relative shadow-2xl my-6 transition-all ${
        isDark ? 'bg-slate-900 border-emerald-600/50 text-slate-100' : 'bg-white border-emerald-300 text-slate-900'
      }`}>
        
        {/* Top Header */}
        <div className={`flex items-start justify-between gap-4 mb-6 pb-4 border-b ${isDark ? 'border-emerald-900/40' : 'border-emerald-200'}`}>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-xl text-xs font-black uppercase border ${
                isDark ? 'bg-emerald-950 text-emerald-300 border-emerald-700/60' : 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold'
              }`}>
                {project.category}
              </span>
              <span className={`px-3 py-1 rounded-xl text-xs font-bold border ${
                isDark ? 'bg-sky-950 text-sky-300 border-sky-800/60' : 'bg-sky-100 text-sky-900 border-sky-300 font-bold'
              }`}>
                {lang === 'ar' ? 'معاينة العمل المحدد' : 'Item Viewer'}
              </span>
            </div>
            <h2 className={`text-xl sm:text-2xl font-black leading-snug ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              {title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all shrink-0"
            title={lang === 'ar' ? 'إغلاق' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Specialized Interactive Viewer Component per Category */}
        <div className="mb-6">
          
          {/* CATEGORY 1: POWERPOINT (interactive slide switcher) */}
          {project.category === 'powerpoint' && (
            <div className="rounded-2xl border border-emerald-700/50 bg-slate-950 p-5 sm:p-7 shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-emerald-300 font-bold mb-4">
                <span className="flex items-center gap-1.5">
                  <Presentation className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'ar' ? 'معاينة شرائح هذا البرزنتيشن' : 'Interactive Slide Deck Viewer'}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-700/50 font-mono text-[11px]">
                  {activeSlideIndex + 1} / {pptSlides.length}
                </span>
              </div>

              {/* Slide Viewport */}
              <div className={`p-6 sm:p-10 rounded-2xl bg-gradient-to-br ${currentSlide.bgColor || 'from-emerald-950 to-slate-950'} border border-emerald-500/30 text-white min-h-[250px] flex flex-col justify-between shadow-2xl`}>
                <div>
                  <div className="text-xs text-emerald-300 font-bold mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>Slide {activeSlideIndex + 1}</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black mb-3">
                    {lang === 'ar' ? currentSlide.titleAr : currentSlide.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
                    {lang === 'ar' ? currentSlide.contentAr : currentSlide.contentEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-emerald-800/40 text-[11px] text-emerald-300/80 flex items-center justify-between">
                  <span>© {lang === 'ar' ? 'تصميم: منى كامل' : 'Designed by Mona Kamel'}</span>
                  <span>PowerPoint Presentation</span>
                </div>
              </div>

              {/* Slide Navigation Controls */}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => setActiveSlideIndex(prev => (prev - 1 + pptSlides.length) % pptSlides.length)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/50 flex items-center gap-1.5 transition-all"
                >
                  {isRtl ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                  <span>{t.btnPrevSlide}</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {pptSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        idx === activeSlideIndex ? 'bg-emerald-400 w-6' : 'bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveSlideIndex(prev => (prev + 1) % pptSlides.length)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/50 flex items-center gap-1.5 transition-all"
                >
                  <span>{t.btnNextSlide}</span>
                  {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {/* CATEGORY 2: WORD (interactive document manuscript reader) */}
          {project.category === 'word' && (
            <div className="rounded-2xl border border-sky-700/50 bg-slate-950 p-5 sm:p-7 shadow-inner">
              <div className="flex items-center justify-between text-xs text-sky-300 font-bold mb-4">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>{lang === 'ar' ? 'قراءة مستند الوورد المنسق' : 'Word Document Manuscript Preview'}</span>
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setActiveDocTab('cover')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeDocTab === 'cover' ? 'bg-sky-600 text-white' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {lang === 'ar' ? 'الغلاف' : 'Cover'}
                  </button>
                  <button
                    onClick={() => setActiveDocTab('content')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeDocTab === 'content' ? 'bg-sky-600 text-white' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {lang === 'ar' ? 'المحتوى والجدول' : 'Body & Table'}
                  </button>
                  <button
                    onClick={() => setActiveDocTab('references')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeDocTab === 'references' ? 'bg-sky-600 text-white' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    {lang === 'ar' ? 'المراجع APA' : 'References'}
                  </button>
                </div>
              </div>

              {/* Manuscript Simulated Sheet */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 min-h-[250px] shadow-2xl space-y-4">
                {activeDocTab === 'cover' && (
                  <div className="text-center py-6 border-2 border-dashed border-sky-500/30 p-6 rounded-xl bg-slate-950/60">
                    <h4 className="text-lg font-black text-sky-300 mb-2">{title}</h4>
                    <p className="text-xs text-slate-400 mb-4">{desc}</p>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-sky-950 text-sky-300 text-xs font-bold border border-sky-700/40">
                      {lang === 'ar' ? 'تنسيق أكاديمي وفق معايير كلية التمريض بالمنصورة' : 'Mansoura University Academic Formatting'}
                    </div>
                  </div>
                )}

                {activeDocTab === 'content' && (
                  <div className="space-y-3 text-xs leading-relaxed">
                    <h4 className="text-sm font-bold text-sky-300">{lang === 'ar' ? 'فهرس المحتويات وخطة العمل:' : 'Table of Contents & Core Sections:'}</h4>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex justify-between font-semibold text-slate-300">
                        <span>1. {lang === 'ar' ? 'المقدمة والهدف السريري' : 'Introduction & Clinical Objective'}</span>
                        <span className="text-sky-400">Page 1</span>
                      </div>
                      <div className="flex justify-between font-semibold text-slate-300">
                        <span>2. {lang === 'ar' ? 'جدول الرعاية التمريضية (Nursing Care Plan)' : 'Nursing Care Plan Table'}</span>
                        <span className="text-sky-400">Page 3</span>
                      </div>
                      <div className="flex justify-between font-semibold text-slate-300">
                        <span>3. {lang === 'ar' ? 'النتائج والمتابعة الطبية' : 'Clinical Evaluation & Follow-up'}</span>
                        <span className="text-sky-400">Page 5</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeDocTab === 'references' && (
                  <div className="text-xs space-y-2 text-slate-400 font-mono">
                    <h4 className="text-xs font-bold text-sky-300 font-sans">{lang === 'ar' ? 'تنسيق المراجع العلمية (APA Style):' : 'Formatted References (APA Style):'}</h4>
                    <p className="p-2 rounded bg-slate-950 border border-slate-800">
                      Ali, S. R. M. (2026). Clinical Nursing Interventions and Patient Education Guidelines. Mansoura University Healthcare Journal, 12(2), 45-58.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* CATEGORY 3 & 4: POSTERS & SOCIAL (graphic image inspector with zoom) */}
          {(project.category === 'posters' || project.category === 'social') && (
            <div className="rounded-2xl border border-teal-700/50 bg-slate-950 p-4 shadow-inner text-center">
              <div className="relative rounded-2xl overflow-hidden border border-teal-800/40 max-h-[380px] bg-slate-900 group">
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${showFullResolutionImage ? 'scale-125' : 'scale-100'}`}
                  />
                )}
                <div className="absolute bottom-3 end-3 flex items-center gap-2">
                  <button
                    onClick={() => setShowFullResolutionImage(!showFullResolutionImage)}
                    className="px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-teal-300 text-xs font-bold border border-teal-500/40 flex items-center gap-1 hover:bg-slate-900 transition-all"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>{showFullResolutionImage ? (lang === 'ar' ? 'تصغير' : 'Zoom Out') : (lang === 'ar' ? 'تكبير دقيق' : 'Zoom In')}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* CATEGORY 5: VIDEO (interactive video player mockup) */}
          {project.category === 'video' && (
            <div className="rounded-2xl border border-purple-700/50 bg-slate-950 p-5 shadow-inner">
              <div className="relative rounded-2xl overflow-hidden border border-purple-800/40 max-h-[320px] bg-slate-900 flex flex-col items-center justify-center p-8 text-center">
                {project.imageUrl && (
                  <img src={project.imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                )}
                <div className="relative z-10 space-y-3">
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-teal-600 to-sky-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform mx-auto"
                  >
                    {isVideoPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ms-1" />}
                  </button>
                  <div className="text-xs font-bold text-purple-300">
                    {isVideoPlaying ? (lang === 'ar' ? 'جاري تشغيل الفيديو التوعوي المترجم...' : 'Playing awareness video clip...') : (lang === 'ar' ? 'انقر لتشغيل معاينة الفيديو' : 'Click to preview video clip')}
                  </div>
                  {isVideoPlaying && (
                    <div className="px-4 py-2 rounded-xl bg-slate-950/90 border border-purple-500/40 text-xs text-white max-w-md mx-auto animate-pulse">
                      💬 Subtitles: &quot;{lang === 'ar' ? 'تثقيف المرضى وإرشادات السلامة التمريضية' : 'Patient education and healthcare safety guidelines'}&quot;
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Project Metadata & Software Badges */}
        <div className={`mb-6 p-4 rounded-2xl border space-y-3 text-xs ${
          isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-emerald-50/80 border-emerald-200'
        }`}>
          <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-800 font-medium'}`}>{desc}</p>

          <div className={`flex flex-wrap items-center gap-2 pt-2 border-t ${isDark ? 'border-slate-800' : 'border-emerald-200'}`}>
            <span className={`font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-800 font-extrabold'}`}>{lang === 'ar' ? 'الأدوات والبرامج:' : 'Tools:'}</span>
            {project.software.map((sw, idx) => (
              <span key={idx} className={`px-3 py-1 rounded-xl font-bold border ${
                isDark ? 'bg-emerald-950/80 border-emerald-800/50 text-emerald-300' : 'bg-white border-emerald-300 text-emerald-900 shadow-sm'
              }`}>
                {sw}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Action Footer: Links straight to THIS item */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t ${isDark ? 'border-emerald-900/40' : 'border-emerald-200'}`}>
          <div className={`text-[11px] font-bold text-center sm:text-start ${isDark ? 'text-emerald-400' : 'text-emerald-800'}`}>
            <span className="flex items-center gap-1 justify-center sm:justify-start">
              <CheckCircle2 className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`} />
              <span>{lang === 'ar' ? 'رابط مباشر مخصص لهذا العمل المباشر' : 'Direct targeted item link'}</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={directLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-6 py-3 rounded-2xl text-xs sm:text-sm font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 text-white shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{lang === 'ar' ? `فتح ملف "${title.slice(0, 20)}..." المباشر 🔗` : `Open Direct File 🔗`}</span>
            </a>

            <button
              onClick={onClose}
              className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all ${
                isDark ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
              }`}
            >
              {t.appModalClose}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
