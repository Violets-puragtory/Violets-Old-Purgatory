let WPressed = false;
let Y = 0


function drive(numbaY) {
    $("#car").css("transform", `translateY(${Y + "px"})`)
    if(numbaY < 2 && numbaY > -2) {
        Y = Y + numbaY
    }
    setTimeout(() => {
        if(WPressed == true) {
            drive(numbaY * 1)
        } 
    }, 1);
}

function drive(amount) {
    $("#car").css("transform", `translateY(${Y + "px"})`)
    if(numbaY < 2 && numbaY > -2) {
        Y = Y + numbaY
    }
    setTimeout(() => {
        if(WPressed == true) {
            drive(numbaY * 1)
        } 
    }, 1);
}

$(window).keydown(function (evt) {
    if (evt.which == 87) {
        WPressed = true;
        $("#car").text("W")
        drive(1)
    }
}).keyup(function (evt) {
    if (evt.which == 87) {
        WPressed = false;
        $("#car").text("")
    }
}).keydown(function (evt) {
    if (evt.which == 83) {
        WPressed = true;
        $("#car").text("S")
        drive(-1)
    }
}).keyup(function (evt) {
    if (evt.which == 83) {
        WPressed = false;
        $("#car").text("")
    }
}).keydown(function (evt) {
    if (evt.which == 65) {
        $("#car").text("A")
        carturn()
    }
}).keyup(function (evt) {
    if (evt.which == 65) {
        $("#car").text("")
    }
});