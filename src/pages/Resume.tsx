import React, { useState } from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

interface ResumeSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

const Resume: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const resumeSections: ResumeSection[] = [
    {
      id: 'experience',
      title: 'Work Experience',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Senior Full-Stack Developer</h3>
            <p className="text-gray-400">Tech Innovators Inc. | 2020 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Led development of scalable web applications using React and Node.js</li>
              <li>Implemented CI/CD pipelines and mentored junior developers</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Control Engineer</h3>
            <p className="text-gray-400">Control Systems Ltd. | 2018 - 2020</p>
            <ul className="list-disc list-inside mt-2">
              <li>Designed and implemented advanced control systems for industrial processes</li>
              <li>Optimized system performance using machine learning algorithms</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'education',
      title: 'Education',
      content: (
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Bachelor of Science in Computer Engineering</h3>
          <p className="text-gray-400">University of Technology | 2015 - 2019</p>
          <p className="mt-2">Specialized in Control Systems and Software Engineering. Graduated with honors.</p>
        </div>
      ),
    },
    {
      id: 'skills',
      title: 'Skills',
      content: (
        <div className="grid grid-cols-2 gap-4">
          {['JavaScript', 'React', 'Node.js', 'Python', 'Docker', 'AWS'].map((skill) => (
            <div key={skill} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{skill}</h3>
              <div className="mt-2 bg-gray-700 h-2 rounded-full">
                <div 
                  className="bg-neon-blue h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${Math.random() * 40 + 60}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-neon-blue">Resume</h1>
      
      <div className="mb-8 flex justify-center">
        <button className="bg-neon-purple hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center">
          <Download className="mr-2" />
          Download Full Resume
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 space-y-4">
          {resumeSections.map((section) => (
            <button
              key={section.id}
              className={`w-full text-left p-4 rounded-lg transition duration-300 ease-in-out ${
                activeSection === section.id ? 'bg-neon-blue text-black' : 'bg-gray-800 hover:bg-gray-700'
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              <div className="flex items-center">
                {section.id === 'experience' && <Briefcase className="mr-2" />}
                {section.id === 'education' && <GraduationCap className="mr-2" />}
                {section.id === 'skills' && <Award className="mr-2" />}
                {section.title}
              </div>
            </button>
          ))}
        </div>
        <div className="col-span-2">
          {activeSection ? (
            <div className="bg-gray-800 p-6 rounded-lg animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">{resumeSections.find(s => s.id === activeSection)?.title}</h2>
              {resumeSections.find(s => s.id === activeSection)?.content}
            </div>
          ) : (
            <div className="bg-gray-800 p-6 rounded-lg flex items-center justify-center h-full">
              <p className="text-xl text-gray-400">Select a section to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;