import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition duration-300">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mohammed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;