import React from 'react'

const About = () => {

  const skills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", alt: "Swift" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg", alt: "LaTeX" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", alt: "Jupyter" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", alt: "NumPy" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", alt: "Pandas" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "Flask" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", alt: "Matplotlib" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", alt: "PyTorch" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", alt: "Arduino" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", alt: "Postman" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg", alt: "Xcode" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg", alt: "IntelliJ" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
]

  return (
    <section className='max-container'>

      <h1 className="head-text">
        🦋 Hello, I'm <span>Khushi!</span> 🦋
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am a Computer Science and Mathematics student at the University of Toronto.
          <br /> <br /> 
          I’m passionate about learning, problem-solving, and exploring technology through research and hands-on experiences. My interests include data science, algorithms, machine learning, software development, cybersecurity, and CS Education. 
          <br /> <br /> 
          I aspire to build impactful and reliable applications and AI models that make a difference in people's lives.
          </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-2 place-items-center">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group transition-transform hover:scale-110">
                <img src={skill.src} alt={skill.alt} width="40" height="40" className="drop-shadow-md" />
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

        <div className='mt-12 flex'>
          
        </div>
        
      </div>
     
    </section>
  )
}

export default About