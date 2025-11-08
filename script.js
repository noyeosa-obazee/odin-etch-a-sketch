const container = document.querySelector('#container');
const chooseBtn = document.querySelector('#choose-btn');
const deletedSquareFlexerIds = [];

function getDimension() {
    const dimension = prompt('Enter number of squares per side for sketch pad (must not be greater than 100):');
    return parseInt(dimension);
}

chooseBtn.addEventListener('click', function() {
    let userDimension = getDimension();
    if (userDimension > 100) while (userDimension > 100) {
        userDimension = getDimension();
    }
    generateSketchPad(userDimension);
})

function generateSketchPad(n) {
    const allSquareFlexers = document.querySelectorAll('.square-flexer')
    allSquareFlexers.forEach(function (e) { if (deletedSquareFlexerIds.includes(e.id)) document.querySelector(`#${e.id}`).remove()});
    
    let deleteId = crypto.randomUUID();
    const squareFlexer = document.createElement('div');
    squareFlexer.classList.add('square-flexer');
    deleteId = `gene${deleteId}rated`;
    deletedSquareFlexerIds.push(deleteId);
    squareFlexer.id = deleteId;

 for (let i = 1; i <= n; i++) {
    for (let i = 1; i <= n; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${1600/n}px`;
    square.style.height = `${1600/n}px`;
    square.addEventListener('mouseover', (e) => e.target.classList.add('hovered'));
    squareFlexer.appendChild(square);
    }
    container.appendChild(squareFlexer);
  }
}




