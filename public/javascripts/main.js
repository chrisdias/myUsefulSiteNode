var pawToggled = false;
var myTimeout;

function callbackToggle() {
    return function () {
        if (pawToggled) {
            document.getElementById("main-button").click();
        }
    }
}

/* eslint no-unused-vars: "off" */
function togglePaw() {
    if (!pawToggled) {
        // Runs when we toggle the button
        document.getElementsByClassName("catpaw-container")[0].classList.add("catpaw-extended");
        myTimeout = setTimeout(callbackToggle(), 600);
    } else {
        document.getElementsByClassName("catpaw-container")[0].classList.remove("catpaw-extended");
        clearTimeout(myTimeout);
    }

    pawToggled = !pawToggled;
}
