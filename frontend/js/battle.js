const animationDiv = document.createElement('div')
animationDiv.setAttribute('id', 'opponent-anim')

function renderBattle(playerPet, petObj){
    container.innerHTML = ""
    selectedPetDiv.innerHTML = ""
    const petBattleDiv = document.createElement('div')
    petBattleDiv.setAttribute('id', 'pet-battle')
  
    const battleDiv = document.createElement('div')
    battleDiv.setAttribute('id', 'battle-div')
  
    const startDiv = document.createElement('div')
    startDiv.setAttribute('class', 'start-fight')
    setTimeout(() => (startDiv.style.display = "none"), 1000)
    punch.play()
  
      
    let setBackground = Math.floor(Math.random() * 4)
    battleDiv.style.backgroundImage = `url(${backgrounds[setBackground]})`
  
      function win() {
          stopSound()
          startDiv.style.display = "block"
          startDiv.setAttribute('class', 'win')
          startDiv.style.backgroundImage = "url('./css/images/victory.png')"
          opphp.style.width = "0px"
          let moveButtons = document.querySelectorAll(".move-button")
          moveButtons.forEach(button => button.disabled = true)
      }
      
      function lose() {
          stopSound()
          startDiv.style.display = "block"
          startDiv.setAttribute('class', 'lose')
          startDiv.style.backgroundImage = "url('./css/images/gameoverbit.png')"
          playerhp.style.width = "0px"
          let moveButtons = document.querySelectorAll(".move-button")
          moveButtons.forEach(button => button.disabled = true)
      }
  
  
    const audioDiv = document.createElement('div')
    audioDiv.setAttribute('id', 'audio-player')
    audioDiv.innerHTML = `
    <button type="button" class="move-button">Ryu</button>
    <button type="button" class="move-button">FF7</button>
    <button type="button" class="move-button">Guile</button>
    <button type="button" class="move-button" onclick="stopSound()">Stop</button>`
    petBattleDiv.append(audioDiv)
    audioDiv.addEventListener("click", e => {
        stopSound()
        switch(e.target.innerText){
            case "FF7": 
                ff7.playStop()
                break;
            case "Ryu": 
                ryu.playStop()
                break;
            case "Guile": 
                guile.playStop()
                break;
        }
    })
    ryu.play()
  
    let opponent = Object.assign({}, petObj)
    let player = Object.assign({}, playerPet[0])
  
    let opponentDiv = document.createElement('div')
    opponentDiv.id = "opponent-div"
    opponentDiv.innerHTML = `
    <img class="pet-image" id="opponent" src="${opponent['pet-image-url']}"><br />
    <h2 id="pet-name">${opponent.name}</h2>
    <h4 id="opponentHP" data-opponent-hp='${opponent.hp}'>HP: ${opponent.hp} / ${petObj.hp}</h4>
    <div class="opphpbar"><div class="opphp"></div></div>
    `

    let opphpbar = opponentDiv.querySelector('.opphpbar')
    opphpbar.style.width = "100px"
    opphpbar.style.height = "15px"
    opphpbar.style.border = "2px solid black"
    let opphp = opponentDiv.querySelector('.opphp')
    opphp.style.backgroundColor = "rgb(94, 204, 238)"
    opphp.style.width = `${(opponent.hp/petObj.hp) * 100}px`
    opphp.style.height = "15px"

    let playerPetDiv = document.createElement('div')
    playerPetDiv.id = "player-pet-div"
    playerPetDiv.innerHTML = `
    <img class="pet-image" id="player" src="${player['pet-image-url']}"><br />
    <h2 id="pet-name">${player.name}</h2>
    <h4 id="playerHP" data-player-hp='${player.hp}'>HP: ${player.hp} / ${playerPet[0].hp}</h4>
    <div class="playerhpbar"><div class="playerhp"></div></div>
    `

    let playerhpbar = playerPetDiv.querySelector('.playerhpbar')
    playerhpbar.style.width = "100px"
    playerhpbar.style.height = "15px"
    playerhpbar.style.border = "2px solid black"
    let playerhp = playerPetDiv.querySelector('.playerhp')
    playerhp.style.backgroundColor = "rgb(94, 204, 238)"
    playerhp.style.width = `${(playerPet.hp/playerPet[0].hp) * 100}px`
    playerhp.style.height = "15px"

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
          setTimeout(toggleButtons, 3500)
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
        petBattleDiv.append(battleDiv, animationDiv, startDiv)
        container.append(petBattleDiv)
  
      function updatePlayerHp(player){
          let playerHp = document.querySelector("#playerHP")
          playerHp.innerHTML = `HP: ${Math.ceil(player.hp)} / ${playerPet[0].hp}`
          playerhp.style.width = `${Math.round((player.hp/playerPet[0].hp * 100))}px`
          if(Math.round((player.hp / playerPet[0].hp) * 100) < 40) {
            playerhp.style.backgroundColor = "red"
            }
      }
  
      function updateOpponentHp(opponent){
          let opponentHp = document.querySelector("#opponentHP")
          opponentHp.innerHTML = `HP: ${Math.ceil(opponent.hp)} / ${petObj.hp}`
          opphp.style.width = `${Math.round((opponent.hp/petObj.hp * 100))}px`
          if(Math.round((opponent.hp / petObj.hp) * 100) < 40) {
            opphp.style.backgroundColor = "red"
            }
      }
  
      function opponentTurn(opponent, player, move_id){
          petAttack(opponent, player, opponentAttackId(opponent))
          playerAnimation()
          updatePlayerHp(player)
          moveEffect(opponent, player, opponentAttackId(opponent))
          battleOverCheck(player, opponent)
      }
  
      function playerTurn(player, opponent, move_id){
          petAttack(player, opponent, move_id)
          oppAnimation()
          updateOpponentHp(opponent)
          moveEffect(player, opponent, move_id)
          battleOverCheck(player, opponent)
      }
  
      function turn(player, opponent, move_id){
          if (player.speed >= opponent.speed){
              playerTurn(player, opponent, move_id)
              if(battleOverCheck(player, opponent) === false){
                  setTimeout(opponentTurn, 3000, opponent, player, move_id) 
              }       
          } else if (opponent.speed > player.speed){
              opponentTurn(opponent, player, move_id)
              if(battleOverCheck(player, opponent) === false){
                  setTimeout(playerTurn, 3000, player, opponent, move_id)
              }
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
          kirby.play()
          lose()
          return true
      } else if (Math.floor(opponent.hp) <= 0){
          console.log(`${player.name} won the battle!`)
          console.log(`${opponent.name} fainted.`)
          pokemonSuccess.play()
          win()
          return true
      } else {
          return false
      }
    }
  }
  
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


  function oppAnimation() {
    let soundArray = [falconpunch, punch, strongpunch, shoryuken, hadouken]
    let rando = Math.floor(Math.random() * 5)
    soundArray[rando].play()
    punch.play()

    animationDiv.innerHTML = ""
    
    let oppkapow1 = document.createElement('div')
    oppkapow1.setAttribute('id', 'oppkapow1')
    animationDiv.append(oppkapow1)

    let oppkapow2 = document.createElement('div')
    oppkapow2.setAttribute('id', 'oppkapow2')
    animationDiv.append(oppkapow2)

    let oppkapow3 = document.createElement('div')
    oppkapow3.setAttribute('id', 'oppkapow3')
    animationDiv.append(oppkapow3)

    let oppkapow4 = document.createElement('div')
    oppkapow4.setAttribute('id', 'oppkapow4')
    animationDiv.append(oppkapow4)

    let oppkapow5 = document.createElement('div')
    oppkapow5.setAttribute('id', 'oppkapow5')
    animationDiv.append(oppkapow5)

    let oppkapow6 = document.createElement('div')
    oppkapow6.setAttribute('id', 'oppkapow6')
    animationDiv.append(oppkapow6)

    let oppkapow7 = document.createElement('div')
    oppkapow7.setAttribute('id', 'oppkapow7')
    animationDiv.append(oppkapow7)

    let oppkapow8 = document.createElement('div')
    oppkapow8.setAttribute('id', 'oppkapow8')
    animationDiv.append(oppkapow8)

    let animationArray = [oppkapow1, oppkapow2, oppkapow3, oppkapow4, oppkapow5, oppkapow6, oppkapow7, oppkapow8, oppkapow1]
    let random = Math.floor(Math.random() * 8)
    let animation = animationArray[random]
    animation.style.display = "inline-block"
    setTimeout(() => (animation.style.display = "none"), 2000)
}
  
  
   function playerAnimation() {

        let soundArray = [falconpunch, punch, strongpunch, shoryuken, hadouken]
        let rando = Math.floor(Math.random() * 5)
        soundArray[rando].play()
        punch.play()

        animationDiv.innerHTML = ""
        let playerkapow1 = document.createElement('div')
        playerkapow1.setAttribute('id', 'playerkapow1')
        animationDiv.append(playerkapow1)

        let playerkapow2 = document.createElement('div')
        playerkapow2.setAttribute('id', 'playerkapow2')
        animationDiv.append(playerkapow2)

        let playerkapow3 = document.createElement('div')
        playerkapow3.setAttribute('id', 'playerkapow3')
        animationDiv.append(playerkapow3)

        let playerkapow4 = document.createElement('div')
        playerkapow4.setAttribute('id', 'playerkapow4')
        animationDiv.append(playerkapow4)

        let playerkapow5 = document.createElement('div')
        playerkapow5.setAttribute('id', 'playerkapow5')
        animationDiv.append(playerkapow5)

        let playerkapow6 = document.createElement('div')
        playerkapow6.setAttribute('id', 'playerkapow6')
        animationDiv.append(playerkapow6)

        let playerkapow7 = document.createElement('div')
        playerkapow7.setAttribute('id', 'playerkapow7')
        animationDiv.append(playerkapow7)

        let animationArray = [playerkapow1, playerkapow2, playerkapow3, playerkapow4, playerkapow5, playerkapow6, playerkapow7, playerkapow1]
        let random = Math.floor(Math.random() * 7)
        let animation = animationArray[random]
        animation.style.display = "inline-block"
        setTimeout(() => (animation.style.display = "none"), 1000)
      }
  