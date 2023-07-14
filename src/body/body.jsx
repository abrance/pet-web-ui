import React from "react";
import {connect} from "react-redux";
import ImgPlane from "./img_plane";
import CompanyPlane from "./company";

export const mapStateToProps = (state) => {
    return {
        app: state.app, // 通过映射将 app 属性映射为组件的 prop
    };
};

export class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const bodyStyle = {
            backgroundColor: 'rgb(246, 246, 248)',
        }

        let appName = this.props.app
        let element = <ImgPlane pageName='index' />

        if (appName === "index") {
            element = <ImgPlane pageName='index' />
        } else if (appName === "pet_product_advantage_plane") {
            element = <ImgPlane pageName='pet_product_advantage_plane' />
        } else if (appName === "company") {
            element = <CompanyPlane/>
        }
        return (
            <div style={bodyStyle}>
                {element}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Body);
