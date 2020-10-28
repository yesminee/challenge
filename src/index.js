import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import App from './App';
import reportWebVitals from './reportWebVitals'; //pttr a enlever
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Reducer from "./Reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { fetchUsers, fetchPosts, fetchComments } from "./Actions";

const store = createStore(Reducer, applyMiddleware(thunk));
store.dispatch(fetchUsers());
store.dispatch(fetchPosts());
store.dispatch(fetchComments());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
