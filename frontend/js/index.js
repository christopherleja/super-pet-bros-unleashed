const BASE_URL = "http://localhost:3000/"
const petList = document.querySelector(".pets-ul")
const mainRender = document.querySelector("#main-render")
const headers = document.querySelector("#headers")
const selectedPetDiv = document.querySelector('.selected-pet')
const petDetailDiv = document.querySelector('.pet-details')
const container = document.querySelector('.container')
const playerPet = []
const createTab = document.querySelector(".create-tab")
const battleTab = document.querySelector(".battle-tab")


const backgrounds = ["./css/images/liquorstore.jpeg", "./css/images/forestscape.jpg", "./css/images/mountainscape.jpg", "./css/images/pixelbackground.jpg"]
let ryu = new sound("./css/sound/Ryu_theme.mp3")
let ff7 = new sound("./css/sound/Fight_on_theme.mp3")
let guile = new sound("./css/sound/Guile_theme.mp3")

const effectArray = ["none", "reduces opponent's defense", "increases defense", "lowers opponent's speed", "increases speed", "lowers opponent's attack", "increases attack", "restores hp"]

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

function stopSound() {
    ryu.stop()
    ff7.stop()
    guile.stop()
}

function displayWelcome() {
    ryu.stop()
    ff7.stop()
    guile.stop()
    container.innerHTML = ""
    const welcome = document.createElement('div')
    welcome.setAttribute('id', 'welcome-page')
    const header = document.createElement('h1')
    header.setAttribute('class', 'welcome-header')
    header.textContent = 'Welcome to Super Pet Bros. Unleashed!'

    welcome.append(header)
    container.append(welcome)
}
  
function displayPet(petObj) {
    ryu.stop()
    ff7.stop()
    guile.stop()

    container.innerHTML = ""
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
    choosePetButton.setAttribute('class', 'pet-button')

    let battleButton = document.createElement('button')
    battleButton.id = "battle-btn"
    
    battleButton.innerText = `Battle ${petObj.name}`
    battleButton.setAttribute('class', 'pet-button')

    petDetailDiv.append(choosePetButton, battleButton)
    container.append(petDetailDiv)

    choosePetButton.addEventListener("click", function(e){
        e.preventDefault()
            if (playerPet.length > 0){
                playerPet.pop()
                playerPet.push(petObj)
                battleButton.style.display = "block"
                selectedPet(playerPet[0])
            }else {
                playerPet.push(petObj)
                selectedPet(playerPet[0])
                battleButton.style.display = "block"
            }
    })
    battleButton.addEventListener("click", function(e){
        e.preventDefault()
        if (playerPet.length === 1){
        renderBattle(playerPet, petObj)
        } else {
            window.alert("You have to choose a pet before you can battle!")
        }
    })
}

function selectedPet(petObj) {
    selectedPetDiv.innerHTML = `
    <h1 class="welcome-header">Selected Pet</h1>
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

createTab.addEventListener("click", ()=> {
    createPet()
})

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

displayWelcome()
