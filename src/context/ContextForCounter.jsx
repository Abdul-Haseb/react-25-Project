import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const Increment = () => setCounter((prevCount) => prevCount + 1);

  const Decrement = () => setCounter((prevCount) => prevCount - 1);

  return (
    <CounterContext.Provider value={{ counter, Increment, Decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
