import {POST, LOGIN} from '../constant/constant';

export function Login(login) {
  return {
    type: LOGIN,
    payload: login,
  };
}

export function postList(posts) {
  return {
    type: POST,
    payload: posts,
  };
}
