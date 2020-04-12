const BASE_URL = "http://localhost:3000/"
const petList = document.querySelector(".pets-ul")

fetch(BASE_URL + "pets")
    .then((response) => {
    return response.json();
    })
    .then((petArr) => {
        petArr.forEach(renderPet);
    });

function renderPet(petObj){
    let petNameLi = document.createElement('li')
    let petNameSpan = document.createElement('span')
    
    petNameLi.append(petNameSpan)
    petNameLi.id = `${petObj.id}`
    petNameSpan.innerText = `${petObj.name}`
    petNameSpan.className = "pets-name-text"
    petNameLi.className = "pets-li"
    petList.append(petNameLi)
}


