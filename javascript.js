let boxes = document.querySelectorAll(".box");

let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");

        if(turn0)
        {
            box.innerHTML="o";
            turn0=false;
        }
        else
        {
            box.innerHTML="x";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});


const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
        let pos1Vlue=boxes[pattern[0]].innerText;
        let pos2Vlue=boxes[pattern[1]].innerText;
        let pos3Vlue=boxes[pattern[2]].innerText;

        if(pos1Vlue!="" && pos2Vlue!="" && pos3Vlue!="")
        {
            if(pos1Vlue===pos2Vlue && pos2Vlue===pos3Vlue)
            {
                console.log("winner", pos1Vlue);
                showWinner(pos1Vlue);
            }
        }
    }
};

// Reset game btn 
const resetGame=()=>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
