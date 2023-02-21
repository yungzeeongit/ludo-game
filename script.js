/* pieces */

let board = document.getElementById('board');
let redpieces = document.querySelectorAll('.redpawn')





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


/* functions */

function startRedPiece(piece) {
    let redStart = document.getElementById('red-start');
    let gamePiece = piece.target
    let quadrant = gamePiece.parentNode

       quadrant.removeChild(gamePiece)
       redStart.appendChild(gamePiece)

}