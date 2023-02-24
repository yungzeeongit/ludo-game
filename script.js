/* pieces */

let board = document.getElementById('board');
let redpieces = document.querySelectorAll('.redpawn')
const greenpieces = document.querySelectorAll('.greenpawn')
const yellowpieces = document.querySelectorAll('.yellowpawn')
const bluepieces = document.querySelectorAll('.bluepawn')

// let greenpiece1 = document.getElementByClass('quad2-pawn1')
// let greenpiece2 = document.getElementByClass('quad2-pawn2')
// let greenpiece3 = document.getElementByClass('quad2-pawn3')
// let greenpiece4 = document.getElementByClass('quad2-pawn4')

// let bluepiece1 = document.getElementByClass('quad3-pawn1')
// let bluepiece2 = document.getElementByClass('quad3-pawn2')
// let bluepiece3 = document.getElementByClass('quad3-pawn3')
// let bluepiece4 = document.getElementByClass('quad3-pawn4')

// let yellowpiece1 = document.getElementByClass('quad4-pawn1')
// let yellowpiece2 = document.getElementByClass('quad4-pawn2')
// let yellowpiece3 = document.getElementByClass('quad4-pawn3')
// let yellowpiece4 = document.getElementByClass('quad4-pawn4')

/* event listeners */

redpieces.forEach((redpiece) => {
    redpiece.addEventListener('click', startRedPiece)
})

greenpieces.forEach((greenpiece) =>{
    greenpiece.addEventListener('click', startGreenPiece)
})

yellowpieces.forEach((yellowpiece) => {
    yellowpiece.addEventListener('click', startYellowPiece)
})

bluepieces.forEach((bluepiece) =>{
    bluepiece.addEventListener('click', startBluePiece)
})
/* functions */

function startRedPiece(piece) {
    let redStart = document.getElementById('red-start');
    let gamePiece = piece.target
    let quadrant = gamePiece.parentNode

       quadrant.removeChild(gamePiece)
       redStart.appendChild(gamePiece)

}

function startGreenPiece(piece) {
    let greenStart = document.getElementById('green-start');
    let gamePiece = piece.target
    let quadrant = gamePiece.parentNode

    quadrant.removeChild(gamePiece)
    greenStart.appendChild(gamePiece)
}

function startYellowPiece(piece) {
    let yellowStart = document.getElementById('yellow-start');
    let gamePiece = piece.target
    let quadrant = gamePiece.parentNode

    quadrant.removeChild(gamePiece)
    yellowStart.appendChild(gamePiece)
}

function startBluePiece(piece) {
    let blueStart = document.getElementById('blue-start')
    let gamepiece = piece.target
    let quadrant = gamepiece.parentNode

    quadrant.removeChild(gamepiece)
    blueStart.appendChild(gamepiece)
}