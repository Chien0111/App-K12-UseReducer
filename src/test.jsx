import { useEffect, useState } from "react";
import { Table, Button, Input, CloseButton, Pagination } from "@mantine/core";
import AddUser from "./component/addUser";
import EditUser from "./component/editUser";

const Test = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [itemEdit, setItemEdit] = useState("");
  const [indexEdit, setIndexEdit] = useState();
  const [name, setName] = useState("");
  const [isShowSearch, setIsShowSearch] = useState(true);
  const [cloneElements, setCloneElements] = useState([
    {
      name: "A",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "B",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "C",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "D",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "F",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "G",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "H",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "J",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "K",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "L",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "Q",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
    {
      name: "W",
      position: "Dev",
      symbol: 2,
      mass: "none",
    },
  ]);
  const [elements, setElements] = useState();
  const [totalPage, setTotalPage] = useState(
    Math.ceil(cloneElements.length / 5)
  );
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (name.length) {
      setIsShowSearch(false);
      return;
    }
    setIsShowSearch(true);
    handlePage(activePage);
  }, [name, activePage]);

  const handlePage = (number) => {
    const startPage = (number - 1) * 5;
    const endPage = startPage + 5;
    const newElement = cloneElements.slice(startPage, endPage);
    console.log("startPage", startPage);
    console.log("endPage", endPage);
    console.log("newElement:", newElement);
    setElements(newElement);
  };

  const handleOpenEdit = (element, index) => {
    setIndexEdit(index);
    setItemEdit(element);
    setOpenEdit(true);
  };

  const handleSearch = () => {
    const newName = name.toLocaleLowerCase();
    const newElements = cloneElements.filter((item) =>
      item.name.toLocaleLowerCase().includes(newName)
    );
    setElements(newElements);
  };

  const handleSearchAll = () => {
    setName("");
    setElements(cloneElements);
  };

  const rows = elements?.map((element, index) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
      <td>
        <Button color="yellow" onClick={() => handleOpenEdit(element, index)}>
          Edit
        </Button>{" "}
        <Button color="red">Delete</Button>
      </td>
    </tr>
  ));

  return (
    <>
      <div style={{ display: "flex" }}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: 180 }}
          placeholder="Search Name"
          rightSectionPointerEvents="all"
          rightSection={
            <CloseButton
              aria-label="Clear input"
              onClick={handleSearchAll}
              style={{ display: name ? undefined : "none" }}
            />
          }
        />
        <Button disabled={isShowSearch} onClick={handleSearch}>
          Search
        </Button>
        <Button onClick={() => setOpenAdd(!openAdd)}>Add</Button>
      </div>
      <div style={{ margin: "20px", padding: "20px" }}>
        <Table striped withBorder withColumnBorders>
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        {/* Phan trang */}
        <Pagination
          value={activePage}
          onChange={setActivePage}
          total={totalPage}
        />
        ; ;
      </div>
      {/* Modal User */}
      <AddUser
        openAdd={openAdd}
        setOpenAdd={setOpenAdd}
        elements={elements}
        setElements={setElements}
        setCloneElements={setCloneElements}
      />
      <EditUser
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        itemEdit={itemEdit}
        indexEdit={indexEdit}
        elements={elements}
        setElements={setElements}
        setCloneElements={setCloneElements}
      />
    </>
  );
};

export default Test;

// chia nho cac component
// tich thu vien UI vao react
// add, edit, delete

// 1 page hien thi 5 data
// click page thay data
