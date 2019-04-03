//原来这样写组件
class HelloWorld extends Component {
    constructor() {
        super();
    }

    sayHi() {
        alert('Hello World');
    }

    render() {
        return (
            <div onClick={this.sayHi.bind(this)}>Hello World</div>
        )
    }
}

/*函数式组件
一个函数就是一个组件
只接受props
不能在constructor里面初始化state
也就是一种只能接受props和提供render方法的类组件
*/
const HelloWorld = (props) => {
    const sayHi = (event) => alert('Hello World');
    return(
        <div onClick={sayHi}>Hello World</div>
    )
}