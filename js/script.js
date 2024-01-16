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

// onLeaverColorPixel(e)
    // select pixel from the event
    // change background color of the pixel to black
 
// onResizeGridClick(e)
    // while size is larger than 100
        // Open a prompt window asking for grid size: size (100 is max size of a side)
    // select grid component
    // remove all rows (and their pixels) with container.replaceChildren()
    // call drawGrid with size

// When loading page, call this script in the head
// call drawGrid() with 16 as size