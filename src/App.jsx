import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>{counter}</p>
      <hr />
      <br />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <br />
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  );
};

export default App;
