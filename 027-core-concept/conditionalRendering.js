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