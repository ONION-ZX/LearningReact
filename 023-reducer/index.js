function themeReducer(state, action) {
    if(!state) return {
        themeName: 'Red Theme',
        themeColor: 'red'
    }
    switch (action.type) {
        case 'UPDATE_THEME_NAME':
            return { ...state, themeName: action.themeName }
        case 'UPDATE_THEME_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer);