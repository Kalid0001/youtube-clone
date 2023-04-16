import {
  COMMENT_LIST_DISABLED,
  COMMENT_LIST_FAIL,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
} from "../actionTypes";

export const commentListReducer = (
  state = {
    loading: true,
    comments: null,
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
    case COMMENT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_LIST_SUCCESS:
      return {
        ...state,
        comments: payload,
        loading: false,
      };
    case COMMENT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case COMMENT_LIST_DISABLED:
      return {
        ...state,
        loading: false,
        comments: false,
      };

    default:
      return state;
  }
};
