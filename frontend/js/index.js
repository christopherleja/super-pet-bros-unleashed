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
    petNameLi.id = `${petObj.id}`
    petNameLi.innerText = `${petObj.name}`

    petList.append(petNameLi)
}

