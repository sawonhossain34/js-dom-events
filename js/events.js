

// option 2
function clickRed(){
    document.body.style.backgroundColor='red';
}


// option 3
const makeBlueButton =document.getElementById('make-blue');
      makeBlueButton.onclick = makeBlue;

    function makeBlue(){
        document.body.style.backgroundColor = 'blue';
    }