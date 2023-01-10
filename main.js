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
        usecookies = false
        Cookies.remove('EnableCookies')
        Cookies.remove('QuoteSpam')
        Cookies.remove('bgsetting')
    } else {
        $("#quotesbutton").css('background-color', 'green')
        $("#quotesbutton").css('color', 'white')

        $("#cookiebutton").text('Use Cookies: True')
        $("#cookiebutton").css('background-color', 'green')
        usecookies = true
        Cookies.set('EnableCookies', 'true')
    }
}

function setting(which) {
if (which == 'bgsetting') {
    if (bganim == 'true') {
        bganim = 'false'
        if (usecookies == true) {
            Cookies.set('bgsetting', 'false')
        }
        $("#backdiv").css('animation-name', 'no')
        $("#bganim").text('Animate Background: False')
        $("#bganim").css('background-color', 'red')
    } else {
        bganim = 'true'
        if (usecookies == true) {
            Cookies.set('bgsetting', 'true')
        }
        $("#bganim").text('Animate Background: True')
        $("#bganim").css('background-color', 'green')
        $("#backdiv").css('animation-name', 'idle')

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
    if (Cookies.get('EnableCookies') == 'true') {
        usecookies = false
        enablecookies()
    } else {
        usecookies = true
        enablecookies()
    }

    if (Cookies.get('bgsetting') != null) {
        bganim = Cookies.get('bgsetting')
    }
    
    if (Cookies.get('QuoteSpam') != null) {
        spamquotes = Cookies.get('QuoteSpam')
    }

    if (Cookies.get('bgsetting') == 'false') {
        $("#backdiv").css('animation-name', 'no')
        $("#bganim").text('Animate Background: False')
        $("#bganim").css('background-color', 'red')
    } else {
        $("#bganim").text('Animate Background: True')
        $("#bganim").css('background-color', 'green')
        $("#backdiv").css('animation-name', 'idle')
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
});