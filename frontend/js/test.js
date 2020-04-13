assignStats.addEventListener("click", event => {
  event.preventDefault()

  if(event.target.className === "plus-hp") {
    if(newPet.stat > 0) {
      newPet.stat -= 1
      newPet.hp += 1
      hp.textContent = ` ${newPet.hp + 1} `
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