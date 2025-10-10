import { Billboard, Text } from "@react-three/drei";
import { suspend } from "suspend-react";
const inter = import("@pmndrs/assets/fonts/inter_bold.woff");

import { Ball } from "./Ball";
import {
  AboutInfo,
  ExpirienceInfo,
  ProjectsInfo,
  ContactsInfo,
  SkillsInfo,
} from "./MainInfo";

export function Section({
  i,
  active,
  category,
  data,
  from = 0,
  len = Math.PI * 2,
  radius = 5.25,
  handleBallClick,
  color,
  ...props
}) {
  const amount = Math.round(len * 5);
  const textPosition = from + (amount / 2 / amount) * len;
  const angle = from + len / amount;

  const handleClick = (e) => {
    e.stopPropagation();
    handleBallClick(i);
  };

  return (
    <group {...props}>
      <Billboard
        position={[
          Math.sin(textPosition) * radius * 1.3,
          0.5,
          Math.cos(textPosition) * radius * 1.3,
        ]}
      >
        <Text
          font={suspend(inter).default}
          fontSize={0.25}
          anchorX="center"
          color="#06d6a0"
          fontWeight={800}
        >
          {category}
        </Text>
      </Billboard>
      <Ball
        key={angle}
        onClick={(e) => handleClick(e)}
        position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
        rotation={[0, Math.PI / 2 + angle, 0]}
        isActive={active === i}
        color={color}
      />
    </group>
  );
}

export const sections = [
  {
    name: AboutInfo,
    title: "About",
    start: Math.PI / 5,
    len: (Math.PI / 5) * 2,
    color: "#026048",
  },
  {
    name: ExpirienceInfo,
    title: "Expirience",
    start: -Math.PI / 5,
    len: Math.PI / 5,
    color: "#3a0ca3",
  },
  {
    name: ProjectsInfo,
    title: "Projects",
    start: (Math.PI * 3) / 5,
    len: (Math.PI / 5) * 2,
    color: "#ffff00",
  },
  {
    name: ContactsInfo,
    title: "Contacts",
    start: Math.PI,
    len: (Math.PI / 5) * 2,
    color: "#e76f51",
  },
  {
    name: SkillsInfo,
    title: "Skills",
    start: (Math.PI * 7) / 5,
    len: Math.PI * 2 - (Math.PI * 9) / 5,
    color: "#ef476f",
  }
];
