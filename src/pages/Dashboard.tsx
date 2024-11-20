import React from 'react';
import { Settings, Layout, Search, Image, Type, Globe } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">لوحة التحكم</h2>
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-indigo-50 text-indigo-600">
              <Layout className="h-5 w-5" />
              <span>القوالب</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50">
              <Type className="h-5 w-5" />
              <span>المحتوى</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50">
              <Image className="h-5 w-5" />
              <span>الوسائط</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50">
              <Search className="h-5 w-5" />
              <span>تحسين SEO</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50">
              <Globe className="h-5 w-5" />
              <span>النشر</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50">
              <Settings className="h-5 w-5" />
              <span>الإعدادات</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="mr-64 p-8">
        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">اختر قالباً لموقعك</h1>
          
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((template) => (
              <div key={template} className="bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
                <img 
                  src={`https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=500&q=80`}
                  alt={`Template ${template}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">قالب {template}</h3>
                  <p className="text-gray-600 text-sm">قالب احترافي مناسب للشركات والمؤسسات</p>
                  <button className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    استخدم هذا القالب
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}