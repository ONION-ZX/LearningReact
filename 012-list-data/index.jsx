//循环渲染列表数据
const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
  ];

class Index extends Component {
    render() {
        const usersElements = [];
        for(let user of users) {
            usersElements.push(
                <div>
                    <div>姓名: {user.username}</div>
                    <div>年龄: {user.age}</div>
                    <div>性别: {user.gender}</div>
                    <hr />
                </div>
            )
        }
        return (
            <div>{usersElements}</div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)

//使用map渲染列表数据
class Index extends Component {
    render() {
        return(
            <div>
                {users.map((user) => {
                    return (
                        <div>
                            <div>姓名: {user.username}</div>
                            <div>年龄: {user.age}</div>
                            <div>性别: {user.gender}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}