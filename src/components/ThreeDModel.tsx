import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

const ThreeDModel: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const plateLeftRef = useRef<Mesh>(null);
  const plateRightRef = useRef<Mesh>(null);
  const handleRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Smooth rotation
    const scrollPosition = window.scrollY;
    groupRef.current.rotation.y = scrollPosition * 0.001;
    
    // Floating animation
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    
    // Subtle tilt
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Left weight plate */}
      <mesh ref={plateLeftRef} position={[-1.5, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Handle */}
      <mesh ref={handleRef} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 3, 16]} />
        <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Right weight plate */}
      <mesh ref={plateRightRef} position={[1.5, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
        <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
};

export default ThreeDModel;