function pagetwo() {


    $("body, html").transition({
        "background-color": "rgb(125, 0, 255)",
        "background-size": "150px"
    }, 2500, "cubic-bezier(0.23, 1, 0.320, 1)")

    $("#pageone").transition({
        "opacity": "0"
    }, 1500, "cubic-bezier(0.23, 1, 0.320, 1)")

    $("#main").transition({
        "background-color": "rgb(20, 0, 40)"
    }, 7500)


    // --maincolor: green;
    // --maincolorfaded: rgb(50, 80, 50);
    // --maincolordark: rgb(0, 80, 0);

    setTimeout(() => {

        document.body.style.setProperty("--maincolor", "blueviolet")
        document.body.style.setProperty("--maincolorfaded", "rgb(84, 52, 115)")
        document.body.style.setProperty("--maincolordark", "blue")

        $("#pageone").hide(0)
        $("#pagetwo").show(0)

    $("#pagetwo").transition({
        "opacity": "1"
    }, 1500, "cubic-bezier(0.23, 1, 0.320, 1)")
    }, 1500);

}

function socials() {
    $("#pagetwo > *").transition({
        "transform": "translate(100vw)"
    }, 1000, "cubic-bezier(0.47, 0, 0.745, 0.715)")
    
    setTimeout(() => {
        $("#pagetwo").hide(0)
        $("#socials").show(0)
        $("#socials").css("transform", "translate(-100vw)")
        $("#socials").css("opacity", "1")
        $("#socials").transition({
            "transform": "translate(0vw)"
        }, 1000)
    }, 1000);
}

function dislikes() {


    $("body, html").transition({
        "background-color": "rgb(25, 25, 25)",
        "background-size": "50px"
    }, 15000, "cubic-bezier(0.23, 1, 0.320, 1)")

    $("#socials").transition({
        "opacity": "0"
    }, 1500, "cubic-bezier(0.23, 1, 0.320, 1)")

    $("#main").transition({
        "background-color": "rgb(50, 50, 50)"
    }, 7500)


    // --maincolor: green;
    // --maincolorfaded: rgb(50, 80, 50);
    // --maincolordark: rgb(0, 80, 0);

    setTimeout(() => {

        document.body.style.setProperty("--maincolor", "darkgray")
        document.body.style.setProperty("--maincolorfaded", "gray")
        document.body.style.setProperty("--maincolordark", "black")

        $("#socials").hide(0)
        $("#dislike").show(0)

    $("#dislike").transition({
        "opacity": "1"
    }, 1500, "cubic-bezier(0.23, 1, 0.320, 1)")
    }, 1500);

}

function dni() {
    $("#dislike > *").transition({
        "transform": "translate(100vw)"
    }, 1000, "cubic-bezier(0.47, 0, 0.745, 0.715)")
    
    setTimeout(() => {
        $("#dislike").hide(0)
        $("#dni").show(0)
        $("#dni").css("transform", "translate(-100vw)")
        $("#dni").css("opacity", "1")
        $("#dni").transition({
            "transform": "translate(0vw)"
        }, 1000)
    }, 1000);
}