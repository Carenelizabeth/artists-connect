function handleColorIcons(){
    $('.js-icon-red'). on("mouseover", function(e){
        $('.color-wheel-red').removeClass('display-none');
        hideFullWheel()
    })
    $('.js-icon-red').on("mouseleave", function(e){
        $('.color-wheel-red').addClass('display-none');
        displayFullWheel();
    })

    $('.js-icon-orange'). on("mouseover", function(e){
        $('.color-wheel-orange').removeClass('display-none');
        hideFullWheel()
    })
    $('.js-icon-orange').on("mouseleave", function(e){
        $('.color-wheel-orange').addClass('display-none');
        displayFullWheel();
    })

    $('.js-icon-yellow'). on("mouseover", function(e){
        $('.color-wheel-yellow').removeClass('display-none');
        hideFullWheel()
    })
    $('.js-icon-yellow').on("mouseleave", function(e){
        $('.color-wheel-yellow').addClass('display-none');
        displayFullWheel();
    })

    $('.js-icon-green'). on("mouseover", function(e){
        $('.color-wheel-green').removeClass('display-none');
        hideFullWheel()
    })
    $('.js-icon-green').on("mouseleave", function(e){
        $('.color-wheel-green').addClass('display-none');
        displayFullWheel();
    })

    $('.js-icon-blue'). on("mouseover", function(e){
        $('.color-wheel-blue').removeClass('display-none');
        hideFullWheel()
    })
    $('.js-icon-blue').on("mouseleave", function(e){
        $('.color-wheel-blue').addClass('display-none');
        displayFullWheel();
    })

    $('.js-icon-purple'). on("mouseover", function(e){
        $('.color-wheel-purple').removeClass('display-none');
        hideFullWheel()
    })
    $('.js-icon-purple').on("mouseleave", function(e){
        $('.color-wheel-purple').addClass('display-none');
        displayFullWheel();
    })
}

function hideFullWheel(){
    $('.color-wheel-full').addClass('display-none');
}

function displayFullWheel(){
    $('.color-wheel-full').removeClass('display-none');
}


function handleNavButtons(){
    $('.js-home-button').click(function(){
        window.location = "http://www.artistconnect.co/"
    })
}


handleColorIcons();
handleNavButtons();