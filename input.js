/// -- ADD TASK INPUT -- ///
document.addEventListener("keydown", (e) => {
    if (e.key == "+" && !webState.isInCreateTaskMenu) showCreateTaskMenu();
    if (e.key == "ñ" && webState.isInCreateTaskMenu) closeCreateTaskMenu();
});

taskContainer.addEventListener("mousedown", (e) => {
    const task = e.target.closest(".tasks");
    if (!task) return; //If there are no tasks, return.

    const index = task.dataset.index;
    const taskData = taskList[index];

    console.log("Tocaste la tarea ", taskData);
});