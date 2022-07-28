import React, {useEffect, useState } from 'react';


export const Clock = () => {
  const [timer, setTimer] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      console.log(timer);
      setTimer(timer + 1);
    }, 1000)
  }, [timer]);

  return <div> {timer} </div>;
}