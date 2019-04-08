class Editor extends Component {
    constructor() {
        super();
        this.state = {
            content: '<h1>React.js小书</h1>',
            color: 'blue'
        }
    }

    render() {
        return(
            <div>
                <div className="editor-wrapper" 
                     dangerouslySetInnerHTML={{__html: this.state.content }}>{this.state.content}
                </div>
                <h1 style={{fontSize:'12px', color: this.state.color}}>React小书</h1>
            </div>
        )
    }
}