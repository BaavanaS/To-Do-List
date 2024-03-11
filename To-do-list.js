// Ask for the user's name when the page loads
window.onload = function() {
    getUsername();
};

// Get the input field
const taskInput = document.getElementById('task');

// Add an event listener for the keypress event
taskInput.addEventListener('keypress', function(event) {
    // Check if the key pressed is the Enter key (key code 13)
    if (event.key === 'Enter') {
        addTask(); // Call the addTask function
    }
});

function addTask() {
    // Get the task text from the input field
    const taskText = taskInput.value;

    // Check if the input is not empty
    if (taskText.trim() !== '') {
        // Get the task list
        const taskList = document.getElementById('task-list');

        // Create a new list item
        const li = document.createElement('li');
        li.classList.add('task-item'); // Add class for styling

        // Create a div for the task text
        const taskDiv = document.createElement('div');
        taskDiv.textContent = taskText;
        taskDiv.classList.add('task-text'); // Add class for styling

        // Create an input field for editing the task
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = taskText;
        editInput.style.display = 'none'; // Initially hidden
        editInput.classList.add('edit-input'); // Add class for styling

        // Create a button for editing
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            // Toggle visibility of task text and input field
            taskDiv.style.display = 'none';
            editInput.style.display = 'inline-block';
            editInput.focus(); // Focus on the input field
        };
        editButton.classList.add('edit-button'); // Add class for styling

        // Create a button for deleting
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            removeTask(li); // Call removeTask with the parent li element
        };
        deleteButton.classList.add('delete-button'); // Add class for styling

        // Create a button for saving changes
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.style.display = 'none'; // Initially hidden
        saveButton.onclick = function() {
            taskDiv.textContent = editInput.value; // Update task text
            taskDiv.style.display = 'inline-block';
            editInput.style.display = 'none';
            saveButton.style.display = 'none';
            editButton.style.display = 'inline-block';
        };
        saveButton.classList.add('save-button'); // Add class for styling

        // Add event listener for the Enter key to save changes
        editInput.addEventListener('keypress', function(event) {
            // Check if the key pressed is the Enter key (key code 13)
            if (event.key === 'Enter') {
                taskDiv.textContent = editInput.value; // Update task text
                taskDiv.style.display = 'inline-block';
                editInput.style.display = 'none';
                saveButton.style.display = 'none';
                editButton.style.display = 'inline-block';
            }
        });

        // Append elements to the list item
        li.appendChild(taskDiv);
        li.appendChild(editInput);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(saveButton);

        // Append the new list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}



function removeTask(button) {
    // Get the parent list item of the clicked delete button
    const li = button.parentElement.parentElement;
    // Remove the parent list item from the task list
    li.remove();
}

function getUsername() {
    // Prompt the user for their name
    let username = prompt('Please enter your name:');
    
    // If the user clicks Cancel or enters an empty name, prompt again
    while (!username || username.trim() === '') {
        username = prompt('Please enter a valid name:');
    }

    // Display a greeting with the user's name
    alert('Welcome, ' + username + '!');

    // Create a div element for the welcome message
    const welcomeDiv = document.createElement('div');
    welcomeDiv.textContent = 'Welcome, ' + username + '!';
    welcomeDiv.classList.add('welcome-message'); // Add a class for styling

    // Append the welcome message to the container
    const container = document.getElementById('background-container');
    container.insertBefore(welcomeDiv, container.firstChild);

    // Get the current date and day
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    // Create a div element for the date and day
    const dateDiv = document.createElement('div');
    dateDiv.textContent = formattedDate;
    dateDiv.classList.add('date-message'); // Add a class for styling

    // Append the date and day to the container
    container.insertBefore(dateDiv, welcomeDiv.nextSibling);
}
function removeTask(li) {
    // Remove the parent list item from the task list
    li.remove();
}


