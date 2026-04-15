// Global Array
let myTasks = [];

// Grabbing the elements by their IDs
const inputField = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const deleteInput = document.getElementById("deleteInput");
const clearButton = document.getElementById("clearButton");
const taskList = document.getElementById("taskList");

// This code displays the list to the webpage
function displayTasks() {
    taskList.innerHTML = "";

    for (let task of myTasks) {
        let li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    }
}

// This code waits for a click on the "Add" button
addButton.addEventListener("click", function () {

    // 1. Get the text the user typed
    let newValue = inputField.value.trim();

    // 1.1 Ignore empty input
    if (newValue === "") {
        return;
    }

    // 2. Add it to your array
    myTasks.push(newValue);

    // 3. Clear the input box so it's ready for the next task
    inputField.value = "";

    // 4. Display success message
    console.log("Task Added!");

    // 5. Add & Display
    console.log("Current Tasks:");

    for (let i = 0; i < myTasks.length; i++) {
        console.log((i + 1) + ". " + myTasks[i]);
    }

    // 6. Update the webpage
    displayTasks();
});

// This code waits for a click on the "Delete" button
deleteButton.addEventListener("click", function () {

    // 1. Get the text the user typed
    let deleteTask = deleteInput.value.trim();

    // 1.1 Ignore empty input
    if (deleteTask === "") {
        return;
    }

    // 2. Remove it from your array
    let updatedList = [];

    for (let task of myTasks){

        // 2.1 If + Collector
        if (task !== deleteTask){
            updatedList.push(task);
        }
    }

    // 2.2 Update array
    myTasks = updatedList;

    // 3. Clear the input box so it's ready to delete the next task
    deleteInput.value = "";

    // 4. Display success message
    console.log("Task Deleted!");

    // 5. Add & Display 
    console.log("Current Tasks:");
    for (let task of myTasks) {
        console.log(task);
    }

    // 6. Update the webpage
    displayTasks();
});

// This code waits for a click on the "Clear" button
clearButton.addEventListener("click", function () {

    // 1. Clear All
    while (myTasks.length > 0) {
        myTasks.pop();
    }

    // 2. Display success message
    console.log("All Tasks Cleared!");

    // 3. Update the webpage
    displayTasks();
});