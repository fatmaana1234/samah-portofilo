import React, { useState, useRef, useEffect } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../data/translations';
import { GOOGLE_DRIVE_FOLDER_URL } from '../data/portfolioData';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  User, 
  Minimize2, 
  FolderOpen, 
  Stethoscope,
  RefreshCw
} from 'lucide-react';

interface AiChatModalProps {
  lang: Language;
  theme: Theme;
  onClose?: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const AiChatModal: React.FC<AiChatModalProps> = ({ lang, theme, onClose }) => {
  const isDark = theme === 'dark';
  const t = translations[lang];

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: lang === 'ar'
        ? `أهلاً بك! 👋 أنا مساعد الذكاء الاصطناعي لـ **منى كامل**.\n\nيسعدني جداً مساعدتك في استكشاف مهاراتها في **امتياز التمريض** وخدمات **التصميم الرقمي الشامل (بوربوينت، وورد، بوسترات، فيديوهات، وسوشيال ميديا)** في المنصورة، مصر! 🌿✨`
        : `Hello & Welcome! 👋 I am Mona Kamel's AI Assistant.\n\nI can help you explore her nursing intern background and digital graphic design services (PowerPoint, Word, Video Editing, Posters & Social Media) in Mansoura, Egypt! 🌿✨`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickQuestions = lang === 'ar' ? [
    'ما هي الخدمات والتصاميم المتاحة؟ 🎨',
    'أين يمكنني مشاهدة معرض الأعمال على Google Drive؟ 📁',
    'ما هي خلفيتها الأكاديمية والتمريضية؟ 🩺'
  ] : [
    'What design services are available? 🎨',
    'Where can I view the Google Drive portfolio folder? 📁',
    'What is her Nursing Intern background? 🩺'
  ];

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });

      if (res.ok) {
        const data = await res.json();
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: data.reply || getLocalFallback(query, lang),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botReply]);
      } else {
        throw new Error('Server response error');
      }
    } catch (e) {
      // Local fallback response with light green styling and detailed info
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: getLocalFallback(query, lang),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botReply]);
    } finally {
      setLoading(false);
    }
  };

  function getLocalFallback(query: string, l: Language): string {
    const q = query.toLowerCase();

    if (q.includes('درايف') || q.includes('drive') || q.includes('أعمال') || q.includes('portfolio') || q.includes('فولدر')) {
      return l === 'ar'
        ? `📁 **مجلد أعمال منى كامل الكامل على Google Drive**:\nيمكنك الاطلاع المباشر على جميع العروض التقديمية، الأبحاث المنسقة، البوسترات، ومقاطع الفيديو عبر الرابط المباشر:\n\n🔗 ${GOOGLE_DRIVE_FOLDER_URL}`
        : `📁 **Mona Kamel’s Complete Google Drive Portfolio Folder**:\nYou can view all PowerPoint decks, Word files, posters, and videos here:\n\n🔗 ${GOOGLE_DRIVE_FOLDER_URL}`;
    }

    if (q.includes('تواصل') || q.includes('contact')) {
      return l === 'ar'
        ? `✉️ **طرق التواصل والتصفح مع منى كامل**:\n\n• **رابط مجلد أعمال درايف**: ${GOOGLE_DRIVE_FOLDER_URL}\n• **الموقع**: محافظة المنصورة، جمهورية مصر العربية 📍`
        : `✉️ **Direct Authorized Contact Methods**:\n\n• **Drive Portfolio Folder**: ${GOOGLE_DRIVE_FOLDER_URL}\n• **Location**: Mansoura Governorate, Egypt 📍`;
    }

    if (q.includes('خدمات') || q.includes('تصميم') || q.includes('بوربوينت') || q.includes('وورد') || q.includes('فيديو') || q.includes('services')) {
      return l === 'ar'
        ? `🎨 **خدمات التصميم الرقمي الشاملة لـ منى كامل**:\n\n1. 📊 **PowerPoint**: عروض برزنتيشن طليعية ومبهرة للمؤتمرات والأبحاث.\n2. 📄 **Microsoft Word**: تنسيق وتأطير الأبحاث والتقارير وفق المعايير الأكاديمية.\n3. 🖼️ **Graphic Posters**: بوسترات وإنفوجرافيك طبي عالي الدقة HD/4K.\n4. 🎬 **Video Editing**: مونتاج فيديوهات توعوية وريلز قصيرة.\n5. 📱 **Social Media**: تصاميم وقوالب انستجرام وفيسبوك.`
        : `🎨 **Comprehensive Digital Design Services**:\n\n1. 📊 **PowerPoint**: High-impact presentations for medical defenses and conferences.\n2. 📄 **Microsoft Word**: Formatting research papers and thesis documents.\n3. 🖼️ **Graphic Posters**: Medical & educational HD/4K posters.\n4. 🎬 **Video Editing**: Short awareness reels with subtitles.\n5. 📱 **Social Media**: Banners and Canva Pro templates.`;
    }

    return l === 'ar'
      ? `أهلاً بك! منى كامل هي امتياز تمريض (جامعة المنصورة، مصر) ومصممة محتوى رقمي شاملة.\n\n• **رابط أعمال درايف**: ${GOOGLE_DRIVE_FOLDER_URL}`
      : `Hello! Mona Kamel is a Nursing Intern (Mansoura University, Egypt) and Digital Graphic Designer.\n\n• **Drive Folder**: ${GOOGLE_DRIVE_FOLDER_URL}`;
  }

  return (
    <>
      {/* Floating Trigger Widget Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 end-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900/90 text-white border border-emerald-500/40 shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all group backdrop-blur-md"
          title="شات الذكاء الاصطناعي (AI Assistant)"
        >
          {/* Subtle Light Emerald Glowing Ring */}
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center font-bold">
              <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="absolute -top-0.5 -end-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          </div>

          <div className="flex flex-col text-start hidden sm:flex">
            <span className="text-xs font-black flex items-center gap-1">
              <span>{lang === 'ar' ? 'مساعد منى الذكي' : 'Mona AI Assistant'}</span>
              <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
            </span>
            <span className="text-[10px] text-emerald-300/90 font-medium">
              {lang === 'ar' ? 'استشارة تصميم وطب مباشرة 🌿' : 'AI Health & Design Chat 🌿'}
            </span>
          </div>
        </button>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className={`fixed bottom-4 end-4 sm:bottom-6 sm:end-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[550px] max-h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300 ${
          isDark ? 'bg-slate-950 text-slate-100 border-emerald-500/30' : 'bg-white text-slate-900 border-emerald-300 shadow-emerald-500/10'
        }`}>
          
          {/* Header Bar with Subtle Light Green Accent */}
          <div className={`p-4 border-b flex items-center justify-between shrink-0 ${
            isDark ? 'bg-gradient-to-r from-slate-900 via-teal-950 to-emerald-950/80 border-emerald-500/30' : 'bg-gradient-to-r from-emerald-100 via-teal-50 to-sky-100 border-emerald-300 text-slate-900'
          }`}>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-sky-600 p-0.5 shadow-md shadow-emerald-500/30">
                <div className={`w-full h-full rounded-[14px] flex items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
                  <Bot className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-black flex items-center gap-1.5">
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark ? 'from-emerald-300 via-teal-200 to-sky-300' : 'from-emerald-800 via-teal-800 to-sky-800'
                  }`}>
                    {lang === 'ar' ? 'مساعد الذكاء الاصطناعي (منى كامل)' : 'Mona Kamel AI Assistant'}
                  </span>
                </h4>
                <div className={`flex items-center gap-2 text-[10px] font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{lang === 'ar' ? 'متصل ومتاح للاستشارة 🌿' : 'Online & Ready 🌿'}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className={`p-1.5 rounded-xl transition-colors ${
                  isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-emerald-200 text-slate-600 hover:text-slate-900'
                }`}
                title="تصغير الشات"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className={`p-1.5 rounded-xl transition-colors ${
                    isDark ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-emerald-200 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-emerald-900/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                    isDark ? 'bg-emerald-950 border-emerald-500/40 text-emerald-400' : 'bg-emerald-100 border-emerald-300 text-emerald-800'
                  }`}>
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed space-y-2 ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-emerald-600 to-sky-600 text-white rounded-te-none shadow-md'
                    : isDark
                      ? 'bg-slate-900/90 border border-emerald-900/40 text-slate-200 rounded-ts-none shadow-inner'
                      : 'bg-emerald-50/90 border border-emerald-200 text-slate-900 font-medium rounded-ts-none shadow-sm'
                }`}>
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                  
                  {/* Quick Action Links inside Bot response if keywords detected */}
                  {msg.sender === 'bot' && msg.text.includes('drive.google.com') && (
                    <div className={`pt-2 border-t mt-2 ${isDark ? 'border-emerald-900/30' : 'border-emerald-200'}`}>
                      <a
                        href={GOOGLE_DRIVE_FOLDER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold border transition-all ${
                          isDark
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                            : 'bg-emerald-100 text-emerald-900 border-emerald-300 hover:bg-emerald-200'
                        }`}
                      >
                        <FolderOpen className="w-3.5 h-3.5" />
                        <span>{lang === 'ar' ? 'فتح المجلد مباشرة على Google Drive' : 'Open Google Drive Folder'}</span>
                      </a>
                    </div>
                  )}

                  <div className={`text-[9px] opacity-60 text-end ${msg.sender === 'user' ? 'text-emerald-100' : isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-sm">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className={`flex items-center gap-2 text-xs p-2 rounded-xl border max-w-xs ${
                isDark ? 'text-emerald-400 bg-emerald-950/20 border-emerald-900/30' : 'text-emerald-800 bg-emerald-50 border-emerald-200 font-bold'
              }`}>
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-500" />
                <span>{lang === 'ar' ? 'جاري كتابة الإجابة...' : 'AI is typing...'}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className={`px-3 py-2 border-t overflow-x-auto flex gap-1.5 scrollbar-none ${
            isDark ? 'bg-slate-900/60 border-emerald-900/30' : 'bg-slate-50 border-emerald-200'
          }`}>
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={loading}
                className={`px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap border transition-all shrink-0 ${
                  isDark
                    ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50 hover:bg-emerald-900/80'
                    : 'bg-emerald-100/90 text-emerald-900 border-emerald-300 hover:bg-emerald-200'
                }`}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className={`p-3 border-t flex items-center gap-2 shrink-0 ${
              isDark ? 'bg-slate-900 border-emerald-900/40' : 'bg-white border-emerald-200'
            }`}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lang === 'ar' ? 'اكتب سؤالك للذكاء الاصطناعي...' : 'Type your message...'}
              className={`flex-1 text-xs px-3.5 py-2.5 rounded-xl outline-none border ${
                isDark 
                  ? 'bg-slate-950 border-emerald-900/40 focus:border-emerald-500 text-slate-100 placeholder:text-slate-500' 
                  : 'bg-slate-50 border-emerald-300 focus:border-emerald-600 focus:bg-white text-slate-900 placeholder:text-slate-400 font-medium shadow-sm'
              }`}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
