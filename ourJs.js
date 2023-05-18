const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const newUsernameInput = document.getElementById('newUsernameInput');
const newPasswordInput = document.getElementById('newPasswordInput');
const newProfilenameInput = document.getElementById('newProfilenameInput');
const newEmailInput = document.getElementById('newEmailInput');
const messageLoginF = document.getElementById('messageLoginF');
const messageRegisterPassword = document.getElementById('messageRegisterPassword');
const messageRegisterProfilename = document.getElementById('messageRegisterProfilename');
const messageRegisterEmail = document.getElementById('messageRegisterEmail');

const loginDeatales = [
    { username: "ofek", password: "12", profilename: "fati", email: "fati@gmail.com", img: "img1" },
    { username: "bar", password: "123", profilename: "haaland", email: "haaland@gmail.com", img: "img2" },
    { username: "ariel", password: "1234", profilename: "lewandowski", email: "lewandowski@gmail.com", img: "img3" },
  ];

  /* the case we press login*/
loginButton.addEventListener('click', function() {
    const username = usernameInput.value.toLowerCase();
    const password = passwordInput.value.toLowerCase();
    let weDontMove=1;
    for (let i = 0; i < loginDeatales.length; i++) {
        if (username === loginDeatales[i].username && password === loginDeatales[i].password) {
            weDontMove = 0;
            i=loginDeatales.length;
            location.href='Chats.html';
        } 
    }
    if(weDontMove) {
        messageLoginF.textContent = 'wrong password or username';
    }
    });

    /*the case we press rgister*/
    registerButton.addEventListener('click', function() {
    messageRegisterProfilename.textContent = 'this profile name already used';
        let regApproved = 1;
        const newUsername = newUsernameInput.value.toLowerCase();
        const newPasword = newPasswordInput.value.toLowerCase();
        const newProfilename = newProfilenameInput.value.toLowerCase();
        const newEmail = newEmailInput.value.toLowerCase();
        const newImg = "i dont know yet how to save image";
        //to do- check if the password is valid
        for(let i=0; i<loginDeatales.length; i++) {
            if(loginDeatales[i].profilename === newProfilename) {
                regApproved=0;
                i=loginDeatales.length;
                messageRegisterProfilename.textContent = 'this profile name already used';
            }
            if(loginDeatales[i].email===newEmail) {
                regApproved=0;
                i=loginDeatales.length;
                messageRegisterEmail.textContent = 'this email alredy register here';
            }
           
        }
        if(regApproved) {
            const newDeat = { username: newUsername, password: newPasword, profilename: newProfilename, email: newEmail, img: newImg };
            loginDeatales.push(newDeat);
            location.href='Chats.html';
        }
    });



   