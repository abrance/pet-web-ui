import React from 'react'
import {Image} from "antd";
import Phone1 from '../../asset/phone8.png'

class PetProductMatrixMember extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const divStyle = {
            padding: "0 10%",
        }
        const planeStyle = {
            backgroundColor: 'white',
            display: 'flex',
            borderRadius: '10px',
            height: '620px'
        }
        const phoneDivTopStyle = {
            padding: '20px 2%'
        }
        const leftDivStyle = {
            padding: "100px 2%",
            width: '40%'
        }
        const text1 = '会员管理？回归生意及服务'
        const text2 = '同时管理客户及客户的宠物，后续根据宠物到店的服务记录进行复购贴心提醒，促进长期转化'
        const smallSloganStyle = {
            color: 'grey',
            letterSpacing: '.2rem'
        }
        const text3 = '基于网页的收银客户端'
        const text4 = '整合多种支付方式'
        const text5 = '打通小程序点单，外送及商城订单'
        const text6 = '无缝连接会员系统及卡券'
        return (
            <div style={divStyle}>
                <div style={planeStyle}>
                    <div style={leftDivStyle}>
                        <h1>{text1}</h1>
                        <p style={smallSloganStyle}>{text2}</p>
                    </div>
                    <div style={phoneDivTopStyle}>
                        <Image width='70%' preview={false} src={Phone1} alt='图片描述'/>
                    </div>
                    <div>
                        <h1>{text3}</h1>
                        <p style={smallSloganStyle}>{text4}</p>
                        <p style={smallSloganStyle}>{text5}</p>
                        <p style={smallSloganStyle}>{text6}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PetProductMatrixMember
