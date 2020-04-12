const BASE_URL = "http://localhost:3000/"
const petList = document.querySelector(".pets-ul")
const petDetailDiv = document.querySelector("#pet-details")

fetch(BASE_URL + "pets")
  .then(response => response.json())
  .then(pets => {
    pets.forEach(petObj => renderPet(petObj));
});

function renderPet(petObj){
    let petNameLi = document.createElement('li')
    let petNameSpan = document.createElement('span')
    
    petNameLi.id = `${petObj.id}`
    petNameSpan.innerText = `${petObj.name}`
    petNameSpan.className = "pets-name-text"
    petNameLi.className = "pets-li"

    petNameLi.append(petNameSpan)
    petList.append(petNameLi)

    petNameLi.addEventListener("click", () => {
      displayPet(petObj)
    })
}

function displayPet(petObj){
  petDetailDiv.innerHTML = `
  <img class="pet-image" src="${petObj.pet_image_url}"><br />
  <h2 id="pet-name">${petObj.name}</h2>
  <ul class="pet-stat-ul">
    <li>HP: ${petObj.hp}</li>
    <li>Attack: ${petObj.attack}</li>
    <li>Defense: ${petObj.defense}</li>
    <li>Speed: ${petObj.speed}</li>
  </ul>
  `
}
