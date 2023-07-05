import logo from './asset/PC.jpg';
import './App.css';
import Navigation from "./header";
import React, { useState, useEffect }  from "react";

function Body() {
    const sectionStyle = {
        backgroundColor: 'rgb(246, 246, 248)',
        margin: 0,
    };

    const headerStyle = {};

    const divStyle = {
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '800px',
        margin: 'auto',
        position: 'relative', // 添加相对定位
    };

    const sloganStyle = {
        fontSize: '50px',
        fontFamily: 'ui-sans-serif',
        fontWeight: 'bold',
        position: 'absolute', // 添加绝对定位
        top: '50%', // 位于垂直居中位置
        left: '10%', // 位于水平居中位置
        transform: 'translateY(-50%)', // 居中定位
        whiteSpace: 'pre-wrap', // 自动换行
        textAlign: 'center', // 文字水平居中
        width: `calc(100vw / 3)`,
    };

    const [text, setText] = useState('');

    useEffect(() => {
        const sloganText = 'Pet 是一个非常好的产品, 要了解详情，请联系我们'; // 你想要显示的文字

        let index = 0;
        const interval = setInterval(() => {
            setText(sloganText.substring(0, index));
            index++;

            if (index > sloganText.length) {
                clearInterval(interval);
            }
        }, 100); // 间隔时间，控制文字逐步显示的速度

        return () => {
            clearInterval(interval); // 清除 interval，确保组件卸载时停止动画
        };
    }, []);

    return (
        <div>
            <header style={headerStyle}>
                <Navigation />
            </header>
            <section style={sectionStyle}>
                <div style={divStyle}>
                    <h1 style={sloganStyle}>{text}</h1> {/* 在 <div> 图片上方显示 <h1> */}
                </div>
            </section>
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
