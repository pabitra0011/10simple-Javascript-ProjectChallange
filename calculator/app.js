
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




// ========================== funcions section==================================================================




// F(1).set inital display value to 0 in current display....
 function displayInatialState(){
    CurrentOutputDisplay.textContent ="0";
    PrevOutputDisplay.textContent = "0";
 }  displayInatialState();

// f(2). function for append number to current display number......
function appendNumber(number){
    // let currentdisplayText = CurrentOutputDisplay.textContent;
    // let prevdisplayText = PrevOutputDisplay.textContent;
 if(CurrentOutputDisplay.textContent !=="0" && PrevOutputDisplay.textContent !== "0"){
    displayInatialState();
    
 }
    if(PrevOutputDisplay.textContent === "0" && CurrentOutputDisplay.textContent === "0"){
        // CurrentOutputDisplay.textContent = "0";
        // CurrentOutputDisplay.textContent = "="+number;
        PrevOutputDisplay.textContent = number;
    }
    else{
    //  CurrentOutputDisplay.textContent+=number;
     PrevOutputDisplay.textContent+=number;
    }
   
}
 
// function (3).. function for appending operators according to situation...........
 function appendOperators(operator){
    let prevdisplayText = PrevOutputDisplay.textContent;

    // if user first click any operator..
    if(prevdisplayText === "0" ){
        PrevOutputDisplay.textContent= +operator;
    }
    else{

        PrevOutputDisplay.textContent += operator;
    }
    
 }

 // copmute function................
 
  function compute(n,operator2){
    let t =n;
     if(operator2.length>1 || operator2.length<=0){
        CurrentOutputDisplay.textContent = "ENTER OPERATOR ONCE or ENTER A OPERATOR!"
     }
    else{
      let a ="";  let b="";
      let op = "";
      let i=0;
     for(i;i<n.length;i++){
        if(n[i]==="+" || n[i]==="-" || n[i]==="*" || n[i]==="/"){
          op=n[i]; 
          break;
        }
        a+=n[i];
     }
     b=t.substring(i+1,t.length);
     a = Number(a);
     b=Number(b);
      // computing according to operator value.
      let ans = 0;
      switch(op){
        case "+":
            ans = a*b;
            break;
         case "-":
            ans= a-b;
            break;
         case "*":
            ans=a*b;
            break;
         case "/":
            ans=a/b;
            break;         
      }
      CurrentOutputDisplay.textContent = ans;
    }
  }

  function findOper(txt){
    let ans ="";
    for(let i=0;i<txt.length;i++){
        if(txt[i]==="*" || txt[i]==="/" || txt[i]==="+" || txt[i]==="-" ){
            ans+=txt[i];
        }
    }
    return ans;
  }

// ============================ End of Functions section ===============
// =======================================================================


NumberBtns.forEach(numberbtn => {
    numberbtn.addEventListener('click', ()=>{
      appendNumber(numberbtn.textContent)
    //   console.log(numberbtn.textContent)
    })
})

OperationBtns.forEach(operator => {
    operator.addEventListener('click', () => {
     appendOperators(operator.textContent);
    })
})

// equal button eventlistener ..   ........
EqualBtn.addEventListener('click', () =>{
   let currentText = CurrentOutputDisplay.textContent;
   let prevText = PrevOutputDisplay.textContent;
   let oper = findOper(prevText);
   compute(prevText, oper);

})

// eventListener for delete element button to erase all things>>>>>>>>>>>>>>>
DeletElement.addEventListener('click',() =>{
    let tempTxt = PrevOutputDisplay.textContent;
    if(tempTxt !== "0") {
       tempTxt = tempTxt.slice(0,-1); console.log(tempTxt)
        PrevOutputDisplay.textContent = tempTxt;
    }
    if(tempTxt.length === 0)
    displayInatialState();
})

// eventListener for All clear button to erase all things>>>>>>>>>>>>>>>

AllclearBtn.addEventListener('click',function(){
    displayInatialState();
})