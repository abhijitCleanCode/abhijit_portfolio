import React, { useRef, useEffect } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useFrame } from '@react-three/fiber'

const WizardStaff = (props) => {
  const { nodes, materials } = useGLTF('/models/wizard_staff/scene.gltf')

  const targetRef = useRef()

  return (
    <group {...props} dispose={null} ref={targetRef}>
      <group rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[0.06, 0.06, 0.06]}>
        <group rotation={[Math.PI / 2, 0, 0]}>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wizard_Staff3_Wizard_Staff3_0.geometry}
            material={materials.Wizard_Staff3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_1.geometry}
            material={materials.Wizard_Staff3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_2.geometry}
            material={materials.Wizard_Staff3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_3.geometry}
            material={materials.Wizard_Staff3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wizard_Staff2_Wizard_Staff2_0.geometry}
            material={materials.Wizard_Staff2}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/wizard_staff/scene.gltf')

export default WizardStaff;