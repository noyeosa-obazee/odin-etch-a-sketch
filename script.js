const container = document.querySelector('#container');
const chooseBtn = document.querySelector('#choose-btn');
const arr = []


chooseBtn.addEventListener('click', function() {
    
    const dimension = prompt('Enter preferred square dimension:')
    generateSketchPad(parseInt(dimension));
})

function generateSketchPad(n) {
    
    const sArr = document.querySelectorAll('.square-flexer')
    sArr.forEach(function (e) { if (arr.includes(e.id)) document.querySelector(`#${e.id}`).remove()})
    

        
    let deleteId = crypto.randomUUID();
    const squareFlexer = document.createElement('div');
    squareFlexer.classList.add('square-flexer');
    deleteId = `gene${deleteId}rated`
    arr.push(deleteId)
    squareFlexer.id = deleteId;
for (let i = 1; i <= n; i++) {
    
    

    for (let i = 1; i <= n; i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    square.style.width = `${1600/n}px`
    square.style.height = `${1600/n}px`
    square.addEventListener('mouseover', (e) => e.target.classList.add('hovered'))
    squareFlexer.appendChild(square);
    }
    container.appendChild(squareFlexer);
    }
        }




