import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses machine learning to prioritize and categorize tasks.",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    liveLink: "https://example.com/task-manager",
    githubLink: "https://github.com/yourusername/task-manager"
  },
  {
    id: 2,
    title: "IoT Home Automation System",
    description: "A comprehensive home automation system that integrates various IoT devices for efficient energy management.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    liveLink: "https://example.com/home-automation",
    githubLink: "https://github.com/yourusername/home-automation"
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-neon-blue">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-neon-blue hover:text-neon-purple transition-colors duration-300">
                  <ExternalLink className="h-5 w-5 mr-1" />
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-neon-blue hover:text-neon-purple transition-colors duration-300">
                  <Github className="h-5 w-5 mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;