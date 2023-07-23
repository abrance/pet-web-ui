import React from 'react';
import {Anchor, Row, Col, Image} from 'antd';
import PCImage from '../../asset/PC3.png'

const SloganAnchor = () => (
    <Row>
        <Col span={32}>
            <div id="part-1" style={{width: '10px', height: '100%', background: 'white' }} />
            <div id="part-2" style={{width: '10px', height: '100%', background: 'white' }} />
            <div id="part-3" style={{width: '10px', height: '100%', background: 'white' }} />
            <div id="part-4" style={{width: '10px', height: '100%', background: 'white' }} />
        </Col>
        <Col span={16}>
            <Anchor
                items={[
                    {
                        key: 'part-1',
                        href: '#part-1',
                        title: '基于网页的收银商户端',
                        children: <Image src={PCImage} />
                    },
                    {
                        key: 'part-2',
                        href: '#part-2',
                        title: '整合多种支付方式',
                    },
                    {
                        key: 'part-3',
                        href: '#part-3',
                        title: '打通小程序点单，外送及商城订单',
                    },
                    {
                        key: 'part-4',
                        href: '#part-4',
                        title: '无缝连接会员系统及卡券',
                    },
                ]}
            />
        </Col>
    </Row>
);

export default SloganAnchor;