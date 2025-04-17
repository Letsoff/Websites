function sleep(ms) {
    
}

/* --DarkmodeOff/On-- */
function darkModeOff() {
    //body
    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'white';

    //container
    document.container.style.boxshadow = 'rgba(0, 0, 0, 0.1)';
}

function darkModeOn() {
    //body
    document.body.style.color = 'white';
    document.body.style.backgroundColor = 'rgb(56, 56, 56)';

    //container
    document.container.style.boxshadow = 'rgba(255, 255, 255, 0.1)';
}

function darkModeFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("darkModeSwitch");
    // Get the output text
    var text = document.getElementById("text");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        darkModeOff;
    } else {
        darkModeOn;
    }
}


function zeigeAlert() {
    alert("Du hast auf den Knopf geklickt.");
}

/* --Zähler-- */
let count = 0;
function incrementCounter() {
    count++; // Erhöht den Zähler
    document.getElementById("counter").textContent = count; // Aktualisiert die Anzeige
}

function decrementCounter() {
    count--; // Erhöht den Zähler
    document.getElementById("counter").textContent = count; // Aktualisiert die Anzeige
}

function halveCounter() {
    count = count/2; // Erhöht den Zähler
    document.getElementById("counter").textContent = count; // Aktualisiert die Anzeige
}

function roundCounter() {
    count = Math.round(count)
    document.getElementById("counter").textContent = count; // Aktualisiert die Anzeige
}

/* --Taschenrechner-- */

/* --Benutzernamen-Finder-- */

/* --Ladeanimation-- */
function startLadeAnimationEins() {
    document.getElementById("ladeanimationeins").textContent="/";
    
    document.getElementById("ladeanimationeins").textContent="1";
}