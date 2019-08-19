// const palate = document.querySelector('.palette');
const paintbrush = document.querySelector('.current-brush');
const canvasSquare = document.querySelectorAll('.square');
const palettes = document.querySelectorAll('.palette-color');

palettes.forEach(function(palette) {
    palette.addEventListener('click', function(event){
        paintbrush.classList.replace(paintbrush.classList[1], event.target.classList[1]);
    });
});


// palettes.forEach(function (palette) {
//     palette.addEventListener('click', function (event) {
//         paintbrush.classList.replace(paintbrush.classList[1], event.target.classList[1]);
//     });
// });


canvasSquare.forEach(function (canvas) {
    canvas.addEventListener('click', function (event) {
        canvas.classList.replace(canvas.classList[1], paintbrush.classList[1]);
    });
});


// selects the colors next to the palette
//   for each of palette items add an event listener of click and run FN brushChange
// function paletteChanges () {
//         for(let i = 0; i < paletteChange.length; i++) {
//         console.log('paletteChange');

// selects the 9 square canvas
// const canvasChange = document.querySelectorAll(`.square`);
// // for each item in the canvas add an EL of click and run FN canvasColor
// canvasChange.addEventListener(`click`, function () {
//     for(let i = 0; i < canvasChange.length; i++) {
//     e);
//     }
// });


