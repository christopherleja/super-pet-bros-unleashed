
function createPet() {
  petDetailDiv.style.display = "none"

  const petCreateDiv = document.querySelector("#pet-create")
  petCreateDiv.style.display = "block"

  const newPet = {
    name: "",
    image_url: "",
    stat: 8,
    hp: 25,
    attack: 5,
    defense: 5,
    speed: 5
  }

  petCreateDiv.innerHTML = `
  <form class="pet-form">
    <strong>Name:</strong><input type="text" class="name" name="name" /><br>
    <strong>Image:</strong><input type="text" class="pet_image_url" name="pet_image_url" />

    <div id="pet-personality-behavior">
      <h3>What is your pet's personality?</h3>
      <select class="personality">
        <option>-Select-</option>
        <option name="a1">Affectionate</option>
        <option name="a2">Feisty</option>
        <option name="a3">Lazy</option>
        <option name="a4">Energetic</option>
        <option name="a4">Indifferent</option>
        <option name="a4">Aloof</option>
        <option name="a4">Shy</option>
        <option name="a4">Clingy</option>
      </select>

      <h3>What is your pet's behavior?</h3>
      <select class="behavior">
        <option>-Select-</option>
        <option name="b1">Cuddler</option>
        <option name="b2">Rascal</option>
        <option name="b3">Potato</option>
        <option name="b4">Zoomie</option>
      </select>
      <h3 class="full-personality"></h3>
    </div>

    <div class="assign-stats">
      <h3>You have <span class="remaining-stat">${newPet.stat}</span> points to allot to stats</h3>
        <p><strong>HP: </strong><button class="minus-hp">-</button><span name="hp"> ${newPet.hp} </span><button class="plus-hp">+</button></p>
        <p><strong>Attack: </strong><button class="minus-attack">-</button><span name="attack"> ${newPet.attack} </span><button class="plus-attack">+</button></p>
        <p><strong>Defense: </strong><button class="minus-defense">-</button><span name="defense"> ${newPet.defense} </span><button class="plus-defense">+</button></p>
        <p><strong>Speed: </strong><button class="minus-speed">-</button><span name="speed"> ${newPet.speed} </span><button class="plus-speed">+</button></p>
        <button class="default">Default</button><br>
    </div>
    <button type="submit">CREATE!</button>
  </form>`

  const assignStats = document.querySelector('.assign-stats')
  let remainingStat = document.querySelector('.remaining-stat')
  let hp = document.querySelector('[name="hp"]')
  let attack = document.querySelector('[name="attack"]')
  let defense = document.querySelector('[name="defense"]')
  let speed = document.querySelector('[name="speed"]')
  // let personality = 3;
  // let behavior = 0;

  const personality = document.querySelector('.personality')
  const behavior = document.querySelector('.behavior')

  personality.addEventListener("change", () => {
    switch (personality.value) {
      case "Affectionate":
        // newPet.hp += 3
        hp.textContent = ` ${newPet.hp + 3} `
        attack.textContent = ` ${newPet.attack} `
        defense.textContent = ` ${newPet.defense} `
        speed.textContent = ` ${newPet.speed} `
        break;
      case "Feisty":
        // newPet.attack += 3
        hp.textContent = ` ${newPet.hp} `
        attack.textContent = ` ${newPet.attack + 3} `
        defense.textContent = ` ${newPet.defense} `
        speed.textContent = ` ${newPet.speed} `
        break;
      case "Lazy":
        // newPet.defense += 3
        hp.textContent = ` ${newPet.hp} `
        attack.textContent = ` ${newPet.attack} `
        defense.textContent = ` ${newPet.defense + 3} `
        speed.textContent = ` ${newPet.speed} `
        break;
      case "Energetic":
        // newPet.speed += 3
        hp.textContent = ` ${newPet.hp} `
        attack.textContent = ` ${newPet.attack} `
        defense.textContent = ` ${newPet.defense} `
        speed.textContent = ` ${newPet.speed + 3} `
        break;
      case "Indifferent":
        // newPet.attack += 4
        // newPet.hp -= 2      
        hp.textContent = ` ${newPet.hp - 1} `
        attack.textContent = ` ${newPet.attack + 4} `
        defense.textContent = ` ${newPet.defense} `
        speed.textContent = ` ${newPet.speed} `
        break;
      case "Aloof":
        // newPet.defense += 4
        // newPet.speed -= 2
        hp.textContent = ` ${newPet.hp} `
        attack.textContent = ` ${newPet.attack} `
        defense.textContent = ` ${newPet.defense + 4} `
        speed.textContent = ` ${newPet.speed - 1} `
        break;
      case "Shy":
        // newPet.speed += 4
        // newPet.defense -= 2
        hp.textContent = ` ${newPet.hp} `
        attack.textContent = ` ${newPet.attack} `
        defense.textContent = ` ${newPet.defense - 1} `
        speed.textContent = ` ${newPet.speed + 4} `
        break;
      case "Clingy":
        // newPet.hp += 4
        // newPet.attack -= 2
        hp.textContent = ` ${newPet.hp + 4} `
        attack.textContent = ` ${newPet.attack - 1} `
        defense.textContent = ` ${newPet.defense} `
        speed.textContent = ` ${newPet.speed} `
        break;
    }
  })

  behavior.addEventListener("change", () => {
    switch (behavior.value) {
      case "Cuddler":
        // newPet.hp += 3
        hp.textContent = ` ${newPet.hp + 4} `
        attack.textContent = ` ${newPet.attack} `
        defense.textContent = ` ${newPet.defense} `
        speed.textContent = ` ${newPet.speed} `
        break;
      case "Rascal":
        // newPet.attack += 3
        hp.textContent = ` ${newPet.hp} `
        attack.textContent = ` ${newPet.attack + 4} `
        defense.textContent = ` ${newPet.defense} `
        speed.textContent = ` ${newPet.speed} `
        break;
      case "Potato":
        // newPet.defense += 3
        hp.textContent = ` ${newPet.hp} `
        attack.textContent = ` ${newPet.attack} `
        defense.textContent = ` ${newPet.defense + 4} `
        speed.textContent = ` ${newPet.speed} `
        break;
      case "Zoomie":
        // newPet.speed += 3
        hp.textContent = ` ${newPet.hp} `
        attack.textContent = ` ${newPet.attack} `
        defense.textContent = ` ${newPet.defense} `
        speed.textContent = ` ${newPet.speed + 4} `
        break;
    }
  })
    
  
  assignStats.addEventListener("click", event => {
    event.preventDefault()

    if(event.target.className === "plus-hp") {
      if(newPet.stat > 0) {
        newPet.stat -= 1
        // newPet.hp += 1
        hp.textContent = ` ${newPet.hp += 1} `
        remainingStat.textContent = ` ${newPet.stat} `
      }
    } 
    else if(event.target.className === "minus-hp") {
      if(newPet.hp > 1) {
        newPet.stat += 1
        // newPet.hp -= 1
        hp.textContent = ` ${newPet.hp -= 1} `
        remainingStat.textContent = ` ${newPet.stat} `
      }
    }
    else if(event.target.className === "plus-attack") {
      if(newPet.stat > 0 && newPet.attack < 30) {
        newPet.stat -= 1
        // newPet.attack += 1
        attack.textContent = ` ${newPet.attack += 1} `
        remainingStat.textContent = ` ${newPet.stat} `
      }
    } 
    else if(event.target.className === "minus-attack") {
      if(newPet.attack > 1) {
        newPet.stat += 1
        // newPet.attack -= 1
        attack.textContent = ` ${newPet.attack -= 1} `
        remainingStat.textContent = ` ${newPet.stat} `
      }
    }
    else if(event.target.className === "plus-defense") {
      if(newPet.stat > 0 && newPet.defense < 30) {
        newPet.stat -= 1
        // newPet.defense += 1
        defense.textContent = ` ${newPet.defense += 1} `
        remainingStat.textContent = ` ${newPet.stat} `
      }
    } 
    else if(event.target.className === "minus-defense") {
      if(newPet.defense > 1) {
        newPet.stat += 1
        // newPet.defense -= 1
        defense.textContent = ` ${newPet.defense -= 1} `
        remainingStat.textContent = ` ${newPet.stat} `
      }
    }
    else if(event.target.className === "plus-speed") {
      if(newPet.stat > 0 && newPet.speed < 30) {
        newPet.stat -= 1
        // newPet.speed += 1
        speed.textContent = ` ${newPet.speed += 1} `
        remainingStat.textContent = ` ${newPet.stat} `
      }
    } 
    else if(event.target.className === "minus-speed") {
      if(newPet.speed > 1) {
        newPet.stat += 1
        // newPet.speed -= 1
        speed.textContent = ` ${newPet.speed -= 1} `
        remainingStat.textContent = ` ${newPet.stat} `
      }
    }
    else if(event.target.className === "default") {
      newPet.stat = 8
      newPet.hp = 25
      newPet.attack = 5
      newPet.defense = 5
      newPet.speed = 5
      remainingStat.textContent = ` ${newPet.stat} `
      hp.textContent = ` ${newPet.hp} `
      attack.textContent = ` ${newPet.attack} `
      defense.textContent = ` ${newPet.defense} `
      speed.textContent = ` ${newPet.speed} `
    }

  })

}