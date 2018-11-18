function amendSearchResults(){
    let results = locationSTORE.map((item, index) =>
        renderSearchResults(item, index));
    
    $('.js-search-results').html(results);
}

function renderSearchResults(result, index){
    console.log(result)
    return`
        <div class="each-result result-${result.Category}">
            <div class="result-image">
                <img src="${result.ImageURL}">
            </div>
            <div class="result-title">
                <a href="http://www.artistconnect.co/product?${index}" class="product-link product-link-${result.Category}">
                    <h5>${result.Name}</h5>
                </a>
            </div>
        </div>
    `
}

amendSearchResults()