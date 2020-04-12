const BASE_URL = "http://localhost:3000/"
const petList = document.querySelector(".pets-ul")
const mainRender = document.querySelector("#main-render")
const movesArray = []

fetch(BASE_URL + "pets")
    .then((response) => {
    return response.json();
    })
    .then((petArr) => {
        petArr.forEach(renderPet);
    });

fetch(BASE_URL + "moves")
    .then((response) => {
    return response.json();
    })
    .then((movesArr) => {
        movesArray.push(movesArr);
    });

function renderPet(petObj){
    let petNameLi = document.createElement('li')
    petNameLi.id = `${petObj.id}`
    petNameLi.innerText = `${petObj.name}`

    petList.append(petNameLi)
}

petList.addEventListener("click", function(e){
    let petId = e.target.id

    displayPet(petId)
})

function displayPet(petId){
    fetch(BASE_URL + `pets/${petId}`)
    .then((response) => {
        return response.json();
    })
    .then((petObj) => {
        renderDisplayPet(petObj);
        displayPetMoves(petObj);
    });
}

function displayPetMoves(petObj){
    fetch(BASE_URL + `joiners`)
    .then((response) => {
        return response.json();
    })
    .then((joinerArray) => {
        findPetMoves(movesArray, joinerArray, petObj)

    });
}

function renderDisplayPet(petObj){
    
    let petDisplayTag = document.createElement('div')
    petDisplayTag.id = `${petObj.id}`
    
    mainRender.innerHTML = ""

    let nameTag = document.createElement('h1')
    nameTag.innerText = `${petObj.name}`
    nameTag.classList.add('h1')

    let petImageUrl = document.createElement('img')
    petImageUrl.src = `${petObj.pet_image_url}`
    petImageUrl.classList.add('img')

    let petHP = document.createElement('h3')
    petHP.innerText = `HP: ${petObj.hp}`
    petHP.classList.add('h3')

    let petAttack = document.createElement('h3')
    petAttack.innerText = `Attack: ${petObj.attack}`
    petAttack.classList.add('h3')

    let petDefense = document.createElement('h3')
    petDefense.innerText = `Defense: ${petObj.defense}`
    petDefense.classList.add("h3")

    let petSpeed = document.createElement('h3')
    petSpeed.innerText = `Speed: ${petObj.speed}`
    petSpeed.classList.add('h3')

    let moveSet = document.createElement('li')
    // movesList.forEach(renderMoves)

    petDisplayTag.append(nameTag, petImageUrl, petHP, petAttack, petDefense, petSpeed)
    mainRender.append(petDisplayTag)
}

function findPetMoves(movesArray, joinerArray, petObj){
    let petMoves = []
    let petJoins = []
    joinerArray.forEach(getPetJoins(petObj))
            console.log(petJoins)
    
    petJoins.forEach(findMove)
    // console.log(petMoves)
} 

function getPetJoins(join, petObj){
    if (join.pet_id === petObj.id)
    petJoins.push(join)
}

function findMove(join, movesArr){
    console.log("hello")
}

function renderMoves(moveArr){
    moveArr.forEach(getInfo)

}

function displayOneMove(moveObj){
    console.log(moveObj)    
}

function getInfo(move){
    console.log("joiner id = " + move.id, "joiner pet_id = " + move.pet_id, "joiner move_id =" + move.move_id)
    }