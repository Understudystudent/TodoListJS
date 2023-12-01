document.querySelector('#add').onclick = function () {
    let taskHomeInput = document.querySelector('#taskHome input');
    let taskList = taskHomeInput.value.trim();

    if (taskList.length === 0) {
        alert("Please Enter a Task");
        return;
    }
    
};

