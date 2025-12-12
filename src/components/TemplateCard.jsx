import React from 'react';

// eslint-disable-next-line no-unused-vars
export default function TemplateCard({ templateKey, label, icon: Icon, onClick, language = 'uk' }) {
  return (
    <button
      onClick={() => onClick(templateKey)}
      className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center gap-3 hover:shadow-2xl transition-all hover:scale-105"
    >
      <Icon className="w-10 h-10 text-purple-600" />
      <span className="font-semibold text-gray-700">{label[language]}</span>
    </button>
  );
}
