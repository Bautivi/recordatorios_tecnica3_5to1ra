function createInputs() {
        // - INPUT DAY - //
    inputDateDay = document.createElement("input");
    inputContainer.appendChild(inputDateDay);
    inputDateDay.classList.add("inputDateDay");
    inputDateDay.classList.add("input");
    inputDateDay.type = "number";
    inputDateDay.placeholder = "Día";
    inputDateDay.min = "1"; 
    inputDateDay.max = "31"; 

    // - INPUT MONTH - //
    inputDateMonth = document.createElement("input");
    inputContainer.appendChild(inputDateMonth);
    inputDateMonth.classList.add("inputDateMonth");
    inputDateMonth.classList.add("input");
    inputDateMonth.type = "number";
    inputDateMonth.placeholder = "Mes";
    inputDateMonth.min = "1"; 
    inputDateMonth.max = "12"; 

    // - INPUT TITLE - //
    inputTitle = document.createElement("input");
    inputContainer.appendChild(inputTitle);
    inputTitle.classList.add("inputTitle");
    inputTitle.classList.add("input");
    inputTitle.placeholder = "Título aquí...";
    inputTitle.min = "1"; 
    
    // - INPUT SUBJECT - //
    inputSubject = document.createElement("input");
    inputContainer.appendChild(inputSubject);
    inputSubject.classList.add("inputSubject");
    inputSubject.classList.add("input");
    inputSubject.placeholder = "Materia aquí...";
};

/// -- CREATE INPUTS -- ///
function showCreateTaskMenu() {
    webState.isInCreateTaskMenu = true;
    createInputs();

    const inputs = [
        { element: inputDateDay, key: "day", parent: "thisTaskDate" },
        { element: inputDateMonth, key: "month", parent: "thisTaskDate" },
        { element: inputTitle, key: "thisTaskTitle" },
        { element: inputSubject, key: "thisTaskSubject" }
    ];
    
    inputs.forEach(({ element, key, parent}) => {
        // If we blur in the inputs... //
        element.addEventListener("blur", () => {
            if (parent) {
                webState.newTask[parent][key] = element.value;
            } else {
                webState.newTask[key] = element.value;
            }
        })
    });
};

    /// -- CLOSE CREATE TASK MENU -- ///
    function closeCreateTaskMenu() {
        addTask();
        webState.isInCreateTaskMenu = false;
        inputDateDay.remove();
        inputDateMonth.remove();
        inputTitle.remove();
        inputSubject.remove();
};

function createTaskShown(taskData) {
    // Evade diagonal grid issue //
    const taskCard = document.createElement("div");
    taskCard.classList.add("tasks");
    taskContainer.appendChild(taskCard);   

    // -- TASK NUMBER -- //
    const newTaskNumberShown = document.createElement("div");
    newTaskNumberShown.classList.add("tasksNumber");
    taskCard.appendChild(newTaskNumberShown);
    newTaskNumberShown.textContent = taskData.number;

    // -- TASK SUBJECT -- //
    const newTaskSubjectShown = document.createElement("div");
    newTaskSubjectShown.classList.add("tasksSubject");
    taskCard.appendChild(newTaskSubjectShown);
    newTaskSubjectShown.textContent = taskData.subject;

    // -- TASK LOGO -- //
    const newTaskLogoShown = document.createElement("div");
    newTaskLogoShown.classList.add("tasksLogo");
    taskCard.appendChild(newTaskLogoShown);

    // -- TASK DATE -- //
    const newTaskDateShown = document.createElement("div");
    newTaskDateShown.classList.add("tasksDate");
    taskCard.appendChild(newTaskDateShown);
    newTaskDateShown.textContent = taskData.date.day + " / " + taskData.date.month;

    const logos = {
    "Análisis Matemático": "logoMath.png",
    "Sistemas Digitales": "logoMath.png",
    "Teleinformática": "logoMath.png",
    "Literatura": "logoMath.png",
    "Inglés": "logoEnglish.png",
    "Educación Física": "logoMath.png",
    "Política y Ciudadanía": "logoMath.png", 
    "Historia": "logoMath.png",
    "Geografía": "logoGeography.png",
    "Laboratorio de Programación": "logoMath.png",
    "Laboratorio de Hardware": "logoMath.png",
    "Laboratorio de S.O.": "logoMath.png",
    "Laboratorio de Aplicaciones": "logoMath.png",
    };

    const colorsMain = {
    "Análisis Matemático": "#ffd91d",
    "Sistemas Digitales": "#fff3b5",
    "Teleinformática": "#fff3b5",
    "Literatura": "#fff3b5",
    "Inglés": "#ff1dac",
    "Educación Física": "#fff3b5",
    "Política y Ciudadanía": "#fff3b5", 
    "Historia": "#fff3b5",
    "Geografía": "#FF7D44",
    "Laboratorio de Programación": "#fff3b5",
    "Laboratorio de Hardware": "#fff3b5",
    "Laboratorio de S.O.": "#fff3b5",
    "Laboratorio de Aplicaciones": "#fff3b5",
    };

    const colors = {
    "Análisis Matemático": "#fff3b5",
    "Sistemas Digitales": "#fff3b5",
    "Teleinformática": "#fff3b5",
    "Literatura": "#fff3b5",
    "Inglés": "#ffb5df",
    "Educación Física": "#fff3b5",
    "Política y Ciudadanía": "#fff3b5", 
    "Historia": "#fff3b5",
    "Geografía": "#ffc1a4",
    "Laboratorio de Programación": "#fff3b5",
    "Laboratorio de Hardware": "#fff3b5",
    "Laboratorio de S.O.": "#fff3b5",
    "Laboratorio de Aplicaciones": "#fff3b5",
    };

    const colorsFont = {
    "Análisis Matemático": "rgb(201, 111, 0)",
    "Sistemas Digitales": "#fff3b5",
    "Teleinformática": "#fff3b5",
    "Literatura": "#fff3b5",
    "Inglés": "rgb(205, 0, 133)",
    "Educación Física": "#fff3b5",
    "Política y Ciudadanía": "#fff3b5", 
    "Historia": "#fff3b5",
    "Geografía": "rgb(220, 60, 42)",
    "Laboratorio de Programación": "#fff3b5",
    "Laboratorio de Hardware": "#fff3b5",
    "Laboratorio de S.O.": "#fff3b5",
    "Laboratorio de Aplicaciones": "#fff3b5",
    };

let logoPath = logos[webState.newTask.thisTaskSubject];
let colorPath = colors[webState.newTask.thisTaskSubject];
let colorFontPath = colorsFont[webState.newTask.thisTaskSubject];
let colorMainPath = colorsMain[webState.newTask.thisTaskSubject];

if (logoPath) {
    newTaskLogoShown.style.backgroundImage = `url('${logoPath}')`;
};

if (colorPath) {
    newTaskSubjectShown.style.background = colorPath;
};

if (colorFontPath) {
    newTaskSubjectShown.style.color = colorFontPath;
};

if (colorMainPath) {
    newTaskNumberShown.style.background = colorMainPath;
    newTaskNumberShown.style.border = colorMainPath;
};
    if (webState.taskList.length != 0) noTasksMessage.remove();
}