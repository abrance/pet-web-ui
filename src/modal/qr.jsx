import React from 'react';
import { Image } from 'antd';
import QRImage from '../asset/qr.png'

const QR = () => (
    <Image
        // errorLevel="H"
        // value="https://ant.design/"
        src={QRImage} preview={false}
    />
);
export default QR;
