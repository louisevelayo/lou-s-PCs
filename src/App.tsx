import { useState } from "react";
import Main from "./layouts/Main";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Main />
    </>

  );
}

export default App;
