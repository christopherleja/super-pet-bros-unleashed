const BASE_URL = "http://localhost:3000/"
const petList = document.querySelector(".pets-ul")
const petDetailDiv = document.querySelector("#pet-details")
fetch(BASE_URL + "pets")
    .then((response) => {
    return response.json();
    })
    .then((petArr) => {
        petArr.forEach(renderPet);
        petList.addEventListener("click", e => {
          console.log(e.target.id)
          let targetPet = petArr.find(pet => {
            return pet.id === parseInt(e.target.id)
          })
          displayPet(targetPet)
        })
    });

function renderPet(petObj){
    let petNameLi = document.createElement('li')
    petNameLi.id = petObj.id
    petNameLi.innerText = petObj.name
    petList.append(petNameLi)
}

function displayPet(petObj){
  petDetailDiv.innerHTML = `
  <img src="${petObj.pet_image_url}"><br />
  <h2 id="pet-name">${petObj.name}</h2><br />
  <ul>
  <li>hp: ${petObj.hp}</li>
  <li>attack: ${petObj.attack}</li>
  <li>defense: ${petObj.defense}</li>
  <li>speed: ${petObj.speed}</li>
  </ul>
  `
}