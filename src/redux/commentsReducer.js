import { COMMENT_CREATE } from "./types";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  console.log("comments Reducer>", action);

  return state;

  // switch (action.type) {
  //   case INPUT_TEXT:
  //     return {
  //       ...state,
  //       text: action.text,
  //     };
  //   default:
  //     return state;
  // }
};
