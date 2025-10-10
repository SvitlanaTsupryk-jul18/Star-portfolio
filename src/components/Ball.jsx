import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles, useCursor } from "@react-three/drei";
import { easing } from "maath";
import { useControls } from "leva";

export function Ball({ isActive, color, ...props }) {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const onHover = (e) => {
    setIsHovered(true);
  };

  useFrame((state, delta) => {
    if (isHovered) {
      easing.damp(ref.current.material, "metalness", 0.5, 0.1, delta);
    } else {
      easing.damp(ref.current.material, "metalness", 0, 0.1, delta);
    }
  });

  const config = useControls("balls", {
    ballsColor: "green",
    ballsMetallness: { value: 0, min: 0, max: 1, step: 0.01 },
    ballsRoughness: { value: 0, min: 0, max: 1, step: 0.01 },
    ballsTransparent: true,
    transmission: { value: 1, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.45, min: 0, max: 5, step: 0.01 },
    thickness: { value: 2.5, min: 0, max: 5, step: 0.01 },
    ballsOpacity: { value: 1, min: 0, max: 1, step: 0.01 },
    reflectivity: { value: 0.05, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    sparclesCount: { value: 30, min: 0, max: 100, step: 10 },
    sparclesSize: { value: 2, min: 0, max: 10, step: 0.1 },
    sparclesSpeed: { value: 1, min: 0, max: 10, step: 0.1 },
  });

  return (
    <mesh
      onPointerOver={(e) => {
        onHover(e);
      }}
      onPointerOut={() => setIsHovered(false)}
      className={isHovered ? "active" : ""}
      {...props}
      ref={ref}
      radius={0.75}
      side={THREE.DoubleSide}
    >
      <sphereGeometry />
      <meshPhysicalMaterial
        needsUpdate={true}
        color={color}
        metalness={config.ballsMetallness}
        roughness={config.ballsRoughness}
        transparent={config.ballsTransparent}
        transmission={config.transmission}
        ior={config.ior}
        opacity={config.ballsOpacity}
        thickness={config.thickness}
        reflectivity={config.reflectivity}
        clearcoat={config.clearcoat}
        clearcoatRoughness={config.clearcoatRoughness}
        // emissive={[0,2,0]}
        // emissiveIntensity={isHovered ? 1.1 : 0}
        // color={[2,0,0]}
        // toneMapped={false}
        // deepTest={false}
      />

      {isActive && (
        <Sparkles
          opacity={0.8}
          //   color={color}
          count={config.sparclesCount}
          scale={config.sparclesSize}
          size={config.sparclesSize}
          speed={config.sparclesSpeed}
        />
      )}

    </mesh>
  );
}
