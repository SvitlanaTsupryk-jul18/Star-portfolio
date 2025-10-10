import { useRef, useState } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { useScroll, Center, Text3D } from "@react-three/drei";
import { easing, geometry } from "maath";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { useControls } from "leva";
import { useEffect } from "react";

extend(geometry);

import { Section, sections } from "./Section";
import { Diamond } from "./Diamond";
import { ActiveCard } from "./ActiveCard";

export function Scene({ children, ...props }) {
  const ref = useRef();
  const scroll = useScroll();
  const [active, setActive] = useState(null);

  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    state.events.update();
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y * 2 + 4.5, 9],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  const handleGroupClick = (event) => {
    event.stopPropagation();
    setActive(null);
  };

  const [textOpacity, setTextOpacity] = useState(0);

  useEffect(() => {
    if (active === null) {
      let frame;
      let start = null;
      const duration = 1000;
      function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setTextOpacity(progress);
        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        }
      }
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    } else {
      setTextOpacity(0);
    }
  }, [active]);

  const config = useControls("Bloom", {
    intensity: { value: 0.7, min: 0, max: 1.5, step: 0.01 },
    levels: { value: 8, min: 1, max: 9, step: 1 },
  });

  return (
    <group ref={ref} {...props} onPointerMissed={handleGroupClick}>
      <Center top>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.8}
          letterSpacing={-0.06}
          size={0.6}
          font="./Inter_Bold.json"
        >
          {active === null && `         Svitlana\nFrontend developer`}
          <meshNormalMaterial transparent opacity={textOpacity} />
        </Text3D>
      </Center>
      {sections.map((item, index) => (
        <Section
          key={index}
          i={index}
          active={active}
          category={item.title}
          from={item.start}
          len={item.len}
          handleBallClick={setActive}
          color={item.color}
        />
      ))}
      <EffectComposer>
        <Bloom
          luminanceThreshold={1}
          intensity={config.intensity}
          levels={config.levels}
          mipmapBlur
        />
      </EffectComposer>
      <Diamond rotation={[-0.2, 0, 0]} position={[0, -4.175 + 0.5, 0]} />
      <ActiveCard active={active} setActive={setActive} />
    </group>
  );
}
