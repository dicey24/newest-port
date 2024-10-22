import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    position: "Senior Full-Stack Developer",
    period: "2020 - Present",
    description: "Led development of scalable web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers."
  },
  {
    id: 2,
    company: "Control Systems Ltd.",
    position: "Control Engineer",
    period: "2018 - 2020",
    description: "Designed and implemented advanced control systems for industrial processes. Optimized system performance using machine learning algorithms."
  },
  // Add more experiences as needed
];

const WorkExperience: React.FC = () => {
  const [openExperience, setOpenExperience] = useState<number | null>(null);

  const toggleExperience = (id: number) => {
    setOpenExperience(openExperience === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-neon-blue">Work Experience</h1>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-gray-800 rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleExperience(exp.id)}
            >
              <div>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-gray-400">{exp.company}</p>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">{exp.period}</span>
                {openExperience === exp.id ? (
                  <ChevronUp className="h-5 w-5 text-neon-purple" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neon-purple" />
                )}
              </div>
            </div>
            {openExperience === exp.id && (
              <div className="p-4 bg-gray-700 animate-fade-in">
                <p>{exp.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;