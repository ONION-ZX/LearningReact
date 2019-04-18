function createStore(state, stateChanger) {
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = stateChanger(state, action);
    listeners.forEach((listener) => listener());
  }
  return { getState, dispatch, subscribe };
}

function renderApp(newAppState, oldAppState = {}) {
  if(newAppState === oldAppState) return;
  console.log('render app...');
  renderTitle(newAppState.title, oldAppState.title);
  renderContent(newAppState.content, oldAppState.content);
}

function renderTitle(newTitle, oldTitle = {}) {
  if(newTitle === oldTitle) return;
  console.log('render title...');
  const titleDOM = document.getElementById('title');
  titleDOM.innerHTML = newTitle.text;
  titleDOM.style.color = newTitle.color;
}

function renderContent(newContent, oldContent = {}) {
  if(newContent === oldContent) return;
  console.log('render content...');
  const contentDOM = document.getElementById('content');
  contentDOM.innerHTML = newContent.text;
  contentDOM.style.color = newContent.color;
}

let appState = {
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
  switch (action.type) {
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
let oldState = store.getState(); //缓存旧的state
store.subscribe(() => {
  const newState = store.getState(); //数据可能发生了变化 获取新的state
  renderApp(newState, oldState);
  oldState = newState;
})

renderApp(store.getState()); //首次渲染页面
store.dispatch({ title: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'}); //修改标题内容
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色