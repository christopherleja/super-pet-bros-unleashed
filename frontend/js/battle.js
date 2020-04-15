function renderBattle(playerPet, petObj){

  // change copies to the object's hp
  // change maxhp to the data attribute
  mainRender.innerHTML = ""
  const petBattleDiv = document.createElement('div')
  petBattleDiv.setAttribute('id', 'pet-battle')

  const battleDiv = document.createElement('div')
  battleDiv.setAttribute('id', 'battle-div')

  let setBackground = Math.floor(Math.random() * 4)
  battleDiv.style.backgroundImage = `url(${backgrounds[setBackground]})`

    let message = document.createElement('div')
    message.setAttribute('id', 'message')
    
    battleDiv.append(message)

    let anim = document.createElement('div')
    anim.

  const audioDiv = document.createElement('div')
  audioDiv.setAttribute('id', 'audio-player')
  audioDiv.innerHTML = `
  <button onclick="ryu.playPause()" type="button">Ryu</button>
  <button onclick="ff7.playPause()" type="button">FF7</button>
  <button onclick="guile.playPause()" type="button">Guile</button>`
  petBattleDiv.append(audioDiv)
  ryu.play()

  let opponent = Object.assign({}, petObj)
  let player = Object.assign({}, playerPet[0])

  let opponentDiv = document.createElement('div')
  opponentDiv.id = "opponent-div"
  opponentDiv.innerHTML = `
  <img class="pet-image" id="opponent" src="${opponent['pet-image-url']}"><br />
  <h2 id="pet-name">${opponent.name}</h2>
  <h4 id="opponentHP" data-opponent-hp='${opponent.hp}'>HP: ${opponent.hp} / ${petObj.hp}</h4>
  `
  let playerPetDiv = document.createElement('div')
  playerPetDiv.id = "player-pet-div"
  playerPetDiv.innerHTML = `
  <img class="pet-image" id="player" src="${player['pet-image-url']}"><br />
  <h2 id="pet-name">${player.name}</h2>
  <h4 id="playerHP" data-player-hp='${player.hp}'>HP: ${player.hp} / ${playerPet[0].hp}</h4>
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
          turn(player, opponent, 0)
          console.log("you used " + `${player.moves[0].name}. It has ${player.moves[0].power} power and ${effectArray[player.moves[0].effect_target]} by ${player.moves[0].effect}%`)
      } else if (e.target.id === "move2"){
          turn(player, opponent, 1)
          console.log("you used " + `${player.moves[1].name}. It has ${player.moves[1].power} power and ${effectArray[player.moves[1].effect_target]} by ${player.moves[1].effect}%`)
      } else if (e.target.id === "move3"){
          turn(player, opponent, 2)
          console.log("you used " + `${player.moves[2].name}. It has ${player.moves[2].power} power and ${effectArray[player.moves[2].effect_target]} by ${player.moves[2].effect}%`)
      } else if (e.target.id === "move4"){
          turn(player, opponent, 3)
          console.log("you used " + `${player.moves[3].name}. It has ${player.moves[3].power} power and ${effectArray[player.moves[3].effect_target]} by ${player.moves[3].effect}%`)
      } 
      })

      battleDiv.append(opponentDiv, playerPetDiv)
      petBattleDiv.append(battleDiv)
      mainRender.append(petBattleDiv)


    function turn(player, opponent, move_id){
        let playerHp = document.querySelector("#playerHP")
        let opponentHp = document.querySelector("#opponentHP")
        if (player.speed >= opponent.speed){
            petAttack(player, opponent, move_id)
            opponentHp.innerHTML = `HP: ${Math.round(opponent.hp)} / ${petObj.hp}`
            moveEffect(player, opponent, move_id)
            battleOverCheck(player, opponent)
            petAttack(opponent, player, opponentAttackId(opponent))
            playerHp.innerHTML = `HP: ${Math.round(player.hp)} / ${playerPet[0].hp}`
            moveEffect(opponent, player, opponentAttackId(opponent))
            battleOverCheck(player, opponent)
        
        } else if (opponent.speed > player.speed){
            petAttack(opponent, player, opponentAttackId(opponent))
            playerHp.innerHTML = `HP: ${Math.round(player.hp)} / ${playerPet[0].hp}`
            moveEffect(opponent, player, opponentAttackId(opponent))
            battleOverCheck(player, opponent)
            petAttack(player, opponent, move_id)
            opponentHp.innerHTML = `HP: ${Math.round(opponent.hp)} / ${petObj.hp}`
            moveEffect(player, opponent, move_id)
            battleOverCheck(player, opponent)
        }
        
  }
  
  function petAttack(user, target, move_id){
    let attackPower = user.attack * (user.moves[move_id].power/10)
    console.log("attack = " + attackPower)
    let damage = attackPower / target.defense
        if (damage < 1){
            damage = 1
        }
    let newHP = target.hp - damage
    target.hp = newHP
       
  }
  
  function opponentAttackId(opponent){
    let randomMoveNum = Math.floor(Math.random()*opponent.moves.length)
    return randomMoveNum
  }
  
  function moveEffect(user, target, move_id){
    let playerHp = document.querySelector("#playerHP")
    let opponentHp = document.querySelector("#opponentHP")
    switch (user.moves[move_id].effect_target){
        case 0:
            console.log("no effect")
            break
        case 1:
            let reducedDefense = target.defense - (target.defense * (user.moves[move_id].effect/100))
            console.log(`${opponent.name} defense is now ` + reducedDefense)
            target.defense = Math.round(reducedDefense)
            break
        case 2:
            let increasedDefense = user.defense + (user.defense * (user.moves[move_id].effect/100))
            console.log(`${user.name} defense is ` + increasedDefense)
            user.defense = Math.round(increasedDefense)
            break
        case 3:
            let reducedSpeed = target.speed - (target.speed * (user.moves[move_id].effect/100))
            console.log(`${opponent.name} speed is now ` + reducedSpeed)
            target.speed = Math.round(reducedSpeed)
            break
        case 4: 
            let increasedSpeed = user.speed + (user.speed * (user.moves[move_id].effect/100))
            console.log(`${user.name} speed is` + increasedSpeed)
            user.speed = Math.round(increasedSpeed)
            break
        case 5:
            let reducedAttack = target.attack - (target.attack * (user.moves[move_id].effect/100))
            console.log(`${opponent.name} attack is now ` +reducedAttack)
            target.attack = Math.round(reducedAttack)
            break
        case 6:
            let increasedAttack = user.attack + (user.attack * (user.moves[move_id].effect/100))
            console.log(`${user.name} attack is`  + increasedAttack)
            user.attack = Math.round(increasedAttack)
            break
        case 7:
            if (user.id === player.id){
                let maxHealth = playerPet[0].hp
                let restoreHP = user.hp + (maxHealth * (user.moves[move_id].effect/100))
                if (restoreHP > maxHealth){
                    user.hp = maxHealth
                }
            }else if (user.id === opponent.id){
                let maxHealth = petObj.hp
                let restoreHP = user.hp + (maxHealth * (user.moves[move_id].effect/100))
                if (restoreHP > maxHealth){
                    user.hp = maxHealth
                }
            }
            }
    }
  
  
  function battleOverCheck(player, opponent){ 
    if (player.hp <= 0){
        console.log(`${opponent.name} won the battle!`)
        console.log(`${player.name} fainted.`)
        window.alert("You lose! :(")
        displayPet(petObj)
        
    } else if (opponent.hp <= 0){
        console.log(`${player.name} won the battle!`)
        console.log(`${opponent.name} fainted.`)
        window.alert("You Win!")
        displayPet(playerPet[0])
    }
  }
  
}

function lose() {
    let message = document.createElement('div')
    battleDiv.append(message)
    message.setAttribute('id', 'message')
    message.innerHTML = `<h1>YOU'RE A LOSER!!!</h2>`
    }

function win() {
    let message = document.createElement('div')
    battleDiv.append(message)
    message.setAttribute('id', 'message')
    message.innerHTML = `<h1>YOU'RE A WINNER!!!</h2>`
    }

