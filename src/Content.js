import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Blerg", "Blorg", "Blarg", "Blirg"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };

  const handleClick = () => {
    console.log("Clicked!")
  }
  
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }
  
  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }

  return (
    <main>
      <p on onDoubleClick={handleClick}>
        Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click It</button>
        <button onClick={() => handleClick2("Tom")}>Click Name</button>
        <button onClick={(e) => handleClick3(e)}>Click Name</button>
    </main>
  );
};

export default Content;
