import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.css";
// import Counter from "./components/counter";

// <link
//   rel="stylesheet"
//   href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
//   integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
//   crossorigin="anonymous"
// />

// /* The following line can be included in a src/App.scss */

// @import "~bootstrap/scss/bootstrap";

// /* The following line can be included in your src/index.js or App.js file */

// import './App.scss';



ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Counter /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
