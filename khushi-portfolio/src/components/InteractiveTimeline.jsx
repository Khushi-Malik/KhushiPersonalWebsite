import React, { useState, useEffect, useRef } from 'react';

function InteractiveTimeline(props) {
  const validExperiences = props.experiences || [];
  const [expandedItem, setExpandedItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [contentHeights, setContentHeights] = useState({});
  const contentRefs = useRef({});

  // Initialize mobile state safely
  useEffect(function() {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Measure content heights when items expand - more robust measurement
  useEffect(function() {
    const newHeights = {};
    validExperiences.forEach(function(_, index) {
      const contentEl = contentRefs.current[index];
      if (contentEl) {
        // Create a temporary clone to measure without affecting layout
        const clone = contentEl.cloneNode(true);
        clone.style.position = 'absolute';
        clone.style.visibility = 'hidden';
        clone.style.height = 'auto';
        clone.style.maxHeight = 'none';
        clone.style.width = contentEl.offsetWidth + 'px';
        clone.style.overflow = 'visible';
        
        document.body.appendChild(clone);
        newHeights[index] = Math.max(clone.scrollHeight + 20, 100); // Add padding + minimum
        document.body.removeChild(clone);
      }
    });
    setContentHeights(newHeights);
  }, [validExperiences, expandedItem, clickedItem]);

  // Rainbow color schemes for each experience
  const colorSchemes = [
    {
      gradient: 'to-blue-50 from-indigo-50',
      border: 'border-blue-200',
      hover: 'hover:to-blue-100 hover:from-indigo-100',
      accent: 'blue',
      dot: 'to-blue-500 from-indigo-600',
      dotInner: 'to-blue-400 from-indigo-500'
    },
    {
      gradient: 'to-cyan-50 from-blue-50',
      border: 'border-cyan-200',
      hover: 'hover:to-cyan-100 hover:from-blue-100',
      accent: 'cyan',
      dot: 'to-cyan-500 from-blue-600',
      dotInner: 'to-cyan-400 from-blue-500'
    },
    {
      gradient: 'to-green-50 from-emerald-50',
      border: 'border-green-200',
      hover: 'hover:to-green-100 hover:from-emerald-100',
      accent: 'green',
      dot: 'to-green-500 from-emerald-600',
      dotInner: 'to-green-400 from-emerald-500'
    },
    {
      gradient: 'to-yellow-50 from-lime-50',
      border: 'border-yellow-200',
      hover: 'hover:to-yellow-100 hover:from-lime-100',
      accent: 'yellow',
      dot: 'to-yellow-500 from-lime-600',
      dotInner: 'to-yellow-400 from-lime-500'
    },
    {
      gradient: 'to-orange-50 from-yellow-50',
      border: 'border-orange-200',
      hover: 'hover:to-orange-100 hover:from-yellow-100',
      accent: 'orange',
      dot: 'to-orange-500 from-yellow-600',
      dotInner: 'to-orange-400 from-yellow-500'
    },
    {
      gradient: 'to-red-50 from-pink-50',
      border: 'border-red-200',
      hover: 'hover:to-red-100 hover:from-pink-100',
      accent: 'red',
      dot: 'to-red-500 from-pink-600',
      dotInner: 'to-red-400 from-pink-500'
    }
  ];

  function getAccentColors(accent, isActive) {
    const colors = {
      purple: {
        text: isActive ? 'text-purple-600':'text-purple-700',
        bg: isActive ? 'bg-purple-50': 'bg-purple-100' ,
        ring: 'ring-purple-400',
        bullet: isActive ? 'bg-purple-500': 'bg-purple-600'
      },
      violet: {
        text: isActive ? 'text-violet-600':'text-violet-700',
        bg: isActive ? 'bg-violet-50':'bg-violet-100',
        ring: 'ring-violet-400',
        bullet: isActive ? 'bg-violet-500':'bg-violet-600'
      },
      blue: {
        text: isActive ? 'text-blue-600':'text-blue-700',
        bg: isActive ? 'bg-blue-50':'bg-blue-100',
        ring: 'ring-blue-400',
        bullet: isActive ? 'bg-blue-500':'bg-blue-600' 
      },
      cyan: {
        text: isActive ? 'text-cyan-600':'text-cyan-700',
        bg: isActive ? 'bg-cyan-50':'bg-cyan-100',
        ring: 'ring-cyan-400',
        bullet: isActive ? 'bg-cyan-500':'bg-cyan-600'
      },
      green: {
        text: isActive ? 'text-green-600':'text-green-700',
        bg: isActive ? 'bg-green-50':'bg-green-100',
        ring: 'ring-green-400',
        bullet: isActive ? 'bg-green-500':'bg-green-600'
      },
      yellow: {
        text: isActive ? 'text-yellow-600':'text-yellow-700',
        bg: isActive ? 'bg-yellow-50':'bg-yellow-100',
        ring: 'ring-yellow-400',
        bullet: isActive ? 'bg-yellow-500':'bg-yellow-600'
      },
      orange: {
        text: isActive ? 'text-orange-600':'text-orange-700',
        bg: isActive ? 'bg-orange-50':'bg-orange-100',
        ring: 'ring-orange-400',
        bullet: isActive ? 'bg-orange-500':'bg-orange-600'
      },
      red: {
        text: isActive ? 'text-red-600':'text-red-700',
        bg: isActive ?  'bg-red-50':'bg-red-100',
        ring: 'ring-red-400',
        bullet: isActive ? 'bg-red-500':'bg-red-600'
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
        const isExpanded = expandedItem === index || clickedItem === index;
        const contentHeight = contentHeights[index] || 0;
        
        return (
        <div
          key={`experience-${index}`}
          className={`relative flex ${
            isMobile
              ? 'flex-col items-start mb-10 pl-16'
              : `items-start mb-16 ${
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
                isExpanded
                  ? `bg-gradient-to-r ${colorScheme.dot} border-white scale-110`
                  : 'bg-white border-gray-300'
              } shadow-md flex items-center justify-center transition-all duration-300`}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  isExpanded
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
            } text-left focus:outline-none focus:ring-opacity-70 rounded-2xl`}
            onClick={function() { toggleExpanded(index); }}
            aria-expanded={isExpanded}
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
          : 'text-xl text-gray-800 mb-2'
      }`}
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
      className={`ml-4 flex items-center justify-center overflow-hidden ${
        isMobile 
          ? 'w-10 h-10 bg-white rounded-full shadow-md' 
          : 'w-12 h-12 bg-white rounded-full shadow-md'
      }`}
    >
      <img
        src={experience.icon}
        alt={experience.company_name || 'Company logo'}
        className="w-full h-full object-cover"
        onError={function(e) {
          e.target.style.display = 'none';
        }}
      />
    </div>
  )}
</div>
              {/* </div> */}

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
                      isExpanded ? 'rotate-180' : ''
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

              {/* Expandable Content with Dynamic Height - No Limits */}
              <div
                className="transition-all duration-700 ease-out"
                style={{
                  maxHeight: isExpanded ? `${Math.max(contentHeight, 500)}px` : '0px',
                  opacity: isExpanded ? 1 : 0,
                  overflow: isExpanded ? 'visible' : 'hidden'
                }}
              >
                <div 
                  ref={function(el) { contentRefs.current[index] = el; }}
                  className="border-t border-gray-200 pt-4 pb-2"
                  style={{ minHeight: 'auto' }}
                >
                  {experience.points && experience.points.length > 0 ? (
                    <ul className="space-y-4">
                      {experience.points.map(function(point, pointIndex) {
                        return (
                          <li
                            key={`point-${index}-${pointIndex}`}
                            className="flex items-start text-gray-700 leading-relaxed"
                          >
                            <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${accentColors.bullet}`}></div>
                            <span className="text-sm leading-loose break-words">
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