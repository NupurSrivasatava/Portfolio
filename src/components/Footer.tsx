import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
            <span>Made with</span>
            <Heart size={16} className="text-red-400" />
            <span>and</span>
            <Code size={16} className="text-purple-400" />
            <span>by Mohd Kashif</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Mohd Kashif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;