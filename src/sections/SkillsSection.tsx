import React from 'react';

interface SkillsSectionProps {
  specialties: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ specialties }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-start pl-4 lg:pl-8 xl:pl-12">
      <div className="bg-white/95 dark:bg-gray-800/95 rounded-xl p-6 max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in shadow-lg transform -skew-y-3 hover:skew-y-0 transition-transform duration-300">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {specialties.map((skill, index) => (
            <div key={skill} className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-3 text-center animate-fade-in-delay skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="font-semibold text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
