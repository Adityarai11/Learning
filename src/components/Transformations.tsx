import React, { useState } from 'react';
import { transformations } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Transformations: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="transformations" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase text-red-500 font-bold tracking-widest mb-2">Results</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Client Transformations</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real results from real clients. These transformations showcase what's possible with dedicated training, proper nutrition, and expert guidance.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <div className="relative">
              {transformations.map((item, index) => (
                <div 
                  key={item.id}
                  className={`transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/2">
                      <div className="relative h-80 md:h-[500px] overflow-hidden">
                        <img 
                          src={item.beforeImage}
                          alt={`${item.clientName} Before`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                          BEFORE
                        </div>
                      </div>
                    </div>
                    <div className="relative md:w-1/2">
                      <div className="relative h-80 md:h-[500px] overflow-hidden">
                        <img 
                          src={item.afterImage}
                          alt={`${item.clientName} After`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                          AFTER
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-xl font-bold text-white">{item.clientName}</h4>
                      <span className="text-red-500 font-semibold">{item.duration}</span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-colors duration-300 focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-colors duration-300 focus:outline-none"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-red-500' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;