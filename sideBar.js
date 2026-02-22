const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = circumference;

function faceHappier() {
    faceLeftEye.setAttribute("stroke", "#00ff8c");
    faceRightEye.setAttribute("stroke", "#00ff8c");
    faceMouth.setAttribute("stroke", "#00ff8c");

    faceLeftEye.setAttribute("filter", "#00ff8c");
    faceRightEye.setAttribute("filter", "#00ff8c");
    faceMouth.setAttribute("filter", "#00ff8c");
};
function faceHappy() {
    faceLeftEye.setAttribute("stroke", "#7bff0f");
    faceRightEye.setAttribute("stroke", "#7bff0f");
    faceMouth.setAttribute("stroke", "#7bff0f");

    faceLeftEye.setAttribute("filter", "#7bff0f");
    faceRightEye.setAttribute("filter", "#7bff0f");
    faceMouth.setAttribute("filter", "#7bff0f");
    
};
function faceMid() {
    faceLeftEye.setAttribute("stroke", "#f4ff22");
    faceRightEye.setAttribute("stroke", "#f4ff22");
    faceMouth.setAttribute("stroke", "#f4ff22");

    faceLeftEye.setAttribute("filter", "#f4ff22");
    faceRightEye.setAttribute("filter", "#f4ff22");
    faceMouth.setAttribute("filter", "#f4ff22");
    
};
function faceSad() {
    faceLeftEye.setAttribute("stroke", "rgb(255, 107, 44)");
    faceRightEye.setAttribute("stroke", "rgb(255, 107, 44)");
    faceMouth.setAttribute("stroke", "rgb(255, 107, 44)");

    faceLeftEye.setAttribute("filter", "#rgb(255, 107, 44)");
    faceRightEye.setAttribute("filter", "#rgb(255, 107, 44)");
    faceMouth.setAttribute("filter", "#rgb(255, 107, 44)");
};
function faceSadder() {
    
};

function setFace(percent) {
    if (percent === 100) faceHappier();
    else if (percent > 66) faceHappy();
    else if (percent > 33) faceMid();
    else if (percent > 0) faceSad();
    else faceSadder();
};

function setProgress(taskTotal) {
  const offset = circumference - (webState.taskDone / taskTotal) * circumference;
  circle.style.strokeDashoffset = offset;

  let percent = (webState.taskDone/taskTotal) * 100;
  console.log(percent);

    const maxColor = "#00ff8c";
    const midColor1 = "#7bff0f";
    const midColor2 = "#f4ff22";
    const midColor3 = "rgb(255, 107, 44)";
    const minColor = "#ff1356";
    let strokeColor;

    if (percent === 100) strokeColor = maxColor;
    else if (percent > 66) strokeColor = midColor1;
    else if (percent > 33) strokeColor = midColor2;
    else if (percent > 0) strokeColor = midColor3;
    else strokeColor = minColor;
    
    circle.style.stroke = strokeColor;
    setFace(percent);
};