import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Earth({ rotation }) {
  const earthRef = useRef();
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y = rotation;
    }
  });
  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#2EC4B6" />
    </mesh>
  );
}

function EarthModel({ rotation }) {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Stars />
      <Earth rotation={rotation} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
export default EarthModel;
