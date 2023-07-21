import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {connect} from "react-redux";
import {mapDispatchToProps} from "../body/dispatch_action";

class Navbar extends React.Component {
    handleClick = (pageName) => {
        return () => {
            this.props.updateApp(pageName); // 分发一个 action 更新 app 字段的值
        };
    }
    render() {
        const {title, keyword} = this.props;

        const petItems = [
            {key: '1', label: (<div onClick={this.handleClick('pet_product_advantage_plane')}>产品优势</div>)},
            {key: '2', label: (<div onClick={this.handleClick('pet_product_matrix_plane')}>产品矩阵</div>)},
            {key: '3', label: (<div onClick={this.handleClick('pet_product_price_plane')}>价格</div>)},
        ];
        const foodItems = [
            {key: '1', label: (<div onClick={this.handleClick('food_product_introduce_plane')}>产品介绍</div>)},
            //{key: '2', label: (<div>产品矩阵</div>)},
            {key: '2', label: (<div>价格</div>)},
        ];
        let items = petItems;
        if (keyword === 'pet') {
            //items = petItems
        } else if (keyword === 'food') {
            items = foodItems
        }

        return (
            <Dropdown menu={{items}}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        {title}
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        );
    }
}

export default Navbar;
export const ConnectedNavbar = connect(null, mapDispatchToProps)(Navbar)
