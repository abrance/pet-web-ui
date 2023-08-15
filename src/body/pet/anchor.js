import React, {useState} from 'react';
import {Anchor, Row, Col} from 'antd';

const SloganAnchor = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (key) => {
        setActiveItem(key);
    };

    return (
        <Row style={{width: '20px'}} gutter={2}>
            <Col span={4}>
                <div id="part-1" style={{ width: '10px', background: 'white' }} />
                <div id="part-2" style={{ width: '10px', background: 'white' }} />
                <div id="part-3" style={{ width: '10px', background: 'white' }} />
                <div id="part-4" style={{ width: '10px', background: 'white' }} />
            </Col>
            <Col span={4}>
                <Anchor style={{minWidth: '300px', textAlign: 'left',   wordWrap: 'break-word',}}
                    getContainer={() => document.getElementById('anchor-row-store-plane')}
                    affix={false}
                    onClick={(e, item) => {
                        e.preventDefault();
                        handleItemClick(item.key);
                    }}
                    items={[
                        {
                            key: 'part-1',
                            href: '#part-1',
                            title: <ChangedItem text={'基于网页的收银商户端'} />,
                        },
                        {
                            key: 'part-2',
                            href: '#part-2',
                            title: <ChangedItem text={'整合多种支付方式'} />,
                        },
                        {
                            key: 'part-3',
                            href: '#part-3',
                            title: <ChangedItem text={'打通小程序点单，外送及商城订单'} />,
                        },
                        {
                            key: 'part-4',
                            href: '#part-4',
                            title: <ChangedItem text={'无缝连接会员系统及卡券'} />,
                        },
                    ]}
                />
            </Col>
        </Row>
    );
};

const ChangedItem = ({ text }) => {
    const handleActive = () => {
        setTextStyle({ ...textStyle, fontSize: '18px', fontWeight: 'bold', color: '#0D0D0E'});
    };

    const handleInactive = () => {
        setTextStyle({ ...textStyle, fontSize: '14px', fontWeight: 'normal', color: 'initial'});
    };

    const [textStyle, setTextStyle] = useState({
        fontSize: '14px',
        fontWeight: 'normal',
        color: 'initial',
        fontFamily: "ui-sans-serif",
        //width: '400px'
    });

    return (
        <div
            style={textStyle}
            onMouseEnter={handleActive}
            onMouseLeave={handleInactive}
        >
            {text}
        </div>
    );
};


export default SloganAnchor;