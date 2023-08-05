
// butttons variables .. ............................................
 const AddBtn = document.querySelector(".add-btn");
 const DeleteBtns = document.querySelectorAll(".delete-icon");
 const EditBtn = document.querySelectorAll(".edit-icon");
 const AllClear = document.querySelector(".clr-btn");

 const Alert = document.querySelector(".alert");

// console.log(DeleteBtns)
//   task list variabless.. 
 const TaskList = document.querySelector(".task-list");
 const inputTxt = document.getElementById("text-input");
  const taskContain = document.querySelectorAll(".task-container");


 let rowId = 0;

   

//  ============= funcitons ==========================================
// =================================================================

// function for creating new task element...................
function createElement( ){

    const ipVal = inputTxt.value
    let element = document.createElement('article');
    //  element.id = id;
    //  element.className = "task-container";
     element.classList.add("task-container");
    //  console.log(element)
    
     element.innerHTML = `  <div class="task-content">
     <input onClick="completedTask(this)" type="checkbox" value="check">
       <p> ${ipVal} </p>
      </div>
     <div class="icons">
     <span onClick="editPost(this)" class=" edit-icon material-symbols-outlined">
         border_color
       </span>
        <span onClick="deletePost(this)" class=" delete-icon material-symbols-outlined">
         delete
      </span>
       </div> `;
    if(ipVal === ""){
        warningAlert("Please Enter a Value 🤦‍♂️🤦‍♀️!");
        return ;
    }


   TaskList.appendChild(element);
   successAlert("Task Added Sucessfully 😍!")
   inputTxt.value = "";
}

// function for delete elements.................................
// IN: - I use this button eventlistener on button where element is created...
let deletePost = (e) => {
    if(confirm("Are you Sure about it!!!") === false){
        return ;
    }
    else{
        e.parentElement.parentElement.remove();
        warningAlert("Task Deleted sucessfully⛔")
    }
    
  }

//  edit function. ......... ............. ..................
// IN: - I use this button eventlistener on button where element is created...
let editPost = (e) => {
    // console.log(e.parentElement.previousElementSibling.lastElementChild.innerHTML);
    inputTxt.value = e.parentElement.previousElementSibling.lastElementChild.innerHTML;
    e.parentElement.parentElement.remove();
  };



//  functions for completed task..........................
 
 let completedTask = (e) =>{
    // console.log(e.parentElement.parentElement.add("complete"));
    e.parentElement.parentElement.classList.toggle("complete");
    e.parentElement.classList.toggle("txt-line");
    // console.log(e.parentElement.classList.contains("txt-line"));
    if(e.parentElement.classList.contains("txt-line") === true){
        successAlert("Hurry! You Done it!🎉")
    }
   
 }

//   clear all function.. .....................................
//  let clearall = (e) =>{

//  }
 
 AllClear.addEventListener('click', () =>{
   warningAlert("Please delete elements one by one!🙈")
    
 })



// aleart functions.................................
 
 function successAlert(txt){
    Alert.textContent = txt;
    Alert.style.color = "green";
    setTimeout(function(){
    Alert.textContent = "";
    } ,1500)
 }
 function warningAlert(txt){
    Alert.textContent = txt;
    Alert.style.color = "red";
    setTimeout(function(){
    Alert.textContent = "";
    } ,2000)
 }

// ==============================   Add Event Listener ====================================================================
 
// add button.............
AddBtn.addEventListener('click', createElement);

// edit button............




// some fun with it .. ...............
const profile = document.querySelector(".profile");

setInterval(setprofile,1000);
function setprofile(){
    profile.classList.toggle("profile-hide")
}
onmouseover = setInterval(setprofile,100000);