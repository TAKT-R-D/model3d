import { StarBackground } from './components/StarBackground';
import { ModelViewer } from './components/ModelViewer';
import SliderButtons from './components/SliderButtons';
import { useState } from 'react';
import { ThreeFiber } from './components/ThreeFiber';

function App() {
  const [toggle, setToggle] = useState<boolean>(false);
  const onClickToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container">
      {/*
      <div className="slider">
        <SliderButtons
          text1="modelViewer"
          text2="threeFiber"
          onClickToggle={onClickToggle}
        />
      </div>
      */}
      <div className="wrapper">
        <StarBackground />
        {toggle ? (
          <ThreeFiber
            glb="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
            scale={0.01}
          />
        ) : (
          <ModelViewer
            poster="https://modelviewer.dev/shared-assets/models/NeilArmstrong.webp"
            glb="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
            usdz=""
            alt="3D Model"
            scale={0.1}
          />
        )}
      </div>
    </div>
  );
}

export default App;
