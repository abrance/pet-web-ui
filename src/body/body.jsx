import React from "react";
import {connect} from "react-redux";
import ImgPlane from "./img_plane";
import PetProductMatrixPlane from "./pet/pet_product_matrix_plane";
import {GlobalBackgroundColor} from "../const";
import PetProductPricePlane from "./pet/pet_product_price_plane";

import FoodProductPricePlane from "./food/food_product_price_plane";
import PetImgPlane from "./pet/pet_product_advan_des";
import FoodProductIntroducePlane from "./food/food_product_intro";
import {ConnectUsPlane} from "../modal/connect_me";
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

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
            element = <PetImgPlane />
        } else if (appName === "food_product_introduce_plane") {
            //element = <ImgPlane pageName='food_product_introduce_plane' />
            element = <FoodProductIntroducePlane />
        } else if (appName === "pet_product_matrix_plane") {
            element = <PetProductMatrixPlane />
        } else if (appName === "pet_product_price_plane") {
            element = <PetProductPricePlane />
        } else if (appName === "food_product_price_plane") {
            element = <FoodProductPricePlane />
        } else if (appName === "connect_us") {
            element = <ConnectUsPlane />
        }
        return (
            <Layout>
                <Content>
                    <div style={bodyStyle}>
                        {element}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: GlobalBackgroundColor, zIndex: '1' }}>
                    <div className="record-No">慧明优择（深圳）科技有限公司
                        <a className="footer-bottom" href="https://beian.miit.gov.cn" target="_blank">粤ICP备2021005069号-1</a>
                    </div>
                </Footer>
            </Layout>
        )
    }
}

export default connect(mapStateToProps)(Body);
