//循环渲染列表数据
const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ];

class User extends Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)

//使用map渲染列表数据优化
class Index extends Component {
    render() {
        return(
            <div>
                {users.map((user) => <User user = {user} />)}
            </div>
        )
    }
}
