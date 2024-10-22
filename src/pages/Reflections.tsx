import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface Reflection {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

const reflections: Reflection[] = [
  {
    id: 1,
    title: "The Importance of Continuous Learning in Tech",
    excerpt: "Reflecting on how staying updated with the latest technologies has shaped my career...",
    content: "In the ever-evolving world of technology, continuous learning is not just a choice, but a necessity. Throughout my career, I've found that embracing new technologies and methodologies has been crucial to my growth as a developer and engineer. From learning new programming languages to adopting cutting-edge frameworks, each step in my learning journey has opened up new opportunities and perspectives..."
  },
  {
    id: 2,
    title: "Bridging the Gap Between Software and Control Engineering",
    excerpt: "Exploring the synergies between software development and control systems...",
    content: "As both a software developer and control engineer, I've had the unique opportunity to witness the convergence of these two fields. The principles of control theory often find surprising applications in software architecture, while modern software practices are revolutionizing how we approach control systems. This intersection has not only enriched my problem-solving skills but also allowed me to bring innovative solutions to complex challenges..."
  },
  // Add more reflections as needed
];

const Reflections: React.FC = () => {
  const [selectedReflection, setSelectedReflection] = useState<Reflection | null>(null);

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-neon-blue">Reflections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {reflections.map((reflection) => (
            <div
              key={reflection.id}
              className={`bg-gray-800 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                selectedReflection?.id === reflection.id ? 'ring-2 ring-neon-purple' : 'hover:bg-gray-700'
              }`}
              onClick={() => setSelectedReflection(reflection)}
            >
              <h3 className="text-xl font-semibold mb-2">{reflection.title}</h3>
              <p className="text-gray-400">{reflection.excerpt}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          {selectedReflection ? (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-semibold mb-4">{selectedReflection.title}</h2>
              <p className="text-gray-300 whitespace-pre-line">{selectedReflection.content}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <BookOpen className="h-16 w-16 mb-4" />
              <p>Select a reflection to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reflections;