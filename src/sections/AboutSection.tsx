import React from 'react';

interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  experience: string;
  bio: string;
}

interface AboutSectionProps {
  personalInfo: PersonalInfo;
}

const AboutSection: React.FC<AboutSectionProps> = ({ personalInfo }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-start pl-4 lg:pl-8 xl:pl-12">
      <div className="bg-white/95 dark:bg-gray-800/95 rounded-xl p-6 max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in shadow-lg transform -skew-y-3 hover:skew-y-0 transition-transform duration-300">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
            <span className="font-semibold text-gray-600 dark:text-gray-300 text-sm">Name:</span>
            <span className="text-gray-900 dark:text-white text-sm">{personalInfo.name}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
            <span className="font-semibold text-gray-600 dark:text-gray-300 text-sm">Title:</span>
            <span className="text-gray-900 dark:text-white text-sm">{personalInfo.title}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
            <span className="font-semibold text-gray-600 dark:text-gray-300 text-sm">Location:</span>
            <span className="text-gray-900 dark:text-white text-sm">{personalInfo.location}</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2">
            <span className="font-semibold text-gray-600 dark:text-gray-300 text-sm">Experience:</span>
            <span className="text-gray-900 dark:text-white text-sm">{personalInfo.experience}</span>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{personalInfo.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
