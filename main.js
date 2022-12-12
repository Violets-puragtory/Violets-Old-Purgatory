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


        document.getElementById("splashtext").innerHTML = "The worst thing since " + florb + Cookies.get("stickybar")
        
        setTimeout(() => {
            if(Cookies.get('stickybar') == 'false') {
                $("#mainsticker").css("position", "relative")
                $("#stickerbutton").text("Sticky Bar: Off")
                document.body.style.setProperty("--stickybutcolor", "red")
            } else {
                $("#mainsticker").css("position", "sticky")
                $("#stickerbutton").text("Sticky Bar: On")
                document.body.style.setProperty("--stickybutcolor", "limegreen")
            }
        }, 300);

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
    $("#things").transition({
        "transform": "scaleX(0)"
}, 500, 'cubic-bezier(0.47, 0, 0.745, 0.715)')
setTimeout(() => {
    $("#things > *:not(hr)").hide(0);
$("#whatthis").show();
$("#things").transition({
    "transform": "scaleX(1)"
}, 500, 'cubic-bezier(0.39, 0.575, 0.565, 1)')
}, 500);
    $("button").prop("disabled", false)
    $("#whatbutton").prop("disabled", true)
}

function boutme() {
    $("#things").transition({
        "transform": "scaleX(0)"
}, 500, 'cubic-bezier(0.47, 0, 0.745, 0.715)')
setTimeout(() => {
    $("#things > *:not(hr)").hide(0);
$("#aboutme").show();
$("#things").transition({
    "transform": "scaleX(1)"
}, 500, 'cubic-bezier(0.39, 0.575, 0.565, 1)')
}, 500);
    $("button").prop("disabled", false)
    $("#boutmebutton").prop("disabled", true)
}

function social() {
    $("#things").transition({
            "transform": "scaleX(0)"
    }, 500, 'cubic-bezier(0.47, 0, 0.745, 0.715)')
    setTimeout(() => {
        $("#things > *:not(hr)").hide(0);
    $("#thesocials").show();
    $("#things").transition({
        "transform": "scaleX(1)"
    }, 500, 'cubic-bezier(0.39, 0.575, 0.565, 1)')
    }, 500);
    $("button").prop("disabled", false)
    $("#socialsbutton").prop("disabled", true)
}

function RogueLikes() {
    $("#things").transition({
        "transform": "scaleX(0)"
    }, 500, 'cubic-bezier(0.47, 0, 0.745, 0.715)')
setTimeout(() => {
    $("#things > *:not(hr)").hide(0);
$("#roguelikesilike").show();
$("#things").transition({
    "transform": "scaleX(1)"
}, 500, 'cubic-bezier(0.39, 0.575, 0.565, 1)')
}, 500);
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
    $("#things").transition({
        "transform": "scaleX(0)"
}, 500, 'cubic-bezier(0.47, 0, 0.745, 0.715)')
setTimeout(() => {
    $("#things > *:not(hr)").hide(0);
$("#bigarchive").show();
$("#things").transition({
    "transform": "scaleX(1)"
}, 500, 'cubic-bezier(0.39, 0.575, 0.565, 1)')
}, 500);
    $("button").prop("disabled", false)
    $("#archive").prop("disabled", true)
}

function setting(settingtype) {
    if(settingtype == "stickybar") {
        if($("#mainsticker").css("position") == "sticky") {
            $("#mainsticker").css("position", "relative")
            $("#stickerbutton").text("Sticky Bar: Off")
            document.body.style.setProperty("--stickybutcolor", "red")
            Cookies.set('stickybar', false)
            
        } else {
            $("#mainsticker").css("position", "sticky")
            $("#stickerbutton").text("Sticky Bar: On")
            document.body.style.setProperty("--stickybutcolor", "limegreen")
            Cookies.set('stickybar', true)
        }
    } else if(settingtype == "dumbbutton") {
        if($("#mainsticker").css("position") == "sticky") {
            $("#mainsticker").css("position", "relative")
            $("#stickerbutton").text("Sticky Bar: Off")
            document.body.style.setProperty("--stickybutcolor", "red")
            Cookies.set('stickybar', false)
            
        } else {
            $("#mainsticker").css("position", "sticky")
            $("#stickerbutton").text("Sticky Bar: On")
            document.body.style.setProperty("--stickybutcolor", "limegreen")
            Cookies.set('stickybar', true)
        }
    }
}

