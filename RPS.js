let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{

       const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})


const gencompchoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];
}  


const playgame=(userchoice)=>{

    // comp choice
 const compchoice=gencompchoice();

                            
    if(userchoice===compchoice){
        //draw game
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors, paper
            userwin=compchoice==="paper" ? false : true;
        }
        else if(userchoice==="paper"){
            //scissors, rock
            userwin=compchoice==="scissors" ? false : true;
        }
        else{
            //rock, paper
            userwin=compchoice==="rock" ? false : true
        }
        showwinner(userwin,userchoice,compchoice);
    }
    
}


let showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){

        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{

        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}


const drawgame=()=>{
    msg.innerText="Game was Draw, Play again";
    msg.style.backgroundColor="#081b31";
    
}
