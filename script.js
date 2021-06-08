let container = document.querySelector('.container')
const INITIAL_GRID_SIZE = 16

const createGrid = (gridSize) => {
    let gridArea = gridSize * gridSize
   
    for(let i = 0; i < gridArea; i++){
        let gridElement = document.createElement('div')
        gridElement.classList = "grid-element"
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr )`
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr )`
        container.insertAdjacentElement('beforeend', gridElement)
    }

    
}

createGrid(INITIAL_GRID_SIZE)

const changeColor = () => {
    this.backgroundColor = 'black'
}