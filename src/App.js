import React,{useState} from 'react'


const App = () => {
  const [data,setData]=useState({
    email:'',
    password:''
  })
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e =>{
    e.preventDefault();
    if(data.password.length <5){
      alert("password must contains greater than 5 characters");
    }
    else{
      console.log(data);    
    }
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <label style={{'color':'red','fontFamily':'monospace','fontSize':'50px'}}>E-Mail</label>
        <input type="text" name="email" onChange={changeHandler}
        style={{'color':'red','fontFamily':'monospace','fontSize':'50px','margin':'20px'}}/><br/>
        <label style={{'color':'red','fontFamily':'monospace','fontSize':'50px'}}>Password</label>
        <input type="password" name="password" onChange={changeHandler}
        style={{'color':'red','fontFamily':'monospace','fontSize':'50px','margin':'20px'}}/><br/>
        <input type="submit" value="Submit"
        style={{'color':'red','fontFamily':'monospace','fontSize':'50px','width':'303px','marginLeft':'300px'}}/>        
        </form>
      </center>
    </div>
  )
}

export default App