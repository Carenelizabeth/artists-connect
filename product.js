function handlePageLoad(){
    console.log('handle page load');
    let productId = getQueryVariable('productId')
    console.log(productId);
    amendImage(productId);
    amendData(productId);
}

function getQueryVariable(variable){
    let query = window.location.search.substring(1);
    if(query){
        return query;
    }
    return (false);
}

function amendImage(id){1
    console.log(id);
    console.log(locationSTORE[id].Name)
    let image = renderImage(id);
    console.log(image);
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
    `
}

handlePageLoad();