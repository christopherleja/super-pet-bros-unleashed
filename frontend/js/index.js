const BASE_URL = "http://localhost:3000/"
const petList = document.querySelector(".pets-ul")
const mainRender = document.querySelector("#main-render")
const movesArray = []
const petDetailDiv = document.querySelector("#pet-details")

fetch(BASE_URL + "pets")
  .then(response => response.json())
  .then(pets => {
    let petsArr = pets.data
    petsArr.forEach(petObj => renderPet(petObj.attributes));
});

function renderPet(petObj){
    console.log("in render pet, petObj is " + petObj)
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

function displayPet(petObj) {
    console.log(petObj.moves)
  petDetailDiv.innerHTML = `
  <img class="pet-image" src="${petObj['pet-image-url']}"><br />
  <h2 id="pet-name">${petObj.name}</h2>
  <ul class="pet-stat-ul">
    <li>HP: ${petObj.hp}</li>
    <li>Attack: ${petObj.attack}</li>
    <li>Defense: ${petObj.defense}</li>
    <li>Speed: ${petObj.speed}</li>
  </ul>
  <ol class="pet-move-ol">
    <li>${petObj.moves[0].name}</li>
        <ul class="move-stats-ul">
            <li>Power: ${petObj.moves[0].power}</li>
            <li>Effect: ${petObj.moves[0].effect}</li>
        </ul>
    <li>${petObj.moves[1].name}</li>
        <ul class="move-stats-ul">
            <li>Power: ${petObj.moves[1].power}</li>
            <li>Effect: ${petObj.moves[1].effect}</li>
        </ul>
    <li>${petObj.moves[2].name}</li>
        <ul class="move-stats-ul">
            <li>Power: ${petObj.moves[2].power}</li>
            <li>Effect: ${petObj.moves[2].effect}</li>
        </ul>
    <li>${petObj.moves[3].name}</li>
        <ul class="move-stats-ul">
            <li>Power: ${petObj.moves[3].power}</li>
            <li>Effect: ${petObj.moves[3].effect}</li>
        </ul>
  `
}
