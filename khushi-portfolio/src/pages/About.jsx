import React, { useState } from 'react';
import skills from '../assets/images/skills';
import { ResearchExperiences, WorkExperiences, VolunteeringExperiences, Publications } from '../constants';
import InteractiveTimeline from '../components/InteractiveTimeline';
import CTA from '../components/CTA';

// Publications Component
const PublicationsSection = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-8 bg-gray-50">
      <h4 className="text-xl font-semibold text-gray-800 mb-6">
        Publications
      </h4>
      
      <div className="space-y-6">
        {Publications.map((pub, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-5">
            
            {/* Publication Type */}
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
              {pub.type}
            </div>
            
            {/* Title */}
            <h5 className="text-lg font-medium text-gray-900 mb-3">
              {pub.title}
            </h5>
            
            {/* Authors */}
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Authors:</span> {pub.authors}
            </p>
            
            {/* Venue and Year */}
            <p className="text-sm text-gray-600 mb-3">
              <span className="font-medium">{pub.venue}</span> ({pub.year})
            </p>
            
            {/* Abstract */}
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              {pub.abstract}
            </p>
            
            {/* Action Buttons - Simple but functional */}
            <div className="flex gap-3">
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 rounded transition-colors"
              >
                Read Paper
              </a>
              
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-600 hover:bg-gray-50 rounded transition-colors"
                >
                  DOI: {pub.doi}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState('work');

  const experienceData = {
    work: {
      title: 'Work',
      data: WorkExperiences,
      // icon: '💼'
    },
    research: {
      title: 'Research',
      data: ResearchExperiences,
      // icon: '🔬'
    },
    volunteering: {
      title: 'Volunteering',
      data: VolunteeringExperiences,
      // icon: '🤝'
    }
  };

  return (
    <section className='max-container text-center'>
      <h1 className="head-text">
        🦋 Hello, I'm <span>Khushi!</span> 🦋
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am a Computer Science and Mathematics student at the University of Toronto.
          <br /><br />
          I'm passionate about learning, problem-solving, and exploring technology through research and hands-on experiences. My interests include data science, algorithms, machine learning, software development, cybersecurity, and CS Education.
          <br /><br />
          I aspire to build impactful and reliable applications and AI models that make a difference in people's lives.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 md:gap-2 place-items-center w-full">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group transition-transform hover:scale-110">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 drop-shadow-md"
                />
                <span className="text-xs text-slate-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Experience</h3>
        
        {/* Tab Navigation */}
        <div className="flex justify-between mt-6 mb-8 border-b border-slate-200">
          {Object.entries(experienceData).map(([key, exp]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 px-4 py-2 text-sm font-medium text-center rounded-t-lg transition-colors duration-200 ${
                activeTab === key
                  ? 'bg-[#6FE3F0] text-slate-700 border-b-2 border-[#6FE3F0]'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
              }`}> {exp.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          <div className="transition-opacity duration-300 ease-in-out">
            {/* Publications Section - Only shows for Research tab */}
            {activeTab === 'research' && <PublicationsSection />}
            
            {/* Interactive Timeline */}
            <InteractiveTimeline experiences={experienceData[activeTab].data} />
          </div>
        </div>
      </div>

      {/* <CTA /> */}
    </section>
  );
};

export default About;