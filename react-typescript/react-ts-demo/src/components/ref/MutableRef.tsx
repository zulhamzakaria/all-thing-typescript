import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    // increate interval value by 1/sec
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    // cleaning up return
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      Hook Timer = {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
