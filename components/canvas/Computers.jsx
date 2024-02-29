'use client'

import React, { Suspense, useEffect, useState, useRef  } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "@/components/loader/Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./house1/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor='black' />
      <spotLight
        position={[3, 20, 15]}
        angle={1}
        penumbra={1}
        intensity={400}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight 
        intensity={50} 
        position={[5 , 5 , -5]}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.25 : 0.60}
        position={isMobile ? [0, 0, 0] : [0, -2, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");


    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);



  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 5, -40], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          
          
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;