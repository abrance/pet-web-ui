import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const petItems = [
    {key: '1', label: (<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">产品优势</a>),},
    {key: '2', label: (<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">产品矩阵</a>),},
    {key: '3', label: (<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">价格</a>),},
];

const foodItems = [
    {key: '1', label: (<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">产品优势</a>),},
    {key: '2', label: (<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">产品矩阵</a>),},
    {key: '3', label: (<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">价格</a>),},

];
function Navbar({title, keyword}) {
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
export default Navbar;
