import React from 'react';
import { Dumbbell, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#hero" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold uppercase tracking-wider">TrainWith KR</span>
            </a>
            <p className="text-gray-400 mt-4 max-w-md">
              Professional bodybuilding coaching and transformation services. Achieve your dream physique with science-based training and nutrition.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-bold text-lg mb-4">Quick Links</h5>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Transformations', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-4">Services</h5>
              <ul className="space-y-2">
                {['Personal Training', 'Competition Prep', 'Nutrition Planning', 'Online Coaching'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#services" 
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h5 className="font-bold text-lg mb-4">Contact</h5>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">INDIA</span>
                  <span className="block">BIHAR</span>
                </li>
                <li className="text-gray-400">
                  <span className="block">Phone: (+91) 7827501846 </span>
                </li>
                <li className="text-gray-400">
                  <span className="block">Email: trainwithkr@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TrainWith KR. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-zinc-900 hover:bg-red-600 p-3 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;