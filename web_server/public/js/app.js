const formW = document.querySelector('.formWeather')
const inputValue = document.querySelector('.inputWeather')
const messageOne = document.querySelector('#message_1')
const messageTwo = document.querySelector('#message_2')

formW.addEventListener('submit' , (e) => {
    e.preventDefault();
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch(`http://localhost:3000/weather?address=${inputValue.value}`)
        .then( response => response.json() )
        .then( (data) => {
            if( data.error ){
                messageOne.textContent = data.error;
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        } )
})
