import React from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Main from "./views/Main";
import NavMain from "./components/Header";


function App() {
  return (
    <React.Fragment>
<Route exact path="/" component={Main} />
</React.Fragment>
  );
}

export default App;
