import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
        }
    }
    componentWillMount() {
        this._loadComments();
    }
    _loadComments() {
        let comments = localStorage.getItem('comments');
        if(comments) {
            comments = JSON.parse(comments);
            this.setState({comments})
        }
    }
    _saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments));
    }
    onSubmit(comment) {
        if(!comment) return;
        if(!comment.name) return alert('请输入用户名!');
        if(!comment.content) return alert('请输入评论内容!');
        const comments = this.state.comments;
        comments.push(comment);
        this.setState({comments});
        //每次提交评论都要把评论列表数据保存一次
        this._saveComments(comments);
    }
    render() {
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.onSubmit.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp;