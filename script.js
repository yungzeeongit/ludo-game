/* pieces */

let board = document.getElementById('board');
const redpieces = document.querySelectorAll('.redpawn')
const greenpieces = document.querySelectorAll('.greenpawn')
const yellowpieces = document.querySelectorAll('.yellowpawn')
const bluepieces = document.querySelectorAll('.bluepawn')

// let greenpiece1 = document.getElementByClass('quad2-pawn1')
// let greenpiece2 = document.getElementByClass('quad2-pawn2')
// let greenpiece3 = document.getElementByClass('quad2-pawn3')
// let greenpiece4 = document.getElementByClass('quad2-pawn4')

/* event listeners */

redpieces.forEach((redpiece) => {
    redpiece.addEventListener('click', (e) => startPiece(e,'red'))
})

greenpieces.forEach((greenpiece) =>{
    greenpiece.addEventListener('click', (e) => startPiece(e,'green'))
})

yellowpieces.forEach((yellowpiece) => {
    yellowpiece.addEventListener('click',(e) => startPiece(e,'yellow'))
})

bluepieces.forEach((bluepiece) =>{
    bluepiece.addEventListener('click', (e) => startPiece(e,'blue'))
})


/* functions */

function startPiece(piece,color) {
    const startContainer = document.getElementById(`${color}-start`);
    const gamePiece = piece.target
    const quadrant = gamePiece.parentNode
    
    


    quadrant.removeChild(gamePiece)
    startContainer.appendChild(gamePiece)

    startContainer.style.display = 'flex'
    startContainer.style.justifyContent = 'center'
    startContainer.style.alignItems = 'center'
    
    gamePiece.style.backgroundColor = `${color}`
    gamePiece.style.position = 'absolute'
    gamePiece.style.border = '2px solid #fff'

}
