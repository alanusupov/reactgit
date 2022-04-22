import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
<<<<<<< HEAD
import AinraBtn from "./components/AinuraBtn/AinraBtn";
=======
import Talgat from "./components/Talgat/Talgat";
import MyBtn from "./components/MyBtn";
>>>>>>> 52aa45912f50269c937f8c214883290aab07ab29

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
<<<<<<< HEAD
      <AinraBtn/>
=======
      <Talgat/>
      <MyBtn />
>>>>>>> 52aa45912f50269c937f8c214883290aab07ab29
    </div>
  );
}

export default App;
