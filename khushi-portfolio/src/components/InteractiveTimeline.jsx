import React, { useState, useEffect } from 'react';

function InteractiveTimeline(props) {
  const validExperiences = props.experiences || [];
  const [expandedItem, setExpandedItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize mobile state safely
  useEffect(function() {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Rainbow color schemes for each experience
  const colorSchemes = [
    {
      gradient: 'from-red-50 to-pink-50',
      border: 'border-red-200',
      hover: 'hover:from-red-100 hover:to-pink-100',
      accent: 'red',
      dot: 'from-red-500 to-pink-600',
      dotInner: 'from-red-400 to-pink-500'
    },
    {
      gradient: 'from-orange-50 to-yellow-50',
      border: 'border-orange-200',
      hover: 'hover:from-orange-100 hover:to-yellow-100',
      accent: 'orange',
      dot: 'from-orange-500 to-yellow-600',
      dotInner: 'from-orange-400 to-yellow-500'
    },
    {
      gradient: 'from-yellow-50 to-lime-50',
      border: 'border-yellow-200',
      hover: 'hover:from-yellow-100 hover:to-lime-100',
      accent: 'yellow',
      dot: 'from-yellow-500 to-lime-600',
      dotInner: 'from-yellow-400 to-lime-500'
    },
    {
      gradient: 'from-green-50 to-emerald-50',
      border: 'border-green-200',
      hover: 'hover:from-green-100 hover:to-emerald-100',
      accent: 'green',
      dot: 'from-green-500 to-emerald-600',
      dotInner: 'from-green-400 to-emerald-500'
    },
    {
      gradient: 'from-cyan-50 to-blue-50',
      border: 'border-cyan-200',
      hover: 'hover:from-cyan-100 hover:to-blue-100',
      accent: 'cyan',
      dot: 'from-cyan-500 to-blue-600',
      dotInner: 'from-cyan-400 to-blue-500'
    },
    {
      gradient: 'from-blue-50 to-indigo-50',
      border: 'border-blue-200',
      hover: 'hover:from-blue-100 hover:to-indigo-100',
      accent: 'blue',
      dot: 'from-blue-500 to-indigo-600',
      dotInner: 'from-blue-400 to-indigo-500'
    },
    {
      gradient: 'from-violet-50 to-purple-50',
      border: 'border-violet-200',
      hover: 'hover:from-violet-100 hover:to-purple-100',
      accent: 'violet',
      dot: 'from-violet-500 to-purple-600',
      dotInner: 'from-violet-400 to-purple-500'
    },
    {
      gradient: 'from-purple-50 to-pink-50',
      border: 'border-purple-200',
      hover: 'hover:from-purple-100 hover:to-pink-100',
      accent: 'purple',
      dot: 'from-purple-500 to-pink-600',
      dotInner: 'from-purple-400 to-pink-500'
    }
  ];

  function getAccentColors(accent, isActive) {
    const colors = {
      red: {
        text: isActive ? 'text-red-700' : 'text-red-600',
        bg: isActive ? 'bg-red-100' : 'bg-red-50',
        ring: 'ring-red-400',
        bullet: isActive ? 'bg-red-600' : 'bg-red-500'
      },
      orange: {
        text: isActive ? 'text-orange-700' : 'text-orange-600',
        bg: isActive ? 'bg-orange-100' : 'bg-orange-50',
        ring: 'ring-orange-400',
        bullet: isActive ? 'bg-orange-600' : 'bg-orange-500'
      },
      yellow: {
        text: isActive ? 'text-yellow-700' : 'text-yellow-600',
        bg: isActive ? 'bg-yellow-100' : 'bg-yellow-50',
        ring: 'ring-yellow-400',
        bullet: isActive ? 'bg-yellow-600' : 'bg-yellow-500'
      },
      green: {
        text: isActive ? 'text-green-700' : 'text-green-600',
        bg: isActive ? 'bg-green-100' : 'bg-green-50',
        ring: 'ring-green-400',
        bullet: isActive ? 'bg-green-600' : 'bg-green-500'
      },
      cyan: {
        text: isActive ? 'text-cyan-700' : 'text-cyan-600',
        bg: isActive ? 'bg-cyan-100' : 'bg-cyan-50',
        ring: 'ring-cyan-400',
        bullet: isActive ? 'bg-cyan-600' : 'bg-cyan-500'
      },
      blue: {
        text: isActive ? 'text-blue-700' : 'text-blue-600',
        bg: isActive ? 'bg-blue-100' : 'bg-blue-50',
        ring: 'ring-blue-400',
        bullet: isActive ? 'bg-blue-600' : 'bg-blue-500'
      },
      violet: {
        text: isActive ? 'text-violet-700' : 'text-violet-600',
        bg: isActive ? 'bg-violet-100' : 'bg-violet-50',
        ring: 'ring-violet-400',
        bullet: isActive ? 'bg-violet-600' : 'bg-violet-500'
      },
      purple: {
        text: isActive ? 'text-purple-700' : 'text-purple-600',
        bg: isActive ? 'bg-purple-100' : 'bg-purple-50',
        ring: 'ring-purple-400',
        bullet: isActive ? 'bg-purple-600' : 'bg-purple-500'
      }
    };
    return colors[accent] || colors.blue;
  }

  useEffect(function() {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleResize() {
      setExpandedItem(null);
      setClickedItem(null);
      setIsMobile(mediaQuery.matches);
    }

    // Set initial state
    handleResize();

    mediaQuery.addEventListener('change', handleResize);
    return function() {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  function toggleExpanded(index) {
    if (clickedItem === index) {
      // If clicking on the same item that's already clicked, close it
      setClickedItem(null);
      setExpandedItem(null);
    } else {
      // If clicking on a different item, open it and keep it open
      setClickedItem(index);
      setExpandedItem(index);
    }
  }

  function handleMouseEnter(index) {
    // Only show hover effect if no item is clicked and not on mobile
    if (!isMobile && clickedItem === null) {
      setExpandedItem(index);
    }
  }

  function handleMouseLeave() {
    // Only hide on mouse leave if no item is clicked and not on mobile
    if (!isMobile && clickedItem === null) {
      setExpandedItem(null);
    }
  }

  // Handle empty experiences array
  if (!validExperiences || validExperiences.length === 0) {
    return (
      <div className="mt-12 max-w-6xl mx-auto text-center p-8">
        <p className="text-gray-500">No experiences to display</p>
      </div>
    );
  }

  return (
    <div className="mt-12 max-w-6xl mx-auto relative px-4">
      {/* Timeline Line */}
      <div
        className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 via-orange-400 via-yellow-400 via-green-400 via-cyan-400 via-blue-400 via-violet-400 to-purple-400 shadow-lg ${
          isMobile ? 'left-8' : 'left-1/2 transform -translate-x-1/2'
        }`}
      ></div>

      {validExperiences.map(function(experience, index) {
        const colorScheme = colorSchemes[index % colorSchemes.length];
        const accentColors = getAccentColors(colorScheme.accent, clickedItem === index);
        
        return (
        <div
          key={`experience-${index}`}
          className={`relative flex ${
            isMobile
              ? 'flex-col items-start mb-10 pl-16'
              : `items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } md:flex-row`
          }`}
          onMouseEnter={function() { handleMouseEnter(index); }}
          onMouseLeave={handleMouseLeave}
        >
          {/* Timeline Dot */}
          <div
            className={`absolute z-10 ${
              isMobile
                ? 'left-4 top-6'
                : 'left-1/2 transform -translate-x-1/2'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full border-4 ${
                expandedItem === index || clickedItem === index
                  ? `bg-gradient-to-r ${colorScheme.dot} border-white scale-110`
                  : 'bg-white border-gray-300'
              } shadow-md flex items-center justify-center transition-all duration-300`}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  expandedItem === index || clickedItem === index
                    ? 'bg-white'
                    : `bg-gradient-to-r ${colorScheme.dotInner}`
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
            } text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl`}
            onClick={function() { toggleExpanded(index); }}
            aria-expanded={expandedItem === index || clickedItem === index}
            aria-label={`Toggle details for ${experience.title || 'experience'}`}
          >
            <div
              className={`relative bg-gradient-to-br ${colorScheme.gradient} ${colorScheme.border} ${colorScheme.hover} ${isMobile ? 'p-4 rounded-xl' : 'p-6 rounded-2xl'} border-2 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                clickedItem === index ? `ring-2 ${accentColors.ring} ring-opacity-50` : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3
                    className={`font-bold ${
                      isMobile
                        ? 'text-lg text-gray-800'
                        : `text-xl text-gray-800 mb-2 group-hover:${accentColors.text} transition-colors`
                    } ${clickedItem === index ? accentColors.text : ''}`}
                  >
                    {experience.title || 'Untitled Experience'}
                  </h3>
                  {experience.company_name && (
                    <p className={`font-semibold ${accentColors.text}`}>
                      {experience.company_name}
                    </p>
                  )}
                </div>
                {experience.icon && (
                  <div
                    className={`ml-4 flex items-center justify-center ${
                      isMobile ? 'w-10 h-10' : 'w-12 h-12 bg-white rounded-full shadow-md'
                    }`}
                  >
                    <img
                      src={experience.icon}
                      alt={experience.company_name || 'Company logo'}
                      className={isMobile ? 'w-6 h-6 object-contain' : 'w-8 h-8 object-contain'}
                      onError={function(e) {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Date & Arrow */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  clickedItem === index 
                    ? `${accentColors.text} ${accentColors.bg}` 
                    : 'text-gray-600 bg-gray-100'
                }`}>
                  {experience.date || 'Date not specified'}
                </span>
                {isMobile && (
                  <div
                    className={`transform transition-transform duration-300 ${
                      expandedItem === index || clickedItem === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 ${accentColors.text}`}
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

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedItem === index || clickedItem === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-gray-200 pt-4">
                  {experience.points && experience.points.length > 0 ? (
                    <ul className="space-y-2">
                      {experience.points.map(function(point, pointIndex) {
                        return (
                          <li
                            key={`point-${index}-${pointIndex}`}
                            className="flex items-start text-gray-700"
                          >
                            <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${accentColors.bullet}`}></div>
                            <span className="text-sm leading-relaxed">
                              {point}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-sm italic">No additional details available</p>
                  )}
                </div>
              </div>
            </div>
          </button>
        </div>
        );
      })}
    </div>
  );
}

export default InteractiveTimeline;