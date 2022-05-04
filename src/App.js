import { useEffect, useReducer, useState } from "react";
import "./App.css";
import reducer from "./reducer";
import Items from "./components/Items";
import Button from "./components/Button";

const DATA = [
  { title: "item 1", completed: false },
  { title: "item 2", completed: false },
  { title: "item 3", completed: false },
];

const initialState = {
  items: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState("");

  useEffect(() => {
    dispatch({
      type: "set_items",
      payload: {
        items: DATA,
      },
    });
  }, []);

  const add = () => {
    if (!(state.items.filter((e) => e.title === item).length > 0)) {
      dispatch({
        type: "set_item",
        payload: {
          item: {
            title: item,
            completed: false,
          },
        },
      });
      setItem("");
    }
    return;
  };

  return (
    <div className="App">
      <h2>Todo App</h2>
      <div className="input-container">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <Button title="Add" onClick={add} text="Add" />
      </div>

      <Items state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
