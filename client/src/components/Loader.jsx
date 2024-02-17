import React from 'react'
import "../../Styles/Loader.css"


const Loader = () => {
  return (
  <main className="w-full h-full absolute  z-10 bg-white/50 top-0 left-0 flex justify-center items-center">
    <span className="loader"></span>
  </main>
);
};

export default Loader


