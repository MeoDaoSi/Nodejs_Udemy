const formW = document.querySelector('.formWeather')
const inputValue = document.querySelector('.inputWeather')

formW.addEventListener('submit' , (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/weather?address=${inputValue.value}`)
        .then( response => response.json() )
        .then( data => console.log(data) )
})
