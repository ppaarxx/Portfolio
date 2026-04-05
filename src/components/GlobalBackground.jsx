import { memo, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

const SECTION_THEMES = {
  home: {
    colors: ["#303a4c", "#435067", "#55647d"],
    intensity: 0.46,
  },
  about: {
    colors: ["#2d3748", "#3e4b60", "#4e5f77"],
    intensity: 0.42,
  },
  experience: {
    colors: ["#2f394c", "#425066", "#5a6984"],
    intensity: 0.45,
  },
  projects: {
    colors: ["#374054", "#4c5b73", "#64758f"],
    intensity: 0.5,
  },
  skills: {
    colors: ["#313a4e", "#46556e", "#5d6d87"],
    intensity: 0.47,
  },
  recognition: {
    colors: ["#2c3445", "#404d63", "#566680"],
    intensity: 0.44,
  },
  contact: {
    colors: ["#323c50", "#485871", "#5f718c"],
    intensity: 0.5,
  },
};

const clampValue = (value, min, max) => Math.min(max, Math.max(min, value));

const buildMorphBlobs = () =>
  Array.from({ length: 5 }, (_, index) => ({
    amplitude: 0.6 + index * 0.1,
    frequency: 0.28 + index * 0.08,
    phase: Math.random() * Math.PI * 2,
    radius: 0.8 + index * 0.22,
    baseX: index * 1.35 - 2.6,
    baseY: (index % 2 === 0 ? -1 : 1) * 0.7,
    baseZ: -0.4 + index * 0.18,
  }));

const buildParticleField = () => {
  const positions = new Float32Array(4200);

  for (let index = 0; index < positions.length; index += 3) {
    positions[index] = Math.random() * 20 - 10;
    positions[index + 1] = Math.random() * 12 - 6;
    positions[index + 2] = Math.random() * 12 - 7;
  }

  return positions;
};

const BackgroundScene = ({ colors, intensity }) => {
  const groupRef = useRef(null);
  const pointsRef = useRef(null);
  const blobRefs = useRef([]);
  const pointerRef = useRef(new THREE.Vector2(0, 0));
  const blobs = useMemo(buildMorphBlobs, []);
  const particles = useMemo(buildParticleField, []);
  const fogColor = useMemo(() => new THREE.Color("#020306"), []);

  useEffect(() => {
    const handleMove = (event) => {
      pointerRef.current.x = clampValue(event.clientX / window.innerWidth, 0, 1) * 2 - 1;
      pointerRef.current.y = -(clampValue(event.clientY / window.innerHeight, 0, 1) * 2 - 1);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  useFrame((state, delta) => {
    const pointerX = pointerRef.current.x;
    const pointerY = pointerRef.current.y;
    const elapsed = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointerX * 0.28,
        0.06
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointerY * 0.2,
        0.06
      );
    }

    blobs.forEach((blob, index) => {
      const target = blobRefs.current[index];

      if (!target) {
        return;
      }

      target.position.x =
        blob.baseX +
        Math.sin(elapsed * blob.frequency + blob.phase) * blob.amplitude +
        pointerX * 0.9;
      target.position.y =
        blob.baseY +
        Math.cos(elapsed * (blob.frequency + 0.12) + blob.phase) * blob.amplitude * 0.7 +
        pointerY * 0.75;
      target.position.z = blob.baseZ + Math.sin(elapsed * 0.3 + blob.phase) * 0.5;

      target.rotation.y += delta * (0.14 + index * 0.02);
      target.rotation.x += delta * (0.08 + index * 0.015);
    });

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * (0.03 + intensity * 0.02);
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        pointerY * 0.15,
        0.04
      );
    }
  });

  return (
    <>
      <fog attach="fog" args={[fogColor, 7, 26]} />
      <ambientLight intensity={0.16 + intensity * 0.14} />
      <pointLight position={[6, 4, 5]} color={colors[0]} intensity={0.9 + intensity * 0.45} />
      <pointLight position={[-6, -2, 3]} color={colors[1]} intensity={0.72 + intensity * 0.4} />
      <pointLight position={[0, 5, -4]} color={colors[2]} intensity={0.58 + intensity * 0.35} />

      <group ref={groupRef}>
        {blobs.map((blob, index) => (
          <mesh
            key={`global-blob-${index}`}
            ref={(node) => {
              blobRefs.current[index] = node;
            }}
          >
            <icosahedronGeometry args={[blob.radius, 4]} />
            <meshPhysicalMaterial
              color={colors[index % colors.length]}
              emissive={colors[index % colors.length]}
              emissiveIntensity={0.08 + intensity * 0.1}
              roughness={0.35}
              metalness={0.15}
              transmission={0.42}
              thickness={1}
              clearcoat={1}
              transparent
              opacity={0.2}
            />
          </mesh>
        ))}
      </group>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color={colors[1]}
          size={0.02 + intensity * 0.012}
          transparent
          opacity={0.14}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </>
  );
};

const GlobalBackground = ({ activeSection, isMobile }) => {
  const reducedMotion = useReducedMotion();
  const theme = SECTION_THEMES[activeSection] || SECTION_THEMES.home;
  const style = useMemo(
    () => ({
      "--bg-tone-a": `${theme.colors[0]}38`,
      "--bg-tone-b": `${theme.colors[1]}30`,
      "--bg-tone-c": `${theme.colors[2]}2a`,
      "--bg-strength": theme.intensity,
    }),
    [theme]
  );

  return (
    <div className="global-background" style={style} aria-hidden="true">
      <span className="global-gradient-layer layer-one" />
      <span className="global-gradient-layer layer-two" />
      <span className="global-grid-layer" />

      {reducedMotion ? (
        <span className="global-reduced-motion-layer" />
      ) : (
        <div className="global-canvas-layer">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 44 }}
            dpr={isMobile ? [1, 1.25] : [1, 1.6]}
            gl={{ alpha: true, antialias: !isMobile }}
            frameloop="always"
          >
            <BackgroundScene colors={theme.colors} intensity={theme.intensity} />
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default memo(GlobalBackground);
