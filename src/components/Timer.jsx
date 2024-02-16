import { useState, useEffect } from "react";

export default function Timer({ count, setCount, cps }) {
  useEffect(() => {
    const interval = setInterval(() => {
      //funct update
      setCount((preCount) => preCount + cps);
    }, 1000);
    //return cleanup funct
    return () => clearInterval(interval);
  }, []);
  //return jsx
  return (
    <div className="cookies">
      <h1> Cookies :{count}</h1>
    </div>
  );
}
