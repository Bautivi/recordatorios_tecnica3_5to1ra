/// -- WEB STATE PROPERTIES -- ///
const webState = {
    taskList: [],
    taskAmount: 0,
    taskDone: 2,
    isInCreateTaskMenu: false,
    // New task temporal values //
    newTask: {
        thisTaskDate: {
            day: "",
            month: "" },
        thisTaskTitle: "",
        thisTaskSubject: "",
        thisTaskNumber: "",
        thisTaskDone: false
    }
};

let dateDayValue = null;
let dateMonthValue = null;
let titleValue = null;
let subjectValue = null;

let inputDateDay = null;
let inputDateMonth = null;
let inputTitle = null;
let inputSubject = null;

let c1 = null;