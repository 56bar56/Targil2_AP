import React from 'react';

function LoginScreen() {
  const handleLogin = () => {
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const messageLoginF = document.getElementById('messageLoginF');

    const loginDetails = [
      { username: "ofek", password: "12", profilename: "fati", email: "fati@gmail.com", img: "img1" },
      { username: "bar", password: "123", profilename: "haaland", email: "haaland@gmail.com", img: "img2" },
      { username: "ariel", password: "1234", profilename: "lewandowski", email: "lewandowski@gmail.com", img: "img3" }
    ];

    const username = usernameInput.value;
    const password = passwordInput.value;
    let weDontMove = 1;

    for (let i = 0; i < loginDetails.length; i++) {
      if (username === loginDetails[i].username && password === loginDetails[i].password) {
        weDontMove = 0;
        i = loginDetails.length;
        window.location.href = 'Chats.html';
      }
    }

    if (weDontMove) {
      messageLoginF.textContent = 'wrong password or username';
    }
  };

  return (
    <div>
      <div className="header">Log in</div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 login-form">
            <div className="form-group">
              <label>Username</label>
              <input id="usernameInput" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input id="passwordInput" type="password" className="form-control" placeholder="Password" />
            </div>
            <br />
            <button type="submit" id="loginButton" className="btn btn-primary btn-block btn-wide" onClick={handleLogin}>
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
      <div className="message" id="messageLoginF"></div>
    </div>
  );
}

export default LoginScreen;
