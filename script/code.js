document.querySelector('#add').onclick = function () {
    let taskHomeInput = document.querySelector('#taskHome input');
    let taskList = taskHomeInput.value.trim();

    if (taskList.length === 0) {
        alert("Please Enter a Task");
        return;
    }

    let tasksContainer = document.querySelector('#tasks');

    let taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
        <span id="taskList">${taskList}</span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    `;

    let deleteBtn = taskElement.querySelector('.delete');
    deleteBtn.onclick = function () {
        taskElement.remove();
        localStorage();
    };

    tasksContainer.appendChild(taskElement);

    taskHomeInput.value = "";

    // Save to local storage
    localStorage();

    function localStorage() {
        let tasks = [];
        let taskElements = document.querySelectorAll('.task');
        
        taskElements.forEach(function (taskElement) {
            let taskList = taskElement.querySelector('#taskList').innerText;
            tasks.push(taskList);
        });
    
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
};

