import React from "react";
import {Image} from "antd";
import Phone1 from "../../asset/phone1.png"
import Phone2 from "../../asset/phone2.png"
import Phone3 from "../../asset/phone3.png"
import Phone4 from "../../asset/phone4.png"
import Phone5 from "../../asset/phone5.png"
import Phone6 from "../../asset/phone6.png"

class PetProductMatrixShopMappPlane extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const phoneDivLsStyle = {
            display: 'flex'
        }
        const phoneDivBottomStyle = {
            padding: '100px 70px'
        }
        const phoneDivTopStyle = {
            padding: '20px 70px'
        }

        return (
            <>
                <div style={phoneDivLsStyle}>
                    <div style={phoneDivTopStyle}>
                        <Image src={Phone1} alt='图片描述'/>
                    </div>
                    <div style={phoneDivBottomStyle}>
                        <Image src={Phone2} alt='图片描述'/>
                    </div>
                    <div style={phoneDivTopStyle}>
                        <Image src={Phone5} alt='图片描述'/>
                    </div>
                    <div style={phoneDivBottomStyle}>
                        <Image src={Phone1} alt='图片描述'/>
                    </div>
                    <div style={phoneDivTopStyle}>
                        <Image src={Phone1} alt='图片描述'/>
                    </div>
                </div>
            </>
        )
    }
}

export default PetProductMatrixShopMappPlane