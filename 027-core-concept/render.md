## 组件是如何渲染的
栗子：
```javascript
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="nina" />
ReactDOM.render(
    element,
    document.getElementById('root')
)
```

1. 调用`ReactDOM.render`函数，并传入`<Welcome name="nina"/>`作为参数。
2. React调用Welcome组件，并将`{name: "nina"}`作为props传入。
3. Welcome将`<h1>Hello, nina</h1>`元素作为返回值。
4. ReactDOM将DOM更新为`<h1>Hello, nina</h1>`。