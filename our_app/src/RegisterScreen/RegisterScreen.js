function RegisterScreen() {
    //Register
    //const registerButton = document.getElementById('registerButton');
    const newUsernameInput = document.getElementById('inputUsername');
    const newPasswordInput = document.getElementById('inputPassword');
    const newProfilenameInput = document.getElementById('inputProfilename');
    const newEmailInput = document.getElementById('inputEmail');
    const newProfileImage = document.getElementById('inputPhoto');

    const messageRegisterUsername = document.getElementById('messageRegisterUsername');
    const messageRegisterPassword = document.getElementById('messageRegisterPassword');
    const messageRegisterProfilename = document.getElementById('messageRegisterProfilename');
    const messageRegisterEmail = document.getElementById('messageRegisterEmail');

    //List of all users
    const loginDeatales = [
        { username: "ofek", password: "12", profilename: "fati", email: "fati@gmail.com", img: "img1" },
        { username: "bar", password: "123", profilename: "haaland", email: "haaland@gmail.com", img: "img2" },
        { username: "ariel", password: "1234", profilename: "lewandowski", email: "lewandowski@gmail.com", img: "img3" }
    ];
    /*the case we press rgister*/
    document.getElementById('registerButton').addEventListener('click', function() {
        let regApproved = 1; //0- not valid, 1- valid
        const newUsername = newUsernameInput.value;
        const newPassword = newPasswordInput.value;
        const newProfilename = newProfilenameInput.value;
        const newEmail = newEmailInput.value;
        const newImg = newProfileImage.value;
        console.log("username: " + newUsername + ", password: " + newPassword + ", name: " + newProfilename + ", newEmail" + newEmail);


        //checks wether username and email are already used
        for(let i=0; i<loginDeatales.length; i++) {
            if(loginDeatales[i].profilename === newProfilename) {
                regApproved=0;
                i=loginDeatales.length;
                messageRegisterUsername.textContent = 'this username is already used';
            }
            if(loginDeatales[i].email===newEmail) {
                regApproved=0;
                i=loginDeatales.length;
                messageRegisterEmail.textContent = 'this email is alredy register here';
            }
        
        }
        //checks that username is not empty
        if(!(newUsername.trim())){
            regApproved=0;
            messageRegisterUsername.textContent = 'Username is not valid';
        }


        //checks password
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$])[A-Za-z\d$]{4,16}$/;
        const regex2 = /\p{Emoji}/u;
        if (!(regex.test(newPassword) && !/\s/.test(newPassword) && !(regex2.test(newPassword)))) { //valid
            messageRegisterPassword.textContent = 'Password is not valid';
            regApproved=0;
        }

        //checks email
        const regex3 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!(regex3.test(newEmail))) {//invalid
            messageRegisterEmail.textContent = 'Email is not valid';
            regApproved=0;
        }

        if(regApproved) {
            const newDeat = { username: newUsername, password: newPassword, profilename: newProfilename, email: newEmail, img: newImg };
            loginDeatales.push(newDeat);
            window.location.href='Chats.html';
        }
    });
    return (
        <div>
            <div class="header">Register</div>
            <br></br>
            <br></br>
            <div id="registerBox">
        <div className="row g-3 align-items-center">
            <div className="col-auto">
            <label htmlFor="inputUsername" className="col-form-label">Username</label>
            </div>
            <div className="col-auto">
            <input type="text" id="inputUsername" className="form-control" />
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
                id="inputPassword"
                className="form-control"
                aria-labelledby="passwordHelpInline"
                data-bs-toggle="popover"
                data-bs-placement="right"
                data-bs-custom-class="custom-popover"
                data-bs-content="Must be 4-16 characters long, contain letters and numbers and a $, and must not contain spaces, or emoji."
            />
            </div>
        </div>
        <br />
        <div className="row g-3 align-items-center">
            <div className="col-auto">
            <label htmlFor="inputProfilename" className="col-form-label">Profile name</label>
            </div>
            <div className="col-auto">
            <input type="text" id="inputProfilename" className="form-control" />
            </div>
        </div>
        <br />
        <div className="row g-3 align-items-center">
            <div className="col-auto">
            <label htmlFor="inputEmail" className="col-form-label">Email address</label>
            </div>
            <div className="col-auto">
            <input
                type="text"
                id="inputEmail"
                className="form-control"
                placeholder="name@example.com"
            />
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
            <button type="button" id="registerButton" className="btn btn-primary btn-block btn-wide">Register</button>
            <br />
            <div className="form-text">
            Already registered?&nbsp;
            <a href="LogIn.html" className="link">click here</a>
            &nbsp;to log in
            </div>
        </div>
        <div className="message" id="messageRegisterUsername"></div>
        <div className="message" id="messageRegisterPassword"></div>
        <div className="message" id="messageRegisterProfilename"></div>
        <div className="message" id="messageRegisterEmail"></div>
        </div>
    </div>
    );
}
export default RegisterScreen;
