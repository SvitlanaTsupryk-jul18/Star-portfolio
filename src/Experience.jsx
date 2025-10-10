import * as THREE from "three";
import { extend, useThree } from "@react-three/fiber";
import { ScrollControls, Environment, useTexture } from "@react-three/drei";
import { geometry } from "maath";
import { useControls } from "leva";
extend(geometry);

import { Scene } from "./components/Scene";

export function Experience() {
  const config = useControls("Light", {
    directionalLightIntensity: { value: 4, min: 1, max: 100000, step: 0.5 },
    ambientLightIntensity: { value: 10, min: 1, max: 100000, step: 0.5 },
    ambientLightColor: "white",
    backgroundIntensity: { value: 1.6, min: 0.163, max: 2, step: 0.1 },
    environmentIntensity: { value: 0.5, min: 0.163, max: 2, step: 0.1 },
  });

  const { scene } = useThree();
  const colorMap = useTexture("bg7.jpg");
  colorMap.colorSpace = THREE.SRGBColorSpace;
  scene.background = colorMap;

  return (
    <>
      <color attach="background" args={["#1a637a"]} />
      <ambientLight
        intensity={config.ambientLight}
        color={config.ambientLightColor}
      />
      <ScrollControls pages={10} infinite maxSpeed={0.5}>
        <Scene
          position={[0, 1.5, 0]}
          environmentRotation={[Math.PI / 3, Math.PI / 2, 0]}
        />
      </ScrollControls>
      <Environment
        backgroundIntensity={config.backgroundIntensity}
        environmentIntensity={config.environmentIntensity}
        files={"./rustig_koppie_puresky_1k.hdr"}
        // preset="warehouse"
      />
    </>
  );
}
