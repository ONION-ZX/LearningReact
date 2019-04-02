class LikeButton extends Component {
    constructor() {
        super();
        this.state = {isLiked: false};
    }
    handleClickOnLikeButton() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }
    render() {
        const wordings = this.props.wordings || {
            likedText: '取消',
            unlikedText: '点赞'
        }
        return(
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? wordings.likedText : wordings.unlikedText} 👍
            </button>
        )
    }
}

//使用
class Index extends Component {
    render() {
        return (
            <div>
                <LikeButton wordings={{likedText: '已赞', unlikedText: '赞'}} />
            </div>
        )
    }
}