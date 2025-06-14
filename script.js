document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    const button = document.createElement("button");
    button.classList.add("remove-btn");
    button.textContent = "Remove";
    button.addEventListener("click", function () {
      taskList.removeChild(listItem);
      listItem.appendChild(button);
      taskList.append(listItem);
      // button.appendChild(listItems);
      // listItems.appendChild(taskList);
      taskInput.value = "";
    });
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
