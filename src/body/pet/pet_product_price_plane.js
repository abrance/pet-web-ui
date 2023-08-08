import {ProductPricePlane} from "../common/price_section";

let freePriceDict = {
    'productText': '基础版',
    'productDesc': '满足线下单店经营管理需求',
    'feature1Type': 'confirm',
    'feature2Type': 'confirm',
    'feature3Type': 'confirm',
    'feature4Type': 'confirm',
    'feature5Type': 'cancel',
    'feature6Type': 'cancel',
    'feature7Type': 'cancel',
    'feature8Type': 'cancel',
    'feature1Text': '智能收银',
    'feature2Text': '订单+预约+经营数据分析',
    'feature3Text': '宠物顾客信息管理',
    'feature4Text': '商品+库存管理+店员管理',
    'feature5Text': '小程序+线上引客',
    'feature6Text': '线上洗护预约',
    'feature7Text': '会员CRM管理',
    'feature8Text': '多店统一管理',
    'importantText': '699',
    'unfocusedText': ' 元/首年',
}

let commonPriceDict = {
    'productText': '进阶版',
    'productDesc': '线上线下一体化，平台引客，增加消费者粘性，提高忠诚度',
    'feature1Type': 'confirm',
    'feature2Type': 'confirm',
    'feature3Type': 'confirm',
    'feature4Type': 'confirm',
    'feature5Type': 'confirm',
    'feature6Type': 'confirm',
    'feature7Type': 'confirm',
    'feature8Type': 'cancel',
    'feature1Text': '智能收银',
    'feature2Text': '订单+预约+经营数据分析',
    'feature3Text': '宠物顾客信息管理',
    'feature4Text': '商品+库存管理+店员管理',
    'feature5Text': '小程序+线上引客',
    'feature6Text': '线上洗护预约',
    'feature7Text': '会员CRM管理',
    'feature8Text': '多店统一管理',
    'importantText': '1399',
    'unfocusedText': ' 元/首年',
}

let Advan1PriceDict = {
    'productText': '高级版',
    'productDesc': '线上线下一体化，平台引客，增加消费者粘性，提高忠诚度',
    'feature1Type': 'confirm',
    'feature2Type': 'confirm',
    'feature3Type': 'confirm',
    'feature4Type': 'confirm',
    'feature5Type': 'confirm',
    'feature6Type': 'confirm',
    'feature7Type': 'confirm',
    'feature8Type': 'cancel',
    'feature1Text': '智能收银',
    'feature2Text': '订单+预约+经营数据分析',
    'feature3Text': '宠物顾客信息管理',
    'feature4Text': '商品+库存管理+店员管理',
    'feature5Text': '定制化小程序+线上流量',
    'feature6Text': '线上洗护预约',
    'feature7Text': '会员CRM管理',
    'feature8Text': '多店统一管理',
    'importantText': '1699',
    'unfocusedText': ' 元/首年',
}

let foreverPriceDict = {
    'productText': '多店版',
    'productDesc': '线上线下一体化，平台引客，增加消费者粘性，提高忠诚度',
    'feature1Type': 'confirm',
    'feature2Type': 'confirm',
    'feature3Type': 'confirm',
    'feature4Type': 'confirm',
    'feature5Type': 'confirm',
    'feature6Type': 'confirm',
    'feature7Type': 'confirm',
    'feature8Type': 'confirm',
    'feature1Text': '智能收银',
    'feature2Text': '订单+预约+经营数据分析',
    'feature3Text': '宠物顾客信息管理',
    'feature4Text': '商品+库存管理+店员管理',
    'feature5Text': '小程序+线上流量',
    'feature6Text': '线上洗护预约',
    'feature7Text': '会员CRM管理',
    'feature8Text': '多店统一管理',
    'importantText': '2499',
    'unfocusedText': ' 元/首年',
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
