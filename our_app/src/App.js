import './App.css';
import './whatsap.js'; 
function App() {
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
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
                  <input type="name" id="taskInput" className="form-control" placeholder="Contact UserName" />
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" id="addTaskBtn" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-group" id="taskList"></ul>
        <script src="Chats.js"></script>
      </div>
    </div>
  );
}

export default App;
