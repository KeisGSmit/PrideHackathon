// ---------------------------------------------------------- Copyright auto-updater

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();

// ---------------------------------------------------------- Hide / Show info function
// onclick="buttonInfo('1', this)"

function buttonInfo(num, clickedItem) {
    if (num == "1") {
        let fullInfo = clickedItem.parentNode.children[2];
        if (fullInfo.classList.contains("hide")) {
            fullInfo.classList.remove("hide");
        } else {
            fullInfo.classList.add("hide");
        }
    } else if (num == "2") {
        let fullInfo = clickedItem.parentNode.children[0];
        if (fullInfo.classList.contains("hide")) {
            fullInfo.classList.remove("hide");
        } else {
            fullInfo.classList.add("hide");
        }
    } else {
        console.log("Oh no! There has been an error! Try again.")
    }
}