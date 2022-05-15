// console.log("welcome")
let ting=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let music3=new Audio("music.mp3")
let turn="X";
let isgameover=false;
// let draw=true;
const changeturn=()=>{
    return turn=="X"?"O":"X";
}
//win check
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
    // console.log(boxtexts[e[0]].innerText);
    // console.log("hii");
    if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText===boxtexts[e[2]].innerText)&&(boxtexts[e[0]].innerText!=='')){
        music3.play();
        document.querySelector(".info").innerText=boxtexts[e[0]].innerText+" win ";
        isgameover=true;
        // draw=false;
        console.log(document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width='300px')
        // document.getElementsByTagName("img")[0].style.width="80 px";
    }
})
}
//reset logic
let btn=document.getElementById('reset')
btn.addEventListener('click',()=>{
    console.log(document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width='0px')
    isgameover=false;
    music3.pause();
    let boxes = document.getElementsByClassName("box")
    Array.from(boxes).forEach((element)=>{
        let boxtexts=element.querySelector('.boxtext')
        boxtexts.innerText='';
    })
})
//game logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((element)=>{
    let boxtexts=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        // console.log(element.innerText);
        if((element.innerText==='')&&(!isgameover)){
            // console.log("tn")
              boxtexts.innerText=turn;
            //   console.log(boxtexts.innerText)
              turn=changeturn();
              ting.play();
            //   console.log(document.getElementsByClassName("info").innerText)
              if(!isgameover){document.getElementsByClassName("info")[0].innerText="turn for " + turn;}
              checkwin();
        }
    })
})