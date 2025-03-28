import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, BellAlertIcon, UserGroupIcon, LightBulbIcon, ChartBarIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: "Real-Time Threat Alerts",
    description: "Get instant SMS/email notifications about new scams in your area, powered by our global fraud detection network",
    icon: BellAlertIcon,
    color: "text-red-500"
  },
  {
    name: "Interactive Safety Quizzes",
    description: "Test your knowledge with gamified modules that adapt to your learning progress (e.g., 'Spot the Phishing Email')",
    icon: LightBulbIcon,
    color: "text-yellow-500"
  },
  {
    name: "Family Protection Mode",
    description: "Secure up to 5 family members with child-safe content filters and activity monitoring",
    icon: UserGroupIcon,
    color: "text-blue-500"
  },
  {
    name: "Live Threat Map",
    description: "Visualize active scam hotspots worldwide with our crowdsourced danger heatmap",
    icon: ChartBarIcon,
    color: "text-purple-500"
  },
  {
    name: "24/7 Emergency Support",
    description: "Direct access to fraud experts when you need immediate assistance (Business plan feature)",
    icon: ShieldCheckIcon,
    color: "text-green-500"
  },
  {
    name: "Mobile Safety Scanner",
    description: "Check suspicious links/attachments safely before opening (Android/iOS coming soon)",
    icon: DevicePhoneMobileIcon,
    color: "text-pink-500"
  }
];

const FeatureSection = () => {
  const { t } = useTranslation('common');
  
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark">
            {t('features')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Empowering everyone with essential tools to fight digital threats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="card-body p-6">
                    <div className={`w-12 h-12 rounded-full ${feature.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;