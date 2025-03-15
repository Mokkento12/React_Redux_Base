import {
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
} from "./types";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  console.log("comments reducer>>>>", action);

  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: Array.isArray(action.data)
          ? [...state.comments, ...action.data]
          : [...state.comments, action.data], // Если data — объект, добавляем его как один элемент
      };

    case COMMENTS_LOAD:
      const commentsNew = Array.isArray(action.data)
        ? action.data.map((res) => ({
            text: res.name,
            id: res.id,
          }))
        : []; // Если action.data не массив, возвращаем пустой массив

      return {
        ...state,
        comments: commentsNew,
      };

    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;

      const itemIndex = comments.findIndex((res) => res.id === data.id);

      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];
      return {
        ...state,
        comments: nextComments,
      };

    case COMMENT_DELETE:
      return (() => {
        const { id } = action;
        const { comments } = state;

        const itemIndex = comments.findIndex((res) => res.id === id);

        const nextComments = [
          ...comments.slice(0, itemIndex),
          ...comments.slice(itemIndex + 1),
        ];
        return {
          ...state,
          comments: nextComments,
        };
      })();
    default:
      return state;
  }
};
