import React, { useRef, useState, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Pikachu from '../models/pikachu'
import Loader from '../components/Loader'
// import useAlert from '../assets/hooks/useAlert'
// import Alert from '../components/Alert'

const Contact = () => {

  console.log("Rendering Contact component")

  const formRef = useRef(null)

  const [form, setform] = useState({name: '', email: '', message: ''})
  const [loading, setloading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('Idle');

  // const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value})
  }


  const handleFocus = () => setCurrentAnimation('Walking');


  const handleBlur = () => setCurrentAnimation('Idle');

  
  const handleSubmit = (e) => {
    e.preventDefault()
    setloading(true)
    setCurrentAnimation('Dance');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Khushi",
        from_email: form.email,
        to_email: "khushimalik1910@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      setloading(false)
      alert("Thank you for reaching out to me! I will get back to you as soon as possible :)")
      // showAlert({ show: true, text: "Thank you for reaching out to me! I will get back to you as soon as possible :)", type: 'success' })
      setform({name: '', email: '', message: ''})

      // setTimeout(() => {
      //   hideAlert()
      // }, [3000]);
    }).catch((error) => {
      setloading(false)
      setCurrentAnimation('Idle');
      console.error(error)
      alert("Sorry! Looks like something went wrong. Can you please try again?")
      // showAlert({ show: true, text: "Sorry! Looks like something went wrong. Can you please try again?", type: 'danger' })
      // setTimeout(() => {
      //   hideAlert()
      // }, [3000]);
    })
  }

  return (
    <section className='relative flex lg:flex-row max-container'>
      {/* {alert.show && <Alert {...alert}/>} */}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input 
              type="text"
              name = "name"
              className='input'
              placeholder='Percy Jackson'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input 
              type="email"
              name = "email"
              className='input'
              placeholder='percy.jackson@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>
            Message
            <input 
              type="text"
              name = "message"
              className='input'
              placeholder='Bob says hello.'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}/>
          </label>

          <button type='submit' className='btn' disabled={loading} onFocus={handleFocus} onBlur={handleBlur}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[650px] h-[450px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov:75,
            near:0.1,
            far:1000

          }}
        >
          <directionalLight position={[1,1,1]} intensity={2.5}/> 
           <ambientLight  intensity={0.75}/>
           {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight skyColor="#F7EC21" groundColor="#FFFFFF" intensity={0.625}/>  

          <Suspense fallback={<Loader />}>
            <Pikachu 
            position={[0.5, -0.5, 0]}
            rotation={[0.125, 6, 0]}
            scale={[1.75,1.75,1.75]}
            currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact