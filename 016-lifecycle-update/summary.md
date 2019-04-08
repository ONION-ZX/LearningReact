更新阶段：就是setState导致React.js重新渲染并且把组件的变化应用到DOM元素上的过程。
关于更新阶段的组件生命周期：
1. shouldComponentUpdate(nextProps, nextState)：通过此方法控制组件是否重新渲染。如果返回false组件就不会重新渲染。
2. componentWillReceiveProps(nextProps)：组件从父组件接收到新的props之前调用。
3. componentWillUpdate()：组件开始重新渲染之前调用。
4. componentDidUpdate()：组件重新渲染并且把更改变更到真实的DOM以后调用。