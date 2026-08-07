import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client lazily or safely
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY") {
    try {
      ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    } catch (e) {
      console.warn("Failed to initialize GoogleGenAI with key:", e);
    }
  }

  // API Chat Endpoint for Mona Kamel AI Assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: "Message string is required" });
        return;
      }

      if (!ai) {
        // Fallback simulated response if GEMINI_API_KEY is not set
        res.json({
          reply: `أهلاً بك! أنا مساعد الذكاء الاصطناعي الخاص بـ **منى كامل**.
منى هي امتياز تمريض ومصممة محتوى رقمي شاملة (عروض بوربوينت احترافية، مستندات وورد منسقة، بوسترات طبية، تصاميم جرافيك وسوشيال ميديا، ومونتاج فيديوهات).

📍 **الموقع**: المنصورة، مصر
📁 **معرض الأعمال على Google Drive**: https://drive.google.com/drive/folders/1U41cf3pbylT29RUXFL-A0lLINjp0_nBI?usp=sharing

كيف يمكنني مساعدتك في استفسارك عن خدمات منى أو مشاريعها؟`
        });
        return;
      }

      const systemInstruction = `أنت مساعد الذكاء الاصطناعي الرسمي في الموقع الشخصي للمصممة وامتياز التمريض: منى كامل (Mona Kamel).
بيانات منى الأساسية:
- **الدراسة الأكاديمية**: امتياز تمريض (كلية التمريض - جامعة المنصورة، مصر)، تخرجت بتقدير ممتاز ولديها خبرة عميقة في التثقيف الطبي ورعاية المرضى والصحة العامة.
- **التخصص الإبداعي**: مصممة جرافيك ومحتوى رقمي شاملة ليست مقتصرة على البوربوينت فقط! تشمل مهاراتها:
  1. تصميم عروض PowerPoint برزنتيشن طليعية ومبهرة للمؤتمرات والأبحاث.
  2. تنسيق وتأطير أبحاث ومستندات Microsoft Word وفق معايير دور النشر والأكاديميات.
  3. تصميم بوسترات وإنفوجرافيك طبي وتوعوي عالي الدقة (HD/4K).
  4. تصاميم جرافيك وبنرات السوشيال ميديا (Instagram, Facebook, Canva Pro).
  5. مونتاج وإنتاج الفيديوهات التثقيفية القصيرة والريلز الطبية.
- **المحافظة / الموقع**: المنصورة، جمهورية مصر العربية.
- **رابط معرض الأعمال الكامل على Google Drive**:
  https://drive.google.com/drive/folders/1U41cf3pbylT29RUXFL-A0lLINjp0_nBI?usp=sharing

أجب دائماً بلباقة واحترافية وود. استخدم إيموجي خفيف ومناسب. ادمج المعرفة الطبية والتصميمية، وشجع الزائر على الاطلاع على معرض الأعمال على درايف.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: message,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || "أهلاً بك! تسعدنا إجابة استفساراتك حول خدمات منى كامل للتصميم والتثقيف الطبي.";
      res.json({ reply });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      res.json({
        reply: "أهلاً بك! تسعد منى كامل بمعاينة الأعمال الكاملة على Google Drive!"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
