import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function WizardHat(props) {
  const { nodes, materials } = useGLTF('/models/wizard_hat/scene.gltf')
  const targetRef = useRef()

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <group {...props} dispose={null} ref={targetRef}>
      <group position={[-0.171, 0.062, 0]} rotation={[-1.122, -1.151, -1.101]} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials['Material.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials['Material.002']}
      />
    </group>
  )
}

useGLTF.preload('./models/wizard_hat/scene.gltf')