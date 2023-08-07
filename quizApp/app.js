
const questions = [
    {
    number : 1,
    que : "What is the capital of Cuba ?",
    ans1 : "Colombia",
    ans2 : "Jordan",
    ans3 : "Havana",
    ans4 : "Austria",
    },
    {
        number : 2,
        que : "What is the number of cuntry in the world ?",
        ans1 : "197",
        ans2 : "194",
        ans3 : "196",
        ans4 : "195",
        },
        {
         number : 3,
         que : "What is the distance between earth to sun ?",
        ans1 : "170 million KM",
        ans2 : "158 million KM",
        ans3 : "150 million KM",
         ans4 : "200 million KM",
        }, 

]


//  all variables.. ...............................
// =============================================================
const liveScore = document.querySelector(".live-score");
const time = document.querySelector(".time");
const userName = document.querySelector(".user-name");
const massageArea = document.querySelector(".display-massage");

// buttons......
const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const submitBtn = document.querySelector(".submit-btn");

// console.log({preBtn,nextBtn,submitBtn});
// question structure............................
 let question = document.querySelector(".question-section")
 
 

let currentScore = 0;
// let currentTime = 
let i = 0;


// ===============================================================================================================================

// seatting username .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// let name = prompt("enter your name here :" ,"");

userName.textContent = name;

const startUsername = document.querySelector(".start-username")
 startUsername.textContent = ` Welcome ! ${name}`
//  console.log(startUsername)

// start the game by clicking start button ... ==================

 const startBtn = document.querySelector(".start-btn");
 const startPage = document.querySelector(".start-section");
 startBtn.addEventListener('click', () => {
    startPage.classList.add("start-section-hide");
    Createquestion(questions[0].number,questions[0].que,questions[0].ans1,questions[0].ans2,questions[0].ans3,questions[0].ans4);
 })



 // function creating new div and assign question on it.............
 function Createquestion(number,que,ans1,ans2,ans3,ans4){

    const newquestin = document.createElement('div');
    // console.log(newquestin)
    // newquestin.classList.add("question-section");
    newquestin.innerHTML = ` <!-- <div class="question-title"> -->
    <p class="question-title-no">${number}</p>
    <h1 class="question">👉${que}</h1>
<!-- </div> -->
<form class="answers">
   <div class="ans" id="1">
    <input class="check" type="checkbox" name="" id="">
    <label for="">${ans1}</label>
   </div>
   <div class="ans" id="2">
    <input class="check" type="checkbox" name="" id="">
    <label for="">${ans2}</label>
   </div>
   <div class="ans" id="2">
    <input class="check" type="checkbox" name="" id="">
    <label for="">${ans3}</label>
   </div>
   <div class="ans" id="2">
    <input class="check" type="checkbox" name="" id="">
    <label for="">${ans4}</label>
   </div>
</form>`
 
 question.appendChild(newquestin);

 }
//  Createquestion();
//removing question before appering a new question.................
function Removequestion(){
  document.querySelector(".question-section").innerHTML = "";
}

// calculating score . .............
function Calculatescore(){

}
// event listener ffor next question =========================================================
  nextBtn.addEventListener('click', () =>{
    Calculatescore();
    Removequestion();
    if(i === questions.length-1){
        Shwoscore();
    }
     i++;
     Createquestion(questions[i].number,questions[i].que,questions[i].ans1,questions[i].ans2,questions[i].ans3,questions[i].ans4);
     
 })