import { API } from "aws-amplify";
// const storage = window.localStorage;

export const createColumn = (id, text) => {
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
      id,
      text,
    },
  }).catch(e => {
    console.warn(e || e.message);
  });
};

export const addThought = (id, text) => {
  return API.put("thoughts", `/thoughts/${id}`, {
    body: {
      action: "add",
      text,
    },
  }).catch(e => {
    console.warn(e || e.message);
  });
};

export const delThought = (id, index) => {
  return API.put("thoughts", `/thoughts/${id}`, {
    body: {
      action: "delete",
      index,
    },
  }).catch(e => {
    console.warn(e || e.message);
  });
};

export const editThought = (id, index, text) => {
  return API.put("thoughts", `/thoughts/${id}`, {
    body: {
      action: "update",
      index,
      text,
    },
  }).catch(e => {
    console.warn(e || e.message);
  });
};

export const getThought = id => {
  return API.get("thoughts", `/thoughts/${id}`).catch(e => {
    console.warn(e.message);
  });
};
