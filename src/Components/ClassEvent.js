import { Component } from "react";

class ClassEvent extends Component{
    ClassEvent =()=>{
        console.log("Button Clicked!")
    }
    render(){
        return(
            <div>
                <center>
                    <h2>This is Class based Event</h2>
                    <button onClick={this.ClassEvent}>Click here!</button>
                </center>
            </div>

        )
    }
}
export default ClassEvent;