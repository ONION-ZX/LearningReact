import React, { Component } from 'react';

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            content: '',
        }
    }
    handleInputName(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleInputContent(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit() {
        if(this.props.onSubmit) {
            const { name, content } = this.state;
            this.props.onSubmit({name, content});
        }
        //提交后清空
        this.setState({content: ''});
    }
    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.name}
                            onChange={this.handleInputName.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} 
                            onChange={this.handleInputContent.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;