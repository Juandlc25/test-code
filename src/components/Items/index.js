import React from "react";
import Item from "../Item";
import "./style.css";

function Items({ state, dispatch }) {
  return (
    <ul className="items">
      {state.items.map(({ title, completed }, key) => (
        <Item
          key={key}
          title={title}
          completed={completed}
          dispatch={dispatch}
          state={state}
        />
      ))}
    </ul>
  );
}

export default Items;
