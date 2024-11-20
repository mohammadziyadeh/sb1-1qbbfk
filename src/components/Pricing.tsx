import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'أساسية',
    price: '49',
    features: [
      'موقع واحد',
      'قوالب محدودة',
      'دعم SEO أساسي',
      'تحليلات بسيطة',
      'دعم فني بالبريد'
    ]
  },
  {
    name: 'احترافية',
    price: '99',
    popular: true,
    features: [
      'حتى 3 مواقع',
      'جميع القوالب',
      'تحليل SEO متقدم',
      'تحليلات متقدمة',
      'دعم فني على مدار الساعة',
      'مدير حساب مخصص'
    ]
  },
  {
    name: 'المؤسسات',
    price: '199',
    features: [
      'مواقع غير محدودة',
      'قوالب مخصصة',
      'تحليل SEO احترافي',
      'API مخصص',
      'دعم فني متميز',
      'تدريب مخصص'
    ]
  }
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">خطط الأسعار</h2>
          <p className="text-xl text-gray-600">اختر الخطة المناسبة لاحتياجاتك</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-sm hover:shadow-md transition p-8 ${plan.popular ? 'border-2 border-indigo-600 relative' : ''}`}>
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm">
                  الأكثر شعبية
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/شهرياً</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-indigo-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                ابدأ الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}