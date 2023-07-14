import React, { useState, useEffect }  from "react";
import logo from '../asset/PC.jpg';
import {PetProductAdvantageDes} from "./pet/pet_product_advan_des";


const buttonContainerStyle = {
    padding: "30px 150px",
    position: 'absolute',
    top: 'calc(50% + 160px)', // 调整按钮容器的垂直位置
    left: '10%', // 调整按钮容器的水平位置
    width: `calc(100vw / 6)`,  // 控制 button 距离
    display: 'flex',
    justifyContent: 'space-between',
};


const connectMeStyle = {
    backgroundColor: 'white',
    color: 'black',
    //display: 'flex',
}

const ConnectMeButton = <div style={buttonContainerStyle}>
    <button style={ connectMeStyle }>
        联系我们
    </button>
</div>

function ImgPlane({pageName}) {
    const sectionStyle = {
        backgroundColor: 'rgb(246, 246, 248)',
        margin: 0,
    };

    const divStyle = {
        backgroundImage: `url(${logo})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        // 使这个元素占据屏幕 85%, 使首页不会因为大图出现滚动条
        height: '85vh',
        //margin: 'auto',
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
        const sloganText = '一站式收银、小程序及会员整合解决方案'; // 你想要显示的文字

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

    let describe, connectMeBtn;
    if (pageName === 'index') {
        connectMeBtn = ConnectMeButton
    } else if (pageName === 'pet_product_advantage_plane') {
        describe = PetProductAdvantageDes
    }

    return (
        <div>
            <section style={sectionStyle}>
                <div style={divStyle}>
                    <h1 style={sloganStyle}>{text}</h1> {/* 在 <div> 图片上方显示 <h1> */}
                    {connectMeBtn}
                </div>
            </section>
            {describe}
        </div>
    )
}

export default ImgPlane
