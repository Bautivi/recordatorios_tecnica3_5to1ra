function chooseRandomWelcomeTitle() {
    let number = Math.round(Math.random()*11); //11 chances
    let title;
    switch(number) {
        case 0: title = "Termina todo y te doy una galletita"; break;
        case 1: title = "¡Bienvenido, Bau!"; break;
        case 2: title = "¿Qué nos toca hoy?"; break;
        case 3: title = "¡Émpecemos!"; break;
        case 4: title = "Abajo el comunismo."; break;
        case 5: title = "¡A trabajar, capo!"; break;
        case 6: title = "¿Qué haremos hoy?"; break;
        case 7: title = "¿Tenemos muchos deberes? :("; break;
        case 8: title = "¡Qué bueno verte, Bau!"; break;
        case 9: title = "¡Avancemos un poco hoy!"; break;
        case 10: title = "Me alegro de verte, Bau"; break;
    }
    welcomeTitle.textContent = title;
};