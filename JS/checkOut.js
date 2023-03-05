const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('checkOutType');
const finalPriceNumber = urlParams.get('totalPrice');

const checkOutList = document.getElementById('checkOutList');

//sets minimum date on form datepicker
let today = new Date().toISOString().split('T')[0];
document.getElementById("date").setAttribute('min', today);


if (query === "partyPack") {

    checkOutList.innerHTML = '<h5 id="checkOutListTitle" class="card-title">Your Items</h5>' +
                            '<ul>' +
                            '<li class="checkOutListItems">Giant Jenga</li>' +
                            '<li class="checkOutListItems">Giant Beer Pong</li>' +
                            '<li class="checkOutListItems">Kan Jam Pro</li>' +
                            '<li class="checkOutListItems">Ladder Toss</li>' +
                            '<li class="checkOutListItems">Corn Hole</li>' +
                            '<li class="checkOutListItems">Giant Tic-Tac-Toe</li>' +
                            '<li class="checkOutListItems">Giant Checkers</li>' +
                            '<li class="checkOutListItems">Giant Uno</li>' +
                            '</ul>';
    
    finalPrice.innerHTML = '$200';

    document.querySelector('#whichGames').value = "The Party Pack (All Games)";
    document.querySelector('#totalPrice').value = "$200";


} else {

    let hiddenGameList = "";

    const finalPrice = document.getElementById("finalPrice");

    // Get the query string
    const queryString = window.location.search;

    // Parse the query string into an object
    const params = new URLSearchParams(queryString);

    // Generate the HTML for the list
    let listHTML = '<h5 id="checkOutListTitle" class="card-title">Your Items</h5>' +
                '<ul id="checkOutUnorderedList">';

    params.forEach(function(value, key) {
        if (key.startsWith('checkBox') && value == "true") {
            const itemName = key.substring(8);
            listHTML += `<li class="checkOutListItems">${itemName}</li>`;

            hiddenGameList += `${itemName}, `;
        }
    });

    listHTML += '</ul>';

    // Insert the HTML into the page
    const checkOutList = document.getElementById('checkOutList');
    checkOutList.innerHTML = listHTML;

    // Change price amount
    finalPrice.innerHTML = '$' + finalPriceNumber;


    document.querySelector('#whichGames').value = hiddenGameList;
    document.querySelector('#totalPrice').value = "$" + finalPriceNumber;

}



