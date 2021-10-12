import {POST, LOGIN} from '../constant/constant';
const initialLoginState = {
  login: {email: 'loginmail@gmail.com', pass: 'abcd1234'},
};
const initialPostState = {
  posts: [],
};
export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
};

export const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case POST:
      return {
        state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
