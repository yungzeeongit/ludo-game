/* pieces */


let board = document.getElementById('board');
const redpieces = document.querySelectorAll('.redpawn')
const greenpieces = document.querySelectorAll('.greenpawn')
const yellowpieces = document.querySelectorAll('.yellowpawn')
const bluepieces = document.querySelectorAll('.bluepawn')
const diceRoler = document.getElementById('dice-btn')
const diceValue = document.getElementById('dice-el')
// let greenpiece1 = document.getElementByClass('quad2-pawn1')
// let greenpiece2 = document.getElementByClass('quad2-pawn2')
// let greenpiece3 = document.getElementByClass('quad2-pawn3')
// let greenpiece4 = document.getElementByClass('quad2-pawn4')


/* event listeners */

redpieces.forEach((redpiece) => {
    redpiece.addEventListener('click', (e)=>
            movePiece(e,'red'))
      
})

greenpieces.forEach((greenpiece) =>{
    greenpiece.addEventListener('click',
            (e) =>  movePiece(e,'green'))
})

yellowpieces.forEach((yellowpiece) => {
    yellowpiece.addEventListener('click',(e) => movePiece(e,'yellow'))
})

bluepieces.forEach((bluepiece) =>{
    bluepiece.addEventListener('click', (e) => movePiece(e,'blue'))
})

diceRoler.addEventListener('click', rollDice)


/* functions */

function movePiece(piece,color) {
        const startContainer = document.getElementById(`${color}-start`);
        const gamePiece = piece.target
        const quadrant = gamePiece.parentNode
        
       const jailBreaker = Number(document.getElementById('dice-el').textContent)
          console.log(jailBreaker)

    if(jailBreaker === 6 ){
        quadrant.removeChild(gamePiece)
        startContainer.appendChild(gamePiece)
    
        
        startContainer.style.display = 'flex'
        startContainer.style.justifyContent = 'center'
        startContainer.style.alignItems = 'center'
        
        gamePiece.style.backgroundColor = `${color}`
        gamePiece.style.position = 'absolute'
        gamePiece.style.border = '2px solid #fff'
    }
    diceValue.textContent = 0
    
    }

   
function rollDice(){
   const diceArr = [1,2,3,4,5,6]
const randomIndex = Math.floor(Math.random() * diceArr.length)
const dice = diceArr[randomIndex]
  diceValue.textContent = `${dice}`
  console.log(dice)
} 



