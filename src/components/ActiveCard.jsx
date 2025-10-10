import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, Billboard, Html } from "@react-three/drei";
import { suspend } from "suspend-react";
import { sections } from "./Section";
const inter = import("@pmndrs/assets/fonts/inter_regular.woff");
import { useControls } from "leva";

export function ActiveCard({ active, setActive, ...props }) {
  const refHtml = useRef();
  const refInnerHtml = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (refHtml.current) {
    setIsVisible(active!==null && true);
    refInnerHtml.current.style.backgroundColor =sections[active]?.color || '#008080';
    }
  }, [active]);

  const SectionInfo = sections[active]?.name;
  const { gl } = useThree();

  const handleClick = (event) => {

    if (!(event.target instanceof HTMLAnchorElement)) {
       setActive(null);
    }
  };

  return (
    <Billboard className="billboard" {...props}>
      <Html
        // occlude="blending"
        // castShadow // Make HTML cast a shadow
        // receiveShadow // Make HTML receive shadows
        ref={refHtml}
        transparent
        transform
        portal={{ current: gl.domElement.parentNode }}
        className={`wrapperHtml ${isVisible ? "visible" : ""}`}
        position={[0, 0.5, 0]}
        rotation={[0, 0, 0]}
        scale={0.5}
        font={suspend(inter).default}
        fontSize={0.5}
        anchorX="left"
        // color="black"
      >
        <div
          style={{ transform: "scale(2)" }}
          onClick={handleClick}
          className="innerHtml"
          ref={refInnerHtml}
        >
          {/* <div>{children}</div> */}
          {/* <div className="content" dangerouslySetInnerHTML={{__html: children}}></div> */}
          {SectionInfo && <SectionInfo />}
        </div>
      </Html>
      
      {/* <Text  ref={ref} font={suspend(inter).default} fontSize={0.5} color="black">
          {hovered !== null && `${name}\n${hovered}`}
        </Text> */}
      {/* <Center> */}

      {/* <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="lightblue" roughness={0.5} metalness={0.8} />
          <Html  portal={{ current: gl.domElement.parentNode }} transform position={[0, 1.2, 0]} rotation={[0, 0, 0]}>
            <div style={{ background: 'rgba(255, 255, 255, 0.7)', padding: '15px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
              <h2>Interactive Sphere</h2>
              <button onClick={() => alert('Button clicked!')}>Click me</button>
            </div>
          </Html>
        </mesh>  */}

      {/* </Center> */}
    </Billboard>
  );
}
