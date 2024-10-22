import React, { useState, useEffect } from 'react';
import { Code, Server, Database, Cpu, Zap } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  proficiency: number;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { id: 1, name: 'React', category: 'frontend', proficiency: 90, icon: <Code /> },
  { id: 2, name: 'Node.js', category: 'backend', proficiency: 85, icon: <Server /> },
  { id: 3, name: 'PostgreSQL', category: 'database', proficiency: 80, icon: <Database /> },
  { id: 4, name: 'Docker', category: 'devops', proficiency: 75, icon: <Cpu /> },
  { id: 5, name: 'Machine Learning', category: 'other', proficiency: 70, icon: <Zap /> },
  // Add more skills as needed
];

const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'other'>('all');
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills.map(skill => skill.id));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredSkills = skills.filter(skill => filter === 'all' || skill.category === filter);

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-neon-blue">Skills</h1>
      
      <div className="mb-8 flex justify-center space-x-4 flex-wrap">
        {['all', 'frontend', 'backend', 'database', 'devops', 'other'].map((category) => (
          <button 
            key={category}
            onClick={() => setFilter(category as any)} 
            className={`px-4 py-2 rounded-full mb-2 ${filter === category ? 'bg-neon-blue text-black' : 'bg-gray-700 text-white'} transition-colors duration-300`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="mr-4 text-neon-purple">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-neon-blue bg-gray-700">
                    Proficiency
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-neon-blue">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                <div 
                  style={{ width: animatedSkills.includes(skill.id) ? `${skill.proficiency}%` : '0%' }} 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-neon-blue transition-all duration-1000 ease-out"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;