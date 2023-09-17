import { useState } from "react";
import { Button, Modal, Input } from "@mantine/core";

const AddUser = ( props ) => {
  const { openAdd, setOpenAdd } = props;
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [mass, setMass] = useState("");

  const handleAddUser = () => {
    const data = {
      name,
      position,
      symbol,
      mass,
    };
    console.log(data);
  };
  return (
    <>
      <Modal
        opened={openAdd}
        onClose={() => setOpenAdd(false)}
        title="Add User"
      >
        <Input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Position"
          style={{ margin: "12px" }}
        />
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={{ margin: "12px" }}
        />
        <Input
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Symbol"
          style={{ margin: "12px" }}
        />
        <Input
          value={mass}
          onChange={(e) => setMass(e.target.value)}
          placeholder="Mass"
          style={{ margin: "12px" }}
        />
        <Button onClick={handleAddUser}>Save</Button>
      </Modal>
    </>
  );
};

export default AddUser;
