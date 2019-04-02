class Title extends Component {
    handleClickOnTitle(e) {
        console.log(e.target.innerHTML);
    }
    render() {
        return(
            /*    手动bind到当前实例
            bind: 将事件监听方法中的this绑定到当前组件实例上
                  渲染列表元素时把列表元素传入事件监听函数中
            */       
            <h1 onClick="{this.handleClickOnTitle.bind(this, 'Hello')}">React小书</h1>
        )
    }
}