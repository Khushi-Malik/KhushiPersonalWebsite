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

    useFrame(({ clock }) => {
        const t = clock.elapsedTime;
        const radius = 3; // smaller orbit so it stays on screen
        const orbitSpeed = 0.25; // faster orbit
        const center = { x: 0, y: 0, z: -2 }; // island center

        // Current position
        const x = center.x + Math.cos(t * orbitSpeed) * radius;
        const z = center.z + Math.sin(t * orbitSpeed) * radius;
        const y = center.y + Math.sin(t * 2) * 0.2; // slight up/down bobbing

        // Set position
        ref.current.position.set(x, y, z);

        // Calculate direction of motion (look where it's going)
        const nextX = center.x + Math.cos((t + 0.01) * orbitSpeed) * radius;
        const nextZ = center.z + Math.sin((t + 0.01) * orbitSpeed) * radius;

        const dirX = nextX - x;
        const dirZ = nextZ - z;

        function lerpAngle(a, b, t) {
            let diff = b - a;
            while (diff < -Math.PI) diff += Math.PI * 2;
            while (diff > Math.PI) diff -= Math.PI * 2;
            return a + diff * t;
        }

        const targetAngle = Math.atan2(dirX, dirZ); // face direction of movement
        ref.current.rotation.y = lerpAngle(ref.current.rotation.y, targetAngle, 0.1);

        // Slight pitch for realism
        const pitchTarget = Math.sin(t * orbitSpeed) * 0.05;
        ref.current.rotation.x = MathUtils.lerp(ref.current.rotation.x, pitchTarget, 0.05);
    });


    // // CORRECTED FLYING ANIMATION ABOVE -- THIS WAS OK TOO
    // useFrame(({ clock, camera }) => {
    //     if (!ref.current.userData.dirX) ref.current.userData.dirX = 1
    //     if (!ref.current.userData.dirZ) ref.current.userData.dirZ = 1

    //     const speed = 0.0075
    //     const bounds = 4.5
    //     const turnSpeed = 0.02 // lower = smoother turn

    //     // Move Pegasus
    //     ref.current.position.x += ref.current.userData.dirX * speed
    //     ref.current.position.z += ref.current.userData.dirZ * speed

    //     // Reverse direction when hitting bounds
    //     if (ref.current.position.x > camera.position.x + bounds || ref.current.position.x < camera.position.x - bounds) {
    //         ref.current.userData.dirX *= -1
    //     }
    //     if (ref.current.position.z > camera.position.z + bounds || ref.current.position.z < camera.position.z - bounds) {
    //         ref.current.userData.dirZ *= -1
    //     }

    //     // Calculate target rotation based on direction
    //     const targetAngle = Math.atan2(ref.current.userData.dirX, ref.current.userData.dirZ)

    //     // Smoothly rotate toward target angle
    //     ref.current.rotation.y = MathUtils.lerp(ref.current.rotation.y, targetAngle, turnSpeed)

    //     // //  Pitch effect (slight nose tilt when moving forward/back)
    //     const pitchTarget = ref.current.userData.dirZ > 0 ? 0.05 : -0.05
    //     ref.current.rotation.x = MathUtils.lerp(ref.current.rotation.x, pitchTarget, 0.05)

    //     //  Add floating effect for realism
    //     // const t = performance.now() * 0.001
    //     ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 1
    // })


    
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
