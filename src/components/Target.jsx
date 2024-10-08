import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Target = (props) => {
    // This is created to get the reference of target model in case we want to play
    const targetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',)

    useGSAP(() => {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5, // moving model vertically by 0.5
        duration: 0.5,
        repeat: -1,
        yoyo: true, // for up and down effect
      })
    })

  return (
    <mesh {...props} ref={targetRef}>
        {/* Mesh contain a material and geometry but here primitive is acting as both */}
      <primitive object={scene} />
    </mesh>
  )
}

export default Target