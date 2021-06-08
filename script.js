const container = document.querySelector('.container')
const INITIAL_GRID_SIZE = 16

const changeColor = (pixel) => {
    let randomR = Math.floor(Math.random() * 256)
    let randomG = Math.floor(Math.random() * 256)
    let randomB = Math.floor(Math.random() * 256)

    pixel.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

const createGrid = (gridSize) => {
    let gridArea = gridSize * gridSize
   
    for(let i = 0; i < gridArea; i++){
        let gridElement = document.createElement('div')
        gridElement.classList = "grid-element"
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr )`
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr )`
        container.insertAdjacentElement('beforeend', gridElement)
    }

    let gridPixels = document.querySelectorAll('.grid-element')
    gridPixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => changeColor(pixel))
    })
    
}

createGrid(INITIAL_GRID_SIZE)

const clearBoard = () => {
    let gridPixels = document.querySelectorAll('.grid-element')
    gridPixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white"
    })
}

const clearButton = document.querySelector('#clear-btn')
clearButton.addEventListener('click', () => clearBoard())

const clearGrid = () => {
    const gridArray = Array.from(container.childNodes)
    gridArray.forEach((element) => {
        container.removeChild(element)
    })
}

const changeGridSize = () => {
    let newSize = prompt("Enter size between 1 and 64")

    if (newSize !== null){
        newSize = parseInt(newSize)
        
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)){
            alert("Enter a number between 1 and 64!")
            changeGridSize()

        } else {
            clearGrid()
            createGrid(newSize)
        }
    }
    
}

const changeSizeButton = document.querySelector('#size-btn')
changeSizeButton.addEventListener('click', changeGridSize)