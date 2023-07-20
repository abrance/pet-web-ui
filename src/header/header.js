import React from 'react';
import HiPetLogo from '../asset/hi_pet_logo1.png';
import {connect} from "react-redux";
import {ConnectedNavbar} from "./navbar";
import ConnectMeModal from "../modal/connect_me";
import {mapDispatchToProps} from "../body/dispatch_action";
import {Button, Image} from "antd";
import MappLogo from "../asset/mapp.png"
import './header.css'


class Navigation extends React.Component {
    handleClick = (pageName) => {
        return () => {
            this.props.updateApp(pageName); // 分发一个 action 更新 app 字段的值
        };
    };
    render() {
        const navStyle = {
            listStyleType: "none",
            margin: 0,
            padding: 0,
            overflow: "hidden",
            backgroundColor: "#fff",
        };
        const NULLLeftBlockStyle = {
            paddingLeft: "100px",
            float: "left",
            display: "flex",
            alignItems: "center",
            height: "80px",
        };
        const NULLRightBlockStyle = {
            marginRight: "100px",
            float: "right",
            display: "flex",
            alignItems: "center",
            height: "80px",
        };
        const RightFloatLiStyle = {
            float: "right",
            display: "flex",
            alignItems: "center",
            height: "80px",
        };
        const linkStyle = {
            display: "block",
            color: "black",
            textAlign: "center",
            padding: "14px 16px",
            textDecoration: "none",
            fontFamily: "ui-sans-serif",
            fontSize: "12.475px",
            fontWeight: "bold",
        };
        const LongLiStyle = {
            marginLeft: "100px",
            float: "left",
            display: "flex",
            alignItems: "center",
            height: "80px",
        };
        const ShortLiStyle = {
            float: "left",
            display: "flex",
            alignItems: "center",
            height: "80px",
            marginLeft: "10px",
            marginRight: "10px",
        };
        const imgStyle = {
            height: "40px",
            margin: "auto",
        };
        const HiPetLogoStyle = {
            width: '162px',
            float: "left",
            display: "flex",
            alignItems: "center",
            height: "80px",
        }
        const buttonFontStyle = {
            color: 'white',
        }
        const logo = <Image preview={false} src={MappLogo} />
        return (
            <ul style={navStyle}>
                <li style={NULLLeftBlockStyle}>
                </li>
                <li style={HiPetLogoStyle} className="pic">
                    <div>
                        <Image
                            preview={false}
                            src={HiPetLogo}
                            alt="图片描述"
                            onClick={this.handleClick('index')}
                            style={imgStyle}
                        />
                    </div>
                </li>
                <li style={LongLiStyle}>
                    <div style={linkStyle}
                         //onClick={this.handleClick('pet_product_advantage_plane')}
                    >
                        <ConnectedNavbar title="宠物管理系统" keyword="pet"/>
                    </div>
                </li>
                <li style={ShortLiStyle}>
                    <a style={linkStyle} onClick={this.handleClick('company')}>
                        <ConnectedNavbar title="餐饮管理系统" keyword="food"/>
                    </a>
                </li>
                <li style={ShortLiStyle}>
                    {/*<a style={linkStyle} href="#">*/}
                    {/*    联系我们*/}
                    {/*</a>*/}
                    <ConnectMeModal />
                </li>
                <li style={RightFloatLiStyle}>
                    <Button id='mappbutton' icon={logo}>宠百通</Button>
                </li>
            </ul>
        );
    }
}

const ConnectedNavigation = connect(null, mapDispatchToProps)(Navigation)

export default ConnectedNavigation;
