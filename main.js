var doink = 1
var profanity = false


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
        
        $("#Home").prop

        clearInterval(waitForJQuery);
    }
}, 10);




function settings() {
    if(doink == 1){
        $("#settingsmenu").show()
        $("#settingsmenu").css("overflow-y", "scroll")
        $("#settingsmenu").transition({
            "height": "80vh",
            "opacity": "1",
            "top": "0px"
        }, 750, 'cubic-bezier(0.445, 0.05, 0.55, 0.95)')
        doink =  2
    } else {
        $("#settingsmenu").transition({
            "height": "1vh",
            "opacity": "0",
            "top": "-100px"
        }, 750, 'cubic-bezier(0.445, 0.05, 0.55, 0.95)')
        doink = 1
        setTimeout(() => {
            $("#settingsmenu").hide()
            $("#settingsmenu").css("overflow-y", "hidden")
        }, 750);
    }
}

function huh() {
    $("#things > *:not(hr)").hide("slow");
    $("#whatthis").show("slow");
    $("button").prop("disabled", false)
    $("#whatbutton").prop("disabled", true)
}

function boutme() {
    $("#things > *:not(hr)").hide("slow");
    $("#aboutme").show("slow");
    $("button").prop("disabled", false)
    $("#boutmebutton").prop("disabled", true)
}

function social() {
    $("#things > *:not(hr)").hide("slow");
    $("#thesocials").show("slow");
    $("button").prop("disabled", false)
    $("#socialsbutton").prop("disabled", true)
}

function RogueLikes() {
    $("#things > *:not(hr)").hide("slow");
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

function showarchive() {
    $("#things > *:not(hr)").hide("slow");
    $("#bigarchive").show("slow");
    $("button").prop("disabled", false)
    $("#archive").prop("disabled", true)
}
