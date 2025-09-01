import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EmployeeData } from '../pages/Predict';

interface PredictionFormProps {
  onSubmit: (data: EmployeeData) => void;
  isLoading: boolean;
}

export const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<EmployeeData>({
    age: 30,
    department: '',
    jobRole: '',
    education: '',
    monthlyIncome: 5000,
    yearsAtCompany: 3,
    overTime: 'No',
    maritalStatus: '',
    distanceFromHome: 10,
    jobSatisfaction: 3,
    workLifeBalance: 3
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof EmployeeData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const departments = [
    'Sales', 'Research & Development', 'Human Resources', 'Marketing', 
    'Engineering', 'Finance', 'Operations', 'Customer Service'
  ];

  const jobRoles = [
    'Manager', 'Senior Developer', 'Sales Executive', 'Research Scientist',
    'HR Specialist', 'Marketing Manager', 'Data Analyst', 'Product Manager',
    'Software Engineer', 'Financial Analyst', 'Operations Manager'
  ];

  const educationLevels = [
    'High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Professional Certification'
  ];

  const maritalStatuses = ['Single', 'Married', 'Divorced', 'Widowed'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Employee Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age
            </label>
            <input
              type="number"
              min="18"
              max="65"
              value={formData.age}
              onChange={(e) => handleChange('age', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Income ($)
            </label>
            <input
              type="number"
              min="1000"
              max="50000"
              value={formData.monthlyIncome}
              onChange={(e) => handleChange('monthlyIncome', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
        </div>

        {/* Department and Job Role */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department
            </label>
            <select
              value={formData.department}
              onChange={(e) => handleChange('department', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Role
            </label>
            <select
              value={formData.jobRole}
              onChange={(e) => handleChange('jobRole', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Select Job Role</option>
              {jobRoles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Education and Marital Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Education Level
            </label>
            <select
              value={formData.education}
              onChange={(e) => handleChange('education', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Select Education</option>
              {educationLevels.map(edu => (
                <option key={edu} value={edu}>{edu}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Marital Status
            </label>
            <select
              value={formData.maritalStatus}
              onChange={(e) => handleChange('maritalStatus', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Select Status</option>
              {maritalStatuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Years and Distance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Years at Company
            </label>
            <input
              type="number"
              min="0"
              max="40"
              value={formData.yearsAtCompany}
              onChange={(e) => handleChange('yearsAtCompany', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Distance from Home (km)
            </label>
            <input
              type="number"
              min="1"
              max="50"
              value={formData.distanceFromHome}
              onChange={(e) => handleChange('distanceFromHome', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
        </div>

        {/* Overtime */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Works Overtime
          </label>
          <div className="flex space-x-4">
            {['Yes', 'No'].map(option => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="overtime"
                  value={option}
                  checked={formData.overTime === option}
                  onChange={(e) => handleChange('overTime', e.target.value)}
                  className="mr-2 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Scales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Satisfaction (1-4)
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map(rating => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => handleChange('jobSatisfaction', rating)}
                  className={`w-12 h-12 rounded-lg font-semibold transition-all duration-200 ${
                    formData.jobSatisfaction === rating
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Work-Life Balance (1-4)
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map(rating => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => handleChange('workLifeBalance', rating)}
                  className={`w-12 h-12 rounded-lg font-semibold transition-all duration-200 ${
                    formData.workLifeBalance === rating
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
            isLoading
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
              Analyzing...
            </div>
          ) : (
            'Predict Retention'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};