import { useRef } from "react";
import { useState } from "react";
function LoginScreen() {
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    let [messageLoginF,setmessageLoginF] = useState('');

    const loginDeatales = [
        { username: "ofek", password: "12", profilename: "fati", email: "fati@gmail.com", img: "img1" },
        { username: "bar", password: "123", profilename: "haaland", email: "haaland@gmail.com", img: "img2" },
        { username: "ariel", password: "1234", profilename: "lewandowski", email: "lewandowski@gmail.com", img: "img3" }
    ];
     function logIn () {
        console.log("im herree");
        const username = usernameInput.current.value;
        const password = passwordInput.current.value;
        let weDontMove=1;
        for (let i = 0; i < loginDeatales.length; i++) { //checking if the user and password exist
            if (username === loginDeatales[i].username && password === loginDeatales[i].password) {
                weDontMove = 0;
                i=loginDeatales.length;
               // location.href='Chats.html';
            } 
        }
        if(weDontMove) { //In case it is not exist, prints error message
            passwordInput.current.value = '';
            usernameInput.current.value = '';
            console.log("im herree2");
            setmessageLoginF('wrong password or username');
        }
    }



    return (
<div>
<div className="header">Log in</div>
<div className="container">
  <div className="row">
    <div className="col-md-6 offset-md-3 login-form">
      <div className="form-group">
        <label>Username</label>
        <input className="form-control" ref = {usernameInput} placeholder="Username" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" ref = {passwordInput} className="form-control" placeholder="Password" />
      </div>
      <br />
      <button onClick={logIn}  className="btn btn-primary btn-block btn-wide" >
        Log In
      </button>
      <br />
      <br />
      <h8>Not registered? </h8>
      <a onClick={() => (window.location.href = 'register.html')} target="_blank" className="link">
        click here
      </a>
      <h8> here to register </h8>
    </div>
  </div>
</div>
<div className="message">{messageLoginF}</div>
</div>
    );
}
export default LoginScreen;
