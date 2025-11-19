'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

export function Orange3D() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (groupRef.current) {
      // Oscillate rotation instead of full spin to keep leaf generally facing forward, but with enough range to be interesting
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.5
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff8800" />
      
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Added outer group to tilt the orange forward (X rotation) so the top/leaf is always visible to the camera */}
        <group rotation={[0.3, 0, 0]}>
          <group ref={groupRef} scale={1.2}>
            {/* Orange sphere */}
            <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
              <meshStandardMaterial 
                color="#FF8500"
                roughness={0.15}
                metalness={0.1}
                emissive="#FF5500"
                emissiveIntensity={0.2}
              />
            </Sphere>

            {/* Adjusted stem position for the larger scale */}
            <mesh position={[0, 0.98, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.2, 8]} />
              <meshStandardMaterial color="#3a2410" roughness={0.8} />
            </mesh>

            {/* Replaced flattened sphere with a cone geometry to match the sharp green leaf in the reference image */}
            <mesh position={[0.15, 1.1, 0]} rotation={[0, 0, -Math.PI / 6]}>
              <coneGeometry args={[0.12, 0.4, 32]} />
              <meshStandardMaterial 
                color="#00aa00"
                roughness={0.4}
                emissive="#004400"
                emissiveIntensity={0.2}
              />
            </mesh>
          </group>
        </group>
      </Float>

      <Environment preset="sunset" />
    </>
  )
}
