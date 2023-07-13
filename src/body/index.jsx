import React from "react";
import {connect} from "react-redux";
import FirstPlane from "./first_plane";
import WhyPlane from "./why";
import CompanyPlane from "./company";

export const mapStateToProps = (state) => {
    return {
        app: state.app, // 通过映射将 app 属性映射为组件的 prop
    };
};

export class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let appName = this.props.app
        let element = <FirstPlane/>

        if (appName === "first_plane") {
            element = <FirstPlane/>
        } else if (appName === "why_plane") {
            element = <WhyPlane/>
        } else if (appName === "company") {
            element = <CompanyPlane/>
        }
        return (
            <div>
                {element}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Index);
