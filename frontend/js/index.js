const BASE_URL = "http://localhost:3000/"
const petList = document.querySelector(".pets-ul")
const mainRender = document.querySelector("#main-render")
const headers = document.querySelector("#headers")
const playerPet = []
const createTab = document.querySelector(".create-tab")
const battleTab = document.querySelector(".battle-tab")

const backgrounds = ["./css/images/forestscape.jpg", "./css/images/mountainscape.jpg", "./css/images/pixelbackground.jpg"]
let ryu = new sound("./css/sound/Ryu_theme.mp3")
let ff7 = new sound("./css/sound/Fight_on_theme.mp3")
let guile = new sound("./css/sound/Guile_theme.mp3")

let effectArray = ["none", "reduces opponent's defense", "increases defense", "lowers opponent's speed", "increases speed", "lowers opponent's attack", "increases attack", "restores hp"]


fetch(BASE_URL + "pets")
    .then(response => response.json())
    .then(pets => {
    let petsArr = pets.data
    petsArr.forEach(petObj => renderPet(petObj.attributes));
});

function renderPet(petObj){
    let petNameLi = document.createElement('li')
    let petNameSpan = document.createElement('span')
    
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
    ryu.stop()
    mainRender.innerHTML = ""
    const welcome = document.createElement('div')
    welcome.setAttribute('id', 'welcome-page')
    const header = document.createElement('h1')
    header.setAttribute('class', 'welcome-header')
    header.textContent = 'Welcome to Super Pet Bros. Unleashed!'

    welcome.append(header)
    mainRender.append(welcome)
}
  
function displayPet(petObj) {
    ryu.stop()
    mainRender.innerHTML = ""
    const petDetailDiv = document.createElement('div')
    petDetailDiv.setAttribute('id', 'pet-details')
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

    petDetailDiv.append(choosePetButton, battleButton)
    mainRender.append(petDetailDiv)

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
    mainRender.innerHTML = ""
    
    const petBattleDiv = document.createElement('div')
    petBattleDiv.setAttribute('id', 'pet-battle')

    const audioDiv = document.createElement('div')
    audioDiv.setAttribute('id', 'audio-player')
    audioDiv.innerHTML = `
    <button onclick="ryu.playPause()" type="button">Ryu</button>
    <button onclick="ff7.playPause()" type="button">FF7</button>
    <button onclick="guile.playPause()" type="button">Guile</button>`
    petBattleDiv.append(audioDiv)
    ryu.play()

    const battleDiv = document.createElement('div')
    battleDiv.setAttribute('id', 'battle-div')
    const setBackground = Math.round(Math.random() * 3)
    battleDiv.style.backgroundImage = `url(${backgrounds[setBackground]})`

    let opponent = petObj
    let player = playerPet[0]
    let opponentDiv = document.createElement('div')
    opponentDiv.id = "opponent-div"
    opponentDiv.innerHTML = `
    <img class="pet-image" id="opponent" src="${opponent['pet-image-url']}"><br />
    <h2 id="pet-name">${opponent.name}</h2>
    <h4 id="opponentHP">HP: ${opponent.hp}</h4>
    `
    let playerPetDiv = document.createElement('div')
    playerPetDiv.id = "player-pet-div"
    playerPetDiv.innerHTML = `
    <img class="pet-image" id="player" src="${player['pet-image-url']}"><br />
    <h2 id="pet-name">${player.name}</h2>
    <h4 id="playerHP">HP: ${player.hp}</h4>
    `
    let buttonDiv = document.createElement('div')
    buttonDiv.id = "button-div"
    buttonDiv.innerHTML = `
    <button id="move1">${player.moves[0].name}</button>
    <button id="move2">${player.moves[1].name}</button>
    <button id="move3">${player.moves[2].name}</button>
    <button id="move4">${player.moves[3].name}</button>
    `
    playerPetDiv.append(buttonDiv)

    buttonDiv.addEventListener("click", function(e){
        e.preventDefault()
        if (e.target.id === "move1"){
            speedCheck(player, opponent)
            console.log("you used " + `${player.moves[0].name}. It has ${player.moves[0].power} power and ${effectArray[player.moves[0].effect_target]} by ${player.moves[0].effect}%`)
        } else if (e.target.id === "move2"){
            speedCheck(player, opponent)
            console.log("you used " + `${player.moves[1].name}. It has ${player.moves[1].power} power and ${effectArray[player.moves[1].effect_target]} by ${player.moves[1].effect}%`)
        } else if (e.target.id === "move3"){
            speedCheck(player, opponent)
            console.log("you used " + `${player.moves[2].name}. It has ${player.moves[2].power} power and ${effectArray[player.moves[2].effect_target]} by ${player.moves[2].effect}%`)
        } else if (e.target.id === "move4"){
            speedCheck(player, opponent)
            console.log("you used " + `${player.moves[3].name}. It has ${player.moves[3].power} power and ${effectArray[player.moves[3].effect_target]} by ${player.moves[3].effect}%`)
        } 
        })

    battleDiv.append(opponentDiv, playerPetDiv)
    petBattleDiv.append(battleDiv)
    mainRender.append(petBattleDiv)
}

createTab.addEventListener("click", () => {
    createPet()
})

function speedCheck(player, opponent){
    if (player.speed >= opponent.speed){
        console.log("player speed is " + player.speed)
        console.log("opponent speed is " + opponent.speed)
    } else if (opponent.speed > player.speed){
        console.log("opponent speed is " + opponent.speed)
        console.log("player speed is " + player.speed)
    }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
    this.playPause = function(){
        if(this.sound.paused){
            this.sound.play()
        } else {
            this.sound.pause()
        }
    }
}
