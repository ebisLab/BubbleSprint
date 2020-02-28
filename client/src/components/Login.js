import React, { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const changeHandler =(e)=>{
    setLogin({...login, [e.target.name]: e.target.value})
    console.log(login, '<--login')
    console.log(e.target.value)
  }
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form>
        <input
        placeholder="username"
        label="username"
        name="username"
        value={login.username}
        onChange={changeHandler} />
        <input 
        placeholder="password"
        label="password"
        name="password"
        value={login.password}
        onChange={changeHandler}/>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
