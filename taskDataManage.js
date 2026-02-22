/// -- ADD TASK -- ///
function addTask() {
    webState.taskAmount += 1;
        const newTaskData = {
        title: webState.newTask.thisTaskTitle,
        date: {
            day: webState.newTask.thisTaskDate.day,
            month: webState.newTask.thisTaskDate.month
        },
        number: webState.taskAmount,
        subject: webState.newTask.thisTaskSubject
    };

    webState.taskList.push(newTaskData);

    createTaskShown(newTaskData);
    clearTaskData();
    console.log(webState.taskList, webState.taskAmount);
    setProgress(webState.taskAmount);
};

/// -- CLEAR DATA SO IT IS EMPTY WHEN I ADD ANOTHER TASK -- ///
function clearTaskData() {
    webState.newTask.thisTaskTitle = "";
    webState.newTask.thisTaskSubject = "";
    webState.newTask.thisTaskDate.day = "";
    webState.newTask.thisTaskDate.month = "";
};