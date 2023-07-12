import React from "react";
import './App.css';

import ConnectedNavigation from "./header";
import Body from "./body";


function NavHeader() {
    return (
        <header><ConnectedNavigation /></header>
    )
}

function App() {
  return (
      <div className="App">
          <NavHeader />
          <Body />
      </div>
  );
}

export default App;
