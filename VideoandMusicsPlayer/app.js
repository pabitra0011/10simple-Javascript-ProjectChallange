
const audios = [

     {
        n: 1,
        img: "OIP.jpeg",
        title: "Come With Me.",
        author: "Conu Monu",
        song: "audios/come-with-me-133764.mp3",
     },
     {
        n: 2,
        img: "R (1).jpeg",
        title: "Good Night",
        author: "Gupigain",
        song: "audios/good-night-160166.mp3",
     },
     {
        n: 3,
        img: "OIP (1).jpeg",
        title: "LoFi Chill(mediam version)",
        author: "Baghabain",
        song: "audios/lofi-chill-medium-version-159456.mp3",
     },
     {
        n: 4,
        img: "OIP (2).jpeg",
        title: "For Future bass",
        author: "Alan Walker",
        song: "audios/for-future-bass-159125.mp3",
     },
     {
        n: 5,
        img: "OIP (3).jpeg",
        title: "One Night In Dubai..",
        author: "Arash & Helenas",
        song: "audios/One_Night_in_Dubai(256k).mp3",
     },   
     

]


const audioContainer = document.querySelector(".container");
const audioPlayer = document.querySelector(".audio-player-section");

let currentIndex = 0;
// function for creaation elements .......................................
 
function createAudio(crAudio){
   let newAudio = document.createElement('div');
   newAudio.classList.add("audio");

   newAudio.innerHTML = `<img class="audio-image" src="${crAudio.img}" alt="">
   <p class="audio-title">${crAudio.title}</p>
   <audio src="${crAudio.song}"> </audio>`;
   
    audioContainer.appendChild(newAudio);
 

}

function setPlayer(tar){
  const img = document.querySelector(".player-img");
  const title = document.querySelector(".player-container-title");
  const author = document.querySelector(".player-container-author");
  const song = document.querySelector(".audio-play"); console.log(song)
   // console.log(img.src);
   img.src = tar.children[0].src;
   title.textContent = tar.children[1].textContent;
   author.textContent ="Autohr"
   song.src = tar.children[2].src;
   // console.log(tar.children[2].src);
   // console.log(song.src);
}

// Event Listener for inaiallly display all audios avaliable when dom is loadded..
// ==========================================================

window.addEventListener('DOMContentLoaded',()=>{
    
    for(let i=0;i<audios.length;i++){
        createAudio(audios[i]);
    }

    const songs = document.querySelectorAll(".audio");
// listin which song click ......
  songs.forEach(s =>{
   s.addEventListener("click",(e)=>{
      let tar = e.currentTarget;
       audioPlayer.style.display = "block";
       setPlayer(tar);
     
   })
  })
//  for exist audio full player sectin ........
  const cutBtn = document.querySelector(".cut-btn");
  cutBtn.addEventListener("click",()=>{
   audioPlayer.style.display = "none";
  })
   
})


document.querySelector(".audio-btn").addEventListener("click",()=>{
    audioPlayer.style.display = "none";
})