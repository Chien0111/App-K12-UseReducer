import { memo, useEffect, useState } from "react";

// component con
const Test1 = ({ handleAdd }) => {
  const [item, setItem] = useState();
  useEffect(() => {
    console.log("Test1");
  });

  const handleClick = () => {
    if (item.length > 0) {
      handleAdd(item);
      setItem("");
    }
  };

  return (
    <>
      {" "}
      <h3>Add Item to list</h3>
      <input
        type="number"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleClick}>ADD</button>
    </>
  );
};

export default memo(Test1);

// component cha:
// list
// count || button => setCount cong them 1

// component con:
// input || button => add value input vao list

// se dat log va dung memo va useCallback toi uu hoa ung dung nhat

// chuc nang cong so
// them item vao list
