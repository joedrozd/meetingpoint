import { useTranslation } from 'next-i18next';
import { Card } from 'react-daisyui';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import faqs from './data/faq.json';

const FAQSection = () => {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-center text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark">
            {t('frequently-asked')}
          </h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
            Get answers to all your questions about our internet safety platform
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Card 
                className={`border-none rounded-xl overflow-hidden transition-all duration-300 
                  ${activeIndex === index ? 
                    'bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary-dark/10 dark:to-secondary-dark/10' : 
                    'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
              >
                <Card.Body 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <Card.Title 
                      tag="h3" 
                      className={`text-lg md:text-xl font-semibold ${
                        activeIndex === index ? 'text-primary dark:text-primary-dark' : 'text-gray-800 dark:text-white'
                      }`}
                    >
                      {faq.question}
                    </Card.Title>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: activeIndex === index ? 'auto' : 0,
                      opacity: activeIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;