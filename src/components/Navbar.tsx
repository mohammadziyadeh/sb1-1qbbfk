import React from 'react';
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="mr-2 text-xl font-bold text-gray-900">WebAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600">الميزات</a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600">الأسعار</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">تواصل معنا</a>
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              ابدأ مجاناً
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}