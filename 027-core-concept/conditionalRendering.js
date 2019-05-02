/**
 * 根据isLoggedIn的值渲染不同的问候语
 */
function UserGreeting() {
    return <h1>Welcome back!</h1>
}

function GuestGreeting() {
    return <h1>Please sign up!</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

ReactDOM.render(
    <Greeting isLoggedIn={false}/>,
    document.getElementById('root')
)

/**
 * 元素变量
 */
function LoginButton(props) {
    return(
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props) {
    return(
        <button onClick={props.onClick}>Logout</button>
    )
}

class LoginControl extends React.Component {
    constroctor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }
    handleLoginInClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginInClick}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {button}
            </div>
        )
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
)

/**
 * &&运算符
 */

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 && 
                <h2>You have {unreadMessages.length} unread messages.</h2>
            }
        </div>
    )
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages}/>,
    document.getElementById('root')
)

/**
 *condition ? true : false三目运算符
 */
function Log() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
            The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
    )
}

/**
 * 阻止组件渲染
 */
function WarningBanner(props) {
    if(!props.warn) return null;
    return(
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constroctor(props) {
        super(props);
        this.state = {
            showWarning: true 
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(state => {
            showWarning: !showWarning
        })
    }
    render() {
        return(
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'HIDE' : 'SHOW'}
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
)