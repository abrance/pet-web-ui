import React, {useEffect, useState} from "react";
import Icon from "./asset/logo.svg"

function CompanyPlane() {
    const sectionStyle = {
        //backgroundColor: 'rgb(246, 246, 248)',
        margin: 0,
        padding: '3% 10%'
    };

    const divStyle = {}
    const sloganStyle = {
        fontSize: '50px',
        fontFamily: 'ui-sans-serif',
        fontWeight: 'bold',
        //position: 'absolute', // 添加绝对定位
        //top: '50%', // 位于垂直居中位置
        //left: '10%', // 位于水平居中位置
        //transform: 'translateY(-50%)', // 居中定位
        whiteSpace: 'pre-wrap', // 自动换行
        textAlign: 'center', // 文字水平居中
        width: `calc(100vw / 2)`,
        height: '250px'
    };

    const imgStyle = {
        height: "132px",
        width: "132px",
    }

    const BlankSectionStyle = {
        //backgroundColor: 'rgb(246, 246, 248)',
    }

    const img = <img src={Icon} style={imgStyle}/>

    const images = [];
    for (let i = 0; i < 12; i++) {
        images.push(<img src={Icon} style={imgStyle} />);
    }

    const element = <div>{images}</div>;
    return (
        <div>
            <section style={sectionStyle}>
                <div style={divStyle}>
                    <h1 style={sloganStyle}>Pet Web 有很多的合作商户<br/>期待您的加入</h1> {/* 在 <div> 图片上方显示 <h1> */}
                </div>
            </section>
            <section style={BlankSectionStyle}>
                <div>
                    {element}
                </div>
                <div>{element}</div>
                <div>{element}</div>
            </section>
        </div>
    )
}

export default CompanyPlane
