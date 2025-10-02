import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-wrapper">
      <Typewriter
        options={{
          strings: [
            "AI Engineer",
            "AI Developer", 
            "AI Researcher"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
          typeSpeed: 50,
          delay: 100,
        }}
      />
    </div>
  );
}

export default Type;
