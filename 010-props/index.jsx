class LikeButton extends Component {
   //添加默认值后就不需要判断配置属性是否传进来了 
    static defaltProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }
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
        return(
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? this.props.likedText : this.props.unlikedText} 👍
            </button>
        )
    }
}

//使用
class Index extends Component {
    render() {
        return (
            <div>
                <LikeButton 
                    wordings={{likedText: '已赞', unlikedText: '赞'}} 
                    onClick={() => console.log('click on like button!')}/>
            </div>
        )
    }
}