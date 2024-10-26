import React, { useRef, useState } from "react";

function UseRef() {
  const inputRef = useRef(null);
  const [data, setData] = useState([]);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button
        onClick={() =>
          setData((prevData) => [...prevData, inputRef.current.value])
        }
      >
        Submit
      </button>
      {data.map((item, index) => {
        return <h2 key={index}>{item}</h2>;
      })}
    </div>
  );
}

export default UseRef;
