function handlePageLoad(){
    let productId = getQueryVariable('productId')
    amendImage(productId);
    amendData(productId);
    amendReviews(productId);
    amendIcon(productId);
}

function getQueryVariable(){
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
        <button class="book-now book-now-${locationSTORE[index].Category}">Request</button>    
    `
}

function amendData(id){
    let data = renderData(id)
    $('.product-summary').html(data);
}

function renderData(index){
    return`
        <h2 class="resource-name-${locationSTORE[index].Category}">${locationSTORE[index].Name}</h2>
        <p>${locationSTORE[index].Description}</p>
        <p class="rate">Basic Rate: ${locationSTORE[index].Rate}</p>
        <div class="product-calender">
            <h4>Availability</h4>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAADOCAMAAADR0rQ5AAAAkFBMVEX////+/v6lpaV5eXnf39/4+PgAAAD7+/vV1dX09PTJycnn5+e4uLioqKiGhoZ1dXWbm5tpaWmDg4OcnJyVlZXu7u7a2tqurq7Q0NDl5eW3t7e+vr7IyMh+fn6Pj49PT09tbW1bW1tKSkpjY2NCQkIyMjJXV1c6OjovLy9AQEAODg4cHBwjIyMpKSkUFBTc298nyKioAAASJ0lEQVR4nO2dCXujoBaGD26IxiVRRMWYxTRpZ7n3//+7C5p0SeU4aW9nOlO/Ps12FHk9iAhHBJj1hUTIn87Bb9WZlhDnC6moBmpK7PILKb742vozZe3PKDq/z9T/vmbqr6OZ+utopv46mqm/jmbqr6OZ+lqE/KudDbOvr+W0bflbM/NmEf2nCyaBS/cQIX23GNU/vyqxGHXgeeIDs/p/FBn/eOG9lbqG87E97MTHj0979HLoPzMNnY+/sUogkP30TkK9Lx68O6vPM9ukykJX370H+WqFSWoKEPoF14u4lIDjM50YdVXKlPTlhxV+RVRRosrMSpdSTe267gdiXiv2vL3nWdB43k6/qz1ue2v1tveO7TfvFfYkNZR3ntI+BO558qQ+5gC556kkhecxYJ02f1MJb7w88ryD912tWnreb6wSmOdVIFWeHhSg43nU7b573krVTN5Rv+yuV5ikDtXuk4rmqKm9g/3N8xxF/W2gdtXe/CHkQX86ehu1RO15hd75dx9M+lyNhnM9T+VQfdt7PvPuf2jq0OsAKm95vcIktTxu3IFCpanS8HUV90hN2f4o+x8rRe0lnNFvXgvwXZeI3yRCWBEC1N5D5Z3U98RbqFehqAmkXpf9uKuuVxmnHuquoYQDcF98V+nx4avnRSqxR1+rg9yRysmhotZlW+2geyj099+rTJWxwjuAptbZHKjVoXjvPZTXVavB13nbXOpwVRvoVXtq5VZyoYaBuj/UTwP1VqeuiKtcFbnf2qzje+++UJvWvt4++lq9HImu4txfo/6mS2ijqVNVojm019SeqtzV0e6qumNdkWKgTvp1T16217vrw1EvWSd6T6vDStdqarMHXbEM1Emfj7v+h+cyUN97Bworzwug62vA3UvqrC/B6iRB676U18+pM0+VDvrBqM+kTpPfvIwwxkHvbVXH6B3eU7dDbebxX/O1cuZ3fcYi6rznLYrWe0mtyv4pV9Ceqz61xcIbarOBWtf1ycfDPpPwBrGyP2/r5ooqiOp8rbKyVwDxrx3XVMN6+hxEwu/6Q6K8p5JYqB3reZk+dtRu6c/X/elalYpG7ej+DEH0T7+3/S62iVbHoNzdb/oaGOTSUi0nHp9+HOtXKxjr8LAWDdUfSFCXQHmokuCqViAh162zYhEQGoa69lo0DDjX/3xoi9qqMv+d7dGnbb1sdo9cdpxlOl8bmu3TWWDbra5aPveFubGV8vLa5ZUe9+P1dYaqR70792+lfqMIlbL83MjwAdRP1/WfWHMP0tfRTP11NFN/Hc3UX0fX1EW9QCVx84S9lhPrvy/5SXtdjFOvZICp3JSovdnhdmuFJ78WQYPZd5hVaY9vXsYG6olOkInuArrG7f7EEFLk4PaJ5OFVH/BLsfa8mfP3R+qXQxYvxnG0Erj+5XE0SL+59uOv9OUCw4sfwbjOKVrO+QqPvkjg8eP6+fgSXF9YX1NfZZMAM/naHRbP49L3y5Q3bRzyNHAsNtjPvhaBL8r1Qha1H6cgy5Rm8Iy6XKeCiKat67iIVQK5DDNXZ72MwC9SLto0aLNKFH6cF60QrYQ4tBzZU4NcWwKEgEimVhEvrLaBdSj88hk1WKlsc0fnjuW+Ly790Eud96YNeNasoggikck+cR5VetgHp6a0i6Sqee6EiMEWCdtcOvXP1O2qbROws2W8KCJ/HZc/q+fU6kBZQWyl/jorWjeOtmxv9Q5TvmbtPm2W9cIX1oOQXd2sZAtLvpX5hp59bUMXJStYpdKWcbCGpbMN4t1zX0Oi9mksxZrYdcJ3q4s/e+osLTKbJNCBHQfxCrZhUmcbOu1rJrI8S6W1E0mQ72LRXnbmmTpvszaplpnvyXpVL498+bKEr9242GYLx5LtWmYqgZz3e0X5Gk7S43ah9qeQP6Xty3IXF8u07Xh7KeFb9We3zjb1k4W/XBdJnG+d6AX1lpdZLqNtkHatZTkvSrhVbrtVncCyslfVau0sc5V4DnS6hAcSmoY6vGoaVkHhMPKC2uFhwQR3qM9lUbk89IffL9SFy0RVycCpXZWAA74zHJqaunB9ImUlC8arUEpeO4XkPhRM5d3qazOf6K91VVG1kbCUrASf6T66J2ofeMgrlTu3AL9iz6lJKCq1RV+980Jl/Zy4Nk9Q06FraBj/J+dx/yfq4Sf1Rx8HtslzanIJFXgRNzBQnxcmL3rzyPmvP64flybkspgeKX5OPWSAntd86uNaXsbOL6s+ZXCa2qyJM5f7zjOXNXXmmuimmTpzzdTwRB0nNqb13Qq126c1au42qH29WeKbP+FbX//EN5+YWinva5uR97bNXg01v9QKN6u6H5X7Z0p4aWqbnfWXHtc2bje2SM/q63BEfyf1L/h6pn6lmXpMM/WIZmqtmRrTTD2imXpMM/WYZuox/V5qIusCeINQE0pkhFAT4u+ODGuHW90ao6aQCYyaHjsLo+a7nXMjdeiD4LJGfb3YZBg17FxpIdTUhh3HfO0rKoTaiUPU17ZT+TeXcBEARakJNDlewummMlMTAtkJ87WbFCh1k7SxmZrAcb0MbvU1B0Fd3NcgcWrnGEJp7lVgC8iayExdL7cHjLqi8ID5+kh5cmOvAhNlrV4mqFu0hN8n6wChhn12YGhtVqaorzdxjlHL5VLeWsJdriOScWqXIX0phDDOXYSagOPidThlYCN1OK/wOjwMgX/MmOZf2m8Wtzmm9JCi9nzCbneoPe1W+Ob3+NbTU4baW0MfaezwUItz3v+fdfnIl89+DJ99PP9QJfxx8ad//pigzJ6n+Tzl4ae05Nc/vchEEr7a5CWZ/mN3lfrVosWvjV+/0gePAnz0qP2bWqTka7VIHzVTj2imHtNMPaaZekwz9Zhm6hHN1FozNaavNn49bM/cW9i/IO3wPjrKcH3dT8ih7Sbq68ir12kPwVcG6stNZjdTq4t+KRuEmoBcINSEuKI0UKt1HUaYuvQYp1Z2X+WrpGZf+1Rd2bhGX9P/ElLLN1HX1gbztWVFmTlSmsAx6IrxEq5nfQhhUz5Qg69d2wOWfDf6uupO4HfBzkQdPLTQRm39puO6Y2ZqSso2l1h8+AmEZbjSJKwL3R3k/nhvIaHsRCi/M1K71QH8kG1M1K5sweFJ+RbqskWP68yKcnMPEoHFdmmgViV4GbIO0tLQR0rgpI5cMzWwA0BxCI0lPFBZ53n0FurER+vwpRN2GHVOVr6xDu8qOBBkFOCeErhHqB8UNOdGauXrfVjab4k3y7A+UgJ8bXN0xGcpzOfriEOxXJjjzXLl6xxMfaTETaFp49RIXUgIk5Vr7CN1+3jcJwE8ftBK4NlPVwtCf74esz2urnxtsAzq48PHV++Xs4l521pLPHnjfR/MxUQSwMyU2bhd+RpN3iooZoc1ZlXpb9HkXW7qIx2mozDJvrNRe4Lb7W6D2/fLic3jW7fv8ewtTb6eaPJ99CjAxPRJMW6eyt7HtMOxFmmv+epjTP8m9df09Uw9ppl6TDP1mGbqEc3UWjM1JpSafF7q99ynOTFqP0GtrvreRU1wan1RaeojJUMv6udrkfY876HW+v+WcLfcqY12xp5hV7TAH7aG3kJCWVtDuduHhj5Swnch67Z3hYGaFhsKx21s6kvR2auOm8ZEHW6O0tns+a0Rle1eTwVppC6TFcisMETjEJBHAcfQ5yZq615dYvLE5GuW/yR8CUcTddUeoC1gb6K2StolvMxvLeF0D06KjAKUaxBZmxt7hiMBP9JdYYwt3CrqjptL+Algv7VhbQgCdA8gE3FvHvtYNkdS3dxbqJK1ks0Ooy6B7oy9CpaAByhTY6/CMgTeIcf1HUgLOtdEzR6AB45xFMDdFGplv72VmqkSDkIaqYM1yN2yMfpazwWy3YRmX1ewSBHqk8pB22H94cWxC0zU+c7O/N2muvVeAEL1PAbGM9cwPT4DZqAe7K45UpoO43tGalclwZHRPZfo4F0TNaUu1Zv/otGzpj7SdYzqhJtXD7h9e1yh9mOCrz+RfHxqUbNtouYMk7t1UTtPKGoPLHR9N/Nxu42mzliHbz78tFcfqP7I1ccfj57F7gXQQqk/rh0+VZv9g1eaX/P6eqYe10w9ppl6TDP1mGbqEc3UWn++t7DX56Luw08J2iId5qgc7zcjl5dxXz/ZDdSX6Fdj5BVMR89qIZFXowpidV0gzb6ucwYidw0tUgJWRlhem0o4Ze0CCJNGXztxCTISxnZ4GVfQtOYoO5W1RSRujagM9/xU7TdGahn72zpv7PFeBQJtLbJlYZem6NmNkwSQLI0xw/f8QI9FYSrhzpE/FOvKeK993ZaJU6wXN1Jzh54gNFM7brF13HJtovahTl1/z0yR0grZF83W5GvXhwP/sc5MfaQ8pHtrnRQm6sL1t8C3N9dmzr4CbqaGeueC6AwxSOqYy21gLF8YomcpbCO2b/ame+0p3/g0hD0d9zWBYq+Pn5O5hHcUkurW4zr8oYoXPxipm51T1UvHMY0C5KtKHSJZVBhK+FEUYSCNMwzQ/5SFv2XGeRWqn4UjW8cYKb1Q2YPvN9fhlZWlwEyzSRAIrKxW/wsTdW1lQdhGpjqcRlaqeI21Gbes1JVxYarNCiuzQJhrs0ZlT88A8nl7FVBNna+3uNkYPeu8ukX9xe3qy9e3sD/X+V57o2SKJ58HuD2pUHvY4Zs33Wsf51lqVJZZB8SsFkj3Gbr+eonZ06yL0fStfYqunh3w5I3zKvzh5wJMjAJMzTCwxc1fc+7ZW1ukF70zLuXvuvp41HylOaKZekwz9Zhm6jHN1GOaqUc0U2vN1CMil6e1mGKQCO1jiEzU5Pxqph66Od9B3T+/BaEmt0fPqhXUC0N87er4JrOvXdIvYmyRsmErODXBY4Zd3Ncqeze2w0lnr9lmnZqo+WZZl8eNb+pLabqNI7sNNfSlQJ5sXOcBiahUC1UC9bVbyxKjrur61ujZIoWDn4MxolIEsNsyvjX1kVpEyA2I2hQ9m8K2in6g1P38lgh14YDAqEtSFDfXZlnLDtvMXMK7Rqxaw732Ohz+vtpAY5hxl1AQJwZHlFrt2onaTPoINYFQ3Opr2ErIGngwUbONA5Vfrg3x4dACt3dGXwPNoRawwUs4walpjc8zHAC7dRbW8nuyDDer2NRHmu6Xebk7hqbjWnTHUnZ7w3ENYNsKecLXE9S+kBKjLhZ1eHMdrqNnzXV4b9cRrKa+FP2sQdd05tLnlCFAF+lL6U+c2JlLn5reWodPNAP+8uhZ09yzW/wBWPf4A7Cmn8+Fr76f2PzE87nsiextTX2kjGJSvkbtzEbtRJVwNHnLwTe/dlE7XeLZ+5Dewr/2CXTz1ceYZuoRzdRjmqnHNFOPaaYe00w9oplaa6bGNFNfyRw9+6R3UPe/v5H6En37JmqHY9Q0CCqM2m0CjNoNggB7jg8pZIX2IAXSPPcsU+mqzb+FmqtrfoQ6LJkpZriX5IVhhoFelDNBEGpWA/pUstLnxh6kQgTQVP7tfaRqEVk42MycpawN/WaDRCMpOodGWaHHdd00xhkGlEqHRUZfVwHUhDVvoA4CfHZlBu4Cm2c4Asc8C6sSFehxHTZEYNS0KY394aSn5m+gJowHPlbCG78IsHgz6TTIs9iAOA1KzRcMLeFOWZjHPqpGHQHNrc/dO1eByOzKhBDfR+cPp76DRl5xjo9zhSVH78ktfHMdzkJC1PH5h6Jnp85c73160RY3m6jXpY+pOBaovexQsy9aPPnVArdPJO9v8Ow1BurSwiXeZ4+i99nfuXmrHKUmE22fv14D37WvPxH14AGi51J5zBcdYhpenb/ON3SRYWCIPH4n/TqP9ksy19SfSCQMAv1My+bJE4W+sQUoG/UNO48Wuc9rxKIIR07xn5gaLFkHkJKSR6UvCp/7wndE0dZlqq0OC5yyCksnCLkr9BKqFVWIqokaKR2p/vXiVsJhsVDt+yBSbazL3vrE1DR1qgWkwC0aCbDEQla1BUKUZaDHUJjVLhaibqLWgpqFTSTrNsvUcq6UrWrRCwGRpedfChs3Ve+6hfQXUJNGWAykyB1Vt9citEq2aOpoURZWH3AUl1KRE8vPSkdV3pEos7qG2rJk2qq9lKl1ZG3VjpNmgRALxxF/BXUfuNQHN4GkUIf6Dirh64miLrknumIjffXWzx5FddVF+yWIXkdPGqVjwvp3eFrvE1N/oM7UBFYT5/d/Sudh7NdnwFmz/hn9DxOY0yZFgeWmAAAAAElFTkSuQmCC"
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

function amendIcon(id){
    let icon = renderIcon(id);
    $('.review-type-icon').html(icon);
}

function renderIcon(index){
    return`
        <div class="review-icon review-icon-${locationSTORE[index].Category}"></div>
    `
}

handlePageLoad();