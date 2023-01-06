let something = true
let thevar = false

$(window).on('resize load pagebeforecreate', function(){
    if ($(window).width() < 700 && something == true) {
       $("#sidebar").css("transform", "translateX(-250vw)")
       $("#sidebar").css("position", "absolute")
       $("#sidebar").css("left", "0px;")
       $("#chat").removeClass("col-md-8 col-lg-9 col-sm-8 col-8");
       $(".examplebutton").show()
       setTimeout(() => {
        something = false
       }, 600);
    } else if($(window).width() > 700 && something == false) {
        $("#sidebar").css("position", "relative")
        $("#sidebar").css("transform", "translateX(0px)")
        $(".examplebutton").hide()
        $("#chat").addClass("col-md-8 col-lg-9 col-sm-8 col-8");
    $("#sidebar").addClass("col-sm-4 col-md-4 col-lg-3 col-4")
    thevar = false
        setTimeout(() => {
            something = true
        }, 600);
    }
});

function thebuttongo() {
    if(thevar == false) {
        $("#sidebar").css("transform", "translateX(0px)")
        $("#sidebar").css("position", "absolute")
        $("#sidebar").css("left", "0px;")
        $("#sidebar").removeClass("col-sm-4 col-md-4 col-lg-3 col-4")
        thevar = true
    } else {
        $("#sidebar").css("transform", "translateX(-250vw)")
        $("#sidebar").css("position", "absolute")
        $("#sidebar").css("left", "0px;")
        $("#sidebar").addClass("col-sm-4 col-md-4 col-lg-3 col-4")
        thevar = false
    }
}