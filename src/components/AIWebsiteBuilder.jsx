import React, { useState } from 'react';
import { Wand2, Coffee, Dumbbell, Pizza, Briefcase, BookOpen } from 'lucide-react';
import { generatePage } from '../data/generatePages';
import { translations } from '../data/translations';
import { templates } from '../data/templates';
import TemplateCard from './TemplateCard';

export default function AIWebsiteBuilder() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedSite, setGeneratedSite] = useState(null);
  const [language, setLanguage] = useState('uk');
  const [pageCount, setPageCount] = useState(5);

  const detectTemplate = (text) => {
    text = text.toLowerCase();
    // eslint-disable-next-line no-unused-vars
    for (const [key, template] of Object.entries(templates)) {
      if (template.keywords.some(kw => text.includes(kw))) return template;
    }
    return templates.portfolio;
  };

  const pageTypes = ['hero', 'about', 'services', 'menu', 'products', 'pricing', 'gallery', 'testimonials', 'contact', 'features'];

  const generateWebsite = (templateKey) => {
    setLoading(true);

    setTimeout(() => {
      const template = templateKey ? templates[templateKey] : detectTemplate(prompt);
      const t = translations[language];

      let selectedPages = ['hero'];
      const available = pageTypes.filter(p => p !== 'hero');
      for (let i = 0; i < Math.min(pageCount - 1, available.length); i++) {
        selectedPages.push(available[i]);
      }

      const pagesHtml = selectedPages.map(pt => generatePage(pt, template, t, language)).join('');

      const html = `<!DOCTYPE html>
        <html lang="${language}">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${template.hero[language].title}</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
              @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
              .animate-fade-in { animation: fade-in 1s ease-out; }
              * { scroll-behavior: smooth; }
            </style>
          </head>
          <body class="font-sans">
            <div class="pt-0">${pagesHtml}</div>
          </body>
        </html>`;

      setGeneratedSite(html);
      setLoading(false);
    }, 1000);
  };

  const languageNames = { uk: 'UKR', en: 'ENG', es: 'ESP' };

  if (generatedSite) {
    return <iframe srcDoc={generatedSite} className="w-full h-screen border-0" title="Generated Website" />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Website Builder
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            {language === 'uk'
              ? 'Опишіть ваш сайт і отримайте готовий результат'
              : language === 'es'
              ? 'Describe tu sitio y obtén un resultado listo para usar'
              : 'Describe your site and get ready result'}
          </p>

          <div className="flex justify-center gap-3 mb-6">
            {Object.keys(translations).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  language === lang
                    ? 'bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {languageNames[lang]}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl p-3 shadow-lg mb-5">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              {language === 'uk'
                ? 'Кількість сторінок: '
                : language === 'es'
                ? 'Número de páginas: '
                : 'Number of pages: '}
              <span className="text-purple-600">{pageCount}</span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={pageCount}
              onChange={(e) => setPageCount(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #9333ea ${(pageCount - 1) / 9 * 100}%, #e9d5ff ${(pageCount - 1) / 9 * 100}%)`,
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>1</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {language === 'uk' ? 'Опишіть ваш сайт' : language === 'es' ? 'Describe tu sitio' : 'Describe your site'}
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={
                language === 'uk'
                  ? "Наприклад: кав'ярня в центрі міста..."
                  : language === 'es'
                  ? 'Por ejemplo: una cafetería en el centro de la ciudad...'
                  : 'E.g: coffee shop in city center...'
              }
              className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none text-lg"
            />
          </div>

          <button
            onClick={() => generateWebsite()}
            disabled={loading}
            className="w-full bg-linear-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                {language === 'uk' ? 'Генерую...' : language === 'es' ? 'Yo genero...' : 'Generating...'}
              </>
            ) : (
              <>
                <Wand2 className="w-6 h-6" />
                {language === 'uk' ? 'Створити сайт' : language === 'es' ? 'Crear un sitio' : 'Create Site'}
              </>
            )}
          </button>
        </div>

        <div className="flex justify-center gap-8">
          <TemplateCard templateKey="coffee" icon={Coffee} label={{ uk: "Кав'ярня", es: 'Cafetería', en: 'Coffee' }} onClick={generateWebsite} language={language} />
          <TemplateCard templateKey="fitness" icon={Dumbbell} label={{ uk: 'Фітнес', es: 'Aptitud física', en: 'Fitness' }} onClick={generateWebsite} language={language} />
          <TemplateCard templateKey="restaurant" icon={Pizza} label={{ uk: 'Ресторан', es: 'Restaurante', en: 'Restaurant' }} onClick={generateWebsite} language={language} />
          <TemplateCard templateKey="portfolio" icon={Briefcase} label={{ uk: 'Портфоліо', es: 'Cartera', en: 'Portfolio' }} onClick={generateWebsite} language={language} />
          <TemplateCard templateKey="education" icon={BookOpen} label={{ uk: 'Освіта', es: 'Educación', en: 'Education' }} onClick={generateWebsite} language={language} />
        </div>
      </div>
    </div>
  );
}
