const InputComponent = (props) => {
  return (
    <>
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => props.setName(e.target.value)}
      />
    </>
  );
};

export default InputComponent;
