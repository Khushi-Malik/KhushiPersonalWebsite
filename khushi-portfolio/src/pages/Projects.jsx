import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { MyProjects, SchoolProjects } from '../constants';

const ProjectCard = ({ project, index }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI':
        return 'border-purple-400';
      case 'Web':
        return 'border-blue-400';
      case 'Mobile':
        return 'border-teal-400';
      case 'Hardware':
        return 'border-orange-400';
      case 'Systems':
        return 'border-gray-400';
      case 'Desktop':
        return 'border-green-400';
      case 'Games':
        return 'border-red-400';
      case 'Tools':
        return 'border-cyan-400';
      default:
        return 'border-gray-400';
    }
  };

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'AI':
        return 'bg-purple-100 text-purple-700';
      case 'Web':
        return 'bg-blue-100 text-blue-700';
      case 'Mobile':
        return 'bg-teal-100 text-teal-700';
      case 'Hardware':
        return 'bg-orange-100 text-orange-700';
      case 'Systems':
        return 'bg-gray-100 text-gray-700';
      case 'Desktop':
        return 'bg-green-100 text-green-700';
      case 'Games':
        return 'bg-red-100 text-red-700';
      case 'Tools':
        return 'bg-cyan-100 text-cyan-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className={`bg-white border-l-4 ${getCategoryColor(project.category)} border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200`}>
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {project.name}
            </h3>
            {project.isWinner && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                🏆
              </span>
            )}
          </div>
          <span className={`text-sm font-medium px-2 py-1 rounded ${getCategoryBadge(project.category)}`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.slice(0, 4).map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-medium"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="text-xs text-gray-400">
            +{project.tags.length - 4} more
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800 transition-colors"
        >
          <Github className="w-4 h-4" />
          View Code
        </a>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <section className="max-container">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="head-text mb-6">
          My Projects
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            I have worked on several projects, both independently and as part of my coursework. 
            Explore my portfolio below.
          </p>
          <p className="text-gray-700 font-medium">
            More projects always coming soon!
          </p>
        </div>
      </div>

      {/* Simple Tabs */}
      <div className="flex gap-8 mb-12 border-b border-gray-200 justify-center">
        <button
          onClick={() => setActiveTab('personal')}
          className={`pb-3 font-medium transition-colors ${
              activeTab === 'personal' 
                  ? 'text-gray-900 border-b-2 border-gray-900' 
                  : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          Personal Projects
        </button>
        <button
          onClick={() => setActiveTab('school')}
          className={`pb-3 font-medium transition-colors ${
              activeTab === 'school' 
                  ? 'text-gray-900 border-b-2 border-gray-900' 
                  : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          School Projects
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(activeTab === 'personal' ? MyProjects : SchoolProjects).map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

    </section>
  );
};

export default Projects;