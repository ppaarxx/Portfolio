import { memo, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

const buildNetwork = () => {
  const nodes = Array.from({ length: 80 }, () => [
    Math.random() * 4 - 2,
    Math.random() * 4 - 2,
    Math.random() * 4 - 2,
  ]);
  const lines = [];
  const dust = new Float32Array(600);

  nodes.forEach((node, index) => {
    for (let pointer = index + 1; pointer < nodes.length; pointer += 1) {
      const next = nodes[pointer];
      const distance = Math.hypot(
        node[0] - next[0],
        node[1] - next[1],
        node[2] - next[2]
      );

      if (distance < 1.2) {
        lines.push(...node, ...next);
      }
    }
  });

  for (let index = 0; index < dust.length; index += 3) {
    dust[index] = Math.random() * 10 - 5;
    dust[index + 1] = Math.random() * 10 - 5;
    dust[index + 2] = Math.random() * 10 - 5;
  }

  return { nodes, lines: new Float32Array(lines), dust };
};

const NeuralMesh = () => {
  const groupRef = useRef(null);
  const pointsRef = useRef(null);
  const targetRef = useRef(new THREE.Vector2());
  const { invalidate } = useThree();
  const network = useMemo(buildNetwork, []);

  useEffect(() => {
    const onMove = (event) => {
      targetRef.current.x = (event.clientY / window.innerHeight - 0.5) * 0.4;
      targetRef.current.y = (event.clientX / window.innerWidth - 0.5) * 0.4;
      invalidate();
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [invalidate]);

  useFrame(() => {
    if (!groupRef.current || !pointsRef.current) {
      return;
    }

    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x += 0.0005;
    groupRef.current.rotation.x +=
      (targetRef.current.x - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y +=
      (targetRef.current.y - groupRef.current.rotation.y) * 0.05;

    const positions = pointsRef.current.geometry.attributes.position.array;

    for (let index = 0; index < positions.length; index += 3) {
      positions[index + 1] += 0.003;

      if (positions[index + 1] > 5) {
        positions[index + 1] = -5;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    invalidate();
  });

  return (
    <group ref={groupRef}>
      {network.nodes.map((node, index) => (
        <mesh key={`node-${index}`} position={node}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial
            color="#14b8a6"
            emissive="#14b8a6"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={network.lines.length / 3}
            array={network.lines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.3} />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={network.dust.length / 3}
            array={network.dust}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#f59e0b" size={0.015} sizeAttenuation />
      </points>
    </group>
  );
};

const HeroCanvas = () => (
  <div className="hero-canvas-shell" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} frameloop="demand" dpr={[1, 1.5]}>
      <color attach="background" args={["#05070d"]} />
      <fog attach="fog" args={["#05070d", 10, 40]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} color="#14b8a6" intensity={2} />
      <pointLight position={[-5, -3, 2]} color="#38bdf8" intensity={1.5} />
      <pointLight position={[0, 5, -3]} color="#f59e0b" intensity={1} />
      <Stars count={3000} radius={80} depth={50} factor={4} saturation={0} fade speed={1} />
      <NeuralMesh />
    </Canvas>
  </div>
);

export default memo(HeroCanvas);
