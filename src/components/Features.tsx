import React from 'react';
import { Brain, GripHorizontal, Search, Layout, BarChart3, Settings } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'توليد المواقع بالذكاء الاصطناعي',
    description: 'إنشاء مواقع احترافية تلقائياً بناءً على مجالك ومتطلباتك'
  },
  {
    icon: GripHorizontal,
    title: 'السحب والإفلات',
    description: 'واجهة سهلة الاستخدام لتخصيص موقعك بدون برمجة'
  },
  {
    icon: Search,
    title: 'تحسين محركات البحث',
    description: 'أدوات متكاملة لتحسين ظهور موقعك في نتائج البحث'
  },
  {
    icon: Layout,
    title: 'قوالب احترافية',
    description: 'مجموعة متنوعة من القوالب الجاهزة لمختلف المجالات'
  },
  {
    icon: BarChart3,
    title: 'تحليلات متقدمة',
    description: 'تتبع أداء موقعك وتحليل سلوك الزوار'
  },
  {
    icon: Settings,
    title: 'لوحة تحكم شاملة',
    description: 'إدارة موقعك بسهولة مع لوحة تحكم متكاملة'
  }
];

export default function Features() {
  return (
    <div id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ميزات المنصة</h2>
          <p className="text-xl text-gray-600">كل ما تحتاجه لإنشاء موقع احترافي في مكان واحد</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}