import { Auth } from "aws-amplify"

export const checkSession = () => {
  return Auth.currentSession().catch(e => {
    if (e !== "No current user") {
      console.warn("No session")
    }
    console.warn(e)
  })
}

export const login = (email, password) => {
  return Auth.signIn(email, password).catch(e => {
    console.warn(e.message)
  })
}

export const logout = () => {
  return Auth.signOut().catch(e => {
    console.warn(e.message)
  })
}
