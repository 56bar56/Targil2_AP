
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from "react";

function RegisterScreen() {
  const newUsernameInput = useRef(null);
  const newPasswordInput = useRef(null);
  const newProfilenameInput = useRef(null);
  const newEmailInput = useRef(null);
  const newProfileImage = document.getElementById("inputPhoto");
  const navigate = useNavigate();
  let [messageRegisterUsername, setmessageRegisterUsername] = useState("");
  let [messageRegisterPassword, setmessageRegisterPassword] = useState("");
  let [messageRegisterProfilename, setmessageRegisterProfilename] = useState("");
  let [messageRegisterEmail, setmessageRegisterEmail] = useState("");
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);

  const loginDeatales = [
    { username: "ofek", password: "12", profilename: "fati", email: "fati@gmail.com", img: "img1" },
    { username: "bar", password: "123", profilename: "haaland", email: "haaland@gmail.com", img: "img2" },
    { username: "ariel", password: "1234", profilename: "lewandowski", email: "lewandowski@gmail.com", img: "img3" }
  ];

  function registerButton() {
    let regApproved = 1;
    const newUsername = newUsernameInput.current.value;
    const newPassword = newPasswordInput.current.value;
    const newProfilename = newProfilenameInput.current.value;
    const newEmail = newEmailInput.current.value;
    const newImg = "hii";

    for (let i = 0; i < loginDeatales.length; i++) {
      if (loginDeatales[i].profilename === newProfilename) {
        regApproved = 0;
        i = loginDeatales.length;
        setmessageRegisterUsername("This profile name is already used");
      }
      if (loginDeatales[i].email === newEmail) {
        regApproved = 0;
        i = loginDeatales.length;
        setmessageRegisterEmail("This email is already registered here");
      }
    }

    if (!newUsername.trim()) {
      regApproved = 0;
      setmessageRegisterUsername("Username is not valid");
    }

    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$])[A-Za-z\d$]{4,16}$/;
    const regex2 = /\p{Emoji}/u;
    if (!(regex.test(newPassword) && !/\s/.test(newPassword) && !regex2.test(newPassword))) {
      setmessageRegisterPassword("Password is not valid");
      regApproved = 0;
    }

    const regex3 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex3.test(newEmail)) {
      setmessageRegisterEmail("Email is not valid");
      regApproved = 0;
    }

    if (regApproved) {
      const newDeat = { username: newUsername, password: newPassword, profilename: newProfilename, email: newEmail, img: newImg };
      loginDeatales.push(newDeat);
      navigate('/Chats'); // Navigate to the "/chat" route
    }
  }

  function handlePasswordFocus() {
    setShowPasswordMessage(true);
  }

  function handlePasswordBlur() {
    setShowPasswordMessage(false);
  }

  return (
    <div>
      <div className="header">Register</div>
      <br />
      <br />
      <div id="registerBox">
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputUsername" className="col-form-label">Username</label>
          </div>
          <div className="col-auto">
            <input type="text" ref={newUsernameInput} className="form-control" />
          </div>
        </div>
        <br />
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputPassword" className="col-form-label">Password</label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              ref={newPasswordInput}
              className="form-control"
              aria-labelledby="passwordHelpInline"
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
            />
          </div>
          {showPasswordMessage && (
            <div className="password-message">
              Must be 4-16 characters long, contain letters and numbers and a $, and must not contain spaces or emojis.
            </div>
          )}
        </div>
        <br />
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputProfilename" className="col-form-label">Profile name</label>
          </div>
          <div className="col-auto">
            <input type="text" ref={newProfilenameInput} className="form-control" />
          </div>
        </div>
        <br />
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputEmail" className="col-form-label">Email address</label>
          </div>
          <div className="col-auto">
            <input type="text" ref={newEmailInput} className="form-control" placeholder="name@example.com" />
          </div>
        </div>
        <br />
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputPhoto" className="col-form-label">Profile photo</label>
          </div>
          <div className="col-auto">
            <input type="file" id="inputPhoto" className="form-control" />
          </div>
        </div>

        <div id="buttonBox">
          <button onClick={registerButton} className="btn btn-primary btn-block btn-wide">Register</button>
          <br />
          <div className="form-text">
            Already registered?&nbsp;
            <Link to ='/' className="link">click here</Link>
            &nbsp;to log in
          </div>
        </div>
        <div className="message">{messageRegisterUsername}</div>
        <div className="message">{messageRegisterPassword}</div>
        <div className="message">{messageRegisterProfilename}</div>
        <div className="message">{messageRegisterEmail}</div>
      </div>
    </div>
  );
}

export default RegisterScreen;
