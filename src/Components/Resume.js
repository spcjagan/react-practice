import {Component} from 'react';

class Resume extends Component{
    render(){
        const {message}=this.props;
        return(
            <div>
            <center><h2>This is a {message}    Class Component</h2></center>
            </div>
        )
    }
}
export default Resume;