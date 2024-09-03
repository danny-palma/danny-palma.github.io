import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Physics, Triplet, usePlane } from "@react-three/cannon";
import { BallCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Loader from "./Loader";

const Plane = (props: {rotation: Triplet, position: Triplet}) => {
  usePlane(() => ({ ...props }));
  return null;
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <Canvas
        frameloop="always"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 25]}}
        className="!h-[25rem]"
      >
        <OrbitControls enableZoom={false} />
        <Suspense fallback={<Loader />}>
          <Physics gravity={[0, 0, 0]} >
            {/* Paredes invisibles para mantener las bolas dentro del espacio */}
            <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]} />
            <Plane rotation={[Math.PI / 2, 0, 0]} position={[0, 10, 0]} />
            <Plane rotation={[0, Math.PI / 2, 0]} position={[-10, 0, 0]} />
            <Plane rotation={[0, -Math.PI / 2, 0]} position={[10, 0, 0]} />
            <Plane rotation={[0, 0, 0]} position={[0, 0, -10]} />
            <Plane rotation={[0, Math.PI, 0]} position={[0, 0, 10]} />

            {/* Pelotas que caen y rebotan */}
            {technologies.map((technology, index) => (
              <BallCanvas
                key={technology.name}
                imgUrl={technology.icon}
                position={[index * 2 - 5,  Math.random(), Math.random()]}
              />
            ))}
          </Physics>
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
