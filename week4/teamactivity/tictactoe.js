const board = document.querySelector("#grid");
const reset = document.querySelector("#reset");


const player1 = "X";
const player2 = "O";

let player = player1;

function changePlayer (click) {
    click.target.innerHTML = player;
    if (player === player1) player = player2;
    else player = player1;
}

function clear() {
    for (let i = 0; i < board.children.length; i++) {
        board.children[i].innerText = "";
    }
}

board.addEventListener("click", changePlayer);
reset.addEventListener("click", clear);


// one.addEventListener('mouseover', highlight);
// one.addEventListener('mouseout', highlight);
// two.addEventListener('mouseover', highlight);
// two.addEventListener('mouseout', highlight);

// function highlight(event){
//     event.target.classList.toggle('highlight');
// }