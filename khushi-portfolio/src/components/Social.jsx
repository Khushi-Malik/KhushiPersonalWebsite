import React from 'react'
import { socialLinks } from '../constants'

const Social = () => {
  return (
    <section>
        <div className="fixed left-4 bottom-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        {socialLinks.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src={social.iconUrl} alt={social.name} className="w-6 h-6" />
            </a>
        ))}
        </div>
    </section>
  )
}

export default Social