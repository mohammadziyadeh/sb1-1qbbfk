import React from 'react';
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-8">
          صمم موقعك باستخدام
          <span className="text-indigo-600"> الذكاء الاصطناعي</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          منصة متكاملة لإنشاء مواقع احترافية مع دعم كامل لتحسين محركات البحث وميزات السحب والإفلات
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
          >
            ابدأ تجربة مجانية
          </button>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition">
            شاهد العرض التوضيحي
          </button>
        </div>
        
        <div className="mt-20">
          <img 
            src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&w=2000&q=80"
            alt="AI Website Builder Interface"
            className="rounded-lg shadow-2xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
}