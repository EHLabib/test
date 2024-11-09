let head = document.getElementById("head");
head.addEventListener("mouseenter" , function(){
    head.innerHTML = `Md. Ehteshamul Haque Labib.`;
})
head.addEventListener("mouseleave" , function(){
    head.innerHTML = `<h3 id="head"> Tic Tac Toe </h3>`;
})

let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    let turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

let boxes = document.querySelectorAll(".box");
boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if(turnX){
            box.innerText = "X";
            
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWiner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
    box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = ` Winner is "${winner}" `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWiner = () =>{
    for( let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos2val != "" ){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner" + pos1val);
                showWinner(pos1val);
            }
        }
    }
};


let btn = document.getElementById("reset-btn");
btn.addEventListener("click" , resetGame);

