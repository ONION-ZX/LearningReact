import React, { Component } from 'react';

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }
    //由于React.js认为所有状态都应该由React.js的state控制，必须要用setState才能更新组件的内容。
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }
    render() {
        return(
            <div className='comment-input'>
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.username} 
                            onChange={this.handleUsernameChange.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} 
                                onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-field-button">
                    <button>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;