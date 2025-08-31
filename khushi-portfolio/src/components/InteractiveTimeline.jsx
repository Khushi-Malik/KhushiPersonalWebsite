import React, { useState, useEffect } from 'react';

const InteractiveTimeline = ({ experiences }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = () => {
      setExpandedItem(null);
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const toggleExpanded = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) setExpandedItem(index);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setExpandedItem(null);
  };

  return (

      <div className="mt-12 max-w-6xl mx-auto relative">
        {/* Timeline Line */}
        <div
          className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-blue-500 to-indigo-600 shadow-lg ${
            isMobile ? 'left-4' : 'left-1/2 transform -translate-x-1/2'
          }`}
        ></div>

        {experiences.map((experience, index) => (
          <div
            key={`experience-${index}`}
            className={`relative flex ${
              isMobile
                ? 'flex-col items-start mb-10 pl-12'
                : `items-center mb-16 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } md:flex-row`
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute z-10 ${
                isMobile
                  ? 'left-0 top-6'
                  : 'left-1/2 transform -translate-x-1/2'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full border-4 ${
                  expandedItem === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-white scale-110'
                    : 'bg-white border-gray-300'
                } shadow-md flex items-center justify-center transition-all duration-300`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    expandedItem === index
                      ? 'bg-white'
                      : 'bg-gradient-to-r from-blue-400 to-purple-500'
                  }`}
                ></div>
              </div>
            </div>

            {/* Card */}
            <button
              className={`group w-full ${
                isMobile
                  ? ''
                  : `md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`
              } text-left focus:outline-none`}
              onClick={() => toggleExpanded(index)}
              aria-expanded={expandedItem === index}
            >
              <div
                className={`relative bg-gradient-to-br ${
                  index % 3 === 0
                    ? 'from-purple-50 to-blue-50 border-purple-200 hover:from-purple-100 hover:to-blue-100'
                    : index % 3 === 1
                    ? 'from-blue-50 to-indigo-50 border-blue-200 hover:from-blue-100 hover:to-indigo-100'
                    : 'from-indigo-50 to-purple-50 border-indigo-200 hover:from-indigo-100 hover:to-purple-100'
                } ${isMobile ? 'p-4 rounded-xl' : 'p-6 rounded-2xl'} border-2 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3
                      className={`font-bold ${
                        isMobile
                          ? 'text-lg text-gray-800'
                          : 'text-xl text-gray-800 mb-2 group-hover:text-blue-700 transition-colors'
                      }`}
                    >
                      {experience.title}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {experience.company_name}
                    </p>
                  </div>
                  {experience.icon && (
                    <div
                      className={`ml-4 flex items-center justify-center ${
                        isMobile ? 'w-10 h-10' : 'w-12 h-12 bg-white rounded-full shadow-md'
                      }`}
                    >
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className={isMobile ? 'w-6 h-6' : 'w-8 h-8'}
                      />
                    </div>
                  )}
                </div>

                {/* Date & Arrow */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">
                    {experience.date}
                  </span>
                  {isMobile && (
                    <div
                      className={`transform transition-transform duration-300 ${
                        expandedItem === index ? 'rotate-180' : ''
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Expandable */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedItem === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-gray-200 pt-4">
                    {experience.points && (
                      <ul className="space-y-2">
                        {experience.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start text-gray-700"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
  );
};

export default InteractiveTimeline;
