import React, { useEffect } from "react";
import Rellax from "rellax";

function Landing() {
  useEffect(() => {
    new Rellax(".landing-bg-layer1", {
      speed: -4,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".landing-bg-layer2", {
      speed: 4,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".parallax-text", {
      speed: -6,
    });

    // landing 2

    new Rellax(".landing-bg2-layer1", {
      speed: 10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".landing-bg2-layer2", {
      speed: 7,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".landing-bg2-layer3", {
      speed: 4,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".landing-bg2-layer4", {
      speed: 2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <div className='section1'>
      {/* <div className='landing'>
        <div className='landing-bg'>
          <div className='landing-bg-layer1'></div>
          <div className='landing-bg-layer2'></div>
        </div>
        <div className='landing-text'>
          <span className='parallax-text'>Feel The Magic</span>
        </div>
      </div> */}
      <div className='landing2'>
        <div className='landing-bg2'>
          <div className='landing-bg2-layer6'></div>
          <div className='landing-bg2-layer5'></div>
          <div className='landing-bg2-layer4'></div>
          <div className='landing-bg2-layer3'></div>
          <div className='landing-bg2-layer2'></div>
          <div className='landing-bg2-layer1'></div>
        </div>
        <div className='landing-text2'></div>
      </div>
    </div>
  );
}

export default Landing;
