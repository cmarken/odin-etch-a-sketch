// Script

// Implemented with CSS
    // Pixel always fill the whole component. This is handled with stretch and flexbox.
    // Pixels have a border of the size of 1px
    // Background color is white

// drawGrid(X)
    // select the grid component
    // from 1 to X (number of rows to create)
        // create a div element: row
        // from 1 to X (number of divs in the row)
            // create a div element: pixel
            // add the event listener "mouseleave" to pixel to execute onLeaveColorPixel()
            // add pixel to the row
        // add row to the component div
function drawGrid(x) {
    const pixelGrid = document.querySelector('pixel-grid');
    for (let i = 1; i <= x; i++) {
        const row = document.createElement('div');
        row.classList.add('pixel-row');
        for (let j = 1; j <= x; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseleave', onLeaveColorPixel);
            row.appendChild(pixel);
        }
        pixelGrid.appendChild(row);
    }
}

// onLeaveColorPixel(e)
    // select pixel from the event
    // change background color of the pixel to grey
function onLeaveColorPixel(e) {
        e.srcElement.setAttribute('style', 'background-color: #555555');
    }
    
// onResizeGridClick(e)
    // while size is larger than 100
        // Open a prompt window asking for grid size: size (100 is max size of a side)
    // select grid component
    // remove all rows (and their pixels) with container.replaceChildren()
    // call drawGrid with size
function onResizeGridClick() {
    const x = prompt('Input a number N to get a grid with the size of N * N (n <= 100)');

    const pixelGrid = document.querySelector('pixel-grid');
    pixelGrid.replaceChildren();

    drawGrid(x);
}

// When loading page, call this script in the head
// call drawGrid() with 16 as size
drawGrid(16);

const resizeGridBtn = document.querySelector('#resize-grid-btn');
resizeGridBtn.addEventListener('click', onResizeGridClick);
