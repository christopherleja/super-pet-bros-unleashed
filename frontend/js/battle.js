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

//   let message = document.createElement('div')
//   message.setAttribute('id', 'message')

//   battleDiv.append(message)

  let anim = document.createElement('div')
  // anim.

  const audioDiv = document.createElement('div')
  audioDiv.setAttribute('id', 'audio-player')
  audioDiv.innerHTML = `
  <button onclick="ryu.playPause()" type="button">Ryu</button>
  <button onclick="ff7.playPause()" type="button">FF7</button>
  <button onclick="guile.playPause()" type="button">Guile</button>`
  petBattleDiv.append(audioDiv)
//   ryu.play()

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
  // STRETCH use for loop to build the div with createElement
  buttonDiv.innerHTML = `
  <button id="move1" class="move-button">
    ${player.moves[0].name}
    </button>
  <button id="move2" class="move-button">
    ${player.moves[1].name}
    </button>
  <button id="move3" class="move-button">
    ${player.moves[2].name}
    </button>
  <button id="move4" class="move-button">
    ${player.moves[3].name}
    </button>
  `
  playerPetDiv.append(buttonDiv)

  let textBox = document.createElement('div')
  textBox.id = "text-box"

  const moveButtonArrowDiv = document.querySelector(".move-button-arrow");

  buttonDiv.addEventListener("hover", function(e) {
    moveButtonArrowDiv.style.display = "inline-block";
  });

  buttonDiv.addEventListener("click", function(e){
      e.preventDefault()
      let moveButtons = document.querySelectorAll(".move-button")
      function toggleButtons() {
        moveButtons.forEach(button => button.disabled = !button.disabled)
     }

    //   debugger
      if (e.target.type === "submit"){
        toggleButtons() 
        setTimeout(toggleButtons, 1500)
      }
      if (e.target.id === "move1"){
          turn(player, opponent, 0)
      } else if (e.target.id === "move2"){
          turn(player, opponent, 1)
      } else if (e.target.id === "move3"){
          turn(player, opponent, 2)
      } else if (e.target.id === "move4"){
          turn(player, opponent, 3)
      } 
      })

      battleDiv.append(opponentDiv, playerPetDiv, textBox)
      petBattleDiv.append(battleDiv)
      mainRender.append(petBattleDiv)

    function updatePlayerHp(player){
        let playerHp = document.querySelector("#playerHP")
        playerHp.innerHTML = `HP: ${Math.round(player.hp)} / ${playerPet[0].hp}`
    }

    function updateOpponentHp(opponent){
        let opponentHp = document.querySelector("#opponentHP")
        opponentHp.innerHTML = `HP: ${Math.round(opponent.hp)} / ${petObj.hp}`
    }

    function opponentTurn(opponent, player, move_id){
        petAttack(opponent, player, opponentAttackId(opponent))
        updatePlayerHp(player)
        moveEffect(opponent, player, opponentAttackId(opponent))
        battleOverCheck(player, opponent)
    }

    function playerTurn(player, opponent, move_id){
        petAttack(player, opponent, move_id)
        updateOpponentHp(opponent)
        moveEffect(player, opponent, move_id)
        battleOverCheck(player, opponent)
    }

    function turn(player, opponent, move_id){
        if (player.speed >= opponent.speed){
            setTimeout(playerTurn, 100, player, opponent, move_id)            
            setTimeout(opponentTurn, 1500, opponent, player, move_id)   
        } else if (opponent.speed > player.speed){
            setTimeout(opponentTurn, 100, opponent, player, move_id)
            setTimeout(playerTurn, 1500, player, opponent, move_id)
        }
        
  }
  
  function petAttack(user, target, move_id){
    let attackPower = user.attack * (user.moves[move_id].power/10)
    let damage = attackPower / target.defense
    let newHP = target.hp - damage
    target.hp = newHP
    displayAttack(user, target, move_id)
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
            break
        case 1:
            let reducedDefense = target.defense - (target.defense * (user.moves[move_id].effect/100))
            target.defense = Math.round(reducedDefense)
            break
        case 2:
            let increasedDefense = user.defense + (user.defense * (user.moves[move_id].effect/100))
            user.defense = Math.round(increasedDefense)
            break
        case 3:
            let reducedSpeed = target.speed - (target.speed * (user.moves[move_id].effect/100))
            target.speed = Math.round(reducedSpeed)
            break
        case 4: 
            let increasedSpeed = user.speed + (user.speed * (user.moves[move_id].effect/100))
            user.speed = Math.round(increasedSpeed)
            break
        case 5:
            let reducedAttack = target.attack - (target.attack * (user.moves[move_id].effect/100))
            target.attack = Math.round(reducedAttack)
            break
        case 6:
            let increasedAttack = user.attack + (user.attack * (user.moves[move_id].effect/100))
            user.attack = Math.round(increasedAttack)
            break
        case 7:
            if (user.name === player.name){
                let maxHealth = playerPet[0].hp
                let restoreHP = user.hp + (maxHealth * (user.moves[move_id].effect/100))
                if (restoreHP < maxHealth){
                    user.hp = restoreHP
                } else {
                    user.hp = maxHealth
                }
            }else if (user.name === opponent.name){
                let maxHealth = petObj.hp
                let restoreHP = user.hp + (maxHealth * (user.moves[move_id].effect/100))
                if (restoreHP < maxHealth){
                    user.hp = restoreHP
                }else {
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

// function lose() {
//     let message = document.createElement('div')
//     battleDiv.append(message)
//     message.setAttribute('id', 'message')
//     message.innerHTML = `<h1>YOU'RE A LOSER!!!</h2>`
//     }

// function win() {
//     let message = document.createElement('div')
//     battleDiv.append(message)
//     message.setAttribute('id', 'message')
//     message.innerHTML = `<h1>YOU'RE A WINNER!!!</h2>`
//     }

function displayAttack(user, target, move_id){
    let textBox = document.querySelector('#text-box')
    let opp = target.name
    let effectArrWithNames = [`none`, `reduces ${opp}'s defense`, `increases defense`, `lowers ${opp}'s speed`, `increases speed`, `lowers ${opp}'s attack`, `increases attack`, `restores hp`]
    
        textBox.innerHTML = ''
        let damage = (user.attack * (user.moves[move_id].power / 10)) / target.defense
        textBox.innerHTML = `${user.name} used ${user.moves[move_id].name}!` 
            if (user.moves[move_id].effect_target !== 7 && (user.moves[move_id].effect_target !== 0)){
                textBox.innerHTML = textBox.innerHTML + ` It did <span class="damage">${Math.round(damage)}</span> damage! It ${effectArrWithNames[user.moves[move_id].effect_target]} by ${user.moves[move_id].effect}!`
            } else if (user.moves[move_id].effect_target === 7){
                textBox.innerHTML = textBox.innerHTML + ` It ${effectArrWithNames[user.moves[move_id].effect_target]} by ${user.moves[move_id].effect} percent!`
            } else {
                textBox.innerHTML = textBox.innerHTML + ` It did <span class="damage">${Math.round(damage)}</span> damage!`
            } 
}

