function handlePageLoad(){
    let productId = getQueryVariable('productId')
    amendImage(productId);
    amendData(productId);
    amendReviews(productId);
}

function getQueryVariable(variable){
    let query = window.location.search.substring(1);
    if(query){
        return query;
    }
    return (false);
}

function amendImage(id){
    let image = renderImage(id);
    $('.product-image').html(image);
}

function renderImage(index){
    return`
        <img src="${locationSTORE[index].ImageURL}" class="product-image">    
    `
}

function amendData(id){
    let data = renderData(id)
    $('.product-summary').html(data);
}

function renderData(index){
    return`
        <h2>${locationSTORE[index].Name}</h2>
        <p>${locationSTORE[index].Description}</p>
        <p class="rate">Basic Rate: ${locationSTORE[index].Rate}</p>
        <div class="product-calender">
            <img src="https://www.miltonps.org/application/files/6115/0777/1563/calendar.jpg"
                height="200" width="300">
        <div>
    `
}

function amendReviews(id){
    let reviews = locationSTORE[id].Reviews.map(review => 
        renderReviews(review)
    )
    $('.review-listings').html(reviews)
}

function renderReviews(review){
    return`
        <div class="each-review">
            <blockquote>${review.Review}</blockquote>
            <p class="review-author">${review.Name}</p>
        </div>
    `
}

handlePageLoad();