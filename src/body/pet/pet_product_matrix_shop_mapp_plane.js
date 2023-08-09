import React from "react";
import {Image} from "antd";
import Phone1 from "../../asset/phone1.png"
import Mapp2 from "../../asset/mapp5.png"
import Mapp3 from "../../asset/mapp6.png"
import Mapp4 from "../../asset/mapp7.png"
import Mapp5 from "../../asset/mapp8.png"

class PetProductMatrixShopMappPlane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const phoneDivLsStyle = {
            marginLeft: '10vw',
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
                        <Image width={'157px'} height={'313px'} style={imgStyle} preview={false} src={Mapp4} alt='图片描述'/>
                    </div>
                    <div style={phoneDivTopStyle}>
                        <Image width={'157px'} height={'313px'} style={imgStyle} preview={false} src={Mapp5} alt='图片描述'/>
                    </div>
                </div>
            </>
        )
    }
}

export default PetProductMatrixShopMappPlane
