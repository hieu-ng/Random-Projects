var colorSchemes = ["FFE3E3","FDF6F0","EDF6E5","F9F9F9","FFF5EB","EDFFEC", "F4F9F9"]

window.onload = function () {
    var cards = document.getElementsByClassName("card");
    console.log("cards", cards)
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = "#" + randomColor()
    }
}

function randomColor() {
    try {
        var max = colorSchemes.length;
        var randomPos = Math.floor((Math.random() * max) + 0);
        return colorSchemes[randomPos]
    } catch (error) {
        console.log("Error in randomColor", error)
    }
}