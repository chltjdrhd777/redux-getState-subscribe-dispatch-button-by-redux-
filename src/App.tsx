import React from "react";
import { Counter } from "./factory/counterByUseState";
import styled from "styled-components";
import { countStore, reduxPlus, reduxMinus } from "./factory/counterByRedux";

////////////////////////////////////////////////////////////

const App = () => {
  const { state, increase, decrease } = Counter();
  const referrence = React.createRef<HTMLSpanElement>();

  //subscribe(function) = detact the change of the target (in this case "countStore") and run a function
  const onChange = () => {
    if (referrence.current) {
      referrence.current.textContent = JSON.stringify(countStore.getState());
    }
  };
  countStore.subscribe(onChange);

  return (
    <Div>
      <div>
        <button onClick={increase}>increment</button>
        <span>{state}</span>
        <button onClick={state > 0 ? decrease : undefined}>decrement</button>
      </div>

      <div>
        <button onClick={reduxPlus}>Redux +</button>
        <span ref={referrence}></span>
        <button onClick={reduxMinus}>Redux -</button>
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: block;
`;

export default App;
