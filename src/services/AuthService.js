import { Auth } from "aws-amplify";

export const checkSession = () => {
  return Auth.currentSession().catch(e => {
    if (e !== "No current user") {
      console.warn("No session");
    }
    console.warn(e);
  });
};

export const login = (email, password) => {
  return Auth.signIn(email, password);
};

export const logout = () => {
  return Auth.signOut();
};

export const signup = (email, password) => {
  return Auth.signUp({
    username: email,
    password: password,
  });
};

export const verifySignup = (email, confirmationCode) => {
  return Auth.confirmSignUp(email, confirmationCode);
};

export const resendVerify = email => {
  return Auth.resendSignUp(email);
};
