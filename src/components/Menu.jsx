import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiStar } = FiIcons;

const Menu = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'pastries', name: 'Pastries', icon: '🥐' },
    { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
  ];

  const menuItems = {
    coffee: [
      {
        id: 1,
        name: 'Espresso',
        description: 'Rich and bold single shot of premium coffee',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.8,
        popular: true
      },
      {
        id: 2,
        name: 'Cappuccino',
        description: 'Perfect balance of espresso, steamed milk, and foam',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.9
      },
      {
        id: 3,
        name: 'Latte',
        description: 'Smooth espresso with steamed milk and light foam',
        price: 4.49,
        image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.7
      },
      {
        id: 4,
        name: 'Americano',
        description: 'Espresso shots topped with hot water',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.5
      }
    ],
    pastries: [
      {
        id: 5,
        name: 'Croissant',
        description: 'Buttery, flaky French pastry baked fresh daily',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.6
      },
      {
        id: 6,
        name: 'Blueberry Muffin',
        description: 'Moist muffin packed with fresh blueberries',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.4,
        popular: true
      }
    ],
    sandwiches: [
      {
        id: 7,
        name: 'Club Sandwich',
        description: 'Triple-decker with turkey, bacon, lettuce, and tomato',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.7
      },
      {
        id: 8,
        name: 'Grilled Cheese',
        description: 'Classic comfort food with melted cheese',
        price: 6.49,
        image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.5
      }
    ],
    beverages: [
      {
        id: 9,
        name: 'Fresh Orange Juice',
        description: 'Freshly squeezed orange juice',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.3
      },
      {
        id: 10,
        name: 'Iced Tea',
        description: 'Refreshing iced tea with lemon',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        rating: 4.2
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee and delicious treats
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {menuItems[activeCategory]?.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <div className="flex items-center">
                    <SafeIcon icon={FiStar} className="text-yellow-400 text-sm mr-1" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="bg-amber-600 text-white p-2 rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    <SafeIcon icon={FiPlus} className="text-lg" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;