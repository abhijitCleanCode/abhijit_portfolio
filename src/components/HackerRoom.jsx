import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { exp } from 'three/webgpu'

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_1.geometry}
        material={materials.table_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_2.geometry}
        material={materials.computer_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_3.geometry}
        material={materials.server_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_4.geometry}
        material={materials.vhsPlayer_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_5.geometry}
        material={materials.stand_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_6.geometry}
        material={materials.mat_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_7.geometry}
        material={materials.arm_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_8.geometry}
        material={materials.tv_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_9.geometry}
        material={materials.cables_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_10.geometry}
        material={materials.props_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_11.geometry}
        material={materials.ground_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0_12.geometry}
        material={materials.key_mat}
      />
    </group>
  )
}

useGLTF.preload('/models/hacker-room.glb')

export default HackerRoom;