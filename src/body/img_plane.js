import React, { useState, useEffect }  from "react";
import PCImage from '../asset/PC1.png';
import PCImage2 from '../asset/PC2.png';
import {Image} from 'antd'

import {GlobalBackgroundColor} from "../const";
import {ConnectMeButton} from "./common/common";


function ImgPlane({pageName}) {
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

    const [text, setText] = useState('');

    let describe, connectMeBtn;
    let smallSloganText = 'Bitoon Pet'
    let image = PCImage;
    if (pageName === 'index') {
        connectMeBtn = ConnectMeButton
    } else if (pageName === 'pet_product_advantage_plane') {
        //describe = PetProductAdvantageDes
        smallSloganText = '洗美服务,在线预约'
        image = PCImage2
    } else if (pageName === 'food_product_introduce_plane') {
        smallSloganText = '商家后台管理系统融合经营看板、商品管理、会员管理、店铺管理等模块，一站式的全店管理系统'
    }

    useEffect(() => {
        let index = 0;
        let sloganTextV = '一站式宠物店管理系统，集收银、小程序、会员管理于一体All in one';
        if (pageName === 'pet_product_advantage_plane') {
            sloganTextV = '商家及客户均可支持服务预约,在线预约洗护,美容等服务'
        } else if (pageName === 'food_product_introduce_plane') {
            sloganTextV = '微信下单小程序活动触达、一键点单、取餐提醒、会员积分、充值消费等功能，一个小程序全搞定'
        }
        const sloganText = sloganTextV
        let interval = setInterval(() => {
            setText(sloganText.substring(0, index));
            index++;

            if (index > sloganText.length) {
                clearInterval(interval);
            }
        }, 100); // 间隔时间，控制文字逐步显示的速度

        return () => {
            clearInterval(interval); // 清除 interval，确保组件卸载时停止动画
        };
    }, [pageName]);

    return (
        <div>
            <section style={sectionStyle}>
                <div style={divStyle}>
                    <h5 style={smallSloganStyle}>{smallSloganText}</h5>
                    <h1 style={sloganStyle}>{text}</h1> {/* 在 <div> 图片上方显示 <h1> */}
                    {connectMeBtn}
                </div>
                <div style={imageDivStyle}>
                    <Image style={imageStyle} preview={false} src={image} />
                </div>
            </section>
        </div>
    )
}

export default ImgPlane
