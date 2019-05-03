function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    )
}

function Dialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    )
}

function WelcomeDialog() {
    return (
        <Dialog 
            title="Welcome"
            message="Thank you for visiting our spacecraft!"
        />
    )
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
};

function App() {
    return (
        <SplitPane 
            left={<Contacts />}
            right={<Chat />}
        / >
    )
}