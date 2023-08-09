import React from 'react';
import { Image } from 'antd';
import QRImage from '../asset/qr.png'

const QR = () => (
    <>
        <Image
            // errorLevel="H"
            // value="https://ant.design/"
            src={QRImage} preview={false}
        />
        <p>邮箱：killa@youyouze.com</p>
    </>
);
export default QR;
