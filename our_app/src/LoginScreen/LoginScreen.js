function LoginScreen() {

    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const messageLoginF = document.getElementById('messageLoginF');

    const loginDeatales = [
        { username: "ofek", password: "12", profilename: "fati", email: "fati@gmail.com", img: "img1" },
        { username: "bar", password: "123", profilename: "haaland", email: "haaland@gmail.com", img: "img2" },
        { username: "ariel", password: "1234", profilename: "lewandowski", email: "lewandowski@gmail.com", img: "img3" }
    ];
    document.getElementById('loginButton').addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;
        let weDontMove=1;
        for (let i = 0; i < loginDeatales.length; i++) { //checking if the user and password exist
            if (username === loginDeatales[i].username && password === loginDeatales[i].password) {
                weDontMove = 0;
                i=loginDeatales.length;
                location.href='Chats.html';
            } 
        }
        if(weDontMove) { //In case it is not exist, prints error message
            messageLoginF.textContent = 'wrong password or username';
        }
    });



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
      <button type="submit" id="loginButton" className="btn btn-primary btn-block btn-wide">
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
