/**
 * 使用自定义组件时，可以在其中嵌套JSX结构。嵌套的结构在组件内部都可以通过props.children获取到。
 */

class Layout extends Component {
    render() {
        return (
            <div>
            <div className="two-cols-layout">
                <div className="sidebar">{this.props.children[0]}</div>
            </div>
                <div className="main">
                    {this.props.children[1]}
                </div>
            </div>
        )
    }
}