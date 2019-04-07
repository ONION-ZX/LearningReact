/*
做一个百分比换算器，需要你完成三个组件：
<Input />：封装了原生的<input />，可以输入任意数字
<PercentageShower />：实时 显示 <Input /> 中的数字内容，但是需要把它转换成百分比，例如 <Input /> 输入的是 0.1，那么就要显示 10.00%，保留两位小数。
<PercentageApp />：组合上述两个组件。
*/

class Input extends Component {
    render () {
      return (
        <div>
          <input type='number' onChange={this.props.handleInput.bind(this)}/>
        </div>
      )
    }
  }
  
  class PercentageShower extends Component {
    render () {
      return (
        <div>
          {this.props.num}
        </div>
      )
    }
  }
  
  class PercentageApp extends Component {
    constructor() {
      super();
      this.state={
        num: 0
      }
    }
    handleInput(event) {
      this.setState({
        num: parseFloat((event.target.value)*100).toFixed(2) + '%'
      })
    }
    render () {
      return (
        <div>
          <Input handleInput={this.handleInput.bind(this)}/>
          <PercentageShower num={this.state.num} />
        </div>
      )
    }
  }
  
