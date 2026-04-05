import { useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

const BlobMaterial = shaderMaterial(
  {
    uTime: 0,
    colorA: new THREE.Color("#14b8a6"),
    colorB: new THREE.Color("#38bdf8"),
  },
  `
    uniform float uTime;
    varying vec3 vNormal;
    void main() {
      vNormal = normal;
      vec3 transformed = position + normal * (sin(uTime + position.x * 3.0 + position.y * 2.0 + position.z * 4.0) * 0.15);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
  `,
  `
    uniform vec3 colorA;
    uniform vec3 colorB;
    varying vec3 vNormal;
    void main() {
      float strength = vNormal.y * 0.5 + 0.5;
      gl_FragColor = vec4(mix(colorA, colorB, strength), 1.0);
    }
  `
);

extend({ BlobMaterial });

const OrbScene = () => {
  const blobRef = useRef(null);
  const materialRef = useRef(null);
  const wireRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsed = clock.elapsedTime;

    if (materialRef.current) {
      materialRef.current.uTime = elapsed;
    }

    if (blobRef.current) {
      const scale = 1 + Math.sin(elapsed * 1.5) * 0.1;
      blobRef.current.scale.set(scale, scale, scale);
    }

    if (wireRef.current) {
      wireRef.current.rotation.x -= 0.002;
      wireRef.current.rotation.y -= 0.004;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={1.3} color="#22d3ee" />
      <mesh ref={blobRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <blobMaterial ref={materialRef} />
      </mesh>
      <mesh ref={wireRef} scale={1.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial wireframe color="#94a3b8" transparent opacity={0.25} />
      </mesh>
    </>
  );
};

const SkillOrb = () => (
  <div className="skill-orb-shell" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
      <OrbScene />
    </Canvas>
  </div>
);

export default SkillOrb;
