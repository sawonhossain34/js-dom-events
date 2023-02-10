

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
    // option 3 another
    const makePurpleButton = document.getElementById('make-purple');
      makePurpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor='purple';
      }
    //   option 4
      const pinkButton = document.getElementById('make-pink');
       pinkButton.addEventListener('click',makePink)
       
       function makePink(){
        document.body.style.backgroundColor = 'pink';
       }
    //    another 4 option
    const greenButton = document.getElementById('make-green');
      greenButton.addEventListener('click',function makeGreen(){
        document.body.style.background = 'green';
      })

    //   Final 4 option
    document.getElementById('make-goldenrod').addEventListener('click',function(){
        document.body.style.backgroundColor= 'goldenrod';
      })