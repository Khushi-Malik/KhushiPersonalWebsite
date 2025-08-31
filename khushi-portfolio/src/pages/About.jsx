import React, { useState } from 'react';
import skills from '../assets/images/skills';
import { ResearchExperiences, WorkExperiences, VolunteeringExperiences } from '../constants';
import InteractiveTimeline from '../components/InteractiveTimeline';
import CTA from '../components/CTA';

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
            <InteractiveTimeline experiences={experienceData[activeTab].data} />
          </div>
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default About;