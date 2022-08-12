function FunctionEvent (){
    function FunctionEvent(){
        console.log("Button Clicked !")
    }
    return(
        <div>
            <center><h2>This is Function based event.</h2><br/>
             <button onClick={FunctionEvent}>Click Me !</button>
            </center>
        </div>
    )
}
export default FunctionEvent