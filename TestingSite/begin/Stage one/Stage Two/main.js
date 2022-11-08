var sequence = null;

function startf() {

    $("button").prop("disabled", "true")

    var random = Math.ceil(Math.random() * 4) 


    const oldcolor = $('#a' + random).css("background-color")
    $('#a' + random).css("background-color", "white")
    $('div').prop("disabled", "true")
    sequence = sequence + $('#a' + random)
    setTimeout(() => {
        $('div').prop("disabled", "false")
        $('#a' + random).css("background-color", oldcolor)
    }, 1000);
}