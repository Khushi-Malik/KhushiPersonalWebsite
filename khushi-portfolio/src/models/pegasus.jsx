import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import pegasusScene from '../assets/3d/pegasus.glb'
import { a } from '@react-spring/three'


const Pegasus = ({ isRotating, ...props }) => {
    const ref = useRef()
    const { nodes, materials, animations } = useGLTF(pegasusScene)

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
