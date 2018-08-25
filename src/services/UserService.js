import { API } from "aws-amplify"

export const createUser = () => {
  return API.post("users", "/users", {}).catch(e => {
    console.warn(e.message)
  })
}

export const getUser = id => {
  return API.get("users", "/users", {}).catch(e => {
    console.warn(e.message)
  })
}
