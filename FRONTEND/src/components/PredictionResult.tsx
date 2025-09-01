import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  LightBulbIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';
import { PredictionResponse } from '../pages/Predict';

interface PredictionResultProps {
  prediction: PredictionResponse | null;
  isLoading: boolean;
}

export const PredictionResult: React.FC<PredictionResultProps> = ({ prediction, isLoading }) => {
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Employee Data</h3>
          <p className="text-gray-600">Our AI is processing the information to generate predictions...</p>
        </div>
      </motion.div>
    );
  }

  if (!prediction) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-gray-200"
      >
        <div className="text-center">
          <ChartBarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Ready for Prediction</h3>
          <p className="text-gray-500">
            Fill out the employee information form to get AI-powered retention predictions and insights.
          </p>
        </div>
      </motion.div>
    );
  }

  const confidencePercentage = Math.round(prediction.confidence * 100);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="result"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* Main Prediction Card */}
        <div className={`rounded-2xl shadow-xl p-8 border-2 ${
          prediction.willStay 
            ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' 
            : 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200'
        }`}>
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
              prediction.willStay ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {prediction.willStay ? (
                <CheckCircleIcon className="h-10 w-10 text-green-600" />
              ) : (
                <ExclamationTriangleIcon className="h-10 w-10 text-red-600" />
              )}
            </div>
            
            <h3 className={`text-2xl font-bold mb-2 ${
              prediction.willStay ? 'text-green-800' : 'text-red-800'
            }`}>
              {prediction.willStay ? 'Likely to Stay' : 'At Risk of Leaving'}
            </h3>
            
            <p className="text-gray-600 mb-4">
              Prediction confidence: {confidencePercentage}%
            </p>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${confidencePercentage}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className={`h-3 rounded-full ${
                  prediction.willStay 
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                    : 'bg-gradient-to-r from-red-400 to-orange-500'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Risk Factors */}
        {prediction.riskFactors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <ExclamationTriangleIcon className="h-5 w-5 text-orange-500 mr-2" />
              Risk Factors
            </h4>
            <ul className="space-y-2">
              {prediction.riskFactors.map((factor, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center text-gray-700"
                >
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  {factor}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <LightBulbIcon className="h-5 w-5 text-blue-500 mr-2" />
            Recommendations
          </h4>
          <ul className="space-y-3">
            {prediction.recommendations.map((recommendation, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start text-gray-700 p-3 bg-blue-50 rounded-lg border border-blue-100"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span>{recommendation}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};