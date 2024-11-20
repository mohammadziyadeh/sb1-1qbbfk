import React from 'react';
import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-indigo-400" />
              <span className="mr-2 text-xl font-bold">WebAI</span>
            </div>
            <p className="text-gray-400">
              منصة متكاملة لإنشاء مواقع احترافية باستخدام الذكاء الاصطناعي
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">الرئيسية</a></li>
              <li><a href="#features" className="hover:text-white">الميزات</a></li>
              <li><a href="#pricing" className="hover:text-white">الأسعار</a></li>
              <li><a href="#contact" className="hover:text-white">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">الدعم</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">المساعدة</a></li>
              <li><a href="#" className="hover:text-white">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-white">التوثيق</a></li>
              <li><a href="#" className="hover:text-white">الشروط والأحكام</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-gray-400">
              <li>البريد الإلكتروني: info@webai.com</li>
              <li>الهاتف: +966 123 456 789</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} WebAI. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}