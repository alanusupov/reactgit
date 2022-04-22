import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import MyBtn from "./components/MyBtn";

function App() {
  const [input, setInput] = useState("");
  const handleChange = e => {
    setInput(e.target.value);
  };

  console.log(input);
  return (
    <div className="App">
      Input
      <Input handleChange={handleChange} setInput={setInput} />
      <div>{input}</div>
      <MyBtn />
    </div>
  );
}

export default App;
