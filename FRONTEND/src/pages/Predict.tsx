import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PredictionForm } from '../components/PredictionForm';
import { PredictionResult } from '../components/PredictionResult';

export interface EmployeeData {
  age: number;
  department: string;
  jobRole: string;
  education: string;
  monthlyIncome: number;
  yearsAtCompany: number;
  overTime: string;
  maritalStatus: string;
  distanceFromHome: number;
  jobSatisfaction: number;
  workLifeBalance: number;
}

export interface PredictionResponse {
  willStay: boolean;
  confidence: number;
  riskFactors: string[];
  recommendations: string[];
}

export const Predict: React.FC = () => {
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePrediction = async (data: EmployeeData) => {
    setIsLoading(true);
    
    // Simulate API call with sophisticated prediction logic
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock prediction logic based on input data
    const riskScore = calculateRiskScore(data);
    const willStay = riskScore > 0.6;
    const confidence = Math.min(0.95, Math.max(0.65, riskScore + Math.random() * 0.1));
    
    const mockPrediction: PredictionResponse = {
      willStay,
      confidence,
      riskFactors: generateRiskFactors(data, riskScore),
      recommendations: generateRecommendations(data, willStay)
    };
    
    setPrediction(mockPrediction);
    setIsLoading(false);
  };

  const calculateRiskScore = (data: EmployeeData): number => {
    let score = 0.5; // Base score
    
    // Age factor
    if (data.age < 25 || data.age > 55) score -= 0.1;
    else score += 0.1;
    
    // Income factor
    if (data.monthlyIncome < 3000) score -= 0.15;
    else if (data.monthlyIncome > 8000) score += 0.15;
    
    // Years at company
    if (data.yearsAtCompany < 2) score -= 0.2;
    else if (data.yearsAtCompany > 5) score += 0.1;
    
    // Overtime
    if (data.overTime === 'Yes') score -= 0.1;
    
    // Job satisfaction
    score += (data.jobSatisfaction - 2.5) * 0.15;
    
    // Work-life balance
    score += (data.workLifeBalance - 2.5) * 0.12;
    
    // Distance from home
    if (data.distanceFromHome > 20) score -= 0.08;
    
    return Math.max(0.1, Math.min(0.9, score));
  };

  const generateRiskFactors = (data: EmployeeData, riskScore: number): string[] => {
    const factors: string[] = [];
    
    if (data.monthlyIncome < 3000) factors.push('Low monthly income');
    if (data.yearsAtCompany < 2) factors.push('Short tenure at company');
    if (data.overTime === 'Yes') factors.push('Frequent overtime work');
    if (data.jobSatisfaction < 3) factors.push('Low job satisfaction rating');
    if (data.workLifeBalance < 3) factors.push('Poor work-life balance');
    if (data.distanceFromHome > 20) factors.push('Long commute distance');
    if (data.age < 25) factors.push('Early career stage');
    
    return factors.slice(0, 3); // Return top 3 risk factors
  };

  const generateRecommendations = (data: EmployeeData, willStay: boolean): string[] => {
    const recommendations: string[] = [];
    
    if (!willStay) {
      if (data.monthlyIncome < 5000) recommendations.push('Consider salary review and compensation adjustment');
      if (data.jobSatisfaction < 3) recommendations.push('Implement regular feedback sessions and career development opportunities');
      if (data.workLifeBalance < 3) recommendations.push('Introduce flexible working arrangements and wellness programs');
      if (data.yearsAtCompany < 2) recommendations.push('Enhance onboarding process and mentorship programs');
      if (data.overTime === 'Yes') recommendations.push('Review workload distribution and consider additional staffing');
    } else {
      recommendations.push('Continue current engagement strategies');
      recommendations.push('Consider this employee for leadership development');
      recommendations.push('Use as a mentor for new hires');
    }
    
    return recommendations.slice(0, 3);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Employee Retention{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Prediction
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter employee information below to get AI-powered retention predictions and actionable insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PredictionForm onSubmit={handlePrediction} isLoading={isLoading} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PredictionResult prediction={prediction} isLoading={isLoading} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};