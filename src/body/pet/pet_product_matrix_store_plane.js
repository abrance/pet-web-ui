import React from 'react'
import {Image} from "antd";
import PCImg from '../../asset/PC3.png'
import SloganAnchor from "./anchor";

class PetProductMatrixStorePlane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const StoreBodyPlaneStyle = {
            marginLeft: '10%',
            width: '80%',
            display: 'flex',
            //height: '300px',
        }
        const sloganPlaneStyle = {
            height: '650px',
            width: '30%',
        }
        const imgPlaneStyle = {
            borderRadius: '10px',
            paddingLeft: '2%',
            width: '68%',
        }
        const leftSloganBlockStyle = {
            borderRadius: '10px',
            paddingTop: '20px',
            backgroundColor: 'white',
            textAlign: 'center',
            height: '600px',
        }
        const leftSmallSloganStyle = {
            fontSize: '12px',
            fontWeight: 'bold',
            fontFamily: 'ui-sans-serif'
        }
        const leftBigSloganStyle = {
            fontSize: '36px',
            fontWeight: 'bold',
            fontFamily: 'ui-sans-serif'
        }
        const BlankSloganStyle = {
            height: 'auto'
        }
        const rightBlockStyle = {
            backgroundColor: 'white',
            borderRadius: '10px',
            display: 'flex',
            height: '620px',
        }
        const rightSloganStyle = {
            fontSize: '12px',
            fontWeight: 'bold',
            fontFamily: 'ui-sans-serif'
        }
        const rightSloganBlockStyle = {
            paddingTop: '20px',
            marginLeft: '10%',
        }
        const rightImgStyle = {
            paddingTop: '200px',
            width: '100%'
            //paddingTop: '100px',
            // backgroundImage: `url(${PCImg})`,
            // backgroundSize: '100% auto',
            // backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
            // width: '70%',
        }
        const rightImgDivStyle = {
            marginRight: '1%',
            width: '49%',
            backgroundColor: 'white',
        }

        const sloganAnchorStyle = {
            paddingTop: '100px',
            width: '40%'
        }
        // const leftBigSloganAuto = {
        //     padding: '0 20%',
        //     //width: '40%',
        //     whiteSpace: 'pre-wrap', // 自动换行
        //     fontSize: '36px',
        //     fontWeight: 'bold',
        //     fontFamily: 'ui-sans-serif'
        // }
        const leftSmallSlogan1 = 'NOT POINT OF SALE'
        const leftSmallSlogan2 = 'BUT POINT OF SERVICE'
        const leftBigSlogan1 = '门店收银系统'
        const leftBigSlogan2 = '门店服务系统'

        const leftSmallSlogan3 = '商户的生意在变化，'
        const leftSmallSlogan4 = '收银系统的定位功能早已不是收银本身。'
        const leftSmallSlogan5 = '优优择一个应用多种模式'
        const leftSmallSlogan6 = '满足不同商户的门店管理需求。'

        const leftSloganBlock = <div style={leftSloganBlockStyle}>
            <p style={leftSmallSloganStyle}>{leftSmallSlogan1}</p>
            <p style={leftSmallSloganStyle}>{leftSmallSlogan2}</p>
            <div style={leftBigSloganStyle}>{leftBigSlogan1}<span>?</span></div>
            <div style={leftBigSloganStyle}>{leftBigSlogan2}<span>!</span></div>
            {/*<div style={leftBigSloganAuto}>{leftBigSlogan}<span>?</span></div>*/}
            <p style={leftSmallSloganStyle}>{leftSmallSlogan3}</p>
            <p style={leftSmallSloganStyle}>{leftSmallSlogan4}</p>
            <p style={leftSmallSloganStyle}>{leftSmallSlogan5}</p>
            <p style={leftSmallSloganStyle}>{leftSmallSlogan6}</p>
            <div style={BlankSloganStyle}></div>
        </div>

        const rightSlogan1 = '基于IPAD门店收银'
        const rightSlogan2 = '结合多种样式收银'

        const rightSloganBlock = <div style={rightSloganBlockStyle}>
            <div style={rightSloganStyle}>{rightSlogan1}</div>
            <div style={rightSloganStyle}>{rightSlogan2}</div>
            <div style={BlankSloganStyle}></div>
        </div>

        const rightBlock = <div style={rightBlockStyle}>
            <div style={sloganAnchorStyle}>
                <SloganAnchor />
            </div>


            <div style={rightImgDivStyle}>
                <Image preview={false} src={PCImg} style={rightImgStyle} />
            </div>
        </div>

        return (
            <div style={StoreBodyPlaneStyle}>
                <div style={sloganPlaneStyle}>
                    {leftSloganBlock}
                </div>
                <div style={imgPlaneStyle}>
                    {rightBlock}
                </div>
            </div>
        )
    }
}

export default PetProductMatrixStorePlane
