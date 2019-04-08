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

## 总结
一般把组件的state的初始化工作放在constructor中；
在componentWillMount进行组件的启动工作(如Ajax数据拉取、定时器启动)
组件从页面上销毁时，有时需要一些数据的清理，就会放在componentWillUnmount中做
一般来说，有些组件的启动工作是依赖DOM的，而componentWillMount还没挂在完成，所以无法进行这些启动工作，这时就可以放在componentDidMount中。