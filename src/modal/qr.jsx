import React from 'react';
import { QRCode } from 'antd';
const QR = () => (
    <QRCode
        errorLevel="H"
        value="https://ant.design/"
        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    />
);
export default QR;
