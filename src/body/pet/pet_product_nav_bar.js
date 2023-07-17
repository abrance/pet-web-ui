import React from 'react';
import { Tabs } from 'antd';
import PetProductMatrixStorePlane from "./pet_product_matrix_store_plane";
import PetProductMatrixShopMappPlane from "./pet_product_matrix_shop_mapp_plane";
import PetProductMatrixMember from "./pet_product_matrix_member";
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
const PetProductNavbar = () => <Tabs tabBarGutter={300} centered={true} defaultActiveKey="1" items={items} onChange={onChange} />;
export default PetProductNavbar;
