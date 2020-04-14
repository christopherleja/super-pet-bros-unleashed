const BASE_URL = "http://localhost:3000/"
const petList = document.querySelector(".pets-ul")
const mainRender = document.querySelector("#main-render")
const petDetailDiv = document.querySelector("#pet-details")
const petCreateDiv = document.querySelector("#pet-create")
const headers = document.querySelector("#headers")
const welcomeDiv = document.querySelector("#welcome-page")
const playerPet = []
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

headers.addEventListener("click", () => {
  displayWelcome()
})
function displayWelcome() {
    welcomeDiv.style.display = "block"
    petCreateDiv.style.display = "none"
    petDetailDiv.style.display = "none"
}
  
function displayPet(petObj) {
    welcomeDiv.style.display = "none"
    petCreateDiv.style.display = "none"
    // petBattleDiv.style.display = "none"
    petDetailDiv.style.display = "block"
    let effectArray = ["none", "reduces opponent's defense", "increases defense", "lowers opponent's speed", "increases speed", "lowers opponent's attack", "increases attack", "restores hp"]
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
    let choosePetButton = document.createElement('button')
    choosePetButton.id = "choose-pet-btn"
    choosePetButton.innerText = `Choose ${petObj.name}`

    let battleButton = document.createElement('button')
    battleButton.id = "battle-btn"
    battleButton.innerText = `Battle ${petObj.name}`

    petDetailDiv.append(battleButton, choosePetButton)

    choosePetButton.addEventListener("click", function(e){
        e.preventDefault()
            if (playerPet.length > 0){
                playerPet.pop()
                playerPet.push(petObj)
            }else {
                playerPet.push(petObj)
            }
    })

    battleButton.addEventListener("click", function(e){
        e.preventDefault()
        renderBattle(playerPet, petObj)
        console.log("initiating battle")
    })
}

function renderBattle(playerPet, petObj){
    welcomeDiv.style.display = "none"
    petDetailDiv.style.display = "none"
    petCreateDiv.style.display = "none"
    let petBattleDiv = document.querySelector('#pet-battle')
    petBattleDiv.style.display = "block"
    let opponent = petObj
    let player = playerPet[0]
    let opponentDiv = document.createElement('div')
    opponentDiv.id = "opponent-div"
    opponentDiv.innerHTML = `
    <img class="pet-image" id="opponent" src="${opponent['pet-image-url']}"><br />
    <h2 id="pet-name">${opponent.name}</h2>
    <h6 id="opponentHP">${opponent.hp}</h6>
    `
    let playerPetDiv = document.createElement('div')
    playerPetDiv.id = "player-pet-div"
    playerPetDiv.innerHTML = `
    <img class="pet-image" id="player" src="${player['pet-image-url']}"><br />
    <h2 id="pet-name">${player.name}</h2>
    <h6 id="playerHP">${player.hp}</h6>
    <button id="move1">${player.moves[0].name}</button>
    <button id="move2">${player.moves[1].name}</button>
    <button id="move3">${player.moves[2].name}</button>
    <button id="move4">${player.moves[3].name}</button>
    `
    petBattleDiv.append(opponentDiv, playerPetDiv)

}

createTab.addEventListener("click", () => {
  createPet()
})

