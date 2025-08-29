import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import pegasusScene from '../assets/3d/pegasus.glb'
import { useFrame } from '@react-three/fiber'
import { a } from '@react-spring/three'
import { MathUtils } from 'three'


const Pegasus = ( {isRotating, ...props} ) => { // removed isRotating 
    const ref = useRef()
    const { nodes, materials, animations } = useGLTF(pegasusScene)
    // const velocity = useRef({ x: 0.01, z: 0.01 })

    useEffect(() => {
        if (materials.Pegasus) {
            materials.Pegasus.depthWrite = true
            materials.Pegasus.depthTest = true
            materials.Pegasus.transparent = false
        }
    }, [materials])
    const { actions, names } = useAnimations(animations, ref)

    // Optional: Play an animation on mount
    useEffect(() => {
        if (actions && names.length > 0) {
        actions[names[0]]?.play()
        }
    }, [actions, names])

    // useFrame(({ clock, camera }) => {
    // // useFrame((delta) => {
    //     // ref.current.rotation.y += delta * 0.5 // to make it move around
    //     // ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2; // to make it float up and down

    //     if (ref.current.position.x > camera.position.x + 1 ) {
    //         ref.current.rotation.y = Math.PI/2; // Face left
    //     } else if (ref.current.position.x < camera.position.x - 1) {
    //         ref.current.rotation.y = 3*Math.PI/2; // Face right
    //     }
        
    //     if (ref.current.rotation.y == 0){
    //         ref.current.position.x -= 0.01
    //         ref.current.position.z += 0.01
    //     } else {
    //         ref.current.position.x += 0.01
    //         ref.current.position.z += 0.01
    //     }
    // })

    // useFrame(( { camera } ) => {
    //     if (!ref.current.userData.dirX) ref.current.userData.dirX = 1
    //     if (!ref.current.userData.dirZ) ref.current.userData.dirZ = 1

    //     const speed = 0.01
    //     const bounds = 3 // How far Pegasus can go from center

    //     // Move Pegasus
    //     ref.current.position.x += ref.current.userData.dirX * speed
    //     ref.current.position.z += ref.current.userData.dirZ * speed

    //     // Reverse at bounds (centered around scene origin)
    //     if (ref.current.position.x > camera.position.x + bounds || ref.current.position.x < camera.position.x - bounds) {
    //         ref.current.userData.dirX *= -1
    //     }
    //     if (ref.current.position.z > camera.position.z + bounds || ref.current.position.z < camera.position.z - bounds) {
    //         ref.current.userData.dirZ *= -1
    //     }

    //     // Flip based on direction
    //     ref.current.rotation.y = ref.current.userData.dirX > 0 ? Math.PI/2 : 3*Math.PI/2
    // })

    useFrame(({ camera }) => {
        if (!ref.current.userData.dirX) ref.current.userData.dirX = 1
        if (!ref.current.userData.dirZ) ref.current.userData.dirZ = 1

        const speed = 0.01
        const bounds = 3
        const turnSpeed = 0.05 // lower = smoother turn

        // Move Pegasus
        ref.current.position.x += ref.current.userData.dirX * speed
        ref.current.position.z += ref.current.userData.dirZ * speed

        // Reverse direction when hitting bounds
        if (ref.current.position.x > camera.position.x + bounds || ref.current.position.x < camera.position.x - bounds) {
            ref.current.userData.dirX *= -1
        }
        if (ref.current.position.z > camera.position.z + bounds || ref.current.position.z < camera.position.z - bounds) {
            ref.current.userData.dirZ *= -1
        }

        // Calculate target rotation based on direction
        const targetAngle = Math.atan2(ref.current.userData.dirX, ref.current.userData.dirZ)

        // Smoothly rotate toward target angle
        ref.current.rotation.y = MathUtils.lerp(ref.current.rotation.y, targetAngle, turnSpeed)
    })


    
    return (
        <a.group ref={ref} {...props}>
        <group name="Sketchfab_Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.154}>
            <group
                name="5a1e057c90f74220bbff245d723ae16ffbx"
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
            >
                <group name="Object_2">
                <group name="RootNode">
                    <group name="RetopoGroup1" />
                    <group name="metarig" rotation={[-Math.PI / 2, 0, 0]} scale={54.164}>
                    <group name="Object_6">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                        name="Object_9"
                        geometry={nodes.Object_9.geometry}
                        material={materials.Pegasus}
                        skeleton={nodes.Object_9.skeleton}
                        />
                        <group name="Object_8" />
                    </group>
                    </group>
                </group>
                </group>
            </group>
            </group>
        </group>
        </a.group>
    )
}

export default Pegasus
