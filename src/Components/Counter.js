import {Component} from 'react'
class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
        this.counterincrement =this.counterincrement.bind(this);
        this.counterdecrement = this.counterdecrement.bind(this);
    }
    counterincrement(){
        console.log(this)
        console.log("Button Clicked!")
        this.setState(
            {
                counter:this.state.counter + 1 
            }
        )
    }

    counterdecrement(){
        console.log(this)
        console.log("Button Clicked!")
        this.setState({
            counter:this.state.counter - 1
        })
    }
    render(){
        return(
            <div>
                <center> 
                 <h3>Count value is: {this.state.counter} </h3>
                <button onClick={this.counterincrement}>Increment</button><br/>
                <button onClick={this.counterdecrement}>Decrement</button>
                </center>
            </div>
        )
    }
}
export default Counter;