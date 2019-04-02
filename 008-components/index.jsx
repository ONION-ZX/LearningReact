import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Title extends Component {
    render() {
        return(
            <h1>React小书</h1>
        )
    }
}
class Header extends Component {
    render() {
        return (
            <div>
                <Title />
            </div>
        )
    }
}
class Main extends Component {
    render() {
        return (
            <div>
                <h2>This is footer</h2>
            </div>
        )
    }
}

class Index extends Component {
    render() {
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    }
 }

 ReactDOM.render(
     <Index />,
     document.getElementById('root')
 )