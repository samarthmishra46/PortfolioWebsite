import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html as DreiHtml
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { ReactNode } from "react";

interface BallProps {
  imgUrl?: string;
  icon?: ReactNode;
}

const Ball = ({ imgUrl, icon }: BallProps) => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#915eff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {icon && (
          <group position={[0, 0, 1]}>
            <DreiHtml transform distanceFactor={1.5}>
              <div className="text-white">{icon}</div>
            </DreiHtml>
          </group>
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: { icon: ReactNode }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;