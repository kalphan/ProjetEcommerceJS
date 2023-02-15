import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import modalsReducer from './Redux/modalsReducer';
import cartReducer from './Redux/Reducer/cartReducer';
import store from './Redux/store';

// const store = createStore(modalsReducer);
// const store = createStore(rootReducer)
// const store = createStore(cartReducer)

ReactDOM.render(
  <Provider store={ store } >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

    
  document.getElementById("root")
);
