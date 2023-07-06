import React from "react";
import './App.css';
import Navigation from "./header";
import FirstPlane from "./first_plane";

function Body() {

    const headerStyle = {};

    return (
        <div>
            <header style={headerStyle}>
                <Navigation />
            </header>
            <FirstPlane />
        </div>
    );
}

function App() {
  return (
      <div className="App">
          <div>
              <Body />
          </div>
      </div>
  );
}

export default App;
