const { Component } = require("react");

class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            sum: 0,
            sign: null

        }
    }
    setNum = (e, num) => {
        this.setState({ [num]: parseInt(e.target.value)})
    }

    setSign = (e) => {
        let signKind = e.target.value
        this.setState({sign: signKind})

    }

    mathFunctions = () => {
        const num1 = this.state.num1
        const num2 = this.state.num2
        const sign = this.state.sign

        if (this.state.sign === "+") {
            this.setState({sum: num1 + num2})
        }
        if (this.state.sign === "-") {
            this.setState({sum: num1 - num2})
        }
        if (this.state.sign === "*") {
            this.setState({sum: num1 * num2})
        }
        if (this.state.sign === "/") {
            this.setState({sum: num1 / num2})
        }
    }

    render () {
        return (
        <div className="calc-div">
            <input type="number" name="firstnumber" value={this.state.num1} onChange={(e) => this.setNum(e, 'num1')}></input>

            <input type="text" name="sign" value={this.state.sign} onChange={(e) => this.setSign(e)}></input>
            <input type="number" name="secondnumber" value={this.state.num2} onChange={(e) => this.setNum(e, 'num2')}></input>
            <button onClick={this.mathFunctions}>Do That Math!</button>
            <p>{this.state.sum}</p>


        </div>
        )
    }

}
export default Calculator