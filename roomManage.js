let room = 2;
roomTitle.textContent = "TAREAS";

function changeToRoom1() {
    document.documentElement.style.setProperty("--c1", "#ff3553");
    document.documentElement.style.setProperty("--c2", "#ff9081");
    sfxHomeButtonReleased.play();
    roomTitle.textContent = "EXÁMENES";
}

function changeToRoom2() {
    document.documentElement.style.setProperty("--c1", "#3586ff");
    document.documentElement.style.setProperty("--c2", "#81d5ff");
    sfxHomeButtonReleased.play();
    roomTitle.textContent = "TAREAS";
}