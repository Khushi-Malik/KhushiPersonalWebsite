import React from 'react'
import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/island'
import Pegasus from '../models/pegasus'


const Home = () => {

    const [isRotating, setisRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)

    // const adjustPegasusForScreenSize = () => {
    //     let screenScale, screenPosition;
    //     let pegasusRotation= [0, Math.PI / 2, 0]

    //     if (window.innerWidth < 768) { 
    //         // Small screens (e.g., mobile devices)
    //         screenScale = [1.5, 1.5, 1.5],
    //         screenPosition= [-0, -1.5, 0]
    //     } else {
    //         screenScale = [3, 3, 3],
    //         screenPosition= [0, -4, -4]
    //     }
    //     return [screenScale, screenPosition, pegasusRotation]
    // }

    const adjustIslandForScreenSize = () => {
        let screenScale=null;
        let screenPosition=[0, -4, -25];
        let islandRotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) { 
            // Small screens (e.g., mobile devices)
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, islandRotation]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    
    const adjustPegasusForScreenSize = () => {
        let screenScale=null;
        let screenPosition= null;
        let pegasusRotation= [0, Math.PI / 2, 0]

        if (window.innerWidth < 768) { 
            // Small screens (e.g., mobile devices)
            screenScale = [0.003, 0.003, 0.003],
            screenPosition= [-0.5, 0.5, 0.5]
        } else {
            screenScale = [0.003, 0.003, 0.003],
            screenPosition= [-5, 2, 1]
        }
        return [screenScale, screenPosition, pegasusRotation]
    }

    const [pegasusPosition, pegasusScale, pegasusRotation] = adjustPegasusForScreenSize();

    return (
    <section className = 'w-full h-screen relative'>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center 
        justify-center'>
            POPUP
        </div>

        {/* ALL 3D STUFF */}
        <Canvas 
            className={`w-full h-screen bg-transparent' ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={ { near:  0.1, far: 1000 } }
        >   
            <Suspense fallback={<Loader />}>
                {/* 3D Lighting */}
                <directionalLight position={[1,1,1]} intensity={1.5}/> 
                <ambientLight  intensity={0.5}/>
                <pointLight />
                <spotLight />
                <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

                <Pegasus 
                    position={pegasusPosition}
                    scale={pegasusScale}
                    rotation={pegasusRotation}
                    isRotating={isRotating}
                    setisRotating={setisRotating}   
                />

                <Island 
                    position ={islandPosition}
                    scale={islandScale}
                    setCurrentStage={setCurrentStage}
                    rotation={islandRotation}
                    isRotating={isRotating}
                    setisRotating={setisRotating}
                />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home