import React from 'react'
import { socialLinks } from '../constants'

const Social = () => {
  return (
    <section>
         <div className="fixed bottom-6 right-4 flex flex-col gap-4 z-50">
        {socialLinks.map((social, index) => (
            <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:scale-110 transition-transform bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white/20"
            >
                <img src={social.iconUrl} alt={social.name} className="w-6 h-6" />
            </a>
        ))}
        </div>
    </section>
  )
}

export default Social