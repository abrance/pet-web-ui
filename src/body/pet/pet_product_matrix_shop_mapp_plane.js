import React from "react";
import {Image} from "antd";
import Phone1 from "../../asset/phone1.png"
import Phone2 from "../../asset/phone2.png"
import Mapp2 from "../../asset/mapp2.png"
import Mapp3 from "../../asset/mapp3.png"
import Mapp4 from "../../asset/mapp4.png"
import Phone5 from "../../asset/phone5.png"

class PetProductMatrixShopMappPlane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const phoneDivLsStyle = {
            marginLeft: '10%',
            width: '80%',
            // padding: '20px 10%',
            display: 'flex'
        }
        const phoneDivBottomStyle = {
            padding: '100px 2%'
        }
        const phoneDivTopStyle = {
            padding: '20px 2%'
        }
        const imgStyle = {
            backgroundColor: 'rgba(235, 236, 237, 1)'
        }
        return (
            <>
                <div style={phoneDivLsStyle}>
                    <div style={phoneDivTopStyle}>
                        <Image width={'157px'} height={'313px'} style={imgStyle} preview={false} src={Phone1} alt='图片描述'/>
                    </div>
                    <div style={phoneDivBottomStyle}>
                        <Image width={'157px'} height={'313px'} style={imgStyle} preview={false} src={Mapp2} alt='图片描述'/>
                    </div>
                    <div style={phoneDivTopStyle}>
                        <Image width={'157px'} height={'313px'} style={imgStyle} preview={false} src={Mapp3} alt='图片描述'/>
                    </div>
                    <div style={phoneDivBottomStyle}>
                        <Image width={'157px'} height={'313px'} style={imgStyle} preview={false} src={Phone2} alt='图片描述'/>
                    </div>
                    <div style={phoneDivTopStyle}>
                        <Image width={'157px'} height={'313px'} style={imgStyle} preview={false} src={Mapp4} alt='图片描述'/>
                    </div>
                </div>
            </>
        )
    }
}

export default PetProductMatrixShopMappPlane
