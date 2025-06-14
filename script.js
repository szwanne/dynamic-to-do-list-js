document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  function addTask(taskText, save = true) {
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

      let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks = storedTasks.filter((task) => task !== taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    });

    listItem.appendChild(button);
    taskList.appendChild(listItem);

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    taskInput.value = ""; // clear the input
  }

  addButton.addEventListener("click", function () {
    addTask(taskInput.value.trim(), true);
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(taskInput.value.trim(), true);
    }
  });
  loadTasks();
});
