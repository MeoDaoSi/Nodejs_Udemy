console.log('Hello');

fetch('https://puzzle.mead.io/puzzle')
    .then( response => response.json() )
    .then( data => console.log(data) )
// const formW = document.querySelector('.formWeather')

// formW.addEventListener('submit' , (e) => {
//     e.preventDefault();
//     console.log('test');
// })
