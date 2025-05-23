import React from 'react';
import { Award, Clock, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative">
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img src="/profile.jpg" alt="Professional Trainer" className="w-full h-auto" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
            <div className="absolute top-10 -left-5 w-1/2 h-full bg-red-600/20 -z-10 rounded-lg"></div>
            <div className="absolute -bottom-5 -right-5 w-3/4 h-1/2 border-2 border-red-600/50 -z-10 rounded-lg"></div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-sm uppercase text-red-500 font-bold tracking-widest mb-2">About Me</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Professional Body Transformation Coach</h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              With over 10 years of dedicated experience as a competitive athlete and fitness coach, I’ve trained and mentored individuals to unlock peak physical performance through proven, science-backed training systems. Whether it's preparing for the next competition or elevating athletic potential, my approach blends research-driven programming with real-world athletic discipline to deliver measurable results and long-term success.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-red-600/20 p-3 rounded-full">
                  <Award className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Certified Pro</h4>
                  <p className="text-gray-400 text-sm">IFBB Professional</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-red-600/20 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Experience</h4>
                  <p className="text-gray-400 text-sm">10+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-red-600/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Clients</h4>
                  <p className="text-gray-400 text-sm">500+ Transformed</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-red-600/20 p-3 rounded-full">
                  <Target className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Success Rate</h4>
                  <p className="text-gray-400 text-sm">98% Client Satisfaction</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors duration-300 font-bold uppercase tracking-wider"
            >
              Work With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;