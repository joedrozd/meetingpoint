import { CheckIcon, BoltIcon, StarIcon, SparklesIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'next-i18next';
import { Button, Card } from 'react-daisyui';
const plans = [
  {
    name: 'Free',
    amount: '0',
    currency: '$',
    duration: 'month',
    description: 'Essential safety knowledge for everyone',
    benefits: [
      'Basic phishing/scam lessons',
      'Monthly threat alerts',
      'Community forum access',
      '5 quiz modules/month',
      'Ad-supported'
    ],
    popular: false,
    featured: false
  },
  {
    name: 'Guardian',
    amount: '5',
    currency: '$',
    duration: 'month',
    description: 'For proactive individuals & families',
    benefits: [
      'All Free features, ad-free',
      'Real-time scam alerts (SMS/email)',
      'Unlimited interactive quizzes',
      'Priority support (48h response)',
      'Family plan (up to 5 users)',
      'Exclusive webinars'
    ],
    popular: true,
    featured: false
  },
  {
    name: 'Business',
    amount: '20',
    currency: '$',
    duration: 'month',
    description: 'Protect your team with enterprise-grade tools',
    benefits: [
      'Everything in Guardian',
      'Team dashboard & reporting',
      'Custom training modules',
      '24/7 emergency fraud hotline',
      'White-label certificates',
      'API for HR integrations',
      'Dedicated account manager'
    ],
    popular: false,
    featured: true
  }
];

const PricingSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {t('pricing')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Simple, transparent pricing that scales with your family or business. Choose a plan that fits your needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={`plan-${index}`}
              className={`relative rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 
                ${plan.popular ? 'ring-2 ring-primary transform -translate-y-2' : ''}
                ${plan.featured ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 text-sm font-bold rounded-bl-lg flex items-center">
                  <StarIcon className="w-4 h-4 mr-1" />
                  PREMIUM
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h3 className={`text-2xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  {plan.featured && <SparklesIcon className="w-6 h-6 text-yellow-300" />}
                </div>

                <div className="mt-4">
                  <p className={`text-sm ${plan.featured ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mt-6">
                  <p className={`text-5xl font-extrabold ${plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {plan.currency}{plan.amount}
                    <span className={`text-lg font-medium ${plan.featured ? 'text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>
                      /{plan.duration}
                    </span>
                  </p>
                </div>

                <div className="mt-8">
                  <ul className="space-y-3">
                    {plan.benefits.map((benefit, itemIndex) => (
                      <li 
                        key={`plan-${index}-benefit-${itemIndex}`} 
                        className="flex items-start"
                      >
                        <CheckIcon className={`flex-shrink-0 w-5 h-5 mt-0.5 ${plan.featured ? 'text-green-300' : 'text-primary'}`} />
                        <span className={`ml-3 ${plan.featured ? 'text-gray-100' : 'text-gray-700 dark:text-gray-300'}`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Button
                    color={plan.featured ? 'accent' : 'primary'}
                    className={`w-full rounded-lg py-3 font-bold ${plan.featured ? 'bg-white text-indigo-600 hover:bg-gray-100' : ''}`}
                    size="md"
                  >
                    {t('buy-now')}
                    {plan.popular && <BoltIcon className="w-5 h-5 ml-2" />}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Need something custom?{' '}
            <a href="#" className="text-primary hover:underline font-medium">
              Contact us
            </a>{' '}
            for enterprise solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;