// WILL COME BACK TO THIS TO FIX LANDING/TAKEOFF ANIMATIONS LATER
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import pegasusScene from '../assets/3d/pegasus.glb'
import { useFrame } from '@react-three/fiber'
import { a } from '@react-spring/three'
import { MathUtils } from 'three'
import * as THREE from 'three'


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
        console.log(actions);
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

    // const hasLanded = useRef(false)
    // useFrame(({ camera, clock }) => {
    //     const pos = ref.current.position;
    //     const target = new THREE.Vector3(...landingTarget).add(new THREE.Vector3(0.125, 1, 1.25)); // Adjusted target to be above island
    //     const speed = 0.05;

    //     if (!hasLanded.current) {
    //         // Move toward target
    //         pos.lerp(target, speed);

    //         // Floating effect
    //         pos.y += Math.sin(clock.elapsedTime * 2) * 0.01;

    //         // **Scale compensation based on distance to camera**
    //         const distance = camera.position.distanceTo(pos);
    //         const scaleFactor = distance / 10; // Adjust divisor to taste
    //         ref.current.scale.set(scaleFactor, scaleFactor, scaleFactor);

    //         // Check if close enough to "land"
    //         if (pos.distanceTo(target) < 2 && !hasLanded.current) {
    //             hasLanded.current = true;

    //             // Reset scale to normal
    //             ref.current.scale.set(1, 1, 1);

    //             // Stop flying animation
    //             const flyAnim = names.find(n => n.toLowerCase().includes('fly'));
    //             if (flyAnim) actions[flyAnim]?.fadeOut(0.5);

    //             // walk animation
    //             const walkAnim = names.find(n => n.toLowerCase().includes('walk'));
    //             if (walkAnim) actions[walkAnim]?.reset().fadeIn(0.5).play();

    //             // idle animation
    //             const idleAnim = names.find(n => n.toLowerCase().includes('idle'));
    //             if (idleAnim) actions[idleAnim]?.reset().fadeIn(0.5).play();

    //             // Play landing animation
    //             const landAnim = names.find(n => n.toLowerCase().includes('landing'));
    //             if (landAnim) actions[landAnim]?.reset().fadeIn(0.5).play();
    //         }
    //     }
    // });

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
    
// const Pegasus = ({ landingTarget = [0, -3, -25], ...props }) => {
//   const ref = useRef()
//   const { nodes, materials, animations } = useGLTF(pegasusScene)
//   const { actions, names } = useAnimations(animations, ref)

//   const state = useRef("flying") // flying | landing | idle | walking | takeoff
//   const timer = useRef(0)
//   const landingProgress = useRef(0)
//   const currentAction = useRef(null)

//   // Helper function to find animation by partial name match
//   const findAnimation = React.useCallback(
//     (searchTerm) => {
//       return names.find(name =>
//         name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     },
//     [names]
//   )

//   // Helper function to smoothly transition between animations
//   const playAnimation = React.useCallback(
//     (animName, fadeInTime = 0.5, fadeOutTime = 0.5) => {
//       if (!animName || !actions[animName]) return

//       // Fade out current animation
//       if (currentAction.current && actions[currentAction.current]) {
//         actions[currentAction.current].fadeOut(fadeOutTime)
//       }

//       // Fade in new animation
//       actions[animName].reset().fadeIn(fadeInTime).play()
//       currentAction.current = animName
//     },
//     [actions]
//   )

//   useEffect(() => {
//     if (materials.Pegasus) {
//       materials.Pegasus.depthWrite = true
//       materials.Pegasus.depthTest = true
//       materials.Pegasus.transparent = false
//     }
//   }, [materials])

//   useEffect(() => {
//     // Start with flying animation
//     const flyAnim = findAnimation("Fly") 
//     if (flyAnim) {
//       playAnimation(flyAnim, 0.5)
//     }
//   }, [actions, names, findAnimation, playAnimation])

