function createPet() {
  container.innerHTML = ""
  selectedPetDiv.innerHTML = ""
  const petCreateDiv = document.createElement('div')
  petCreateDiv.setAttribute('id', 'pet-create')

  const basePet = {
    name: "",
    image_url: "",
    stat: 8,
    hp: 40,
    attack: 6,
    defense: 6,
    speed: 6
  }

  const modifier = {
    name: "Personality Modifier",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
  }

  petCreateDiv.innerHTML = `
  <h1 class="create-pet-header">Create your Super Pet!</h1>
  <form class="pet-form">
    <strong>Name: </strong><input type="text" class="pet-name" name="name" /><br>
    <strong>Image: </strong><input type="text" class="pet-image-url" name="pet_image_url" />

    <div id="pet-personality-behavior">
      <h3>What is your pet's personality?</h3>
      <select class="personality">
        <option>--Select--</option>
        <option>Affectionate Cuddler</option>
        <option>Feisty Rascal</option>
        <option>Lazy Potato</option>
        <option>Energetic Bullet</option>
        <option>Indifferent Roommate</option>
        <option>Shy Sweetheart</option>
        <option>Fierce Coward</option>
        <option>Lovable Doofus</option>
      </select>
    </div>

    <div class="stats-container">
      <div class="assign-stats">
        <h3>You have <span class="remaining-stat">${basePet.stat}</span> points |  </h3>
          <p><strong>HP: </strong><span name="hp"> ${basePet.hp} </span></p>
          <p><strong>Attack: </strong><button class="minus-attack">-</button><span name="attack"> ${basePet.attack} </span><button class="plus-attack">+</button></p>
          <p><strong>Defense: </strong><button class="minus-defense">-</button><span name="defense"> ${basePet.defense} </span><button class="plus-defense">+</button></p>
          <p><strong>Speed: </strong><button class="minus-speed">-</button><span name="speed"> ${basePet.speed} </span><button class="plus-speed">+</button></p>
          <button class="default">Default</button><br>
      </div>
      <div class="personality-stats">
        <h3 class="mod-name"> ${modifier.name}</h3>
          <p class="mod-hp">+ ${modifier.hp}</p>
          <p class="mod-attack">+ ${modifier.attack}</p>
          <p class="mod-defense">+ ${modifier.defense}</p>
          <p class="mod-speed">+ ${modifier.speed}</p>
      </div>
      <div class="move-container">
        <ul class="move-list"><span class="select-move">Select 4 moves</span></ul>
        <ul class="move-effect"><br></ul>
      </div>
    </div>
    <button type="submit" class="create-button">CREATE!</button>
  </form>`

  const nameInput = petCreateDiv.querySelector('.pet-name')
  const imageInput = petCreateDiv.querySelector('.pet-image-url')

  const assignStats = petCreateDiv.querySelector('.assign-stats')
  let remainingStat = petCreateDiv.querySelector('.remaining-stat')
  let hp = petCreateDiv.querySelector('[name="hp"]')
  let attack = petCreateDiv.querySelector('[name="attack"]')
  let defense = petCreateDiv.querySelector('[name="defense"]')
  let speed = petCreateDiv.querySelector('[name="speed"]')

  let modname = petCreateDiv.querySelector('.mod-name')
  let modhp = petCreateDiv.querySelector('.mod-hp')
  let modattack = petCreateDiv.querySelector('.mod-attack')
  let moddefense = petCreateDiv.querySelector('.mod-defense')
  let modspeed = petCreateDiv.querySelector('.mod-speed')

  const moveList = petCreateDiv.querySelector('.move-list')
  const moveEffects = petCreateDiv.querySelector('.move-effect')

  const personality = petCreateDiv.querySelector('.personality')
  personality.addEventListener("change", () => {
    switch (personality.value) {
      case "Affectionate Cuddler":
        modifier.name = "Affectionate Cuddler"
        modifier.hp = 12
        modifier.attack = 0
        modifier.defense = 3
        modifier.speed = 0
        renderModifier()
        break;
      case "Feisty Rascal":
        modifier.name = "Feisty Rascal"
        modifier.hp = 6
        modifier.attack = 3
        modifier.defense = 0
        modifier.speed = 3
        renderModifier()
        break;
      case "Lazy Potato":
        modifier.name = "Lazy Potato"
        modifier.hp = 8
        modifier.attack = 0
        modifier.defense = 5
        modifier.speed = 0
        renderModifier()
        break;
      case "Energetic Bullet":
        modifier.name = "Energetic Bullet"
        modifier.hp = 6
        modifier.attack = 2
        modifier.defense = 0
        modifier.speed = 4
        renderModifier()
        break;
      case "Indifferent Roommate":
        modifier.name = "Indifferent Roommate"
        modifier.hp = 8
        modifier.attack = 2
        modifier.defense = 2
        modifier.speed = 1
        renderModifier()
        break;
      case "Shy Sweetheart":
        modifier.name = "Shy Sweetheart"
        modifier.hp = 10
        modifier.attack = 0
        modifier.defense = 3
        modifier.speed = 1
        renderModifier()
        break;
      case "Fierce Coward":
        modifier.name = "Fierce Coward"
        modifier.hp = 8
        modifier.attack = 1
        modifier.defense = 1
        modifier.speed = 3
        renderModifier()
        break;
      case "Lovable Doofus":
        modifier.name = "Lovable Doofus"
        modifier.hp = 6
        modifier.attack = 5
        modifier.defense = 0
        modifier.speed = 1
        renderModifier()
        break;
    }
    function renderModifier() {
      modname.textContent = ` ${modifier.name}`
      modhp.textContent = `+ ${modifier.hp}`
      modattack.textContent = `+ ${modifier.attack}`
      moddefense.textContent = `+ ${modifier.defense}`
      modspeed.textContent = `+ ${modifier.speed}`
    }
  })
  
  assignStats.addEventListener("click", event => {
    event.preventDefault()

    if(event.target.className === "plus-attack") {
      if(basePet.stat > 0 && basePet.attack < 30) {
        basePet.stat -= 1
        basePet.attack += 1
        attack.textContent = ` ${basePet.attack} `
        remainingStat.textContent = ` ${basePet.stat} `
      }
    } 
    else if(event.target.className === "minus-attack") {
      if(basePet.attack > 5) {
        basePet.stat += 1
        basePet.attack -= 1
        attack.textContent = ` ${basePet.attack} `
        remainingStat.textContent = ` ${basePet.stat} `
      }
    }
    else if(event.target.className === "plus-defense") {
      if(basePet.stat > 0 && basePet.defense < 30) {
        basePet.stat -= 1
        basePet.defense += 1
        defense.textContent = ` ${basePet.defense} `
        remainingStat.textContent = ` ${basePet.stat} `
      }
    } 
    else if(event.target.className === "minus-defense") {
      if(basePet.defense > 5) {
        basePet.stat += 1
        basePet.defense -= 1
        defense.textContent = ` ${basePet.defense} `
        remainingStat.textContent = ` ${basePet.stat} `
      }
    }
    else if(event.target.className === "plus-speed") {
      if(basePet.stat > 0 && basePet.speed < 30) {
        basePet.stat -= 1
        basePet.speed += 1
        speed.textContent = ` ${basePet.speed} `
        remainingStat.textContent = ` ${basePet.stat} `
      }
    } 
    else if(event.target.className === "minus-speed") {
      if(basePet.speed > 5) {
        basePet.stat += 1
        basePet.speed -= 1
        speed.textContent = ` ${basePet.speed} `
        remainingStat.textContent = ` ${basePet.stat} `
      }
    }
    else if(event.target.className === "default") {
      basePet.stat = 8
      basePet.hp = 40
      basePet.attack = 6
      basePet.defense = 6
      basePet.speed = 6
      remainingStat.textContent = ` ${basePet.stat} `
      hp.textContent = ` ${basePet.hp} `
      attack.textContent = ` ${basePet.attack} `
      defense.textContent = ` ${basePet.defense} `
      speed.textContent = ` ${basePet.speed} `
    }

  })
  
  let moveArray = []

  fetch(BASE_URL + '/moves')
  .then(response => response.json())
  .then(moves => {
    moveArray = moves
    moves.forEach(move => renderMove(move))
  })

  function renderMove (move) {
    const moveLi = document.createElement('li')
    const moveEffect = document.createElement('li')

    function effectCheck(move) {
      if(move.effect > 1) {
        return `by ${move.effect}%`
      } else {
        return ""
      }
    }
    
    let effectArray = ["None", "reduces opponent's defense", "increases defense", "lowers opponent's speed", "increases speed", "lowers opponent's attack", "increases attack", "restores hp"]
    moveLi.setAttribute('type', 'checkbox')
    moveLi.setAttribute('class', 'move-li')
    moveLi.setAttribute('name', `${move.name}`)
    moveEffect.setAttribute('class', 'move-li')
    moveLi.dataset.id = `${move.id}`
    moveLi.innerHTML = `<input type="checkbox" class="move-name" name="${move.name}">${move.name}</input>`
    moveEffect.innerHTML = `<label> | Power: ${move.power} Effect: ${effectArray[move.effect_target]} ${effectCheck(move)}</label>`
    moveEffects.append(moveEffect)
    moveList.append(moveLi)
      
    let checklist = document.querySelectorAll('.move-name')
    
    moveLi.addEventListener("input", event => {
      counter = 0;
      for(let i = 0; i < checklist.length; i++){
        if(checklist[i].checked === true){
          counter += 1
        }
      }
      if(counter > 4) {
        event.target.checked = false;
      }
    })
  }

  petCreateDiv.addEventListener("submit", event => {
    event.preventDefault()
    let moveId = []
    let moveCheck = document.querySelectorAll('.move-name')
    for(let i = 0; i < moveCheck.length; i++){
      if(moveCheck[i].checked === true){
        moveId.push(moveCheck[i].parentElement.dataset.id)
      }
    }
    let move = moveId.map(id => parseInt(id))
    let moves = moveArray.filter((object) => move.includes(object.id))
    
    const newPet = {
      name: nameInput.value,
      pet_image_url: imageInput.value,
      hp: basePet.hp + modifier.hp,
      attack: basePet.attack + modifier.attack,
      defense: basePet.defense + modifier.defense,
      speed: basePet.speed + modifier.speed,
      moves: moves
    }

    fetch(BASE_URL + 'pets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
      .then(response => response.json())
      .then(petObj => {
        renderPet(petObj.data.attributes)
        displayPet(petObj.data.attributes)
      })

  })
  container.append(petCreateDiv)
}
