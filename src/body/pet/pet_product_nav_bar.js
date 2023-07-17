import React from 'react';
import { Tabs } from 'antd';
import PetProductMatrixStorePlane from "./pet_product_matrix_store_plane";
import PetProductMatrixShopMappPlane from "./pet_product_matrix_shop_mapp_plane";
import PetProductMatrixMember from "./pet_product_matrix_member";
import {GlobalBackgroundColor} from "../../const";
import "./pet_product_nav_bar.css"

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: `门店管理系统`,
        children: <PetProductMatrixStorePlane />,
    },
    {
        key: '2',
        label: `专属商城小程序`,
        children: <PetProductMatrixShopMappPlane />,
    },
    {
        key: '3',
        label: `会员体系与营销`,
        children: <PetProductMatrixMember />,
    },
];


function PetProductNavbar() {
    const BlankStyle = {
        height: '10px'
    }

    const tabBarStyle = {
        width: '100%',
        backgroundColor: GlobalBackgroundColor,
        paddingBottom: '10px',
        // borderBottomWidth: 'thin',
        // borderBottom: 'solid',
        // borderBottomColor: 'rgba(196, 196, 198, 1)'
    }
    return (
        <div>
            <Tabs tabBarStyle={tabBarStyle} tabBarGutter={300} centered={true} defaultActiveKey="1" items={items}
                  onChange={onChange}/>
            <div style={BlankStyle}/>
        </div>
    )
}

export default PetProductNavbar;
