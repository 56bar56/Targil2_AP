const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
const modal = document.getElementById('exampleModal');
const addContactBtn = document.querySelector('#addContactBtn');
addContactBtn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.style.display = 'block';
});

const addTaskBtn = document.querySelector('#addTaskBtn');
addTaskBtn.addEventListener('click', () => {
    const newContact = taskInput.value.trim();
    if (newContact !== '') {
        addCon(newContact);
        modal.classList.remove('show');
        modal.style.display = 'none';
        taskInput.value = '';
    }
});

let activeItem = null; // Variable to store the active item

function addCon(newCon) {
    const taskLi = document.createElement('li');

    const link = document.createElement('div');
    link.href = '#';
    taskLi.classList.add('list-group-item');

    const image = document.createElement('img');
    image.src = 'https://cdn.vox-cdn.com/thumbor/91C8cGj1i1h9VlMayTiAorSoDpI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22879573/1235519898.jpg';
    image.classList.add('img-fluid', 'rounded-circle');
    image.width = '40';
    image.height = '25';

    const name = document.createTextNode(newCon);
    link.appendChild(image);
    link.appendChild(name);

    taskLi.appendChild(link);
    taskList.appendChild(taskLi);

    taskInput.value = '';

    // Attach click event listener to the newly created list item
    taskLi.addEventListener('click', () => {
        // Remove active class from the previously active item
        if (activeItem !== null) {
            activeItem.classList.remove('active');
        }

        // Set the clicked item as the new active item
        taskLi.classList.add('active');
        activeItem = taskLi;
    });
}


//the message part of the screan
const messageInput = document.querySelector('#messageInput');
const messageList = document.querySelector('#messageList');
const sendMassege =  document.querySelector('#sendMassege');

//add new messeges
sendMassege.addEventListener('click', () => {
    const newMessage = messageInput.value;
    const messageLiI = document.createElement('li');
    messageLiI.classList.add('list-message-item');  // Add the class here
    const linkMes1 = document.createElement('div');
    const linkMes2 = document.createElement('div');
    linkMes2.classList.add('speech-bubble');
    linkMes1.href = '#';
    linkMes1.classList.add('user2', 'clearfix');
    const imgMessagei = document.createElement('img');
    imgMessagei.src = 'https://static01.nyt.com/images/2022/10/30/multimedia/30onsoccer-hattracik--1-1cef/30onsoccer-hattracik--1-1cef-mediumSquareAt3X.jpg';
    imgMessagei.setAttribute('alt','User 2');
    const messageContenti = document.createTextNode(newMessage);
    linkMes2.appendChild(messageContenti);
    linkMes1.appendChild(imgMessagei);
    linkMes1.appendChild(linkMes2);
    messageLiI.appendChild(linkMes1);
    messageList.appendChild(messageLiI);
    messageInput.value = '';
});
