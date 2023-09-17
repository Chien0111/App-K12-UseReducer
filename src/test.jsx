import { useState } from "react";
import { Table, Button, Modal, Input } from "@mantine/core";
import AddUser from "./component/addUser";

const Test = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [elements, setElements] = useState([
    {
      name: "Nguyen Xuan Chien",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "Nguyen Xuan Chien",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "Nguyen Xuan Chien",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
  ]);

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
      <td>
        <Button color="yellow">Edit</Button> <Button color="red">Delete</Button>
      </td>
    </tr>
  ));

  return (
    <>
      <Button onClick={() => setOpenAdd(!openAdd)}>Add</Button>
      <div style={{ margin: "20px", padding: "20px" }}>
        <Table striped withBorder withColumnBorders>
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
              <th>Ation</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
      <AddUser openAdd={openAdd} setOpenAdd={setOpenAdd} />
    </>
  );
};

export default Test;

// chia nho cac component
// tich thu vien UI vao react
// add, edit, delete
