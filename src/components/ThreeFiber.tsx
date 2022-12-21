/** @jsxImportSource @emotion/react */
import React, { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  PerspectiveCamera,
  OrbitControls,
  Stage,
  useGLTF,
} from '@react-three/drei';
import { css } from '@emotion/react';

type Props = {
  glb: string;
  scale?: number;
};
export const ThreeFiber: FC<Props> = (props) => {
  const { glb, scale = 0.1 } = props;
  const container = css`
    width: 100%;
    height: 100%;
    color: #fff;
  `;

  const { scene } = useGLTF(glb);

  return (
    <div css={container}>
      <Canvas>
        <PerspectiveCamera makeDefault />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <Stage>
          <group dispose={null}>
            <primitive scale={[scale, scale, scale]} object={scene} />
          </group>
        </Stage>
      </Canvas>
    </div>
  );
};
