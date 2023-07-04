import logo from '../public/PC.jpg';
import './App.css';
import Navigation from "./header";
import React from "react";

function Body() {
    const sectionStyle = {
        backgroundColor: 'rgb(246, 246, 248)',
    };

    const headerStyle = {
        height: 0
    };

    const divStyle = {
        backgroundImage: `url(${logo})`, // 使用 <img> 的图片作为背景图
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '800px',
        margin: 'auto',
    };

    const sloganStyle = {
        fontSize: '50px',
        fontFamily: 'ui-sans-serif',
        fontWeight: 'bold',
    };

    return (
        <div>
            <header>
                <Navigation />
            </header>
            <section style={sectionStyle}>
                <div style={divStyle}>
                    <h1 style={sloganStyle}>Pet 是一个好网站</h1>
                </div> {/* 使用背景图的 <div> */}
            </section>
        </div>
    );
}


// <div style={sloganRegionStyle}>
//     <span style={sloganStyle}>Pet 是一个非常好的产品</span>
// </div>

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
