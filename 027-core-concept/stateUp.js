function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
 /**
  * 当输入 temperature 的值无效时，函数返回空字符串，反之，则返回保留三位小数并四舍五入后的转换结果
  * @param {string} temperature 
  * @param {function} convert 
  */
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) return '';
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           temperature: '',
           scale: 'c'
       };
       this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
       this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
   }
   handleCelsiusChange(temperature) {
       this.setState({
           scale: 'c',
           temperature: temperature
       });
   }
   handleFahrenheitChange(temperature) {
       this.setState({
           scale: 'f',
           temperature: temperature
       });
   }
   render() {
       const scale = this.state.scale;
       const temperature = this.state.temperature;
       const celsius = scale === 'f' ? tryConvert(temperature) : temperature;
       const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

       return(
           <div>
               <TemperatureInput 
                   scale="c"
                   temperature={celsius}
                   onTemperatureChange={this.handleCelsiusChange}
               />

               <TemperatureInput 
                   scale="f"
                   temperature={fahrenheit}
                   onTemperatureChange={this.handleFahrenheitChange}
               />

               <BoilingVerdict
                   celsius={parseFloat(celsius)}
               />
           </div>
       )
   }

}