import React from 'react'

const About = () => {
  return (
    <div className="relative bg-neutral-900 min-h-screen w-full items-center flex ">
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-40 blur-[100px] z-0" />
      <p className="text-white text-7xl z-10 pl-56 font-bold tracking-normal">
        <span className="block">About</span>
        <span className="block">Me</span>
      </p>

      <div className="text-white text-2xl ml-24 w-2/4 z-20">
        <p className="highlightable">
          Hello! I’m an engineering student with a strong focus on applied
          physics and a passion for solving real-world problems through
          innovation and technology. Over my academic journey, I've tackled
          complex subjects like magnetic circuits, analyzing factors like
          reluctance, mmf, and magnetic flux to gain a deeper understanding of
          how physics shapes our world
        </p>
      </div>
    </div>
  );
}

export default About
