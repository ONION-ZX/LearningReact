# Tic Toc Toe
1. 函数组件     
适用场景：如果想写的组件只包含一个render方法 并且不包含state
例子：
```javascript
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>{props.value}</button>
    )
}
```
2. 状态提升
当遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通信的情况时，需要把子组件的state数据提升至其共同的父组件中保存。之后父组件可以通过props将状态数据传递给子组件。这样应用当中所有组件的状态数据就能够更方便地同步共享了。
3. 不可变性          
一般有两种方式改变数据：
- 直接修改数据
- 新数据替换旧数据            
第二种的好处：
- 跟踪数据的改变（对象变成了一个新对象-对象发生改变了）
- 确定在React中何时重新渲染（创建pure components）