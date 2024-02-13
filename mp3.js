 



// // icon store in the variable

// var iconPlay=document.getElementById("selectIconPlPu");
// var muteIconStore=document.getElementById("mutIcon");

// // creating variable for audio method

// var audioH;



// // this function to start and pause the audio ----------------------------------------------------

// function changeIcontoPause(){
// 	 var iconChange=document.getElementById("selectIconPlPu").classList[1];
// 	 if(iconChange==="fa-play"){
//         document.getElementById("selectIconPlPu").classList.remove("fa-play");
//         document.getElementById("selectIconPlPu").classList.add("fa-pause");
//        audioH=new Audio();
//        audioH.src=("music/Jalsa2.mp3");
//        audioH.play()

// 	 }

// 	 if(iconChange==="fa-pause"){
//         document.getElementById("selectIconPlPu").classList.remove("fa-pause");
//         document.getElementById("selectIconPlPu").classList.add("fa-play");
//         audioH.pause()
// 	 }
	 
//  }

// iconPlay.addEventListener("click",changeIcontoPause)

// // this function to start and pause the audio end here ----------------------------------------------------




// // this function to mute and unmute the audio here ----------------------------------------------------


// function changeIcontoMute(){
// 	 var iconChange2=document.getElementById("mutIcon").classList[1]; 
// 	 if(iconChange2==="fa-volume-off"){ 
//         muteIconStore.classList.remove("fa-volume-off");
//         muteIconStore.classList.add("fa-volume-xmark");
//         audioH.muted=true;
// 	 }

// 	  if(iconChange2==="fa-volume-xmark"){
//         muteIconStore.classList.remove("fa-volume-xmark");
//         muteIconStore.classList.add("fa-volume-off"); 
//          audioH.muted=false;
// 	 }
 
//  }

// muteIconStore.addEventListener("click",changeIcontoMute)











// next previous song play


// storing songs
 let song1=new Audio('music/ArjanVaillyAnimal.mp3');
 let song2=new Audio('music/HuaMain.mp3');
 let song3=new Audio('music/Jalsa2.mp3');
 let song4=new Audio('music/KeemtiMissionRaniganj.mp3');
 let song5=new Audio('music/NanakNaam.mp3');
 let song6=new Audio('music/NikleThe.mp3');
 let song7=new Audio('music/NikleTheKabhi.mp3');


// storing icons of next previous and pause
 var previous=document.getElementById("previosIcon");
 var play=document.getElementById("playIcon");
 var next=document.getElementById("nextIcon");
 var SongNames=document.getElementById("parot");

 var collectionSongs=[{ele:song1,audioName:'animal'},
 	                   {ele:song2,audioName:'Hua Main'},
 	                   {ele:song3,audioName:'Jalsa 2'},
 	                   {ele:song4,audioName:'Keemti Mission Raniganj'},
 	                   {ele:song5,audioName:'NanakNaam'},
 	                   {ele:song6,audioName:'Nikle The'},
 	                   {ele:song7,audioName:'Nikle The Kabhi'}]


// creating for loop to know whether song will ended or not

 for(const car of collectionSongs){
   car.ele.addEventListener('ended',()=>{
     updateSong('next');
     playPauseSong();
   })
 }


// creating variable to increase decrease audio

 let current=0;
 let currentSong=collectionSongs[current].ele;
 SongNames.innerHTML=collectionSongs[current].audioName;

 

play.addEventListener("click",function(){
  
    playPauseSong();

})

// increase decrese value to make song next


next.addEventListener("click",function(){
     updateSong('next');
     playPauseSong();
})

previous.addEventListener("click",function(){
     updateSong('prev');
     playPauseSong();
})


 function updateSong(action){
 	currentSong.pause();
 	currentSong.currentTime=0;

   if(action==='next'){   
   	 current++;
   	  if(current>collectionSongs.length-1){
       current=0;
   	  }
   	    }
   if(action==='prev'){
      current--;
      if(current<0) {
      	collectionSongs.length-1
      }
   }
   currentSong=collectionSongs[current].ele;
   	  SongNames.innerHTML=collectionSongs[current].audioName;
 } 


function playPauseSong(){
	 if(currentSong.paused){
     currentSong.play();
     play.classList.remove("fa-play");
     play.classList.add("fa-pause");
   }
   else{
      currentSong.pause();
       play.classList.remove("fa-pause");
       play.classList.add("fa-play");
   }
}

 