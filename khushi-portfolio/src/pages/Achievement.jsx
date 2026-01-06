// import React, { useState } from 'react'
// import { achievements } from '../constants'

// const Achievement = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // Color schemes matching your timeline component
//   const colorSchemes = [
//     { accent: 'blue', gradient: 'from-blue-50 to-indigo-50', border: 'border-blue-200' },
//     { accent: 'cyan', gradient: 'from-cyan-50 to-blue-50', border: 'border-cyan-200' },
//     { accent: 'green', gradient: 'from-green-50 to-emerald-50', border: 'border-green-200' },
//     { accent: 'yellow', gradient: 'from-yellow-50 to-lime-50', border: 'border-yellow-200' },
//     { accent: 'orange', gradient: 'from-orange-50 to-yellow-50', border: 'border-orange-200' },
//     { accent: 'red', gradient: 'from-red-50 to-pink-50', border: 'border-red-200' }
//   ];

//   const getAccentColor = (accent) => {
//     const colors = {
//       blue: 'text-blue-600',
//       cyan: 'text-cyan-600', 
//       green: 'text-green-600',
//       yellow: 'text-yellow-600',
//       orange: 'text-orange-600',
//       red: 'text-red-600'
//     };
//     return colors[accent] || colors.blue;
//   };

//   return (
//     <section className='max-container'>
//       <div className="max-w-7xl mx-auto">
//         {/* Header matching your timeline style */}
//         <div className="text-center mb-16">
//           <h1 className="head-text mb-8">
//             My Grateful Moments
//           </h1>
//           <div className='flex flex-col gap-3 text-slate-500 max-w-3xl mx-auto'>
//             <p className="text-medium leading-relaxed">
//               At the risk of sounding a little extra ;D <br/>
//               A highlight reel of achievements, awards, and milestones that I am truly grateful for along the way.
//             </p>
//           </div>
//         </div>

//         {/* Masonry/Grid Layout - Alternative to timeline */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
//           {achievements.map((achievement, index) => {
//             const colorScheme = colorSchemes[index % colorSchemes.length];
//             const accentColor = getAccentColor(colorScheme.accent);
//             const isHovered = hoveredCard === index;
            
//             return (
//               <div
//                 key={index}
//                 className={`relative group cursor-pointer transition-all duration-500 ${
//                   isHovered ? 'transform scale-105' : ''
//                 }`}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div className={`
//                   bg-gradient-to-br ${colorScheme.gradient} 
//                   border-2 ${colorScheme.border}
//                   rounded-2xl p-6 shadow-lg
//                   transition-all duration-500
//                   ${isHovered ? 'shadow-2xl' : 'hover:shadow-xl'}
//                 `}>
                  
//                   {/* Header with year badge */}
//                   <div className="flex justify-between items-start mb-4">
//                     <div className="flex-1">
//                       <h3 className={`text-xl font-bold text-gray-800 mb-2 transition-colors `}>
//                         {achievement.title}
//                       </h3>
//                       <p className={`font-semibold ${accentColor}`}>
//                         {achievement.institution}
//                       </p>
//                     </div>
//                     <span className="text-sm font-medium px-3 py-1 bg-white/70 text-gray-600 rounded-full">
//                       {achievement.year}
//                     </span>
//                   </div>

//                   {/* Details */}
//                   <p className="text-gray-700 text-sm leading-relaxed mb-4">
//                     {achievement.details}
//                   </p>

//                   {/* Footer with value and category */}
//                   <div className="flex justify-between items-center">
//                     <span className={`text-lg font-bold ${accentColor}`}>
//                       {achievement.value}
//                     </span>
//                     <span className="text-xs text-gray-500 capitalize px-2 py-1 bg-white/50 rounded">
//                       {achievement.category}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Achievement

import React from 'react'
import { achievements } from '../constants'

const Achievement = () => {
  // Subtle rainbow colors for left border
  const colors = [
    'border-l-red-400',
    'border-l-orange-400',
    'border-l-yellow-400',
    'border-l-green-400',
    'border-l-blue-400',
    'border-l-indigo-400',
    'border-l-purple-400',
    'border-l-pink-400'
  ];

  return (
    <section className='max-container'>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="head-text mb-4">
            Achievements
          </h1>
          <p className="text-gray-600">
            At the risk of sounding a little extra ;D — A highlight reel of achievements, awards, and milestones that I'm truly grateful for along the way.
          </p>
        </div>

        {/* List with rainbow left borders */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`border-l-4 ${colors[index % colors.length]} pl-6 py-4 hover:bg-gray-50 transition-colors`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-xl font-medium text-gray-900 mb-1">
                    {achievement.title}
                  </h2>
                  <p className="text-gray-600">
                    {achievement.institution}
                  </p>
                </div>
                <span className="text-sm text-gray-500">
                  {achievement.year}
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-2">
                {achievement.details}
              </p>

              <div className="flex gap-4 text-sm text-gray-500">
                {achievement.value && <span>{achievement.value}</span>}
                {achievement.category && (
                  <>
                    <span>·</span>
                    <span className="capitalize">{achievement.category}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievement