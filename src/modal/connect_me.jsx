import React, { useState } from 'react';
import {Button, Image, Modal} from 'antd';
import './connect_me.css';
import QR from "./qr";
import {connect} from "react-redux";
import {mapDispatchToProps} from "../body/dispatch_action";
import { Card, Col, Row } from 'antd';
import ConnectUsLogo1 from '../asset/connect_us_logo1.png';
import ConnectUsLogo2 from '../asset/connect_us_logo2.png';
import ConnectUsLogo3 from '../asset/connect_us_logo3.png';

const ConnectUsModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const bodyStyle = {
        width: '211px',
        height: '211px'
    }
    return (
        <>
            <Button onClick={showModal} style={{height: '50px', width: '126px', borderRadius: '25px'}}>
                联系我们
            </Button>
            <Modal bodyStyle={bodyStyle} centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <QR />
            </Modal>
        </>
    );
};

export class ConnectUsLink extends React.Component {
    handleClick = (pageName) => {
        return () => {
            this.props.updateApp(pageName); // 分发一个 action 更新 app 字段的值
        };
    }
    render() {
        return (
          <div onClick={this.handleClick("connect_us")}>
                联系我们
          </div>
        )
    }
}

export class ConnectUsPlane extends React.Component {
    render() {
        const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // 垂直居中
        };

        const sloganStyle = {
            textAlign: 'center',
            fontSize: '72px',
            height: '30vh',
            display: 'flex',
            justifyContent: 'center', // 水平居中
            alignItems: 'center', // 垂直居中
        };

        const BlankStyle = {
            height: 'calc(70vh - 455px)',
        }

        return (
            <div style={containerStyle}>
                <div style={sloganStyle}>
                    联系我们
                </div>
                <ConnectUsCard />
                <div style={BlankStyle}></div>
            </div>
        );
    }
}

const pStyle = {
    height: '100px',
}

const ConnectUsCard = () => (
    <Row gutter={60}>
        <Col span={60}>
            <Card size={'default'} bordered={false}>
                <Image src={ConnectUsLogo1} preview={false} />
                <p>联系销售代表</p>
                <div style={pStyle}>了解我们的产品，匹配行业解决方案及价格等</div>
                <ConnectUsModal />
            </Card>
        </Col>
        <Col span={60}>
            <Card size={'default'} bordered={false}>
                <Image src={ConnectUsLogo2} preview={false} />
                <p>联系服务支持</p>
                <div style={pStyle}>了解系统指南与功能说明，请联系我们的服务团队</div>
                <ConnectUsModal />
            </Card>
        </Col>
        <Col span={60}>
            <Card size={'default'} bordered={false}>
                <Image src={ConnectUsLogo3} preview={false} />
                <p>获得服务支持</p>
                <div style={pStyle}>了解系统指南与功能说明，请联系我们的服务团队</div>
                <ConnectUsModal />
            </Card>
        </Col>
    </Row>
);

export const ConnectedConnectUsLink = connect(null, mapDispatchToProps)(ConnectUsLink)
export default ConnectUsModal;
