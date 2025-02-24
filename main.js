function enableDrawing() {
    const cells = document.querySelectorAll(".sketch-square");
    const state = {
        mousePressed: false,
    };

    document.addEventListener("mousedown", () => {
        state.mousePressed = true;
    });

    document.addEventListener("mouseup", () => {
        state.mousePressed = false;
    });

    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            if (state.mousePressed) {
                cell.classList.add("filled")
            }
        });

        cell.addEventListener("click", () => {
            cell.classList.toggle("filled")
        })
    });
}

function resetGrid() {
    document.querySelector('#etchBorder').classList.add("shake");
    setTimeout(() => {
        document.getElementById('sketchContainer').innerHTML = '';
    }, "500");
    setTimeout(() => {
        document.getElementById('sketchContainer').innerHTML = '';
        createGrid();
        document.querySelector('#etchBorder').classList.remove("shake");
    }, "1000");
}

function createGrid() {
    console.log('createGrid run');
    if (document.querySelector('.filled') == null) {
        let input = document.getElementById('gridSelection').value;
        let number_of_squares = input * input;
        const sketch_container = document.getElementById('sketchContainer');
        sketch_container.innerHTML = '';
        let square_width = sketch_container.offsetWidth / input;
        let square_height = sketch_container.offsetHeight / input;

        for (let i = 0; i < number_of_squares; i++) {
            let child_node = document.createElement('div');
            child_node.classList.add('sketch-square');
            child_node.style.height = square_height.toString() + 'px';
            child_node.style.width = square_width.toString() + 'px';
            sketch_container.appendChild(child_node);
        }
        enableDrawing();
    }
}