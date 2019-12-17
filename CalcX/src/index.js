import {calculateAspectRatio} from './aspect-ratio.js'

var moment = require('moment')

var endDate = "2019-12-25"
var timeLeft = moment(endDate) - moment()
timeLeft = moment.duration(timeLeft, "milliseconds")
console.log("left:", timeLeft.days(), timeLeft.hours(), timeLeft.minutes(), timeLeft.seconds())

var ratio_1 = document.querySelector('#ratio_1')
var ratio_2 = document.querySelector('#ratio_2')
var ratio_new_height = document.querySelector('#ratio_result-height')
var ratio_new_width = document.querySelector('#ratio_result-width')
var newValues = [ratio_new_width, ratio_new_height]

newValues.forEach(input => {
    input.addEventListener('keyup', getResult)
})

function getResult(e){
    var origWidth = parseInt(ratio_1.value)
    var origHeight = parseInt(ratio_2.value)
    calculateAspectRatio(origWidth, origHeight, newValues, e.target)
}
