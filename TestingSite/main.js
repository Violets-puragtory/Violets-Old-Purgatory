var waitForJQuery = setInterval(function () {
    if (typeof $ != 'undefined') {

        var numba = Math.ceil(Math.random() * 10) 

        var florb = `this website's splash text breaking. <br> <b style='color:red;'>(This only appears if the splash actually broke Completely Random Error Code #${numba})</b>`

        if(numba === 1) {
            florb = "Over The Hedge (for the PS2)"
        } else if(numba === 2) {
            florb = "Y2K"
        } else if(numba === 3) {
            florb = "my existance"
        } else if(numba === 4) {
            florb = "*insert generic Battle Royale*"
        } else if(numba === 5) {
            florb = `<a href="./SubSites/Archives/Iteration 1/index.html">The 1st iteration of this website</a>`
        } else {
            florb = "uhhhhhh idk!"
        }


        document.getElementById("splashtext").innerHTML = "The worst thing since " + florb



        clearInterval(waitForJQuery);
    }
}, 10);


function boutme() {
    $("#things > *").hide("slow");
    $("#aboutme").show("slow");
    $("button").prop("disabled", false)
    $("#boutmebutton").prop("disabled", true)
}

function social() {
    $("#things > *").hide("slow");
    $("#thesocials").show("slow");
    $("button").prop("disabled", false)
    $("#socialsbutton").prop("disabled", true)
}

function RogueLikes() {
    $("#things > *").hide("slow");
    $("#roguelikesilike").show("slow");
    $("button").prop("disabled", false)
    $("#roguebutton").prop("disabled", true)
}

function reveal(item, duration) {
    if($(item).is(":visible")){
        $(item).hide(duration)
    } else {
        $(item).show(duration)
    }
}