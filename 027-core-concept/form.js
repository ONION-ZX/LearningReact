/**
 * 受控组件
 * input
 */
class nameForm extends React.Component {
    constroctor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value});
    }
    handleSubmit(e) {
        alert('提交的名字：'+ this.state.value);
        e.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        name: 
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
}

/**
 * textarea
 */
class EssayForm extends React.Component {
    constroctor(props) {
        super(props);
        this.state = {
            value: '请撰写一篇关于你喜欢的 DOM 元素的文章.',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    handleSubmit(e) {
        alert('提交的文章: ' + this.state.value);
        e.preventDefault();
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        article:
                        <textarea value={this.state.value} onChange={this.onChange}></textarea>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        )
    }

}

/**
 * select
 */

 class FlavorForm extends React.Component {
     constroctor(props) {
         super(props);
         this.state = {value: 'coconut'};
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }
     handleChange(e) {
         this.setState({value: e.target.value});
     }
     handleSubmit(e) {
        alert('你喜欢的风味是: ' + this.state.value);
        e.preventDefault()
     }
     render() {
         return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    /**
                        多选情况：
                        <select multiple={true} value={['B', 'C']}></select>
                     */
                        选择你喜欢的风格：
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">葡萄柚</option>
                            <option value="lime">柠檬</option>
                            <option value="coconut">椰子</option>
                            <option value="mango">芒果</option>
                        </select>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
         )
     }
 }

 /**
  * 处理多个输入
  */

  class Reservation extends React.Component {
      constroctor(props) {
          super(props);
          this.state = {
              isGoing: true,
              numberOfGuests: 2
          };
          this.handleInputChange = this.handleInputChange.bind(this);
      }
      handleInputChange(e) {
          const target = e.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const name = target.name;

          this.setState={
              [name]: value
          };
      }
      render() {
          return(
              <div>
                  <form>
                      <label>
                          参与：
                          <input name="isGoing"
                                 type="checkbox"
                                 checked={this.state.isGoing}
                                 onChange={this.handleInputChange}
                                 />
                      </label>
                      <br />
                      <label>
                          来宾人数：
                          <input name="numberOfGuests"
                                 type="number"
                                 value={this.state.numberOfGuests}
                                 onChange={this.handleInputChange}
                                 />
                      </label>
                  </form>
              </div>
          )
      }
  }
