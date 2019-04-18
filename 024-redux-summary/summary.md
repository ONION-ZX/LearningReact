# Redux的出现
共享的状态如果可以被任意修改，那么程序的行为将不可预料 --> 
提高修改数据的门槛: 必须通过dispatch执行某些允许的修改操作 而且必须大张旗鼓的在action中声明 -->
抽象出一个createStore，产生一个里面包含getState和dispatch函数的store，供我们使用

每次修改数据都需要手动重新渲染，希望自动渲染视图 -->
加入订阅者模式，可以通过store.subscribe订阅数据修改事件，每次数据更新的时候自动重新渲染视图

重新渲染视图造成严重性能问题 --> 引入共享结构的对象

优化stateChanger为reducer --> reducer只能是纯函数

reducer的职责: 负责初始state和根据state和action计算具有共享结构的新的state

createStore的套路:

```javascript
// 定一个 reducer
function reducer (state, action) {
  /* 初始化 state 和 switch case */
}

// 生成 store
const store = createStore(reducer)

// 监听数据变化重新渲染页面
store.subscribe(() => renderApp(store.getState()))

// 首次渲染页面
renderApp(store.getState()) 

// 后面可以随意 dispatch 了，页面自动更新
store.dispatch(...)
```

