var flippin = false
var usecookies = false
var bganim = 'true'
var spamquotes = 'true'

function NavMenu(next, bottun) {
    if (flippin == false) {


        flippin = true

        $("button").prop('disabled', false)

        bottun.prop('disabled', true)

        $("#maindiv").transition({
            "transform": "rotateY(90deg)"
        }, 750, 'cubic-bezier(0.47, 0, 0.745, 0.715)')

        setTimeout(() => {
            $("#maindiv > div:not(#buttons)").hide(0)
            next.show(0);
            $("#maindiv").transition({
                "transform": "rotateY(0deg)"
            }, 750, 'cubic-bezier(0.39, 0.575, 0.565, 1)')
            setTimeout(() => {
                flippin = false
            }, 750);
        }, 750);
    }
}


function enablecookies() {
    if (usecookies == true) {
        $("#quotesbutton").css('background-color', 'black')
        $("#quotesbutton").css('color', 'white')
        $("#cookiebutton").text('Use Cookies: False')
        $("#cookiebutton").css('background-color', 'red')
        $("#openanimbut").css('background-color', 'black')
        $("#openanimbut").css('color', 'white')
        usecookies = false
        Cookies.remove('EnableCookies')
        Cookies.remove('QuoteSpam')
        Cookies.remove('bgsetting')
        Cookies.remove('openanim')
    } else {

        $("#cookiebutton").text('Use Cookies: True')
        $("#cookiebutton").css('background-color', 'green')
        usecookies = true
        Cookies.set('EnableCookies', 'true')
    }
}

function setting(which) {

    if (which == 'openanim' && usecookies) {
        if (Cookies.get('openanim') == 'true' | Cookies.get('openanim') == true) {
            Cookies.set('openanim', 'false')
            $("#openanimbut").text('Opening Animation: False')
            $("#openanimbut").css('background-color', 'red')
        } else {
            Cookies.set('openanim', 'true')
            $("#openanimbut").text('Opening Animation: True')
            $("#openanimbut").css('background-color', 'green')
        }
    }

    if (which == 'bgsetting') {
        if (bganim == 'true') {
            bganim = 'false'
            if (usecookies == true) {
                Cookies.set('bgsetting', 'false')
            }
            $("#backdiv").css('animation-play-state', 'paused')
            $("#bganim").text('Background: Static')
            $("#bganim").css('background-color', 'red')
        } else {
            bganim = 'true'
            if (usecookies == true) {
                Cookies.set('bgsetting', 'true')
            }
            $("#bganim").text('Background: Moving')
            $("#bganim").css('background-color', 'green')
            $("#backdiv").css('animation-play-state', 'running')

        }
    }
    if (which == 'spamquotes' && usecookies == true) {
        if (spamquotes == 'true') {
            if (usecookies == true) {
                Cookies.set('QuoteSpam', 'false')
            }
            spamquotes = 'false'
            $("#quotesbutton").text('Spam Quotes: False')
            $("#quotesbutton").css('background-color', 'red')
        } else {
            spamquotes = 'true'
            if (usecookies == true) {
                Cookies.set('QuoteSpam', 'true')
            }
            $("#quotesbutton").text('Spam Quotes: True')
            $("#quotesbutton").css('background-color', 'green')
        }
    }
}

$(window).on('load', function () {
    if (Cookies.get('openanim') == 'true' | Cookies.get('openanim') == true) {
        $("#openanimbut").text('Opening Animation: False')
        $("#openanimbut").css('background-color', 'red')
    } else {
        $("#openanimbut").text('Opening Animation: True')
        $("#openanimbut").css('background-color', 'green')
    }

    if (Cookies.get('openanim') == 'false' | Cookies.get('openanim') == false) {
        $("#maindiv").css('animation-name', 'nooooooooooooooooooooooooooooooo')
        $("#maindiv").css('visibility', 'visible')
    } else {
        setTimeout(() => {
            $("#maindiv").css('visibility', 'visible')
        }, 100);
    }

    if (Cookies.get('bgsetting') != null) {
        bganim = Cookies.get('bgsetting')
    }

    if (Cookies.get('QuoteSpam') != null) {
        spamquotes = Cookies.get('QuoteSpam')
    }

    if (Cookies.get('bgsetting') == 'false') {
        $("#backdiv").css('animation-play-state', 'paused')
        $("#bganim").text('Background: Static')
        $("#bganim").css('background-color', 'red')
    } else {
        $("#bganim").text('Background: Moving')
        $("#bganim").css('background-color', 'green')
        $("#backdiv").css('animation-play-state', 'running')
    }

    if (spamquotes == 'true') {
        quotes = '"'
        for (let x = 0; x < Math.ceil(Math.random() * 40); x++) {
            setTimeout(() => {
                quotes = quotes + '"'
                $("#quotes").text(quotes + "fun" + quotes)
            }, x * 100);
        }

        quotes = quotes

        $("#quotes").text(quotes + "fun" + quotes)

        $("#quotesbutton").text('Spam Quotes: True')
        $("#quotesbutton").css('background-color', 'green')
    } else {
        $("#quotes").text('fun')
        $("#quotesbutton").text('Spam Quotes: False')
        $("#quotesbutton").css('background-color', 'red')
    }

    if (Cookies.get('EnableCookies') == 'true') {
        usecookies = false
        enablecookies()
    } else {
        usecookies = true
        enablecookies()
    }
});