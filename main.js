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
    const text = $("#buttontext");
    text.css("font-family", "Rubik Glitch")
    text.css("whitespace", "wrap")
    
    newtext  =  "The Fitness Gram Pacer Test"
    text.css("width",  "100%")
    
    for (var i = 0, len = 20; i < len; i++) {
        setTimeout(() => {
            text.html(makeid(i) + '<br>' + makeid(i) + '<br>'  + makeid(i)) 
        }, i * 25);
    };
    setTimeout(() => {
        text.html('newtext')
        text.css("font-family",  "Rubik, Verdana")
    }, 550);
    
}

