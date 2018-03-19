import React from "react";
import ReactDOM from "react-dom";
//import reducer from "./reducers";
import { Provider } from "react-redux";
import store from "./store";
import "./assets/sass/index.css";
import App from "./App";


//let store = createStore(reducer);

  ReactDOM.render(
    <Provider store={store}>
    <div className="container">
      <App />
    </div>
    </Provider>,
    document.getElementById("root")
  );

/*
store.subscribe(render);

render();
*/
