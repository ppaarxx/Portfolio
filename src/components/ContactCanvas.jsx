import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";

const TorusScene = () => {
  const torusRef = useRef(null);

  useFrame(() => {
    if (!torusRef.current) {
      return;
    }

    torusRef.current.rotation.x += 0.003;
    torusRef.current.rotation.y += 0.004;
    torusRef.current.rotation.z += 0.002;
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 3]} intensity={1.3} color="#22d3ee" />
      <pointLight position={[-3, -2, 2]} intensity={1.1} color="#f59e0b" />
      <mesh ref={torusRef}>
        <torusKnotGeometry args={[1.2, 0.35, 200, 20]} />
        <MeshTransmissionMaterial
          thickness={0.5}
          roughness={0.05}
          transmission={1}
          chromaticAberration={0.06}
          anisotropy={0.1}
          metalness={1}
          color="#05070d"
          emissive="#14b8a6"
          emissiveIntensity={0.15}
        />
      </mesh>
    </>
  );
};

const ContactCanvas = () => (
  <div className="contact-canvas-shell" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <TorusScene />
    </Canvas>
  </div>
);

export default ContactCanvas;
