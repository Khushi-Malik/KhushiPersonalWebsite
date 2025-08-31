import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Curious mind, open inbox. <br className='sm:block hidden'/> 
        Let’s create something amazing!</p>
        <Link to='/contact' className='btn'>Contact</Link>
    </section>
  )
}

export default CTA