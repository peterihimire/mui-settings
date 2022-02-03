import React from "react";

import store from "./config-store";

import { Provider } from "react-redux";

export default function StoreWrapper(props) {
  return <Provider {...props} store={store} />;
}
