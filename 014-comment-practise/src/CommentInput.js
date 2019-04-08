import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor() {
        super();
        this.state = {
            name: '',
            content: '',
        }
    }
    componentWillMount() {
        this._loadUsername();
    }
    //私有方法
    _loadUsername() {
        const name = localStorage.getItem('name');
        if(name) {
            this.setState({name})
        }
    }
    _saveUsername(name) {
        localStorage.setItem('name', name)
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
    handleNameBlur(event) {
        this._saveUsername(event.target.value);
    }

    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input 
                            value={this.state.name}
                            onBlur={this.handleNameBlur.bind(this)}
                            onChange={this.handleInputName.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea
                            ref={(textarea) => this.textarea = textarea}
                            value={this.state.content} 
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
    componentDidMount() {
        this.textarea.focus();
    }
}

export default CommentInput;