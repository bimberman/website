import React from 'react';
import GithubIcon from '../assets/icons/GithubIcon';
import LinkedInIcon from '../assets/icons/LinkedInIcon';
import GmailIcon from '../assets/icons/GmailIcon';

const ContactSection: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="text-center text-white max-w-2xl mx-auto px-8 animate-fade-in">
        <h2 className="text-6xl font-bold mb-6 drop-shadow-lg">Let's Connect</h2>
        <p className="text-2xl mb-8 drop-shadow-md">Let's build something amazing together!</p>
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors group">
            <div className="text-red-400 group-hover:text-red-300 transition-colors">
              <GmailIcon className="w-8 h-8" />
            </div>
            <a href="mailto:bimberman@gmail.com" className="text-xl font-medium hover:text-blue-300 transition-colors">
              bimberman@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors group">
            <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
              <LinkedInIcon className="w-8 h-8" />
            </div>
            <a href="https://www.linkedin.com/in/ben-imberman/" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-blue-300 transition-colors">
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center justify-center space-x-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors group">
            <div className="text-gray-300 group-hover:text-white transition-colors">
              <GithubIcon className="w-8 h-8" />
            </div>
            <a href="https://github.com/bimberman" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-blue-300 transition-colors">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
