let WPressed = false;
let Y = 0
let X = 0
let bonusveloc = 0


function drive(speed) {

    let numbaY = speed
    let numbaX = speed

    Y = Y + Math.min(Math.max(numbaY / 5, -1.5), 2)
    X = X + Math.min(Math.max(numbaX / 5, -1.25), 1.5)
    $("#car").css("transform", `translateY(${Y + "%"}) translateX(${X + "%"})`)
    


    setTimeout(() => {
        if (WPressed == true) {
            drive(numbaY * 1.1, numbaX * 1.1)
        }
    }, 1);
}




$(window).keydown(function (evt) {
    if (evt.which == 87 && WPressed == false) {
        WPressed = true;
        drive(1, 1)
    }
}).keyup(function (evt) {
    if (evt.which == 87) {
        WPressed = false;
        $("#car").text("")
    }
}).keydown(function (evt) {
    if (evt.which == 83 && WPressed == false) {
        WPressed = false;
        setTimeout(() => {
            WPressed = true;
            $("#car").text("S")
            drive(-1, -1)
        }, 3);
    }
}).keyup(function (evt) {
    if (evt.which == 83) {
        WPressed = false;
        $("#car").text("")
    }
}).keydown(function (evt) {
    if (evt.which == 65 && WPressed == false) {
        $("#car").text("A")
        carturn()
    }
}).keyup(function (evt) {
    if (evt.which == 65) {
        $("#car").text("")
    }
});