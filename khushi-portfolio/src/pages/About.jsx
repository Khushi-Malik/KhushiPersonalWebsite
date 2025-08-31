import React from 'react';
import skills from '../assets/images/skills';
import { experiences } from '../constants';
import InteractiveTimeline from '../components/InteractiveTimeline';

const About = () => {
  return (
    <section className='max-container'>
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
        <h3 className='subhead-text'>Work Experience</h3>
        {/* <div className='mt-12'> */}
          <div className="relative">
            <InteractiveTimeline experiences={experiences} />
          </div>
        </div>
      {/* </div> */}

    </section>
  );
};

export default About;



//  {/* Timeline line */}
//             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>
            
//               {experiences.map((experience, index) => (
//               <div key={index} className="relative flex items-start mb-12 last:mb-0">
//                 {/* Timeline dot/icon */}
//                 <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full border-4 border-blue-400 flex items-center justify-center shadow-lg z-10">
//                   {experience.icon ? (
//                     <img
//                       src={experience.icon}
//                       alt={experience.company_name}
//                       className="w-8 h-8 object-contain"
//                     />
//                   ) : (
//                     <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="ml-8 flex-1">
//                   <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-1">
//                           {experience.title}
//                         </h3>
//                         <p className="text-blue-600 font-medium">
//                           {experience.company_name}
//                         </p>
//                       </div>
//                       <span className="text-sm text-gray-500 mt-2 sm:mt-0 px-3 py-1 bg-gray-100 rounded-full">
//                         {experience.date}
//                       </span>
//                     </div>

//                     {experience.points && (
//                       <ul className="space-y-2">
//                         {experience.points.map((point, pointIndex) => (
//                           <li key={pointIndex} className="text-gray-600 flex items-start">
//                             <span className="text-blue-400 mr-3 mt-1.5 flex-shrink-0">•</span>
//                             <span className="text-sm leading-relaxed">{point}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}

