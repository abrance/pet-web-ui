import React from 'react';
import FliLogo from './asset/flipos_logo.png';
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        updateApp: (pageName) => {
            dispatch({ type: 'UPDATE_APP', payload: pageName }); // 分发一个 action 更新 app 字段的值
        },
    };
};

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
            height: "24px",
            margin: "auto",
        };
        const liStyle = {
            float: "left",
            display: "flex",
            alignItems: "center",
            height: "80px",
        };
        return (
            <ul style={navStyle}>
                <li style={NULLLeftBlockStyle}>
                    {/*<a style={linkStyle} href="/docs"></a>*/}
                </li>
                <li style={liStyle} className="pic">
                    <div>
                        <img
                            src={FliLogo}
                            alt="图片描述"
                            onClick={this.handleClick('first_plane')}
                            style={imgStyle}
                        />
                    </div>
                </li>
                <li style={LongLiStyle}>
                    <a style={linkStyle}  onClick={this.handleClick('why_plane')}>
                        Why PetWeb
                    </a>
                </li>
                <li style={ShortLiStyle}>
                    <a style={linkStyle} onClick={this.handleClick('company')}>
                        合作商户
                    </a>
                </li>
                <li style={ShortLiStyle}>
                    <a style={linkStyle} href="#">
                        产品
                    </a>
                </li>
                <li style={ShortLiStyle}>
                    <a style={linkStyle} href="#">
                        价格
                    </a>
                </li>
                <li style={ShortLiStyle}>
                    <a style={linkStyle} href="#">
                        联系我们
                    </a>
                </li>
                <li style={NULLRightBlockStyle}>
                    <a style={linkStyle} href="#">
                    </a>
                </li>
                <li style={RightFloatLiStyle}>
                    <a style={linkStyle} href="#">
                        后台登录
                    </a>
                </li>
            </ul>
        );
    }
}

const ConnectedNavigation = connect(null, mapDispatchToProps)(Navigation)

export default ConnectedNavigation;
