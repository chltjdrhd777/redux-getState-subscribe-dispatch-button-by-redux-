import { useState } from "react";

export const Counter = () => {
  const [state, setState] = useState(0);
  const increase = () => {
    setState(state + 1);
  };

  const decrease = () => {
    setState(state - 1);
  };
  return { state, increase, decrease };
};
