import React, { useState } from 'react';
import skills from '../assets/images/skills';
import { ResearchExperiences, WorkExperiences, VolunteeringExperiences, Publications } from '../constants';
import InteractiveTimeline from '../components/InteractiveTimeline';
import CTA from '../components/CTA';

// Publications Component
const PublicationsSection = () => {
  // You can move this to your constants file later

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100">
      <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-2"/>
        Publications
      </h4>
      
      <div className="space-y-6">
        {Publications.map((pub, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              <div className="flex-1">
                {/* Publication Type Badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full mb-3">
                  {pub.type}
                </span>
                
                {/* Title */}
                <h5 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                  {pub.title}
                </h5>
                
                {/* Authors */}
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Authors:</strong> {pub.authors}
                </p>
                
                {/* Venue and Year */}
                <p className="text-sm text-blue-600 mb-3">
                  <strong>{pub.venue}</strong> ({pub.year})
                </p>
                
                {/* Abstract */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {pub.abstract}
                </p>
                
                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Read Paper
                  </a>
                  
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      DOI: {pub.doi}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {Publications.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">No publications available at this time.</p>
        </div>
      )}
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