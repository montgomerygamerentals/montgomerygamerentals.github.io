const finalPrice = document.getElementById("finalPrice");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

//Image variables
let cornImage = document.getElementById("cornImage");
let kanImage = document.getElementById("kanImage");
let ladderImage = document.getElementById("ladderImage");
let jengaImage = document.getElementById("jengaImage");
let allGamesImage = document.getElementById("allGamesImage");
let checkersImage = document.getElementById("checkersImage");
let pongImage = document.getElementById("pongImage");
let tictacImage = document.getElementById("tictacImage");
let unoImage = document.getElementById("unoImage");

//Checkbox variables
let checkBoxCorn = document.getElementById("checkBoxCorn");
let checkBoxKan = document.getElementById("checkBoxKan");
let checkBoxLadder = document.getElementById("checkBoxLadder");
let checkBoxJenga = document.getElementById("checkBoxJenga");
let checkBoxCheckers = document.getElementById("checkBoxCheckers");
let checkBoxPong = document.getElementById("checkBoxPong");
let checkBoxTic = document.getElementById("checkBoxTic");
let checkBoxUno = document.getElementById("checkBoxUno");

let total = 0;
let checkBoxName = "";


for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            total += parseInt(checkbox.value);

            checkBoxName = checkbox.name;

            switch (checkBoxName) {
                case "checkBoxCorn Hole": 
                    cornImage.classList.remove("tinted-image");    
                    checkBoxCorn.classList.add("selected");
                    break;
                case "checkBoxKan Jam Pro":
                    kanImage.classList.remove("tinted-image");
                    checkBoxKan.classList.add("selected");
                    break;
                case "checkBoxLadder Toss": 
                    ladderImage.classList.remove("tinted-image");
                    checkBoxLadder.classList.add("selected");
                    break;
                case "checkBoxGiant Jenga":
                    jengaImage.classList.remove("tinted-image");
                    checkBoxJenga.classList.add("selected");
                    break;                
                case "checkBoxGiant Checkers": 
                    checkersImage.classList.remove("tinted-image");
                    checkBoxCheckers.classList.add("selected");
                    break;
                case "checkBoxGiant Beer Pong":
                    pongImage.classList.remove("tinted-image");
                    checkBoxPong.classList.add("selected");
                    break;                
                case "checkBoxGiant Tic-Tac-Toe": 
                    tictacImage.classList.remove("tinted-image");
                    checkBoxTic.classList.add("selected");
                    break;
                case "checkBoxGiant Uno":
                    unoImage.classList.remove("tinted-image");
                    checkBoxUno.classList.add("selected");
                    break;                
            }
        } else {
            total -= parseInt(checkbox.value);

            checkBoxName = checkbox.name;

            switch (checkBoxName) {
                case "checkBoxCorn Hole": 
                    cornImage.classList.add("tinted-image");
                    checkBoxCorn.classList.remove("selected");
                    break;
                case "checkBoxKan Jam Pro":
                    kanImage.classList.add("tinted-image");
                    checkBoxKan.classList.remove("selected");
                    break;
                case "checkBoxLadder Toss": 
                    ladderImage.classList.add("tinted-image");
                    checkBoxLadder.classList.remove("selected");
                    break;
                case "checkBoxGiant Jenga":
                    jengaImage.classList.add("tinted-image");
                    checkBoxJenga.classList.remove("selected");
                    break;                
                case "checkBoxGiant Checkers": 
                    checkersImage.classList.add("tinted-image");
                    checkBoxCheckers.classList.remove("selected");
                    break;
                case "checkBoxGiant Beer Pong":
                    pongImage.classList.add("tinted-image");
                    checkBoxPong.classList.remove("selected");
                    break;                
                case "checkBoxGiant Tic-Tac-Toe": 
                    tictacImage.classList.add("tinted-image");
                    checkBoxTic.classList.remove("selected");
                    break;
                case "checkBoxGiant Uno":
                    unoImage.classList.add("tinted-image");
                    checkBoxUno.classList.remove("selected");
                    break;
            }
        }


        // remove tint from all games image if all of the games are selected.
        if (total == 200) {
            allGamesImage.classList.remove("tinted-image");
        } else {
            allGamesImage.classList.add("tinted-image");
        }

        // change price amount
        finalPrice.innerHTML = '$' + total;
        
    });
}

        

function submitForm() {
    // Get all the checkboxes
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    
    // Build the query string
    let queryString = 'checkOutType=buildYourOwn';
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        queryString += `&${checkbox.name}=true`;
      } else {
        queryString += `&${checkbox.name}=false`;
      }
    }

    queryString += `&totalPrice=${total.toString()}`;
    
    // Set the new href attribute
    const checkoutButton = document.querySelector('.btn');
    checkoutButton.href = `checkOut.html?${queryString}`;
    
    // Submit the form
    checkoutButton.click();
}