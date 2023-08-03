
// selecting Elements ..   ------------------ 
const PrevOutputDisplay = document.querySelector('.prev-output-section')

const CurrentOutputDisplay = document.querySelector('.current-output-section');

// specific buttons==============

const AllclearBtn = document.getElementById('all-clear');
const DeletElement = document.getElementById('delete');
const EqualBtn = document.getElementById('equal');

// operational buttons...............

const OperationBtns = document.querySelectorAll('.operations')
const NumberBtns = document.querySelectorAll('.numbers');


//=================================================================================================================================================


// F(1).set inital display value to 0 in current display....
function displayInatialState(){
  CurrentOutputDisplay.textContent ="0";
  PrevOutputDisplay.textContent = "0";
}  displayInatialState();


let result = 0;
// function for append number.. .. .. ...............................
let k = 0;
function appendNumber(num){
  
  currentDisplayText = CurrentOutputDisplay.textContent;
   prevDisplayText = PrevOutputDisplay.textContent;

   // if user type first number or any operator.....
   if(currentDisplayText === "0" && prevDisplayText === "0" ){

    if(num === "+" || num === "-" || num === "*" || num === "/"){
      PrevOutputDisplay.textContent = "0"+num;
      CurrentOutputDisplay.textContent = 0;
      return;
    }
    PrevOutputDisplay.textContent = num;
    CurrentOutputDisplay.textContent = "="+num;
     return ;
   }

   // if user input number after equal operation.........
    if(CurrentOutputDisplay.textContent === "0" && PrevOutputDisplay.textContent !== "0"){
      PrevOutputDisplay.textContent = "";
    
    }
 
   PrevOutputDisplay.textContent +=num;
  
}


  function appendOperator(op){
     const val = PrevOutputDisplay.textContent;
     const n = val.length;
     if(val[n-1] === "*" || val[n-1] === "/" || val[n-1] === "+" || val[n-1] === "-" ) {
      return ;
     }
     PrevOutputDisplay.textContent += op;
}

//  compute function ...  ... ............................

  function compute(){
   const text = PrevOutputDisplay.textContent;
   if(text[text.length-1] === "*" || text[text.length-1] === "-" || text[text.length-1] === "/" || text[text.length-1] === "+" ){
    return ;
   }
    let val = eval(text);
    CurrentOutputDisplay.textContent = val;
    }
 
//..................................

  function Syntaxwarning(){
    currentDisplayText.textContent="Syntax Error!";
  }

//=========================================================================
// add eventlistener to number section............................

NumberBtns.forEach(numberBtn => {

  numberBtn.addEventListener('click', () =>{

     appendNumber(numberBtn.textContent);
     compute();
   
  })

})

// add event listener to operations buttons..............................
 
 OperationBtns.forEach(operator =>{
   operator.addEventListener('click',() => {
   
     appendOperator(operator.textContent);
    
   })
 })

 // add event listenere to delete button................
 DeletElement.addEventListener('click', () =>{
    let txt = PrevOutputDisplay.textContent;
  
   if(txt !== "0") {
      txt = txt.slice(0,-1); 
      PrevOutputDisplay.textContent = txt;
      compute();
    }
    if(txt.length === 0){
      displayInatialState();
    }
 })

 // all clear button.......................
 AllclearBtn.addEventListener('click', () => {
   displayInatialState();

 })
 
//  equal button ..........................
 EqualBtn.addEventListener('click', () => {
   PrevOutputDisplay.textContent = CurrentOutputDisplay.textContent;
   CurrentOutputDisplay.textContent = "0"
  //  let a = CurrentOutputDisplay.textContent;
  //   CurrentOutputDisplay.style.color = "red"
  //   CurrentOutputDisplay.style.fontSize = "3rem"
 })

 