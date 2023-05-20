
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from "react";

function RegisterScreen(props) {
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

  const isLetter = (char) => {
    const charCode = char.charCodeAt(0);
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
  };
  function registerButton() {
    let regApproved = 1;
    const newUsername = newUsernameInput.current.value;
    const newPassword = newPasswordInput.current.value;
    const newProfilename = newProfilenameInput.current.value;
    const newEmail = newEmailInput.current.value;
    const newImg = "hii";
    setmessageRegisterUsername("");
    setmessageRegisterEmail("");
    setmessageRegisterPassword("");
    for (let i = 0; i < props.info.length; i++) {
      if (props.info[i].username === newUsername) {
        regApproved = 0;
        i = props.info.length;
        setmessageRegisterUsername("This user name is already used");
      }
      if (props.info[i].email === newEmail) {
        regApproved = 0;
        i = props.info.length;
        setmessageRegisterEmail("This email is already registered here");
      }
    }

    if (!newUsername.trim()) {
      regApproved = 0;
      setmessageRegisterUsername("Username is not valid");
    }
    if(newPassword.length>16||newPassword.length<4) {
      setmessageRegisterPassword("Password is not valid");
      regApproved = 0;
    } else {
      let have$=0;
      let haveNum=0;
      let haveLet=0;
      let haveEmpjy=0;
      for(let i=0;i<newPassword.length;i++) {
          if(newPassword.charAt(i)==='$') {
            have$=1;
          }
          if(newPassword.charAt(i).match(/[0-9]/)) {
            haveNum=1;
          }
          if(isLetter(newPassword.charAt(i))) {
            haveLet=1;
          }
          if (newPassword.charAt(i) >= 0x1F300 && newPassword.charAt(i) <= 0x1FFFF) { 
            haveEmpjy=1;
          }


      }
      if(!have$||!haveNum||!haveLet||haveEmpjy) {
        setmessageRegisterPassword("Password is not valid");
        regApproved = 0;
      }
    }
   

    const regex3 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex3.test(newEmail)) {
      setmessageRegisterEmail("Email is not valid");
      regApproved = 0;
    }

    if (regApproved) {
      const newDeat = { username: newUsername, password: newPassword, profilename: newProfilename, email: newEmail, img: newImg };
      props.info.push(newDeat);
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
