// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task to the list
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    // Only add if input is not empty
    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button for each task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete');
        li.appendChild(deleteButton);

        // Add delete functionality
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        // Append task to the list
        taskList.appendChild(li);

        // Clear input field after adding task
        taskInput.value = "";
    }
});

// Optional: Allow pressing 'Enter' to add task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTaskButton.click();
    }
});
