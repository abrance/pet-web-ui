import {ProductPricePlane} from "../common/price_section";

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

let Advan1PriceDict = {
    'productText': '进阶版',
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

function PetProductPricePlane() {
    const dict = {
        'firstPriceDict': freePriceDict,
        'secondPriceDict': commonPriceDict,
        'thirdPriceDict': Advan1PriceDict,
        'forthPriceDict': foreverPriceDict,
    }
    return ProductPricePlane({dict})
}

export default PetProductPricePlane
