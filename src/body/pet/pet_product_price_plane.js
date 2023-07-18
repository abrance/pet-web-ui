import {Button, Image} from "antd";
import ConfirmLogo from "../../asset/confirm.png"
import CancelLogo from "../../asset/cancel.png"
import {GlobalGreyFontColor} from "../../const";

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

let freePriceDict = {
    'productText': '免费试用',
    'productDesc': '您可自主下载并注册适用账号获取基础收银功能的30天试用。',
    'feature1Type': 'confirm',
    'feature2Type': 'cancel',
    'feature3Type': 'cancel',
    'feature4Type': 'cancel',
    'feature1Text': 'Post 收银',
    'feature2Text': '微信支付宝配置支持',
    'feature3Text': '小程序',
    'feature4Text': '会员CRM',
    'importantText': '30',
    'unfocusedText': ' 天免费试用',
}

let commonPriceDict = {
    'productText': '标准版',
    'productDesc': '涵盖大部分必要的门店收银、线上小程序及会员功能。',
    'feature1Type': 'confirm',
    'feature2Type': 'confirm',
    'feature3Type': 'confirm',
    'feature4Type': 'confirm',
    'feature1Text': 'Post 收银',
    'feature2Text': '微信支付宝配置支持',
    'feature3Text': '小程序',
    'feature4Text': '会员CRM',
    'importantText': '699',
    'unfocusedText': ' 元店/月',
}

let foreverPriceDict = {
    'productText': '终身版',
    'productDesc': '在标准版基础上升级小程序模板选择及更多会员和营销功能。',
    'feature1Type': 'confirm',
    'feature2Type': 'cancel',
    'feature3Type': 'cancel',
    'feature4Type': 'cancel',
    'feature1Text': '基础版所有功能',
    'feature2Text': '更多小程序模板',
    'feature3Text': '小程序英文语言支持',
    'feature4Text': '礼品卡功能',
    'importantText': '999',
    'unfocusedText': ' 元店/月',
}


function PriceSection({dict}) {
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
                <FeatureSection type={feature1Type} text={feature1Text} />
                <FeatureSection type={feature2Type} text={feature2Text} />
                <FeatureSection type={feature3Type} text={feature3Text} />
                <FeatureSection type={feature4Type} text={feature4Text} />
            </div>
            <ImportantText importantText={importantText} unfocusedText={unfocusedText}/>
            <div style={buttonDivStyle}>
                <Button>下载试用</Button>
            </div>
            <div style={blankDivStyle}/>
        </div>
    )
}

function PetProductPricePlane() {
    const divStyle = {
        width: '100%'
    }
    const sloganPlane = {

    }
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
                <PriceSection dict={freePriceDict} />
                <PriceSection dict={commonPriceDict} />
                <PriceSection dict={foreverPriceDict} />
            </div>
        </div>
    )
}

export default PetProductPricePlane
