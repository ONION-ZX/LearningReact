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
        const likedText = this.props.likedText || '取消';
        const unlikedText = this.props.unlikedText || '点赞';
        return(
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? likedText : unlikedText} 👍
            </button>
        )
    }
}

//使用
class Index extends Component {
    render() {
        return (
            <div>
                <LikeButton likedText='已赞' unlikedText='赞' />
            </div>
        )
    }
}