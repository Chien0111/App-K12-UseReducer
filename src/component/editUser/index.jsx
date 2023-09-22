import { useEffect, useState } from "react";
import { Button, Modal, Input } from "@mantine/core";

const EditUser = (props) => {
  const {
    openEdit,
    setOpenEdit,
    itemEdit,
    indexEdit,
    elements,
    setElements,
    setCloneElements,
  } = props;
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [mass, setMass] = useState("");

  useEffect(() => {
    setPosition(itemEdit.position);
    setName(itemEdit.name);
    setSymbol(itemEdit.symbol);
    setMass(itemEdit.mass);
  }, [itemEdit, indexEdit]);

  const handleEditUser = () => {
    const newElements = [...elements];
    newElements[indexEdit] = {
      name,
      position,
      symbol,
      mass,
    };
    setElements(newElements);
    setCloneElements(newElements);
    setOpenEdit(false);
  };

  return (
    <>
      <Modal
        opened={openEdit}
        onClose={() => setOpenEdit(false)}
        title="Edit User"
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
        <Button onClick={handleEditUser}>Save</Button>
      </Modal>
    </>
  );
};

export default EditUser;
