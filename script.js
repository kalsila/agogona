
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

setInterval(setclock, 1000)

function setclock() {
    const currentData = new Date()
    
    const secondsRatio = currentData.getSeconds() / 60  
    console.log('second exact',currentData.getSeconds());

    const minutesRatio = (secondsRatio + currentData.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentData.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
  }
