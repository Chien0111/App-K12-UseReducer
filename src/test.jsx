import { useReducer, useRef, useState } from "react";

const initState = {
  todos: [],
};

// state: initState
// action : { type: "ADD_TODO", payload: todo }
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "UPDATE_TODO":
      return {
        todos: state.todos.map((item, index) =>
          index === action.index ? action.update : item
        ),
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((item, index) => index !== action.index),
      };
    default:
      throw new Error();
  }
};

const Test = () => {
  const buttonCloseRef = useRef("buttonClose");
  const [todo, setTodo] = useState("");
  const [todoUpdate, setTodoUpdate] = useState("");
  const [indexUpdate, setIndexUpdate] = useState();
  const [state, dispatch] = useReducer(reducer, initState);
  // ham check de cap nhat lai ham khoi tao, ham khoi tao

  const handleAdd = () => {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  };

  const handelDelete = (index) => {
    console.log(index);
    dispatch({ type: "DELETE_TODO", index, update: todoUpdate });
  };

  const handelUpdate = () => {
    dispatch({ type: "UPDATE_TODO", index: indexUpdate, update: todoUpdate });
    buttonCloseRef.current.click();
  };

  return (
    <div>
      Page Test <br />
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {state.todos.map((item, index) => (
          <>
            <li>
              {item}{" "}
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  setTodoUpdate(item);
                  setIndexUpdate(index);
                }}
              >
                Update
              </button>
              <button onClick={() => handelDelete(index)}>Delete</button>
            </li>
          </>
        ))}
      </ul>
      
      {/* Modale update */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">
                  Update
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  value={todoUpdate}
                  onChange={(e) => setTodoUpdate(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={buttonCloseRef}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handelUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;

// useReducer => redux

// useReducer: giong useState, no cho phep cac ham logic vao
// state, dispatch(useReducer) => state,setState(useState)
// (ham check cap nhat, ham khoi tao)

// add, delete, update

// khi mở modal thì sẽ show value input vào trong input modal
// Và chỉnh sửa Update lại todo
