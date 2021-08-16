const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let cardIndex; // Holds the current slide number
let slideNum; // Holds the next slide number


rightArrow.addEventListener('click', function(){
    cardIndex = document.querySelector('input[name="slide"]:checked').value;
    if(cardIndex < 3){
        cardIndex++;
    }
    else{
        cardIndex = 1;
    }
    slideNum = 'slide' + cardIndex;
    document.getElementById(slideNum).checked = true;
    
});

leftArrow.addEventListener('click', function(){
    cardIndex = document.querySelector('input[name="slide"]:checked').value;
    if(cardIndex > 1){
        cardIndex--;
    }
    else{
        cardIndex = 3;
    }
    slideNum = 'slide' + cardIndex;
    document.getElementById(slideNum).checked = true;
    
});