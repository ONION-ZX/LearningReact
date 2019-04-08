*我们把React.js将组件渲染，并且构造DOM元素然后塞入页面的过程称为组件的挂载。*
```javascript
-> constructor()
-> componentWillMount()
-> render()
// 然后构造DOM元素插入页面
-> componentDidMount()
// ...
// 即将从页面删除
-> componentWillUnmount()
// 从页面删除
```
