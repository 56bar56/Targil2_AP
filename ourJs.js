$(document).ready(function() {
    //Login
    //const loginButton = document.getElementById('loginButton');
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    //Register
    //const registerButton = document.getElementById('registerButton');
    const newUsernameInput = document.getElementById('inputUsername');
    const newPasswordInput = document.getElementById('inputPassword');
    const newProfilenameInput = document.getElementById('inputProfilename');
    const newEmailInput = document.getElementById('inputEmail');
    const newProfileImage = document.getElementById('inputPhoto');
    //Message for the user
    const messageLoginF = document.getElementById('messageLoginF');
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

    /* the case we press login*/
    $('#loginButton').click(function() {
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

    /*the case we press rgister*/
    $('#registerButton').click(function() {
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
            location.href='Chats.html';
        }
    });

});
