import React, { useState } from 'react'

const Achievement = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Your achievements data
  const achievements = [
    {
      title: "Dean's List Scholar",
      institution: "University of Toronto",
      year: "Winter 2024",
      details: "Academic excellence recognition for maintaining CGPA > 3.50 at the end of session in which the fifth credit has been passed.",
      category: "academic",
      // value: "Top 10%"
    },
    {
      title: "Dean's List Scholar",
      institution: "University of Toronto",
      year: "Winter 2025",
      details: "Academic excellence recognition for maintaining CGPA > 3.50 at the end of session in which the tenth credit has been passed.",
      category: "academic",
      // value: "Top 10%"
    },
    {
      title: "Dean's List Scholar",
      institution: "University of Toronto",
      year: "Summer 2024",
      details: "Academic excellence recognition for maintaining CGPA > 3.50 at the end of session in which the fifteenth credit has been passed.",
      category: "academic",
      // value: "Top 10%"
    },
    {
      title: "WINNER: Google Women Tech-makers & CGI Best Women Hack",
      institution: "GenAI Genesis- Canada's Largest AI Hackathon",
      year: "2025",
      details: "Awarded to the project that champions women in AI, fostering innovation that empowers and uplifts communities",
      category: "Hackathon", 
      value: "Winner"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      institution: "Amazon Web Services", 
      year: "September 2025",
      details: "Proficient in AWS Cloud services (EC2, S3, IAM, ELB, VPC) with foundational knowledge of cloud architecture, security, and deployment best practices.",
      category: "certification",
      value: "Foundational"
    },
    {
      title: "Research Presentation",
      institution: "International Computing Education Research (ICER) Conference",
      year: "2025",
      details: "Published in the International Computing Education Research (ICER) Conference, a leading venue in CS education, and presented findings to an international audience of researchers and educators at University of Virginia",
      category: "research",
      value: "Published"
    },
    {
      title: "Entrance Scholarship",
      institution: "University of Toronto",
      year: "2023", 
      details: "Merit-based financial award for academic performance",
      category: "scholarship",
      value: "$3,000"
    },
    {
      title: "JEE Advanced Qualified",
      institution: "JEE India",
      year: "2022",
      details: "Engineering Entrance Examination - Advanced level; Top 1.1% Nationally",
      category: "examination",
      // value: "AIR 17000"
    },
    {
      title: "JEE Main Qualified",
      institution: "JEE India",
      year: "2022",
      details: "Engineering Entrance Examination - Qualifier level",
      category: "examination",
      value: "96.7 Percentile"
    },
  ];

  // Color schemes matching your timeline component
  const colorSchemes = [
    { accent: 'blue', gradient: 'from-blue-50 to-indigo-50', border: 'border-blue-200' },
    { accent: 'cyan', gradient: 'from-cyan-50 to-blue-50', border: 'border-cyan-200' },
    { accent: 'green', gradient: 'from-green-50 to-emerald-50', border: 'border-green-200' },
    { accent: 'yellow', gradient: 'from-yellow-50 to-lime-50', border: 'border-yellow-200' },
    { accent: 'orange', gradient: 'from-orange-50 to-yellow-50', border: 'border-orange-200' },
    { accent: 'red', gradient: 'from-red-50 to-pink-50', border: 'border-red-200' }
  ];

  const getAccentColor = (accent) => {
    const colors = {
      blue: 'text-blue-600',
      cyan: 'text-cyan-600', 
      green: 'text-green-600',
      yellow: 'text-yellow-600',
      orange: 'text-orange-600',
      red: 'text-red-600'
    };
    return colors[accent] || colors.blue;
  };

  return (
    <section className='max-container'>
      <div className="max-w-7xl mx-auto">
        {/* Header matching your timeline style */}
        <div className="text-center mb-16">
          <h1 className="head-text mb-8">
            My Grateful Moments
          </h1>
          <div className='flex flex-col gap-3 text-slate-500 max-w-3xl mx-auto'>
            <p className="text-medium leading-relaxed">
              At the risk of sounding a little extra ;D <br/>
              A highlight reel of achievements, awards, and milestones that I am truly grateful for along the way.
            </p>
          </div>
        </div>

        {/* Masonry/Grid Layout - Alternative to timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {achievements.map((achievement, index) => {
            const colorScheme = colorSchemes[index % colorSchemes.length];
            const accentColor = getAccentColor(colorScheme.accent);
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isHovered ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  bg-gradient-to-br ${colorScheme.gradient} 
                  border-2 ${colorScheme.border}
                  rounded-2xl p-6 shadow-lg
                  transition-all duration-500
                  ${isHovered ? 'shadow-2xl' : 'hover:shadow-xl'}
                `}>
                  
                  {/* Header with year badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold text-gray-800 mb-2 transition-colors ${
                        isHovered ? accentColor : ''
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className={`font-semibold ${accentColor}`}>
                        {achievement.institution}
                      </p>
                    </div>
                    <span className="text-sm font-medium px-3 py-1 bg-white/70 text-gray-600 rounded-full">
                      {achievement.year}
                    </span>
                  </div>

                  {/* Details */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {achievement.details}
                  </p>

                  {/* Footer with value and category */}
                  <div className="flex justify-between items-center">
                    <span className={`text-lg font-bold ${accentColor}`}>
                      {achievement.value}
                    </span>
                    <span className="text-xs text-gray-500 capitalize px-2 py-1 bg-white/50 rounded">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievement