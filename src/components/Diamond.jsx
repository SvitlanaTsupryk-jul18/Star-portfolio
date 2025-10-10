import {
  useGLTF,
  useTexture,
  Caustics,
  CubeCamera,
  MeshRefractionMaterial,
} from "@react-three/drei";
import { useControls } from "leva";
import { useLoader } from "@react-three/fiber";
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';

export function Diamond(props) {
  const { nodes } = useGLTF("./dflat.glb");
  const texture = useLoader(HDRLoader, "./diamond_1k.hdr");

    // const texture = useTexture("./bg7.jpg");

  const config = useControls("Diamond", {
    bounces: { value: 3, min: 0, max: 8, step: 1 },
    aberrationStrength: { value: 0.01, min: 0, max: 0.1, step: 0.01 },
    ior: { value: 2.75, min: 0, max: 10 },
    fresnel: { value: 1, min: 0, max: 1 },
    intensity: { value: .1, min: 0, max: 1, step: .01 },
    color: "white",
  });

  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
        <Caustics
          backfaces
          color={config.color}
          position={[0, -0.5, 0]}
          lightSource={[2.5, 2.5, -5]}
          worldRadius={0.1}
          ior={1.8}
          backfaceIor={1.1}
          intensity={0.1}
        >
          <mesh castShadow geometry={nodes.Diamond_1_0.geometry} {...props}>
            <MeshRefractionMaterial
              envMap={texture}
              {...config}
              toneMapped={false}
            />
          </mesh>
        </Caustics>
      )}
    </CubeCamera>
  );
}
