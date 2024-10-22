import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';

interface Qualification {
  id: number;
  type: 'academic' | 'certification' | 'professional';
  title: string;
  institution: string;
  date: string;
  details: string;
}

const qualifications: Qualification[] = [
  {
    id: 1,
    type: 'academic',
    title: 'Bachelor of Science in Computer Engineering',
    institution: 'University of Technology',
    date: '2015 - 2019',
    details: 'Specialized in Control Systems and Software Engineering. Graduated with honors.'
  },
  {
    id: 2,
    type: 'certification',
    title: 'AWS Certified Solutions Architect',
    institution: 'Amazon Web Services',
    date: 'June 2020',
    details: 'Demonstrated expertise in designing distributed systems on AWS.'
  },
  {
    id: 3,
    type: 'professional',
    title: 'Advanced Control Systems Workshop',
    institution: 'Industrial Automation Institute',
    date: 'September 2021',
    details: 'Intensive workshop on implementing advanced control algorithms in industrial settings.'
  },
  // Add more qualifications as needed
];

const Qualifications: React.FC = () => {
  const [openQualification, setOpenQualification] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'academic' | 'certification' | 'professional'>('all');

  const toggleQualification = (id: number) => {
    setOpenQualification(openQualification === id ? null : id);
  };

  const filteredQualifications = qualifications.filter(q => filter === 'all' || q.type === filter);

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-neon-blue">Qualifications</h1>
      
      <div className="mb-8 flex justify-center space-x-4">
        <button 
          onClick={() => setFilter('all')} 
          className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-neon-blue text-black' : 'bg-gray-700 text-white'} transition-colors duration-300`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('academic')} 
          className={`px-4 py-2 rounded-full ${filter === 'academic' ? 'bg-neon-blue text-black' : 'bg-gray-700 text-white'} transition-colors duration-300`}
        >
          Academic
        </button>
        <button 
          onClick={() => setFilter('certification')} 
          className={`px-4 py-2 rounded-full ${filter === 'certification' ? 'bg-neon-blue text-black' : 'bg-gray-700 text-white'} transition-colors duration-300`}
        >
          Certifications
        </button>
        <button 
          onClick={() => setFilter('professional')} 
          className={`px-4 py-2 rounded-full ${filter === 'professional' ? 'bg-neon-blue text-black' : 'bg-gray-700 text-white'} transition-colors duration-300`}
        >
          Professional
        </button>
      </div>

      <div className="space-y-4">
        {filteredQualifications.map((qual) => (
          <div key={qual.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleQualification(qual.id)}
            >
              <div className="flex items-center">
                <Award className="h-6 w-6 mr-3 text-neon-purple" />
                <div>
                  <h3 className="text-xl font-semibold">{qual.title}</h3>
                  <p className="text-gray-400">{qual.institution}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">{qual.date}</span>
                {openQualification === qual.id ? (
                  <ChevronUp className="h-5 w-5 text-neon-purple" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neon-purple" />
                )}
              </div>
            </div>
            {openQualification === qual.id && (
              <div className="p-4 bg-gray-700 animate-fade-in">
                <p>{qual.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualifications;