function amendSearchResults(){
    let results = locationSTORE.map(item =>
        renderSearchResults(item));
    
    $('.js-search-results').html(results);
}

function renderSearchResults(result){
    console.log(result)
    return`
        <div class="each-result row">
            <div class="result-image col-md-4">
                <img src="${result.ImageURL}">
            </div>
            <div class="result-info col-md-8">
                <div class="result-title">
                    <div><h3>${result.Name}</h3></div>
                    <div class="review-rating"></div>
                </div>
                <div class="result-description">
                    <p>${result.Description}</p>
                </div>
            </div>
        </div>
    `
}

amendSearchResults()