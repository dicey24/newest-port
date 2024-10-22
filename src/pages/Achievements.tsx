import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: 'award' | 'star' | 'trophy';
  color: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Best Innovative Solution Award",
    description: "Received for developing an AI-powered predictive maintenance system that reduced downtime by 30%.",
    icon: 'trophy',
    color: 'text-yellow-400'
  },
  {
    id: 2,
    title: "Top Performer of the Year",
    description: "Recognized for exceptional performance and contributions to team success.",
    icon: 'star',
    color: 'text-blue-400'
  },
  {
    id: 3,
    title: "Patent for Energy Optimization Algorithm",
    description: "Granted a patent for a novel algorithm that optimizes energy consumption in smart buildings.",
    icon: 'award',
    color: 'text-green-400'
  },
  // Add more achievements as needed
];

const Achievements: React.FC = () => {
  const getIcon = (icon: string, color: string) => {
    switch (icon) {
      case 'award':
        return <Award className={`h-12 w-12 ${color}`} />;
      case 'star':
        return <Star className={`h-12 w-12 ${color}`} />;
      case 'trophy':
        return <Trophy className={`h-12 w-12 ${color}`} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-neon-blue">Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              {getIcon(achievement.icon, achievement.color)}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{achievement.title}</h3>
            <p className="text-gray-400 text-center">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;