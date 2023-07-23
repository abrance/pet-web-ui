import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './connect_me.css';
import QR from "./qr";


const ConnectMeModal = () => {
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
            <Button onClick={showModal}>
                联系我们
            </Button>
            <Modal bodyStyle={bodyStyle} centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <QR />
            </Modal>
        </>
    );
};
export default ConnectMeModal;
