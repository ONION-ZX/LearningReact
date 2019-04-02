class Title extends Component {
    handleClickOnTitle() {
        console.log('yo');
    }
    render() {
        return(
            <h1 onClick="{this.handleClickOnTitle}">React小书</h1>
        )
    }
}