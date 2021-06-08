let container = document.querySelector('.container')
const INITIAL_GRID_SIZE = 16

const createGrid = (gridSize) => {
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr )`
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr )`

    for(let j = 0; j < gridSize; j++){
            let gridElement = document.createElement('div')
            gridElement.classList = "grid-element"
            container.appendChild(gridElement)
            // add hover event
            
        for(let i = 0; i < gridSize; i++){
            let gridElement = document.createElement('div')
            gridElement.classList = "grid-element"
            container.appendChild(gridElement)
            // add hover event
        }
    }
    
}

createGrid(INITIAL_GRID_SIZE)