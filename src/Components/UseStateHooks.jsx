import React, { useState } from "react";
import FirstComponent from "./FirstComponent";

function UseStateHooks() {
  let [x, setX] = useState(0);

  const btnClick = () => {
    console.log("Clicked");
    setX((prevX) => prevX + 1);
  };

  return (
    <div>
      <div>
        <button onClick={btnClick}>Click</button>
        <FirstComponent data={x} fn={setX}></FirstComponent>
      </div>
    </div>
  );
}

export default UseStateHooks;
