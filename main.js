let winwidth = $( window ).width();

var limitFunc = function(){
    winwidth = $( window ).width();
};

window.addEventListener("resize", limitFunc);


function  disco() {
    const button =  $("#discorbutton")
    button.html("IF I HAD ONE!!!")
    button.css("font-size", "3em")
    button.css("background-color", "transparent")
    button.css("color",  "white")
    button.css("border-color", "transparent")
    button.css("font-family", "Rubik Glitch")
}


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function Projects() {
    $("#socials").css("display", "none")
    $(".button").prop("disabled",true);

    const text = $("#buttontext");
    text.css("font-family", "Rubik Glitch");
    text.css("whitespace", "wrap");
    const newtext =  "Here are some projects I am/have been working on. They've been split into sections for convienience,<br><b style='color:red'> but  do  not expect any of these to ever 'release' or finish</b>"
    text.css("width",  "100%")
    
    width = $( window ).width() / 80;

    

    for (var i = 0, len = 50; i < len; i++) {
        const x = i/2
        setTimeout(() => {

            let fullglitch = "" 
            
            for (var c = 0, len = x; c < len; c++) {
                glitch = makeid((width / 7) * x) + '<br>'
                fullglitch = fullglitch + glitch
                text.html(fullglitch) 
            }

           
        }, i * (20/2));
    };
    setTimeout(() => {
        text.html(newtext)
        text.css("font-family",  "Rubik, Verdana")
        text.css("font-size", "1.5em")
        $(".button").css("border-color", "white")
        $("a").attr("target", "_blank");
        $(".baller > ul > *").css("font-size", "0.5em")
        $(".baller > .fakeheader").css("font-size", "1em")
        $(".baller").css("border-color", "white")
        
        $(".baller").css("border-color", "transparent")
        $("baller > *").css("color",  "transparent")
        $("baller > * > *").css("color", "transparent")
    
        $(".baller").css("font-size", "0em")
        $("baller > *").css("font-size",  "0em")
        $("baller > * > *").css("font-size", "0em")
    }, 550);

    setTimeout(() => {
        $("#Socials").css("border-color", "blueviolet")
        $(".button").prop("disabled",false);
    }, 600);
}

function Socials() {
    $("#socials").css("display", "block")
    $(".button").prop("disabled",true);

    const text = $("#buttontext");
    text.css("font-family", "Rubik Glitch");
    text.css("whitespace", "wrap");
    const newtext =  "If you need to get in contact with me or just are interested, you can find (most) of my socials below."
    text.css("width",  "100%")
    
    width = $( window ).width() / 80;

    

    for (var i = 0, len = 50; i < len; i++) {
        const x = i/2
        setTimeout(() => {

            let fullglitch = "" 
            
            for (var c = 0, len = x; c < len; c++) {
                glitch = makeid((width / 7) * x) + '<br>'
                fullglitch = fullglitch + glitch
                text.html(fullglitch) 
            }

           
        }, i * (20/2));
    };
    setTimeout(() => {
        text.html(newtext)
        text.css("font-family",  "Rubik, Verdana")
        text.css("font-size", "1.5em")
        $(".button").css("border-color", "white")
        $("a").attr("target", "_blank");
        $(".baller > ul > *").css("font-size", "0.5em")
        $(".baller > .fakeheader").css("font-size", "1em")
        $(".baller").css("border-color", "white")
        
        $(".baller").css("border-color", "transparent")
        $("baller > *").css("color",  "transparent")
        $("baller > * > *").css("color", "transparent")
    
        $(".baller").css("font-size", "0em")
        $("baller > *").css("font-size",  "0em")
        $("baller > * > *").css("font-size", "0em")
    }, 550);

    setTimeout(() => {
        $("#Socials").css("border-color", "blueviolet")
        $(".button").prop("disabled",false);
    }, 600);
}


function aboutme() {

    $(".button").prop("disabled",true);

    const text = $("#buttontext");
    text.css("font-family", "Rubik Glitch");
    text.css("whitespace", "wrap");
    
    newtext  =  "My name is Violet, I am a young-ish mediocre (at best) 'developer'. I hope to one day be a game developer, but as of now it doesnt seem that way is going to go well. I've been learning/learnt a few languages, most being quite simple. A list can be found below. (Up to date as of October 25th 2022)"

    text.css("width",  "100%")
    
    width = $( window ).width() / 80;

    

    for (var i = 0, len = 50; i < len; i++) {
        const x = i/2
        setTimeout(() => {

            let fullglitch = "" 
            
            for (var c = 0, len = x; c < len; c++) {
                glitch = makeid((width / 7) * x) + '<br>'
                fullglitch = fullglitch + glitch
                text.html(fullglitch) 
            }

           
        }, i * (20/2));
    };
    setTimeout(() => {
        $("#socials").css("display", "none")
        text.html(newtext)
        text.css("font-family",  "Rubik, Verdana")
        text.css("font-size", "1.5em")
        $(".button").css("border-color", "white")
        $("a").attr("target", "_blank");
        $(".baller > ul > *").css("font-size", "0.5em")
        $(".baller > .fakeheader").css("font-size", "1em")
        $(".baller").css("border-color", "white")
        
        $(".baller").css("border-color", "white")
        $("baller > *").css("color",  "white")
        $("baller > * > *").css("color", "white")
    
        $(".baller").css("font-size", "1em")
        $("baller > *").css("font-size",  "1em")
        $("baller > * > *").css("font-size", "1em")
    }, 550);

    setTimeout(() => {
        $("#aboutme").css("border-color", "blueviolet")
        $(".button").prop("disabled",false);
    }, 600);
}

