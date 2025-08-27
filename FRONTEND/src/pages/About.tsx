import React from 'react';
import { Brain, TrendingUp, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About RETAINER</h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Revolutionizing employee retention through the power of artificial intelligence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is RETAINER?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                RETAINER is a cutting-edge machine learning application designed to help HR professionals 
                and business leaders predict employee attrition before it happens. By analyzing key factors 
                that influence employee satisfaction and retention, our platform provides actionable insights 
                to improve workplace culture and reduce turnover costs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Built with advanced algorithms and trained on comprehensive employee data, RETAINER transforms 
                complex HR analytics into simple, understandable predictions that drive better decision-making.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <div className="text-center">
                <Brain size={80} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Analytics</h3>
                <p className="text-gray-600">
                  Leveraging machine learning to turn employee data into predictive insights
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Brain className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Machine Learning</h3>
              <p className="text-gray-600">
                Advanced ML algorithms analyze multiple data points to predict retention likelihood
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-teal-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-teal-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Analytics</h3>
              <p className="text-gray-600">
                Comprehensive analysis of employee satisfaction, compensation, and work environment
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">HR Insights</h3>
              <p className="text-gray-600">
                Actionable recommendations to improve employee engagement and retention rates
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600">
                Secure data handling with privacy protection and confidentiality at the core
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To empower organizations with predictive insights that foster better employee relationships, 
              reduce turnover costs, and create more engaging workplace environments. We believe that by 
              understanding the factors that drive employee satisfaction, companies can build stronger, 
              more resilient teams that drive sustainable growth.
            </p>
          </div>

          {/* Technology Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Collection</h3>
                  <p className="text-gray-600">
                    Input comprehensive employee information including demographics, job details, 
                    satisfaction ratings, and compensation data
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analysis</h3>
                  <p className="text-gray-600">
                    Our machine learning model processes the data, identifying patterns and 
                    correlations that influence employee retention decisions
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Prediction & Insights</h3>
                  <p className="text-gray-600">
                    Receive clear predictions about retention risk along with actionable 
                    recommendations for improving employee satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;