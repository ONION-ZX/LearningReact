const appState = {
    title: {
        text: 'React.js小书',
        color: 'red'
    },
    content: {
        text: 'React.js小书内容',
        color: 'blue'
    }
}

function createStore(state, stateChanger) {
    getState = () => state;
    const dispatch = (action) => stateChanger(state, action);
    return {getState, dispatch};
}

function stateChanger(state, action) {
    switch(action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color;
            break;
        default:
            break;
    }
}

const store = createStore(appState, stateChanger);

function renderApp(appState) {
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle(title) {
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

function renderContent(content) {
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}

renderApp(store.getState());
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' });
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' });
renderApp(store.getState());