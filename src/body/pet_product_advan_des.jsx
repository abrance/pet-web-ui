import Icon from '../asset/logo.svg'

// 添加空白区, 在最下层占满屏幕, 这样实现背景颜色跟大图一致
const BlankSectionStyle = {

    height: '100px',
    width: '100%',
    display: 'flex',
    // position: 'fixed',
    // top: 0,
    // left: 0,
    // width: '100%',
    // height: '100vh',
    // backgroundColor: 'rgb(246, 246, 248)',
    // zIndex: -1,
}
const  divStyle2 = {
    margin: '30px 30px'
}
const imgStyle = {
    height: '50px',
    width: '50px'
}
const divImgStyle = {
    margin: '10px 30px'
}

export const PetProductAdvantageDes =
    <>
        <section style={BlankSectionStyle}>
            <div style={divStyle2}>
                洗美服务 在线预约商家及客户均可进行服务预约，在线预约洗护、美容等服务
            </div>
            <div style={divImgStyle}>
                <img src={Icon} style={imgStyle}/>
            </div>
        </section>
        <section style={BlankSectionStyle}>
            <div style={divStyle2}>
                多端订单 一站整合一台设备一站式整合门店线上与线下订单，包括门店收银、手机点单
            </div>
            <div style={divImgStyle}>
                <img src={Icon} style={imgStyle}/>
            </div>
        </section>
        <section style={BlankSectionStyle}>
            <div style={divStyle2}>
                统计看板 数据分析门店经营情况一手掌握，数据可视化助力商家把握销售趋势，做出正确决策
            </div>
            <div style={divImgStyle}>
                <img src={Icon} style={imgStyle}/>
            </div>
        </section>
    </>

