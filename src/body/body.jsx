import React from "react";
import {connect} from "react-redux";
import ImgPlane from "./img_plane";
import CompanyPlane from "./company";
import PetProductMatrixPlane from "./pet/pet_product_matrix_plane";
import {GlobalBackgroundColor} from "../const";
import PetProductPricePlane from "./pet/pet_product_price_plane";
import app from "../App";

import FoodProductIntroPlane from "./food/food_product_price_plane";

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
            backgroundColor: GlobalBackgroundColor,
        }

        let appName = this.props.app
        let element = <ImgPlane pageName='index' />

        if (appName === "index") {
            element = <ImgPlane pageName='index' />
        } else if (appName === "pet_product_advantage_plane") {
            element = <ImgPlane pageName='pet_product_advantage_plane' />
        } else if (appName === "food_product_introduce_plane") {
            element = <ImgPlane pageName='food_product_introduce_plane' />
        } else if (appName === "pet_product_matrix_plane") {
            element = <PetProductMatrixPlane />
        } else if (appName === "pet_product_price_plane") {
            element = <PetProductPricePlane />
        } else if (appName === "food_product_price_plane") {
            element = <FoodProductIntroPlane />
        }
        return (
            <div style={bodyStyle}>
                {element}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Body);
