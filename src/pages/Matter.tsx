"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const MatterScene = () => {
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create engine
    const engine = Matter.Engine.create();

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create physics body
    const box1 = Matter.Bodies.rectangle(
      width / 2,
      100,
      80,
      80,  {
    restitution: 0.8, // bounce
    friction: 0.1,   // surface friction
    density: 0.001,  // mass
  }
      
    );

    const box2 = Matter.Bodies.rectangle(
      width / 2,
      100,
      80,
      80,  {
    restitution: 0.8, // bounce
    friction: 0.1,   // surface friction
    density: 0.001,  // mass
  }
    );

    // Walls
    const walls = [
      Matter.Bodies.rectangle(
        width / 2,
        height,
        width,
        50,
        { isStatic: true }
      ),

      Matter.Bodies.rectangle(
        0,
        height / 2,
        50,
        height,
        { isStatic: true }
      ),

      Matter.Bodies.rectangle(
        width,
        height / 2,
        50,
        height,
        { isStatic: true }
      ),
    ];

    Matter.Composite.add(engine.world, [
      box1,
      box2,
      ...walls,
    ]);


    // Run physics
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);


    // Sync Matter body -> React element
    const animate = () => {
      if (boxRef1.current) {
        boxRef1.current.style.transform = `
          translate(
            ${box1.position.x - 40}px,
            ${box1.position.y - 40}px
          )
          rotate(${box1.angle}rad)
        `;
      }

      if (boxRef2.current) {
        boxRef2.current.style.transform = `
          translate(
            ${box2.position.x - 40}px,
            ${box2.position.y - 40}px
          )
          rotate(${box2.angle}rad)
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();


    return () => {
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };

  }, []);


  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div
        ref={boxRef1}
        className="absolute w-20 h-20 bg-red-500"
      />
      <div
        ref={boxRef2}
        className="absolute w-20 h-20 bg-blue-500"
      />
    </div>
  );
};

export default MatterScene;