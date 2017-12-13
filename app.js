/**
 * Simple random generate
 * Example for conhecimento digital students 
 */ 

 let el_input        = document.querySelector('.js-input');
 let el_button       = document.querySelector('.js-button');
 let el_presentation = document.querySelector('.js-presentation');

 document.addEventListener('click', () => {
   
   let random_value = el_input.value.split("-");

   if(random_value) {
     el_presentation.innerHTML = getRandom(random_value[0], random_value[1]);
   } else {
    window.alert("Favor insira um número");
   }
      
 });

/**
 * Method GetRandom a integer
 * @param {int} min 
 * @param {int} max 
 * @returns a number between min and max params
 */  
 function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;

 }
