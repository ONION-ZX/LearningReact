function createStore(state, stateChanger) {
    const listeners = [];
    const subscribe = (listener) => listener.push(listener);
    getState = () => state;
    const dispatch = (action) => {
        state = stateChanger(state, action);
        listeners.forEach((listener) => listener())
    }
    return {getState, dispatch, subscribe};
}

function renderApp(newAppState, oldAppState={}) {
    if(newAppState === oldAppState) return;
    renderTitle(newAppState.title, oldAppState);
    renderContent(newAppState.content, oldAppState.content);
}

function renderTitle(newTitle, oldTitle={}) {
    if(newTitle === oldTitle) return;
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

function renderContent(newContent, oldContent={}) {
    if(newContent === oldContent) return;
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}

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

function stateChanger(state, action) {
    switch(action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state;
    }
}

const store = createStore(appState, stateChanger);
store.subscribe(() => renderApp(store.getState())); //监听数据变化

renderApp(store.getState()); //首次渲染
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' });
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' });