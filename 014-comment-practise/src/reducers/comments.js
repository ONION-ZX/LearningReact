/**
 * Reducer规范
 * 1. 定义action types
 * 2. 边写reducer
 * 3. 跟这个reducer相关的action creators
 */
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENTS = 'ADD_COMMENTS'
const DELETE_COMMENT = 'DELETE_COMMENTS'

export default function(state, action) {
    if(!state) {
        state = {comments: []}
    }
    switch(action.type) {
        //初始化评论
        case INIT_COMMENTS:
            return { comments: action.comments }
        //新建评论
        case ADD_COMMENTS:
            return { 
                comments: [...state.comments, action.comment]
            }
        //删除评论(新建一个删除了特定下标的内容的数组)
        case DELETE_COMMENT:
            return {
                comments: [
                    ...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex + 1)
                ]
            }
            default:
                return state
        }        
}

export const initComments = (comments) => {
    return { type: INIT_COMMENTS, comments }
}

export const addComments = (comment) => {
    return { type: ADD_COMMENT, comment }
}

export const deleteComment = (commentIndex) => {
    return { type: DELETE_COMMENT, commentIndex }
}