import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Code, Database, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-particles-4788-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div 
          className="z-10 text-center p-4"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 1 - scrollY / 500,
          }}
        >
          <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">
            Mohammed
          </h1>
          <h2 className="text-3xl mb-6 animate-fade-in-up">
            <span className="hover:text-neon-blue transition-colors duration-300 cursor-pointer">Full-Stack Developer</span> & <span className="hover:text-neon-purple transition-colors duration-300 cursor-pointer">Control Engineer</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl animate-fade-in">
            Crafting innovative solutions at the intersection of software and control systems
          </p>
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
          >
            Discover My Work
          </Link>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-neon-blue">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <video
              ref={videoRef}
              className="w-full rounded-lg shadow-lg"
              onClick={handleVideoPlay}
              style={{ cursor: 'pointer' }}
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center mt-2 text-sm text-gray-400">Click to {isVideoPlaying ? 'pause' : 'play'} video</p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              As a passionate Full-Stack Developer and Control Engineer, I bring a unique blend of software expertise and systems thinking to every project.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <Code className="h-12 w-12 text-neon-blue mb-2 mx-auto" />
                <p>Web Development</p>
              </div>
              <div className="text-center">
                <Database className="h-12 w-12 text-neon-purple mb-2 mx-auto" />
                <p>Database Design</p>
              </div>
              <div className="text-center">
                <Cpu className="h-12 w-12 text-green-400 mb-2 mx-auto" />
                <p>Control Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;