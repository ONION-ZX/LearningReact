import React, { Component } from 'react';
import wrapWithLoadData from './wrapWithLoadData';
import PropTypes from 'prop-types'
class CommentInput extends Component {
    //组件参数验证
    static propTypes = {
        onSubmit: PropTypes.func,
        data: PropTypes.func,
        saveData: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            name: props.data,
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
            this.props.onSubmit({
                name, 
                content, 
                //评论发布时间戳
                createdTime: +new Date()
            });
        }
        //提交后清空
        this.setState({content: ''});
    }
    handleNameBlur(event) {
        this.props.saveData(event.target.value);
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
                    {/*利用ref获取输入框元素*/}
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
        //页面加载完成后自动聚焦
        this.textarea.focus();
    }
}

CommentInput = wrapWithLoadData(CommentInput, 'name')

export default CommentInput;