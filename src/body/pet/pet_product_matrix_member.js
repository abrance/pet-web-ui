import React from 'react'
import {Button, Image, Anchor} from "antd";
import Phone1 from '../../asset/mapp9.png'
import SloganAnchor from "./anchor";


const textItems = [
    <div>基于网页的收银客户端</div>,
    <div>整合多种支付方式</div>,
    <div>打通小程序点单，外送及商城订单</div>,
    <div>无缝连接会员系统及卡券</div>,
]


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
            padding: '100px 2%'
        }
        const leftDivStyle = {
            padding: "100px 2%",
            width: '60%'
        }
        const text1 = '会员管理？回归生意及服务'
        const text2 = '同时管理客户及客户的宠物，后续根据宠物到店的服务记录进行复购贴心提醒，促进长期转化'
        const smallSloganStyle = {
            color: 'grey',
            letterSpacing: '.2rem'
        }
        return (
            <div style={divStyle}>
                <div style={planeStyle}>
                    <div style={leftDivStyle}>
                        <h1>{text1}</h1>
                        <p style={smallSloganStyle}>{text2}</p>
                        <Button style={{height: '30px', width: '80px', borderRadius: '16px', marginLeft: '15px', fontSize: '10px'}}>
                            会员充值
                        </Button>
                        <Button style={{height: '30px', width: '80px', borderRadius: '16px', marginLeft: '15px', fontSize: '10px'}}>
                            营销管理
                        </Button>
                        <Button style={{height: '30px', width: '80px', borderRadius: '16px', marginLeft: '15px', fontSize: '10px'}}>
                            复购留存
                        </Button>
                        <Button style={{height: '30px', width: '80px', borderRadius: '16px', marginLeft: '15px', fontSize: '10px'}}>
                            宠物管理
                        </Button>
                    </div>


                    <div style={phoneDivTopStyle}>
                        <Image width='70%' preview={false} src={Phone1} alt='图片描述'/>
                    </div>
                    {/*<App />*/}


                    {/*<div style={{paddingTop: '100px', paddingRight: '10px'}}>*/}
                    {/*    <h1>{textItems[0]}</h1>*/}
                    {/*    <p style={smallSloganStyle}>{textItems[1]}</p>*/}
                    {/*    <p style={smallSloganStyle}>{textItems[2]}</p>*/}
                    {/*    <p style={smallSloganStyle}>{textItems[3]}</p>*/}
                    {/*</div>*/}
                    <div style={{marginTop: '100px'}}>
                        <SloganAnchor />
                    </div>

                </div>
            </div>
        )
    }
}

export default PetProductMatrixMember
