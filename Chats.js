const form = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

const addContactBtn = document.querySelector('#addContactBtn');
addContactBtn.addEventListener('click', () => {
    $('#exampleModal').modal('show');
});

const addTaskBtn = document.querySelector('#addTaskBtn');
addTaskBtn.addEventListener('click', () => {
    const newContact = taskInput.value.trim();
    if (newContact !== '') {
        addCon(newContact);
        $('#exampleModal').modal('hide');
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
