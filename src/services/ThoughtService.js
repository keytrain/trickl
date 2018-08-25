// import { API } from "aws-amplify"
const storage = window.localStorage;

export const createThought = parentId => {
  storage.setItem("parentId");
  // return API.post("users", "/users", {}).catch(e => {
  //   console.warn(e.message)
  // })
};

export const getThought = id => {
  //   return API.get("users", "/users", {}).catch(e => {
  //     console.warn(e.message)
  //   })
};
