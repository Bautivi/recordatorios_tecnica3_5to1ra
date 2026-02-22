homeButtons.forEach(hb => {
    hb.addEventListener("mouseenter", () => {
        hb.classList.add("hovered");
    });
});

homeButtons.forEach(hb => {
    hb.addEventListener("mouseleave", () => {
        hb.classList.remove("hovered");
    });
});

buttonHomework.addEventListener("mouseup", () => {
    if (room != 1) {
        room = 1;
        changeToRoom2();
        console.log(room);
    }
});

buttonExams.addEventListener("mouseup", () => {
    if (room != 2) {
        room = 2;
        changeToRoom1();
        console.log(room);
    }
});