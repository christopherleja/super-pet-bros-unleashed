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
        
    })
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


