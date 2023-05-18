const form = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

const addContactBtn = document.querySelector('#addContactBtn');
addContactBtn.addEventListener('click', () => {
    $('#exampleModal').modal('show');
});
/////////////////
const taskLi1 = document.createElement('li');
taskLi1.classList.add('list-group-item'); // Add the class here
const link1 = document.createElement('a');
link1.href = '#';
//link1.classList.add('list-group-item', 'list-group-item-action', 'active');

const image1 = document.createElement('img');
image1.src = 'https://static01.nyt.com/images/2022/10/30/multimedia/30onsoccer-hattracik--1-1cef/30onsoccer-hattracik--1-1cef-mediumSquareAt3X.jpg';
image1.classList.add('img-fluid', 'rounded-circle');
image1.width = '40';
image1.height = '25';

const name1 = document.createTextNode('Bar');
link1.appendChild(image1);
link1.appendChild(name1);

taskLi1.appendChild(link1);
taskList.appendChild(taskLi1);

/////////////////////////////

const taskLi2 = document.createElement('li');

const link2 = document.createElement('a');
link2.href = '#';
taskLi2.classList.add('list-group-item'); // Add the class here
//link2.classList.add('list-group-item', 'list-group-item-action');

const image2 = document.createElement('img');
image2.src = 'https://images2.minutemediacdn.com/image/upload/c_fill,w_360,ar_1:1,f_auto,q_auto,g_auto/shape/cover/sport/robert-lewandowski-square-avatar-28bc08767b039510e355d19455dcf18d.jpg';
image2.classList.add('img-fluid', 'rounded-circle');
image2.width = '40';
image2.height = '25';

const name2 = document.createTextNode('Ariel');
link2.appendChild(image2);
link2.appendChild(name2);
taskLi2.appendChild(link2);
taskList.appendChild(taskLi2);


const taskLi3 = document.createElement('li');

const link3 = document.createElement('a');
link3.href = '#';
taskLi3.classList.add('list-group-item'); // Add the class here
//link3.classList.add('list-group-item', 'list-group-item-action');

const image3 = document.createElement('img');
image3.src = 'https://cdn.vox-cdn.com/thumbor/91C8cGj1i1h9VlMayTiAorSoDpI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22879573/1235519898.jpg';
image3.classList.add('img-fluid', 'rounded-circle');
image3.width = '40';
image3.height = '25';

const name3 = document.createTextNode('Ofek');
link3.appendChild(image3);
link3.appendChild(name3);

taskLi3.appendChild(link3);

taskList.appendChild(taskLi3);


const taskItems = document.querySelectorAll('.list-group-item');

// Add click event listener to each list item
taskItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    taskItems.forEach(item => item.classList.remove('active'));
    // Add active class to the clicked item
    item.classList.add('active');
  });
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

function addCon(newCon) {
    const taskLi = document.createElement('li');

    const link = document.createElement('a');
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
    // Add click event listener to each list item
    taskLi.addEventListener('click', () => {
        // Remove active class from all items
        taskItems.forEach(item => item.classList.remove('active'));
        // Add active class to the clicked item
        taskLi.classList.add('active');
    });
    taskList.appendChild(taskLi);
    taskInput.value = '';

    // Add click event listener to the newly created list item
    
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
