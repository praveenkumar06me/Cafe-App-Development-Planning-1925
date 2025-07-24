import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight } = FiIcons;

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Perfect Coffee
              <span className="text-amber-600 block">Every Morning</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Start your day with our premium coffee blends, freshly roasted and 
              expertly crafted by our passionate baristas. Experience the perfect 
              balance of flavor and aroma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors group"
              >
                View Our Menu
                <SafeIcon 
                  icon={FiArrowRight} 
                  className="ml-2 group-hover:translate-x-1 transition-transform" 
                />
              </Link>
              
              <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-600 text-amber-600 font-medium rounded-lg hover:bg-amber-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-600">Coffee Varieties</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">5★</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Coffee shop interior"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20"
            >
              <div className="text-sm font-semibold text-gray-900">Fresh Daily</div>
              <div className="text-xs text-gray-600">Premium Quality</div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-xl shadow-lg z-20"
            >
              <div className="text-sm font-semibold">$3.99</div>
              <div className="text-xs">Starting from</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;