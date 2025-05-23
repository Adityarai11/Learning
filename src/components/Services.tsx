import React from 'react';
import { Dumbbell, Trophy, Apple, Monitor, Check } from 'lucide-react';
import { services } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  dumbbell: <Dumbbell className="h-8 w-8 text-red-500" />,
  trophy: <Trophy className="h-8 w-8 text-red-500" />,
  apple: <Apple className="h-8 w-8 text-red-500" />,
  monitor: <Monitor className="h-8 w-8 text-red-500" />,
};

const subscriptionPlans = [
  {
    name: 'Basic',
    price: 49,
    period: 'month',
    features: [
      'Personalized workout plan',
      'Basic nutrition guidelines',
      'Weekly check-ins',
      'Email support',
    ],
    recommended: false,
  },
  {
    name: 'Pro',
    price: 99,
    period: 'month',
    features: [
      'Everything in Basic',
      'Custom meal plans',
      'Video form checks',
      'Priority support',
      'Progress tracking app',
      '24/7 chat support',
    ],
    recommended: true,
  },
  {
    name: 'Elite',
    price: 199,
    period: 'month',
    features: [
      'Everything in Pro',
      'Weekly 1-on-1 sessions',
      'Competition prep guidance',
      'Direct phone access',
      'Supplement protocols',
      'Monthly progress review',
    ],
    recommended: false,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase text-red-500 font-bold tracking-widest mb-2">Services</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Expert Training Solutions</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive fitness and bodybuilding services tailored to your goals, whether you're a beginner or a competitive athlete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-zinc-900 rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className="bg-zinc-800 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors duration-300">
                {iconMap[service.icon]}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✓</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className="inline-block text-red-500 hover:text-white font-semibold transition-colors duration-300"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-6">Subscription Plans</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey. All plans include access to our mobile app and progress tracking tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-zinc-900 rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:-translate-y-2 ${
                plan.recommended ? 'border-2 border-red-500' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400 ml-2">/{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.recommended
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-zinc-800 hover:bg-red-600 text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;