export const mapDispatchToProps = (dispatch) => {
    return {
        updateApp: (pageName) => {
            dispatch({ type: 'UPDATE_APP', payload: pageName }); // 分发一个 action 更新 app 字段的值
        },
    };
};
