import React from "react";
import './App.css';
import Navigation from "./header";
import FirstPlane from "./first_plane";
import CompanyPlane from "./company";
import WhyPlane from "./why";

class Body extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pageName: "first_plane",
        }
        this.headerStyle = {}
    }

    handleUpdatePage = (newPage) => {
        this.setState({pageName: newPage})
    }

    //const headerStyle = {};

    //var pageName="first_plane"

    render() {
        var element = <FirstPlane />
        var s = this.state
        if (this.state.pageName === "first_plane") {
            element = <FirstPlane />
        } else if (this.state.pageName === "why_plane") {
            element = <WhyPlane />
        } else if (this.state.pageName === "company") {
            element = <CompanyPlane />
        }
        return (
            <div>
                <header style={this.headerStyle}>
                    <Navigation proper={s} OnUpdatePage={this.handleUpdatePage} />
                </header>

                {element}
            </div>
        )
    }
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
