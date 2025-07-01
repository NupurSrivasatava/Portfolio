import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <span className="text-6xl font-bold text-white">NS</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Hi, I'm</span>
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Nupur Srivastava
          </span>
        </h1>

    

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-purple-400" />
            <span>Greater Noida</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-purple-400" />
            <span>+91-7518302004</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-purple-400" />
            <span>nupursrivastava2004@gmail.com</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/mohd-kashif-b402072b1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-800/50 rounded-full hover:bg-purple-600/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} className="text-white" />
          </a>
          <a
            href="mailto:mdkashif0704@gmail.com"
            className="p-4 bg-slate-800/50 rounded-full hover:bg-purple-600/20 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} className="text-white" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown size={24} className="text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;