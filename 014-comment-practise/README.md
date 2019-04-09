良好的编码习惯：
1. 私有方法以_开头。
2. 所有事件监听的方法都用handle开头。
3. 把时间监听方法传给组件时，属性名用on开头。如：
```javascript
<CommentInput
  onSubmit={this.handleSubmitComment.bind(this)} />
```

# 组件内容编写顺序
1. static 开头的类属性，如 defaultProps、propTypes。
2. 构造函数，constructor。
3. getter / setter。
4. 组件生命周期。
5. _开头的私有方法。
6. 事件监听方法，handle*。
7. render* 开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render*开头。
8. render方法。