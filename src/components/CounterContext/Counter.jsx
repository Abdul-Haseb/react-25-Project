import { useContext } from "react";
import { CounterContext } from "../../context/ContextForCounter";

const Counter = () => {
  const { counter, Increment, Decrement } = useContext(CounterContext);
  return (
    <div>
      <h1>Count : {counter}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
