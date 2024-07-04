"use strict";

let addBtn = document.querySelector("#addBtn");
let titleTask = document.querySelector("#addTaskTitle");
let toDoList = document.querySelector("#toDoList");

function addTask(taskDescriptionText) {
  if (taskDescriptionText.trim() !== "") {
    let newTask = document.createElement("li");
    newTask.classList.add("todo__item");

    let label = document.createElement("label");
    label.classList.add("label");
    newTask.appendChild(label);

    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    label.appendChild(input);

    let span = document.createElement("span");
    span.classList.add("checkmark");
    label.appendChild(span);

    let taskDescription = document.createElement("p");
    taskDescription.classList.add("description");
    taskDescription.innerText = taskDescriptionText;
    label.appendChild(taskDescription);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete_button");
    newTask.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      toDoList.removeChild(newTask);
    });

    toDoList.appendChild(newTask);
    titleTask.value = "";
  }
}

addBtn.addEventListener("click", () => {
  if (titleTask.value.trim() !== "") {
    addTask(titleTask.value);
  }
});

titleTask.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    if (titleTask.value.trim() !== "") {
      addTask(titleTask.value);
    }
  }
});
