export default function redurer(state, action) {
  switch (action.type) {
    case "set_items": {
      return {
        ...state,
        items: state.items.concat(action.payload.items),
      };
    }
    case "set_item": {
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    }
    case "set_remove": {
      return {
        ...state,
        items: state.items.filter((item) => item.title !== action.payload.item),
      };
    }
    case "set_toogle": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.title === action.payload.item) {
            return { title: item.title, completed: !item.completed };
          }
          return item;
        }),
      };
    }
    default: {
      return state;
    }
  }
}
