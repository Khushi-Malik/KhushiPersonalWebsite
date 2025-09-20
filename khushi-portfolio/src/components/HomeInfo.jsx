import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box rainbow-shimmer'>
    <p className='font-medium sm:text-xl text-center text-white'>{text}</p>
    <Link to={link} className="rainbow-shimmer-btn">
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain ml-4' />
    </Link>
  </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center rainbow-shimmer-title py-4 px-6 text-white mx-5 rounded-xl'>
            Hi, I'm Khushi! <br /> A Computer Science student at University of Toronto.
        </h1>
    ),
    2: (
        <InfoBox
            text="About Me :)"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="The Projects I have Worked On!"
            link="/projects"
            btnText="Learn More"
        />
    ),
    4: (
        <InfoBox
            text="I read and write a lot. Check out my blog!"
            link="/blog"
            btnText="Learn More"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo

// import React from 'react'
// import { Link } from 'react-router-dom'
// import { arrow } from '../assets/icons'

// const InfoBox = ({ text, link, btnText }) => (
//   <div className='info-box'>
//     <p className='font-medium sm:text-xl text-center'>{text}</p>
//     <Link to={link} className="neo-brutalism-white neo-btn">
//       {btnText}
//       <img src={arrow} className='w-4 h-4 object-contain' />
//     </Link>
//   </div>
// )

// const renderContent = {
//     1: (
//         <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-2 text-white mx-5'>
//     Hi, I'm Khushi! <br /> A Computer Science student at University of Toronto.
//         </h1>
//     ),
//     2: (
//         <InfoBox
//         text="First Something About Me :)"
//         link="/about"
//         btnText="Learn More"
//         />
//     ),
//     3: (
//         <InfoBox
//         text="The Latest Projects I have Worked On!"
//         link="/projects"
//         btnText="Learn More"
//         />
//     ),
//     4: (
//         <InfoBox
//         text="I always read a lot of articles on tech and design. Check out my blog!"
//         link="/blog"
//         btnText="Learn More"
//         />
//     )
// }



// const HomeInfo = ({ currentStage }) => {
//   return renderContent[currentStage] || null
// }

// export default HomeInfo