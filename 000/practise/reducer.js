/**
 * 完成一个符合 Redux 要求的 Reducer usersReducer，它可以支持以下对一个存储用户信息的数组进行增、删、改的需求：
 */

const ADD_USER = "ADD_USER"
const DELETE_USER = "DELETE_USER"
const UPDATE_USER = "UPDATE_USER"

const usersReducer = (state=[], action) => {
  switch(action.type) {
    case ADD_USER:
      return [...state, action.user]
    case DELETE_USER:
      return [...state.slice(0, action.index), ...state.slice(action.index+1)]
    case UPDATE_USER:
      return [...state.map((user, index) => {
        if(index === action.index) {
          return {...user, ...action.user}
        } else {
          return user
        }
      })]
    default:
      return state
  }
}