//   useFrame(({ clock }) => {
//     const t = clock.elapsedTime
//     const pos = ref.current.position
//     const deltaTime = clock.getDelta()
//     const orbitSpeed = 0.25
//     const radius = 3
//     const center = { x: 0, y: 0, z: -2 }
//     const target = new THREE.Vector3(...landingTarget)

//     timer.current += deltaTime

//     if (state.current === "flying") {
//       // Circular flight pattern
//       const x = center.x + Math.cos(t * orbitSpeed) * radius
//       const z = center.z + Math.sin(t * orbitSpeed) * radius
//       const y = center.y + Math.sin(t * 2) * 0.2
//       ref.current.position.set(x, y, z)

//       // Face movement direction
//       const nextX = center.x + Math.cos((t + 0.01) * orbitSpeed) * radius
//       const nextZ = center.z + Math.sin((t + 0.01) * orbitSpeed) * radius
//       const dirX = nextX - x
//       const dirZ = nextZ - z
//       const targetAngle = Math.atan2(dirX, dirZ)
//       ref.current.rotation.y = lerpAngle(ref.current.rotation.y, targetAngle, 0.1)
      
//       // Slight pitch variation
//       const pitchTarget = Math.sin(t * orbitSpeed) * 0.05
//       ref.current.rotation.x = MathUtils.lerp(ref.current.rotation.x, pitchTarget, 0.05)

//       // Transition to landing after 30 seconds
//       if (timer.current > 30) {
//         state.current = "landing"
//         timer.current = 0
//         landingProgress.current = 0
//       }
//     }

//     else if (state.current === "landing") {
//       // Smooth landing transition
//       landingProgress.current += 0.02
//       const smoothY = THREE.MathUtils.lerp(pos.y, target.y, landingProgress.current)
//       const smoothX = THREE.MathUtils.lerp(pos.x, target.x, 0.05)
//       const smoothZ = THREE.MathUtils.lerp(pos.z, target.z, 0.05)
//       pos.set(smoothX, smoothY, smoothZ)
      
//       // Landing pose
//       ref.current.rotation.x = MathUtils.lerp(ref.current.rotation.x, -0.3, 0.05)

//       if (landingProgress.current >= 1) {
//         state.current = "idle"
//         timer.current = 0
//         const idleAnim = findAnimation("Static Pose") 
//         if (idleAnim) {
//           playAnimation(idleAnim, 0.5)
//         }
//       }
//     }

//     else if (state.current === "idle") {
//       // Gentle breathing/idle movement
//       pos.y = target.y + Math.sin(t * 1.5) * 0.02

//       // Transition to walking after 30 seconds
//       if (timer.current > 30) {
//         state.current = "walking"
//         timer.current = 0
//         const walkAnim = findAnimation("HorseWalk")
//         if (walkAnim) {
//           playAnimation(walkAnim, 0.5)
//         }
//       }
//     }

//     else if (state.current === "walking") {
//       // Walking pattern
//       pos.x += Math.sin(t * 0.5) * 0.01
//       pos.z += Math.cos(t * 0.5) * 0.01

//       // Transition to takeoff after 30 seconds
//       if (timer.current > 30) {
//         state.current = "takeoff"
//         timer.current = 0
//         const flyAnim = findAnimation("Fly") 
//         if (flyAnim) {
//           playAnimation(flyAnim, 0.5)
//         }
//       }
//     }

//     else if (state.current === "takeoff") {
//       // Takeoff movement
//       const takeoffTarget = new THREE.Vector3(0, 3, -2)
//       pos.lerp(takeoffTarget, 0.05)
//       ref.current.rotation.x = MathUtils.lerp(ref.current.rotation.x, 0, 0.05)
      
//       if (pos.y > 2.8) {
//         state.current = "flying"
//         timer.current = 0
//       }
//     }
//   })

//   function lerpAngle(a, b, t) {
//     let diff = b - a
//     while (diff < -Math.PI) diff += Math.PI * 2
//     while (diff > Math.PI) diff -= Math.PI * 2
//     return a + diff * t
//   }
