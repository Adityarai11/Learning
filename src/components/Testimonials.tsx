import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../data';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  const startAutoplay = () => {
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
  };
  
  const stopAutoplay = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);
  
  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-800 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase text-red-500 font-bold tracking-widest mb-2">Testimonials</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Client Success Stories</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from clients who have achieved remarkable transformations through dedicated coaching and hard work.
          </p>
        </div>
        
        <div 
          className="max-w-4xl mx-auto relative min-h-[400px]"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="overflow-hidden rounded-lg relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ease-in-out absolute inset-0 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 z-20' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full z-10' 
                      : 'opacity-0 translate-x-full z-10'
                }`}
              >
                <div className="bg-zinc-900 p-8 md:p-10 rounded-lg shadow-xl">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto border-4 border-red-500">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-300 italic mb-6 text-lg">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <h4 className="text-white font-bold text-xl">{testimonial.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-red-500' : 'bg-gray-600'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;