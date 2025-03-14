import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
} from "./types";

export function incrementLikes() {
  return {
    type: INCREMENT,
  };
}
export function decrementLikes() {
  return {
    type: DECREMENT,
  };
}
export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}
export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}
export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
}
export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}
export function commentLoad() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10"
      );
      const jsonData = await response.json(); // ✅ Ждём парсинга JSON
      console.log("Загруженные комментарии:", jsonData); // ✅ Для отладки

      dispatch({
        type: COMMENTS_LOAD,
        data: jsonData,
      });
    } catch (error) {
      console.error("Ошибка загрузки комментариев:", error);
    }
  };
}
