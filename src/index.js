import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import { Provider } from "react-redux";

import config from "./config";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./util/configureStore.js";

import "normalize.css";
import "./index.css";

import App from "./components/App";
import DevTools from './components/DevTools/DevTools';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: "users",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
    <App />
    <DevTools />
  </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
