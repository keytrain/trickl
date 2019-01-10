import { API } from "aws-amplify";
// const storage = window.localStorage;

export const createThought = (rootId, text) => {
  // let thought = {
  //   children: [
  //     {
  //       id: "thought-uuid",
  //       content: {
  //         children: "",
  //         text: text,
  //         metadata: {
  //           timestamp: Date.now(),
  //         },
  //       },
  //     },
  //   ],
  // };

  // storage.setItem(parentId, JSON.stringify(thought));
  return API.post("thoughts", "/thoughts", {
    body: {
      rootId,
      text,
    },
  }).catch(e => {
    console.warn(e || e.message);
  });
};

export const addThought = id => {};

export const getThought = id => {
  return API.get("thoughts", `/thoughts/${id}`, {}).catch(e => {
    console.warn(e.message);
  });
};
