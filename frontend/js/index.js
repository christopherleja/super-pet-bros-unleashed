const BASE_URL = "http://localhost:3000/"
const petList = document.querySelector(".pets-ul")
const mainRender = document.querySelector("#main-render")
const movesArray = []
const petDetailDiv = document.querySelector("#pet-details")
const createTab = document.querySelector(".create-tab")
const battleTab = document.querySelector(".battle-tab")

fetch(BASE_URL + "pets")
  .then(response => response.json())
  .then(pets => {
    let petsArr = pets.data
    petsArr.forEach(petObj => renderPet(petObj.attributes));
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

  
function displayPet(petObj) {
  petDetailDiv.style.display = "block"
  let effectArray = ["none", "reduces opponent's defense", "increases defense", "lowers opponent's speed", "increases speed", "lowers opponenent's attack", "increases attack", "restores hp"]
  
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
            <li>Effect: ${effectArray[petObj.moves[0].effect_target]} by ${petObj.moves[0].effect}%</li>
        </ul>
    <li>${petObj.moves[1].name}</li>
        <ul class="move-stats-ul">
            <li>Power: ${petObj.moves[1].power}</li>
            <li>Effect: ${effectArray[petObj.moves[1].effect_target]} by ${petObj.moves[1].effect}%</li>
        </ul>
    <li>${petObj.moves[2].name}</li>
        <ul class="move-stats-ul">
            <li>Power: ${petObj.moves[2].power}</li>
            <li>Effect: ${effectArray[petObj.moves[2].effect_target]} by ${petObj.moves[2].effect}%</li>
        </ul>
    <li>${petObj.moves[3].name}</li>
        <ul class="move-stats-ul">
            <li>Power: ${petObj.moves[3].power}</li>
            <li>Effect: ${effectArray[petObj.moves[3].effect_target]} by ${petObj.moves[3].effect}%</li>
        </ul>
  `
}

createTab.addEventListener("click", () => {
  createPet()
})

