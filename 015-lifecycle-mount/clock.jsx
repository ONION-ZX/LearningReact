class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000)
    }
    render() {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleDateString()}
                </h1>
            </div>
        )
    }
    //销毁组件时需要清除定时器
    componentWillMount() {
        clearInterval(this.timer);
    }
}