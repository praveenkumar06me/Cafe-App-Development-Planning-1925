import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiUsers, FiHeart, FiCoffee } = FiIcons;

const About = () => {
  const features = [
    {
      icon: FiCoffee,
      title: 'Premium Quality',
      description: 'We source only the finest coffee beans from sustainable farms around the world.'
    },
    {
      icon: FiUsers,
      title: 'Expert Baristas',
      description: 'Our skilled baristas are passionate about crafting the perfect cup every time.'
    },
    {
      icon: FiHeart,
      title: 'Community Focus',
      description: 'We believe in building connections and creating a welcoming space for everyone.'
    },
    {
      icon: FiAward,
      title: 'Award Winning',
      description: 'Recognized for excellence in coffee quality and customer service.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About BrewCafe
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2015, BrewCafe has been serving the community with 
                exceptional coffee and warm hospitality. Our passion for coffee 
                excellence drives everything we do, from sourcing the finest beans 
                to creating the perfect atmosphere for our customers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={feature.icon} className="text-amber-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Coffee roasting"
              className="rounded-2xl shadow-xl"
            />
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">8+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;