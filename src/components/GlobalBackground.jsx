import { memo, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { sectionOrder } from "../constants/data";
import * as THREE from "three";

const SECTION_THEMES = {
  home: {
    colors: ["#303a4c", "#435067", "#55647d"],
    intensity: 0.46,
    particleDensity: 1.05,
    particleScale: 1.05,
    depthBias: -0.1,
    orbitSpeed: 1,
  },
  about: {
    colors: ["#2d3748", "#3e4b60", "#4e5f77"],
    intensity: 0.42,
    particleDensity: 0.94,
    particleScale: 0.95,
    depthBias: 0.08,
    orbitSpeed: 0.86,
  },
  experience: {
    colors: ["#2f394c", "#425066", "#5a6984"],
    intensity: 0.45,
    particleDensity: 1.04,
    particleScale: 1.08,
    depthBias: 0.15,
    orbitSpeed: 1.1,
  },
  projects: {
    colors: ["#374054", "#4c5b73", "#64758f"],
    intensity: 0.5,
    particleDensity: 1.15,
    particleScale: 1.16,
    depthBias: -0.2,
    orbitSpeed: 1.18,
  },
  skills: {
    colors: ["#313a4e", "#46556e", "#5d6d87"],
    intensity: 0.47,
    particleDensity: 1.1,
    particleScale: 1.1,
    depthBias: -0.08,
    orbitSpeed: 1.04,
  },
  recognition: {
    colors: ["#2c3445", "#404d63", "#566680"],
    intensity: 0.44,
    particleDensity: 0.92,
    particleScale: 0.92,
    depthBias: 0.14,
    orbitSpeed: 0.88,
  },
  contact: {
    colors: ["#323c50", "#485871", "#5f718c"],
    intensity: 0.5,
    particleDensity: 1.2,
    particleScale: 1.12,
    depthBias: -0.24,
    orbitSpeed: 1.2,
  },
};

const clampValue = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (start, end, amount) => start + (end - start) * amount;

const hexToRgb = (hexValue) => {
  const hex = hexValue.replace("#", "");
  const normalized = hex.length === 3 ? hex.split("").map((value) => value + value).join("") : hex;
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);

  return { red, green, blue };
};

const rgbToHex = ({ red, green, blue }) =>
  `#${[red, green, blue]
    .map((value) => clampValue(Math.round(value), 0, 255).toString(16).padStart(2, "0"))
    .join("")}`;

const blendHex = (colorA, colorB, mix) => {
  const rgbA = hexToRgb(colorA);
  const rgbB = hexToRgb(colorB);

  return rgbToHex({
    red: lerp(rgbA.red, rgbB.red, mix),
    green: lerp(rgbA.green, rgbB.green, mix),
    blue: lerp(rgbA.blue, rgbB.blue, mix),
  });
};

const blendTheme = (themeA, themeB, mix) => ({
  colors: themeA.colors.map((color, index) =>
    blendHex(color, themeB.colors[index] || color, mix)
  ),
  intensity: lerp(themeA.intensity, themeB.intensity, mix),
  particleDensity: lerp(themeA.particleDensity, themeB.particleDensity, mix),
  particleScale: lerp(themeA.particleScale, themeB.particleScale, mix),
  depthBias: lerp(themeA.depthBias, themeB.depthBias, mix),
  orbitSpeed: lerp(themeA.orbitSpeed, themeB.orbitSpeed, mix),
});

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

