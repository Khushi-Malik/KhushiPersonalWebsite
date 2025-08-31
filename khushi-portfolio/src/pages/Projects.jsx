import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Award, Code, Zap, Brain } from 'lucide-react';
import { MyProjects, SchoolProjects } from '../constants';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI':
        return <Brain className="w-5 h-5" />;
      case 'Web':
        return <Code className="w-5 h-5" />;
      case 'Mobile':
      case 'Hardware':
      case 'Games':
        return <Zap className="w-5 h-5" />;
      case 'Systems':
      case 'Desktop':
      case 'Tools':
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getCategoryGradient = (category) => {
    switch (category) {
      case 'AI':
        return 'from-purple-400 to-pink-400';
      case 'Web':
        return 'from-indigo-400 to-blue-400';
      case 'Mobile':
        return 'from-blue-400 to-teal-400';
      case 'Hardware':
        return 'from-yellow-400 to-orange-400';
      case 'Systems':
        return 'from-gray-400 to-gray-500';
      case 'Desktop':
        return 'from-green-400 to-lime-400';
      case 'Games':
        return 'from-red-400 to-pink-400';
      case 'Tools':
        return 'from-blue-400 to-cyan-400';
      default:
        return 'from-slate-500 to-slate-700';
    }
  };

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-transform duration-300 ${
        isHovered ? 'scale-[1.02]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out forwards`,
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Gradient Header */}
      <div className={`h-32 bg-gradient-to-br ${getCategoryGradient(project.category)} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="p-2 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
            {getCategoryIcon(project.category)}
          </div>
          {project.isWinner && (
            <div className="flex items-center space-x-1 bg-[#ffe44b] bg-opacity-90 px-4 py-2 rounded-full">
              <Award className="w-4 h-4 text-yellow-800" />
              <span className="text-xs font-bold text-yellow-800">Winner</span>
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-4">
          <span className="text-white text-sm font-medium bg-black bg-opacity-30 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Background Patterns */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
        </div> */}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
            {project.name}
          </h3>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-all duration-200"
          >
            <Github className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span className="text-sm font-medium">Code</span>
          </a>
          <button className="flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            <ExternalLink className="w-4 h-4 text-gray-600 hover:text-gray-800 transition-transform hover:rotate-12" />
          </button>
        </div>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(
          project.category
        )} opacity-0 hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none`}
      ></div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <section className="max-container">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="head-text">
          <span> My Projects</span>
        </h1>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I have worked on several projects, both independently and as part of my coursework. Explore my portfolio below.
        </p>
        </div>
        <br />
        <p className="text-gray-700 font-semibold">
          More projects <span>ALWAYS</span> coming soon!
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-between max-w-md mx-auto mb-12">
        <button
          onClick={() => setActiveTab('personal')}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === 'personal' ? 'bg-[#6FE3F0] text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {/* Personal Projects ({MyProjects.length}) */}
          Personal Projects
        </button>
        <button
          onClick={() => setActiveTab('school')}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === 'school' ? 'bg-[#6FE3F0] text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {/* School Projects ({SchoolProjects.length}) */}
          School Projects
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(activeTab === 'personal' ? MyProjects : SchoolProjects).map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
        <p className="cta-text mb-4">
          Interested in collaborating? <br className="sm:block hidden" />
          I'm always open to discussing new projects and opportunities!
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default Projects;
