// Setup Event Listener for Page Load:
document.addEventListener('DOMContentLoaded', function(){
      // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

     // Function to add a new task
    function addTask(){
        // const taskText = getElementById('task-input').value.trim();
        const taskText = taskInput.value.trim();// Get and clean user input

         // Show alert if input is empty
        if (taskText === ''){
            alert('Please enter a task')
            return;     
        }
         // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent ='Remove';
        removeBtn.classList.add('remove-btn')

         // Add event listener to remove task
        removeBtn.addEventListener('click', function () {
            li.remove();
        });

         // Add button to <li> and <li> to list
        li.appendChild(removeBtn);
        document.getElementById('task-list').appendChild(li);

        // Clear input field
        taskInput.value= '';
    }
         // Add task when button is clicked
        addButton.addEventListener('click', addTask);

         // Also add task on Enter key press
        taskInput.addEventListener('keypress', function(event){
           if (event.key === 'Enter') {
             addTask();
            }
        })
     addTask();
})