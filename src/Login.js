import React, {useState} from 'react'
import {Link, useHistory } from "react-router-dom";
import './Login.css'
import {auth} from "./firebase"
function Login() {
  const history=useHistory();
  const [email, setEmail] = useState("");
  const[password, setPassword]=useState("");

  const login= (event) =>{
    event.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) =>{
      // logged in, redirected to homepage
      history.push("/");
    })
    .catch((e) => alert(e.message));
  };
  const register= (event) =>{
    event.preventDefault();
    //create account
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth) =>{
      history.push("/");
    })
    .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img 
          className="login__logo"
          src="https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE1XFxcLzA4XFxcLzA2MTUzOTM0XFxcL2FtYXpvbi5qcGdcIixcIndpZHRoXCI6NzAwLFwiaGVpZ2h0XCI6MzcwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuaGVyLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvaGVyXFxcL25vLWltYWdlLnBuZz9pZD1kNDgyODZlN2RlZWNmYzIzZWVjNlwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiI1YWU5M2I3MDA2MTc0OThhZDc2ODQxNDFiNjRjYWJmNGEyNDg0ZTViIn0=/amazon.jpg"
          alt=""/>
          
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input value={email} onChange={event=>setEmail(event.target.value)} type="email"/>
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
          <button onClick={login} type="submit" className="login__signinButton">Sign in</button>
        </form>
        <p>By signing-in you agree to Amazon's Conditions of Use & Sales. Please see our Privacy Notice, our Cookies Notice and our Interested-Based Ads Notice</p>
        <button onClick={register} className="login__registerButton">Create your account</button>
      </div>
    </div>
  )
}

export default Login
