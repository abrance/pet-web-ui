import React, {useEffect, useState} from "react";
import PCImage2 from '../../asset/PC2.png';
import {Image} from 'antd'
import {GlobalBackgroundColor} from "../../const";




function PetImgPlane() {
    const sectionStyle = {
        display: 'flex',
        backgroundColor: GlobalBackgroundColor,
        margin: 0,
    };

    const imageDivStyle = {
        paddingTop: '10%',
        height: '85vh',
    }

    const imageStyle = {
        backgroundColor: GlobalBackgroundColor
    }

    const divStyle = {
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '50%',
        // 使这个元素占据屏幕 85%, 使首页不会因为大图出现滚动条
        height: '85vh',
        //margin: 'auto',
        position: 'relative', // 添加相对定位
    };
    const smallSloganStyle = {
        fontSize: '20px',
        fontFamily: 'ui-sans-serif',
        fontWeight: 'bold',
        position: 'absolute', // 添加绝对定位
        top: '25%', // 位于垂直居中位置
        left: '10%', // 位于水平居中位置
        transform: 'translateY(-50%)', // 居中定位
        whiteSpace: 'pre-wrap', // 自动换行
        textAlign: 'center', // 文字水平居中
        width: `calc(100vw / 3)`,
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
    const textItems = [
        {
            'smallSloganText': '洗美服务,在线预约',
            'sloganText': '商家及客户均可进行服务预约，在线预约洗护、美容等服务'
        },
        {
            'smallSloganText': '多端订单 一站整合',
            'sloganText': '一台设备一站式整合门店线上与线下订单，包括门店收银、手机点单'
        },
        {
            'smallSloganText': '统计看板 数据分析',
            'sloganText': '门店经营情况一手掌握，数据可视化助力商家把握销售趋势，做出正确决策'
        }
    ]

    const [text, setText] = useState('');
    const [textIndex, setIndex] = useState(0);

    let image = PCImage2;
    let smallSloganText, sloganText;
    let textItem = textItems[(textIndex)%3];
    smallSloganText = textItem['smallSloganText']
    sloganText = textItem['sloganText']
    useEffect(() => {
        let index = 0;
        let interval = setInterval(() => {
            setText(sloganText.substring(0, index));
            index++;
            if (index > sloganText.length) {
                //clearInterval(interval);
                setIndex(textIndex + 1);
                textItem = textItems[(textIndex)%3];
                smallSloganText = textItem['smallSloganText']
                sloganText = textItem['sloganText']
                setText(sloganText.substring(0, index))
            }
        }, 120); // 间隔时间，控制文字逐步显示的速度

        return () => {
            clearInterval(interval); // 清除 interval，确保组件卸载时停止动画
        };
    }, [sloganText]);

    return (
        <div>
            <section style={sectionStyle}>
                <div style={divStyle}>
                    <h5 style={smallSloganStyle}>{smallSloganText}</h5>
                    <h1 style={sloganStyle}>{text}</h1> {/* 在 <div> 图片上方显示 <h1> */}
                </div>
                <div style={imageDivStyle}>
                    <Image style={imageStyle} preview={false} src={image} />
                </div>
            </section>
        </div>
    )
}


export default PetImgPlane