

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function aboutme() {

    $(".button").prop("disabled",true);

    const text = $("#buttontext");
    text.css("font-family", "Rubik Glitch");
    text.css("whitespace", "wrap");
    
    newtext  =  "My name is Violet, I am a young-ish mediocre (at best) 'developer'. I hope to one day be a game developer, but as of now it doesnt seem that way is going to go well. I've been learning/learnt a few languages, most being quite simple. A list can be found below. (Up to date as of October 26th 2022)"

    text.css("width",  "100%")
    
    width = $( window ).width() / 80;

    

    for (var i = 0, len = 25; i < len; i++) {
        const x = i/2
        setTimeout(() => {

            let fullglitch = "a" 
            
            for (var c = 0, len = x; c < len; c++) {
                glitch = makeid((width / 4) * x) + '<br>'
                fullglitch = fullglitch + glitch
                text.html(fullglitch) 
            }

           
        }, i * 20);
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
    }, 550);

    setTimeout(() => {
        $("#aboutme").css("border-color", "blueviolet")
        $(".button").prop("disabled",false);
    }, 600);
    
}

