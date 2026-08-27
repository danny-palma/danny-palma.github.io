import React from "react";
import { Decal, useTexture } from "@react-three/drei";
import { Color } from "three";
import { Triplet, useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

// Función para generar una velocidad aleatoria
const randomVelocity = (): Triplet => {
  const speed = 50; // Velocidad máxima
  return [
    (Math.random() - 0.5) * speed, // Velocidad en x
    (Math.random() - 0.5) * speed, // Velocidad en y
    (Math.random() - 0.5) * speed, // Velocidad en z
  ];
};

const Ball = (props: { imgUrl: string, position: Triplet }) => {
  const [decal] = useTexture([props.imgUrl]);

  // Configuración del cuerpo físico
  const [SphereRef, api] = useSphere(() => ({
    mass: 1,
    position: props.position,
    args: [2.9], // Radio de la esfera
  }));

  useFrame(() => {
    api.applyForce(randomVelocity(), [0, 0, 0]);
  });

  return (
    <mesh castShadow receiveShadow scale={3} ref={SphereRef as never}>
      <directionalLight
        intensity={4}
        position={[0, 0, 9]}
        color={new Color("#454545")}
      />
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial
        color="#3d3d3d"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        map={decal}
      />
    </mesh>
  );
};

Ball.displayName = "Ball";

export default Ball;
