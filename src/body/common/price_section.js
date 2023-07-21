import {GlobalGreyFontColor} from "../../const";
import {Button, Image} from "antd";
import ConfirmLogo from "../../asset/confirm.png";
import CancelLogo from "../../asset/cancel.png";

function FeatureSection({type, text}) {
    let imgSrc, textColor;
    if (type === 'confirm') {
        imgSrc = ConfirmLogo
        textColor = 'black'
    } else {
        imgSrc = CancelLogo
        textColor = GlobalGreyFontColor
    }
    let size = '7%'
    const featureSectionStyle = {
        display: 'flex',
        padding: '15px 0'
    }

    const textDivStyle = {
        paddingLeft: '5%',
        color: textColor,
    }
    return (
        <div style={featureSectionStyle}>
            <Image width={size} src={imgSrc} preview={false}/>
            <div style={textDivStyle}>{text}</div>
        </div>
    )
}

function ImportantText({importantText, unfocusedText}) {
    const importTantTextDivStyle = {
        padding: '1px 20%'
    }
    const importTantTextStyle = {
        fontSize: '30px',
        fontWeight: 'bold'
    }
    const unfocusedStyle = {}

    return (
        <div style={importTantTextDivStyle}>
            <p>
                <span style={importTantTextStyle}>{importantText}</span>
                <span style={unfocusedStyle}> {unfocusedText}</span>
            </p>
        </div>
    )
}

export function PriceSection({dict}) {
    let productText = dict['productText']
    let productDesc = dict['productDesc']
    let feature1Type = dict['feature1Type']
    let feature2Type = dict['feature2Type']
    let feature3Type = dict['feature3Type']
    let feature4Type = dict['feature4Type']
    let feature1Text = dict['feature1Text']
    let feature2Text = dict['feature2Text']
    let feature3Text = dict['feature3Text']
    let feature4Text = dict['feature4Text']
    let importantText = dict['importantText']
    let unfocusedText = dict['unfocusedText']

    const priceSectionStyle = {
        backgroundColor: 'white',
        borderRadius: '10px',
        marginRight: '5%'
    }
    const productDescStyle = {
        padding: '10px 20%',
        color: GlobalGreyFontColor
    }
    const featureSectionPlane = {
        paddingTop: '20px',
        paddingLeft: '20%',
        paddingRight: '30%',
    }
    const blankDivStyle = {
        paddingBottom: '50px'
    }
    const buttonDivStyle = {
        paddingTop: '10px'
    }
    return (
        <div style={priceSectionStyle}>
            <h1>{productText}</h1>
            <p style={productDescStyle}>{productDesc}</p>
            <div style={featureSectionPlane}>
                <FeatureSection type={feature1Type} text={feature1Text}/>
                <FeatureSection type={feature2Type} text={feature2Text}/>
                <FeatureSection type={feature3Type} text={feature3Text}/>
                <FeatureSection type={feature4Type} text={feature4Text}/>
            </div>
            <ImportantText importantText={importantText} unfocusedText={unfocusedText}/>
            <div style={buttonDivStyle}>
                <Button>下载试用</Button>
            </div>
            <div style={blankDivStyle}/>
        </div>
    )
}

export function ProductPricePlane({dict}) {
    let firstPriceDict = dict['firstPriceDict']
    let secondPriceDict = dict['secondPriceDict']
    let thirdPriceDict = dict['thirdPriceDict']
    const divStyle = {
        width: '100%'
    }
    const sloganPlane = {}
    const pricePlaneStyle = {
        padding: '100px 6%',
        width: '88%',
        display: 'flex',
        fontFamily: 'ui-sans-serif',
    }
    const sloganStyle = {
        font: '550 40px/48px ui-sans-serif',
        letterSpacing: '.2rem',
        fontFamily: 'ui-sans-serif',
        padding: '50px 30%'
    }
    const sloganDescStyle = {
        font: '400 20px/24px ui-sans-serif',
        letterSpacing: '.1rem',
        color: GlobalGreyFontColor,
        fontFamily: 'ui-sans-serif',
        padding: '0 35%',
    }
    const sloganText = '选择合适您的版本'
    const sloganDescText = '优优择坚持简单透明的价格政策，我们也努力不断优化迭代功能，放大价格背后的价值'
    return (
        <div style={divStyle}>
            <div style={sloganPlane}>
                <div style={sloganStyle}>{sloganText}</div>
                <div style={sloganDescStyle}>{sloganDescText}</div>
            </div>
            <div style={pricePlaneStyle}>
                <PriceSection dict={firstPriceDict}/>
                <PriceSection dict={secondPriceDict}/>
                <PriceSection dict={thirdPriceDict}/>
            </div>
        </div>
    )
}