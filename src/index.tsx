import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/types";
import "./"

ReactDOM.render(
  //@ts-ignore
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
