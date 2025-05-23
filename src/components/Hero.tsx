import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 700, 0.1);
      const scale = Math.max(1 + scrollY / 2000, 1);
      const translateY = scrollY * 0.5;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', 
        }}
        ref={heroRef}
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-in">
          <span className="inline-block transform transition-transform hover:scale-105 duration-300">TRANSFORM</span> 
          <span className="block text-red-500 transform transition-transform hover:scale-105 duration-300">YOUR PHYSIQUE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
          Expert coaching, personalized plans, and proven results for serious athletes and fitness enthusiasts.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
          <a 
            href="#services" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md transition-all duration-300 font-bold text-lg uppercase flex items-center gap-2 group"
          >
            Explore Services
            <ArrowRight className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a 
            href="#transformations" 
            className="bg-transparent border-2 border-white hover:border-red-500 text-white hover:text-red-500 px-8 py-4 rounded-md transition-all duration-300 font-bold text-lg uppercase"
          >
            View Results
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;