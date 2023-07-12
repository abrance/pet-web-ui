import React from "react";
import FirstPlane from "./first_plane";
import CompanyPlane from "./company";
import WhyPlane from "./why";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        app: state.app, // 通过映射将 app 属性映射为组件的 prop
    };
};

class Body extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let appName = this.props.app
        let element = <FirstPlane />

        if (appName === "first_plane") {
            element = <FirstPlane />
        } else if (appName === "why_plane") {
            element = <WhyPlane />
        } else if (appName === "company") {
            element = <CompanyPlane />
        }
        return (
            <div>
                {element}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Body);
