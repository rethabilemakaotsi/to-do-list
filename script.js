
let tasks = [];


function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}


function addTask() {
    const inputBox = document.getElementById('input-box');
    const taskText = inputBox.value.trim();

    if (isValidTask(taskText)) {
        const taskId = generateUniqueId();
        const createdDate = new Date().toLocaleString();

        const newTask = {
            id: taskId,
            name: capitalizeFirstLetter(taskText),
            createdDate: createdDate,
            completed: false,
        };

        tasks.push(newTask);
        updateTaskList();
        inputBox.value = ''; 
    } else {
        alert('Invalid task! Please make sure it is not empty, has more than three characters, and starts with an uppercase letter.');
    }
}


function isValidTask(taskText) {
    return taskText.length > 3 && taskText[0] === taskText[0].toUpperCase();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateTaskList() {
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';

    tasks.forEach((task) => {
        const newTask = document.createElement('li');
        newTask.textContent = task.name;


        newTask.classList.add('new-task');
        if (task.completed) {
            newTask.classList.add('completed');
        }

        // Add a click event listener to mark the task as completed
        newTask.addEventListener('click', function () {
            task.completed = !task.completed;
            updateTaskList();
        });

        // Add a close icon and task ID for removal
        newTask.innerHTML += '<span class="close" data-task-id="' + task.id + '">&times;</span>';

        listContainer.appendChild(newTask);
    });

        
        newTask.addEventListener('click', function() {
            this.classList.toggle('completed');
        });

        listContainer.appendChild(newTask);
        inputBox.value = ''; 
    }




function sortTasks() {
    tasks.sort((a, b) => a.name.localeCompare(b.name));
    updateTaskList();
}
function removeTask(event) {
    const clickedElement = event.target;


    if (clickedElement.tagName === 'SPAN' && clickedElement.classList.contains('close')) {
        const taskIdToRemove = clickedElement.dataset.taskId;

  

    
        updateTaskList();
    }
}

