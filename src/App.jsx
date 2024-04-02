import React, { useState } from "react";
import Contacts from "./components/Contacts";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Contacts />
    </>
  );
};

export default App;
