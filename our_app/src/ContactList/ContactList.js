import React from 'react';
import { useRef } from 'react';
function ContactList() {
const taskInput = useRef(null);
const taskList = document.querySelector('#taskList');
const modal = document.getElementById('exampleModal');

function addContactBtn() {
    modal.classList.add('show');
    modal.style.display = 'block';
}

function addTaskBtn() {
    const newContact = (taskInput.current.value).trim();
    if (newContact !== '') {
        addCon(newContact);
        modal.classList.remove('show');
        modal.style.display = 'none';
        taskInput.current.value = '';
    }
}

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

    taskInput.currentvalue = '';

    // Remove active class from all items
    const taskItems = document.querySelectorAll('.list-group-item');
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

  return (
    <div className="contant">
      <button onClick={addContactBtn} data-bs-toggle="modal"className="btn btn-primary addContant" data-bs-target="#exampleModal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-add"
          viewBox="0 0 16 16"
        >
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
        </svg>
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Contact:</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="taskForm">
                <input type="name" className="form-control" id="exampleFormControlInput1" ref = {taskInput} placeholder="Contact UserName"></input>
              </form>
            </div>
            <div className="modal-footer">
              <button onClick={addTaskBtn} className="btn btn-primary" data-bs-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-group" id="taskList"></ul>
    </div>
  );
}
export default ContactList;
