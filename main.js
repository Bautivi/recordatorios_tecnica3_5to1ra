chooseRandomWelcomeTitle();
noTasksMessage = null;

if (webState.taskList.length == 0) {
    noTasksMessage = document.createElement("div");
    noTasksMessage.textContent = "Nada por acá. :)";
    noTasksMessage.classList.add("noTasksMessage");
    document.body.appendChild(noTasksMessage);
}

face.classList.add("animate");