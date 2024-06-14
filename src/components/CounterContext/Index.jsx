import { CounterContextProvider } from "../../context/ContextForCounter";
import Counter from "./Counter";

const CounterIndex = () => {
  return (
    <CounterContextProvider>
      <Counter />
    </CounterContextProvider>
  );
};

export default CounterIndex;
