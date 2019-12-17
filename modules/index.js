// Your code goes here!
import {modulo,percentage,percentageOf,difference} from './percentage.js';
import {calculateAspectRatio} from './aspect-ratio.js';


var modulo1 = document.querySelector('#modulo_1');
var modulo2 = document.querySelector('#modulo_2');
var moduloResult = document.querySelector('#modulo_result');


moduloResult.addEventListener('click',()=>{
    console.log('ok')
    console.log(moduloResult.value)
    moduloResult.value =  modulo(modulo1.value,modulo2.value)
})


modulo();
percentage();
percentageOf();
difference();
calculateAspectRatio();