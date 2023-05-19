import './App.css';
import { useRef } from 'react';

function App() {
  const taskInput = useRef(null)
const taskList = document.querySelector('#taskList');
const modal = document.getElementById('exampleModal');
const addContactBtn = document.querySelector('#addContactBtn');
addContactBtn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.style.display = 'block';
});

const addTaskBtn = document.querySelector('#addTaskBtn');
addTaskBtn.addEventListener('click', () => {
    console.log("hello");
    const newContact = taskInput.value.trim();
    if (newContact !== '') {
        addCon(newContact);
        modal.classList.remove('show');
        modal.style.display = 'none';
        taskInput.value = '';
    }
});

let activeItem = 1; // Variable to store the active item

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
        if (activeItem!==1) {
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

  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <div className="header">
        <button type="button" className="btn btn-outline-danger Logout" onClick={() => { window.location.href = 'LogIn.html' }}>Log Out</button>
        <div className="textB">Chat Room</div>
      </div>
      <div className="content"></div>
      <div className="currentChat">
        <div type="user" className="form-control namechat" id="floatingInputDisabled" disabled>
          <label htmlFor="floatingInputDisabled" className="currentChatUser">
            <img src="https://static01.nyt.com/images/2022/10/30/multimedia/30onsoccer-hattracik--1-1cef/30onsoccer-hattracik--1-1cef-mediumSquareAt3X.jpg" className="img-fluid rounded-circle" width="40" height="25" alt="User Avatar" />
            Bar
          </label>
        </div>
        <div className="container">
          <ul className="list-message no-dot-list" id="messageList"></ul>
        </div>
        <form className="currentChatKey input-group mb-3">
          <input type="text" id="messageInput" className="form-control" placeholder="enter massage ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button type="button" id="sendMassege" className="btn btn-outline-secondary">send</button>
        </form>
      </div>
      <div className="contant">
        <button id="addContactBtn" data-bs-toggle="modal" className="btn btn-primary addContant" data-bs-target="#exampleModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
          </svg>
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Contact :</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="taskForm">
                  <input type="name" id="taskInput" className="form-control" ref = {taskInput} placeholder="Contact UserName" />
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" id="addTaskBtn" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-group" id="taskList"></ul>
        <script src="whatsap.js"></script>
      </div>
    </div>
  );
}

export default App;
