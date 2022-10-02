//@ts-ignore
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { store } from './store';

import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
