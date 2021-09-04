var timerelem=document.querySelector("#timerelem");
var clickelem=document.querySelector('#clickelem');
var bottom=document.querySelector('#bottom');
var scorelem=document.querySelector('#scorelem');

var timer=60;
var score=0;
var random_var;

function timer_on(){
 var myvar=   setInterval(function(){
        if(timer<0){
            clearInterval(myvar);
            bottom_bubble();
        }
        else{
            timerelem.innerHTML=timer;
            timer--;
        }    
    },1000)
}

function click_bubble(){
    random_var=Math.floor(Math.random()*10)
    clickelem.textContent=random_var;
}

function score_incre(){
    bottom.addEventListener('click',function(dets){
        if(random_var===Number(dets.target.textContent)){
        score+=10;
        scorelem.innerHTML=score;
        bottom_bubble();
        click_bubble();
            
        }
       
    })
}

function bottom_bubble(){
   
        if(timer>=0){
            Math.floor(Math.random()*10) //this no always give a random no btw 1 to 10 with 10 excluded
            var temp=``;
            for(var i=0;i<100;i++){
                temp+=`<div class="circ">
                            ${Math.floor(Math.random()*10)} 
                        </div>`
              
            }
            document.querySelector('#bottom').innerHTML=temp;
        }
    
        else{
            
            var template=`<h1 id="h1">GAME OVER</h1>
            <h2 id="h2">score:${score} </h2>`;
            document.querySelector('#bottom').innerHTML=template;
        }
   
}

// function bottom_bubble_resp(){
    
//     if(timer>=0){
//         Math.floor(Math.random()*10) //this no always give a random no btw 1 to 10 with 10 excluded
//         var temp=``;
//         for(var i=0;i<1;i++){
//             temp+=`<div class="circ">
//                         ${Math.floor(Math.random()*10)} 
//                     </div>`
          
//         }
//         document.querySelector('#bottom').innerHTML=temp;
//     }

//     else{
        
//         var template=`<h1 id="h1">GAME OVER</h1>
//         <h2 id="h2">score:${score} </h2>`;
//         document.querySelector('#bottom').innerHTML=template;
//     }

// }

// if(window.screen.width<500){
//     bottom_bubble_resp();
// }

bottom_bubble();
timer_on();
click_bubble();
score_incre();
