
function bulb(light) {
    let image = document.getElementById("off");

    if (light == 'high') {
        image.src = 'bulbON.png';
    } else if (light ==  'on') {
        image.src = 'bulbDIM.png';
    } else {
        image.src = 'bulbOFF.png'
    }
}

