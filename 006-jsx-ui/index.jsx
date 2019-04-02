//只要写React必须要引入的两个东西
import React, {Component} from 'react';
//把React组件渲染到页面
import ReactDOM from 'react-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>React</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
)