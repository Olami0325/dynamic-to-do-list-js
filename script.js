// // Setup Event Listener for Page Load:
// document.addEventListener('DOMContentLoaded', function(){
//       // Select DOM elements
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//       // Load tasks from localStorage on page load
//         function loadTasks() {
//             const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//             storedTasks.forEach(taskText => addTask(taskText, false));
//         }

//     // Save tasks to localStorage
//     function saveTask(taskText) {
//         const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//         storedTasks.push(taskText);
//         localStorage.setItem('tasks', JSON.stringify(storedTasks));
//   }

//     // Remove task from localStorage
//     function removeFromLocalStorage(taskText) {
//         let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//         storedTasks = storedTasks.filter(task => task !== taskText);
//         localStorage.setItem('tasks', JSON.stringify(storedTasks));
//     }


//      // Function to add a new task
//     function addTask(){
//         const taskText = taskInput.value.trim();// Get and clean user input

//          // Show alert if input is empty
//         if (taskText === ''){
//             alert('Please enter a task')
//             return;     
//         }
//          // Create list item
//         const li = document.createElement('li');
//         li.textContent = taskText;

//         // Create remove button
//         const removeBtn = document.createElement('button');
//         removeBtn.textContent ='Remove';
//         removeBtn.classList.add('remove-btn')

//          // Add event listener to remove task
//         removeBtn.addEventListener('click', function () {
//             li.remove();
//             removeFromLocalStorage(taskText);
           
//         });

//          // Add button to <li> and <li> to list
//         li.appendChild(removeBtn);
//         document.getElementById('task-list').appendChild(li);

//         // Clear input field
//         taskInput.value= '';
//     }
//          // Add task when button is clicked
//         addButton.addEventListener('click', addTask);

//          // Also add task on Enter key press
//         taskInput.addEventListener('keypress', function(event){
//            if (event.key === 'Enter') {
//              addTask();
//             }
//         })
//      addTask();
     
// })

document.addEventListener('DOMContentLoaded', function () {
  // 1. Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // 2. Load tasks from localStorage when the page loads
  function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    savedTasks.forEach(taskText => {
      createTaskElement(taskText);
    });
  }

  // 3. Save tasks to localStorage
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(li => {
      tasks.push(li.firstChild.textContent); // get the text of the task
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // 4. Create and display a task item
  function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn'); // 

    // 5. Remove task from DOM and localStorage
    removeBtn.addEventListener('click', function () {
      li.remove(); // remove from DOM
      saveTasks(); // update localStorage
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // 6. Add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    createTaskElement(taskText); // create and show the task
    saveTasks(); // save to localStorage
    taskInput.value = ''; // clear input box
  }

  // 7. Add event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
  addTask();

  // 8. Run loadTasks on page load
  loadTasks();
});
