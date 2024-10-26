const FirstComponent = ({ data, fn }) => {
  return (
    <div>
      <button onClick={() => fn(100)}>Add 100</button>
      <p>{data}</p>
    </div>
  );
};

export default FirstComponent;
