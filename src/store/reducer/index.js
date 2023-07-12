const initState = {
    app: 'plane', // 初始就是 大图表
};

export function appReducer(state = initState, action) {
    switch (action.type) {
        case "UPDATE_APP":
            return {
                ...state,
                app: action.payload
            };
        default:
            return state;
    }
}
