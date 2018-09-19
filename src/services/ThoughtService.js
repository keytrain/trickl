// import { API } from "aws-amplify"

export const createThought = (parentId, text) => {
  let thought = {
    children: [
      {
        id: "thought-uuid",
        content: {
          children: "",
          text: text,
          metadata: {
            timestamp: Date.now(),
          },
        },
      },
    ],
  };

  storage.setItem(parentId, JSON.stringify(thought));
  // return API.post("users", "/users", {}).catch(e => {
  //   console.warn(e.message)
  // })
};

export const addThought = id => {};

export const getThought = id => {
  //   return API.get("users", "/users", {}).catch(e => {
  //     console.warn(e.message)
  //   })
};
