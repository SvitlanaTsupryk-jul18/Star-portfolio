import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { Leva } from "leva";
import { Bvh } from "@react-three/drei";

export const App = () => (
  <Canvas dpr={[1, 1.5]} fallback={<div>Sorry no WebGL supported!</div>}>
    <Bvh>
      <Experience />
    </Bvh>
    <Leva hidden />
  </Canvas>
);
