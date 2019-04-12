import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import wrapWithLoadData from './wrapWithLoadData';

class CommentApp extends Component {
    static propTypes = {
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            comments: props.data
        }
    }
    handleDeleteComment (index) {
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({comments});
        this.props.saveData(comments);
    }
    handleSubmit(comment) {
        if(!comment) return;
        if(!comment.name) return alert('请输入用户名!');
        if(!comment.content) return alert('请输入评论内容!');
        const comments = this.state.comments;
        comments.push(comment);
        this.setState({comments});
        this.props.saveData(comments);
    }
    render() {
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmit.bind(this)}/>
                <CommentList 
                    onDeleteComment={this.handleDeleteComment.bind(this)}
                    comments={this.state.comments}/>
            </div>
        )
    }
}

CommentApp = wrapWithLoadData(CommentApp, 'comments');

export default CommentApp;