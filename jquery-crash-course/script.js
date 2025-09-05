//$(selector).action( parameters )
$(document).ready(function () {

    $('h1').hide(500).show(1000);
    $("p").animate({
        fontSize: "24px",
        opacity: 0.5,
        marginLeft: "50px"
    }, 1000);
    
    

    $('button').click(function () {
        $('li').show(500);
    });

    $('#clearBtn').click(function () {
        alert('Clearing the form!');
        $('#myForm').trigger('reset');
    });


});