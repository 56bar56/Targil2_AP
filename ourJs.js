$(document).ready(function() {

    //Message for the user
    const toastTrigger1 = document.getElementById('loginButton');
    const toastLiveExample1 = document.getElementById('messageL');

    const toastTrigger2 = document.getElementById('registerButton');
    const toastLiveExample2 = document.getElementById('messageR');




    //List of all users
    const loginDeatales = [
        { username: "ofek", password: "12", profilename: "fati", email: "fati@gmail.com", img: "img1" },
        { username: "bar", password: "123", profilename: "haaland", email: "haaland@gmail.com", img: "img2" },
        { username: "ariel", password: "1234", profilename: "lewandowski", email: "lewandowski@gmail.com", img: "img3" }
    ];

    /* the case we press login*/
    $('#loginButton').click(function() {
        let weDontMove=1;
        messageLogin.textContent = '';
        const username = $('#usernameInput').val();
        const password = $('#passwordInput').val();
        console.log("username: " + username + ", password: " + password);
        for (let i = 0; i < loginDeatales.length; i++) { //checking if the user and password exist
            if (username === loginDeatales[i].username && password === loginDeatales[i].password) {
                weDontMove = 0;
                i=loginDeatales.length;
                location.href='Chats.html';
            } 
        }
        if(weDontMove) { //In case it is not exist, prints error message
            messageLogin.textContent = 'wrong password or username';
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample1)
            toastTrigger1.addEventListener('click', () => {
                toastBootstrap.show()
            })
        }
    });

    /*the case we press register*/
    $('#registerButton').click(function() {
        let regApproved = 1; //0- not valid, 1- valid
        messageRegister.textContent = '';
        const newUsername = $('#inputUsername').val();
        const newPassword = $('#inputPassword').val();
        const newProfilename = $('#inputProfilename').val();
        const newEmail = $('#inputEmail').val();
        const newImg = $('#inputPhoto').val();
        console.log("username: " + newUsername + ", password: " + newPassword + ", name: " + newProfilename + ", newEmail: " + newEmail);


        //checks wether username and email are already used
        for(let i=0; i<loginDeatales.length; i++) {
            if(loginDeatales[i].username === newUsername) {
                regApproved=0;
                i=loginDeatales.length;
                messageRegister.textContent += 'This username is already used ';
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
                toastTrigger2.addEventListener('click', () => {
                    toastBootstrap.show()
                })
            }
            else if (loginDeatales[i].email === newEmail) {
                regApproved=0;
                i=loginDeatales.length;
                messageRegister.textContent += 'This email is alredy used ';
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
                toastTrigger2.addEventListener('click', () => {
                    toastBootstrap.show()
                })
            }
        
        }
        //checks that username is not empty
        if(!(newUsername.trim())){
            regApproved=0;
            messageRegister.textContent += 'Username is invalid ';
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
            toastTrigger2.addEventListener('click', () => {
                toastBootstrap.show()
            })
        }


        // Checks password
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$])[A-Za-z\d$]{4,16}$/;
        const regex2 = /\p{Emoji}/u;
        if (!regex.test(newPassword) || /\s/.test(newPassword) || regex2.test(newPassword)) {// Invalid password
            messageRegister.textContent += 'Password is invalid ';
            regApproved = 0;
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
            toastTrigger2.addEventListener('click', () => {
                toastBootstrap.show()
            })
        }

        //checks email
        const regex3 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!(regex3.test(newEmail))) {//invalid
            messageRegister.textContent += 'Email is invalid ';
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
            toastTrigger2.addEventListener('click', () => {
                toastBootstrap.show()
            })
            regApproved=0;
        }

        //checks that profile name is not empty
        if(!(newProfilename.trim())){
            regApproved=0;
            messageRegister.textContent += 'Profile name is invalid ';
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
            toastTrigger2.addEventListener('click', () => {
                toastBootstrap.show()
            })
        }

        if(regApproved) {
            const newDeat = { username: newUsername, password: newPassword, profilename: newProfilename, email: newEmail, img: newImg };
            loginDeatales.push(newDeat);
            location.href='Chats.html';
        }
    });

});
