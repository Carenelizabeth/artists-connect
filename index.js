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

function displayFeatures(){
    let data1 = renderFeatures(1)
    let data2 = renderFeatures(2)
    let data3 = renderFeatures(0)

    $('.js-feature-left').html(data1);
    $('.js-feature-center').html(data2);
    $('.js-feature-right').html(data3);
}

function renderFeatures(index){
    return`
        <div class="each-feature">
            <div class="feature-image">
                <img src="${locationSTORE[index].ImageURL}" class="feature-image">
            </div>
            <a href="${window.location.href}/product?${index}" class="color-${locationSTORE[index].Category}">
                <h3>${locationSTORE[index].Name}</h3>
            </a>
            <p class="feature-description">${locationSTORE[index].Description}</p>
        </div>
    `
}

handleColorIcons();
handleNavButtons();
displayFeatures();