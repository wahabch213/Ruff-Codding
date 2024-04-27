
function bulb() {
    let image = document.getElementById("off");

    if (image.src.match("bulbON")) {
        image.src = "bulbOFF.png"
    } else if (image.src.match("bulbOFF")  ) {
        image.src = "bulbDIM.png";
    } else {
        image.src = "bulbON.png";
    }
}