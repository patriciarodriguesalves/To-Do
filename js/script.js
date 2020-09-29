
//Function AddTaks
function addTask(){
    
    //Task Title
    const taskTitle = document.querySelector('#task-title').value;

    //Validação para não inserir nada vazio
    if(taskTitle){

        //clone template
        const template = document.querySelector('.template');

        //Clone in new variable
        const newTask = template.cloneNode(true);

        //Add Title
        newTask.querySelector('.task-title').textContent = taskTitle;

        //removes unnecessary classes
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        //Add task in list
        const list = document.querySelector('#task-list');

        list.appendChild(newTask);

        //Add event removes
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this);
        });

        //Add event to complete task
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this);
        });

        //Clear text of input
        document.querySelector('#task-title').value = "";

    } 
}

//Function to removes tasks
function removeTask(task){
    
    task.parentNode.remove(true);

}

//Function to complete tasks
function completeTask(task){

    const taskToComplete = task.parentNode;

    //O toggle verifica se o elemento tiver a classe ele tira, se não ele insere
    taskToComplete.classList.toggle('done');
}

//Event to add tasks
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e){

    e.preventDefault();

    addTask();

});