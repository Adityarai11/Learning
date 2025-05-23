import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  
  const calculateBMI = () => {
    if (height && weight) {
      // Convert height from cm to meters
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      // Determine BMI category
      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obesity');
      }
    }
  };
  
  const getColorClass = () => {
    if (!bmi) return 'bg-gray-700';
    if (bmi < 18.5) return 'bg-blue-600';
    if (bmi >= 18.5 && bmi < 25) return 'bg-green-600';
    if (bmi >= 25 && bmi < 30) return 'bg-yellow-600';
    return 'bg-red-600';
  };
  
  const getPercentage = () => {
    if (!bmi) return 0;
    if (bmi >= 40) return 100;
    return (bmi / 40) * 100;
  };

  return (
    <section id="calculator" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="h-8 w-8 text-red-500" />
                <h3 className="text-2xl font-bold text-white">BMI Calculator</h3>
              </div>
              
              <p className="text-gray-300 mb-8">
                Calculate your Body Mass Index to get a better understanding of your body composition and fitness level.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="height" className="block text-gray-300 mb-2">Height (cm)</label>
                  <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value ? parseFloat(e.target.value) : '')}
                    min="100"
                    max="250"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your height in cm"
                  />
                </div>
                
                <div>
                  <label htmlFor="weight" className="block text-gray-300 mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : '')}
                    min="30"
                    max="300"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your weight in kg"
                  />
                </div>
                
                <button
                  onClick={calculateBMI}
                  disabled={!height || !weight}
                  className={`w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors duration-300 font-bold ${
                    !height || !weight ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Calculate BMI
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 bg-zinc-900 flex flex-col items-center justify-center">
              {bmi !== null ? (
                <>
                  <div className="relative w-48 h-48 rounded-full border-8 border-gray-700 mb-8 flex items-center justify-center">
                    <div 
                      className="absolute inset-0 rounded-full overflow-hidden"
                      style={{ 
                        clipPath: `inset(${100 - getPercentage()}% 0 0 0)`,
                      }}
                    >
                      <div className={`w-full h-full ${getColorClass()}`}></div>
                    </div>
                    <div className="relative z-10 text-center">
                      <span className="block text-5xl font-bold text-white">{bmi}</span>
                      <span className="block text-gray-400 text-sm">BMI</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {category}
                    </h4>
                    <p className="text-gray-300">
                      {category === 'Underweight' && 'You may need to gain some weight. Consult with a nutrition expert.'}
                      {category === 'Normal weight' && 'Great job! You have a healthy weight.'}
                      {category === 'Overweight' && 'You may benefit from losing some weight. Consider our weight loss program.'}
                      {category === 'Obesity' && 'Health risks are higher. Our personal training can help you reach a healthier weight.'}
                    </p>
                    
                    <a 
                      href="#contact"
                      className="inline-block mt-6 text-red-500 hover:text-white font-semibold transition-colors duration-300"
                    >
                      Get a personalized plan →
                    </a>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <div className="w-48 h-48 rounded-full border-8 border-gray-700 mb-8 flex items-center justify-center mx-auto">
                    <span className="text-gray-500 text-4xl">?</span>
                  </div>
                  <p className="text-gray-300">
                    Enter your height and weight to calculate your BMI and get personalized fitness recommendations.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;