const BackgroundScene = ({ profile, reducedMotion }) => {
  const groupRef = useRef(null);
  const pointsRef = useRef(null);
  const blobRefs = useRef([]);
  const targetDepthRef = useRef(profile.depthBias);
  const particleScaleRef = useRef(profile.particleScale);
  const orbitSpeedRef = useRef(profile.orbitSpeed);
  const intensityRef = useRef(profile.intensity);
  const pointerRef = useRef(new THREE.Vector2(0, 0));
  const blobs = useMemo(buildMorphBlobs, []);
  const particles = useMemo(buildParticleField, []);
  const fogColor = useMemo(() => new THREE.Color("#020306"), []);
  const { camera } = useThree();

  useEffect(() => {
    targetDepthRef.current = profile.depthBias;
    particleScaleRef.current = profile.particleScale;
    orbitSpeedRef.current = profile.orbitSpeed;
    intensityRef.current = profile.intensity;
  }, [profile.depthBias, profile.intensity, profile.orbitSpeed, profile.particleScale]);

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
    const orbitSpeed = orbitSpeedRef.current;
    const depthBias = targetDepthRef.current;
    const particleScale = particleScaleRef.current;
    const intensity = intensityRef.current;

    if (groupRef.current) {
      const depthTarget = reducedMotion ? 0 : depthBias;
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        depthTarget,
        0.06
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointerX * 0.2,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointerY * 0.14,
        0.05
      );
    }

    blobs.forEach((blob, index) => {
      const target = blobRefs.current[index];

      if (!target) {
        return;
      }

      const depthMultiplier = reducedMotion ? 0.65 : 1;

      target.position.x =
        blob.baseX +
        Math.sin(elapsed * blob.frequency * orbitSpeed + blob.phase) * blob.amplitude * depthMultiplier +
        pointerX * 0.6;
      target.position.y =
        blob.baseY +
        Math.cos(elapsed * (blob.frequency + 0.12) * orbitSpeed + blob.phase) *
          blob.amplitude *
          0.65 *
          depthMultiplier +
        pointerY * 0.5;
      target.position.z =
        blob.baseZ +
        Math.sin(elapsed * 0.3 * orbitSpeed + blob.phase) * 0.45 * depthMultiplier;

      target.rotation.y += delta * (0.1 + index * 0.018) * orbitSpeed;
      target.rotation.x += delta * (0.06 + index * 0.014) * orbitSpeed;
    });

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * (0.02 + intensity * 0.02) * orbitSpeed;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        pointerY * 0.08,
        0.04
      );
      pointsRef.current.scale.setScalar(particleScale);
    }

    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8 + depthBias * 0.8, 0.08);
  });

  return (
    <>
      <fog attach="fog" args={[fogColor, 7, 26]} />
      <ambientLight intensity={0.16 + profile.intensity * 0.14} />
      <pointLight
        position={[6, 4, 5]}
        color={profile.colors[0]}
        intensity={0.9 + profile.intensity * 0.45}
      />
      <pointLight
        position={[-6, -2, 3]}
        color={profile.colors[1]}
        intensity={0.72 + profile.intensity * 0.4}
      />
      <pointLight
        position={[0, 5, -4]}
        color={profile.colors[2]}
        intensity={0.58 + profile.intensity * 0.35}
      />

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
              color={profile.colors[index % profile.colors.length]}
              emissive={profile.colors[index % profile.colors.length]}
              emissiveIntensity={0.08 + profile.intensity * 0.1}
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
            count={Math.min(
              particles.length / 3,
              Math.floor((particles.length / 3) * profile.particleDensity)
            )}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color={profile.colors[1]}
          size={0.02 + profile.intensity * 0.012}
          transparent
          opacity={0.14}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </>
  );
};

const getProfile = (scrollProgress, activeSection) => {
  const clamped = clampValue(scrollProgress ?? 0, 0, 1);
  const scaled = clamped * (sectionOrder.length - 1);
  const index = Math.floor(scaled);
  const mix = scaled - index;
  const baseKey = sectionOrder[index] || activeSection || sectionOrder[0];
  const nextKey = sectionOrder[Math.min(index + 1, sectionOrder.length - 1)] || baseKey;
  const baseTheme = SECTION_THEMES[baseKey] || SECTION_THEMES.home;
  const nextTheme = SECTION_THEMES[nextKey] || baseTheme;

  return blendTheme(baseTheme, nextTheme, mix);
};

const GlobalBackground = ({ activeSection, scrollProgress, isMobile }) => {
  const reducedMotion = useReducedMotion();
  const profile = useMemo(
    () => getProfile(scrollProgress, activeSection),
    [activeSection, scrollProgress]
  );

  const style = useMemo(
    () => ({
      "--bg-tone-a": `${profile.colors[0]}38`,
      "--bg-tone-b": `${profile.colors[1]}30`,
      "--bg-tone-c": `${profile.colors[2]}2a`,
      "--bg-strength": profile.intensity,
    }),
    [profile.colors, profile.intensity]
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
            dpr={isMobile ? [1, 1.2] : [1, 1.5]}
            gl={{ alpha: true, antialias: !isMobile }}
            frameloop="always"
          >
            <BackgroundScene profile={profile} reducedMotion={reducedMotion} />
          </Canvas>
        </div>
      )}
    </div>
  );
};

export default memo(GlobalBackground);
