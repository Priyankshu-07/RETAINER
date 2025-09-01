import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon 
} from '@heroicons/react/24/outline';

export const About: React.FC = () => {
  const stats = [
    { label: 'Prediction Accuracy', value: '94%' },
    { label: 'Companies Served', value: '500+' },
    { label: 'Employees Analyzed', value: '1M+' },
    { label: 'Retention Improved', value: '35%' }
  ];

  const benefits = [
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: 'Data-Driven Insights',
      description: 'Make informed decisions based on comprehensive employee data analysis and predictive modeling.'
    },
    {
      icon: <CpuChipIcon className="h-8 w-8" />,
      title: 'Advanced ML Algorithms',
      description: 'Leverage state-of-the-art machine learning models trained on diverse organizational datasets.'
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: 'Employee-Centric Approach',
      description: 'Focus on understanding individual employee needs and satisfaction drivers.'
    },
    {
      icon: <LightBulbIcon className="h-8 w-8" />,
      title: 'Actionable Recommendations',
      description: 'Receive specific, implementable strategies to improve employee retention rates.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security ensures your employee data remains confidential and protected.'
    },
    {
      icon: <ArrowTrendingUpIcon className="h-8 w-8" />,
      title: 'Continuous Learning',
      description: 'Our models continuously improve with more data, providing increasingly accurate predictions.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RETAINER
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              RETAINER is an advanced machine learning platform designed to help organizations 
              predict and improve employee retention rates through intelligent data analysis 
              and actionable insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that employee retention is one of the most critical challenges facing 
                modern organizations. High turnover rates not only impact productivity and morale 
                but also result in significant financial costs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                RETAINER empowers HR professionals and organizational leaders with the tools and 
                insights needed to create engaging work environments where employees thrive and 
                choose to stay long-term.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how RETAINER can transform your approach to employee retention
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Improve Your Retention Rates?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start using RETAINER today and make data-driven decisions about your most valuable asset: your people.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg"
              onClick={() => window.location.href = '/predict'}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};