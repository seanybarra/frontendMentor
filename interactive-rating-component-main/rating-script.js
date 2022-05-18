// RatingClick function is all the logic required for making
// the rating buttons work
//
// When clicked the buttons back ground should change and the
// buttons value will be placed/returned 
// It should also check to see if anyother buttons are pressed


const buttons = document.querySelectorAll('.rating-buttons span');
for(let x = 0 ; x < buttons.length; x++){
    buttons[x].addEventListener('click', ratingClick);
}
function ratingClick(e){
    const buttons = document.querySelectorAll('.rating-buttons span');
    let clickFlag = false;
    let clickIndex = -1;
    for(let x = 0; x < buttons.length; x++){
        //look at each button to see if it is clicked based on background color
        if(buttons[x].style.backgroundColor === "rgba(124, 135, 152, 0.75)"){
            // if a button is click sets flag to true and sets index
            clickFlag = true;
            clickIndex = x;   
        }
    
        //if there is a button clicked switch the stylings for both
        if(clickFlag){
            buttons[x].style.backgroundColor = 'hsla(216, 12%, 54%, 0.25)';
            buttons[x].style.color = 'hsl(217, 12%, 63%)';
            e.target.style.backgroundColor = 'hsla(216, 12%, 54%, 0.75)';
            e.target.style.color = 'hsl(0, 0%, 100%)';

        }
        

    }
    // If no buttons are clicked highlight the button
    if(!clickFlag){
        e.target.style.backgroundColor = 'hsla(216, 12%, 54%, 0.75)';
        e.target.style.color = 'hsl(0, 0%, 100%)';
    }
    
}