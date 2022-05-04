import React from "react";
import Button from "../Button";
import "./style.css";

function Item({ title, dispatch, completed }) {
  const remove = (e) => {
    dispatch({
      type: "set_remove",
      payload: {
        item: e.target.id,
      },
    });
  };
  return (
    <div className="item">
      <div>
        <input
          type="checkbox"
          checked={completed ? completed : false}
          onChange={() =>
            dispatch({ type: "set_toogle", payload: { item: title } })
          }
        />
        <li style={{ textDecoration: completed ? "line-through" : "none" }}>
          {title}
        </li>
      </div>

      <Button id={title} onClick={remove} text="Remove" />
    </div>
  );
}

export default Item;
