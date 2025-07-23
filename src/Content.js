import React, { useState } from "react";

const Content = () => {

  const[name, setName] = useState("Tom");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Blerg", "Blorg", "Blarg", "Blirg"];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
    console.log(count)
  }
  const handleClick2 = () => {
    console.log(count)
  }


  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Counter 1</button>
        <button onClick={handleClick2}>Counter 2</button>
    </main>
  );
};

export default Content;
