import ConnectUsModal from "../../modal/connect_me";

export const buttonContainerStyle = {
    padding: "30px 150px",
    position: 'absolute',
    top: 'calc(50% + 160px)', // 调整按钮容器的垂直位置
    left: '10%', // 调整按钮容器的水平位置
    width: `calc(100vw / 6)`,  // 控制 button 距离
    display: 'flex',
    justifyContent: 'space-between',
};

export const ConnectMeButton = <div style={buttonContainerStyle}><ConnectUsModal /></div>