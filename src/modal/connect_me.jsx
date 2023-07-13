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
    return (
        <>
            <Button type="primary" onClick={showModal}>
                联系我们
            </Button>
            <Modal centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <QR />
            </Modal>
        </>
    );
};
export default ConnectMeModal;
