let btn = [];
let c = "";
for (let i = 1; i <= 4; i++)
{
    c += i;
    for(let j = 1; j <= 4; j++) {
        c += j;
        btn.push(document.getElementById(c));
        c = "" + i;
    }
    c = "";
}
let start = document.querySelector('.start_button');
let score = document.querySelector('.score_field');
let scores = 0;
let defPos = ["12", "44", "33", "11"];

start.addEventListener('click', start_game);

function check(){
    let win = true;
    btn.forEach(button => {
        if(button.style.background === "black"){
            win = false;
        }
    })
    if (win){
        btn.forEach(button => {
            button.removeEventListener('click', draw);
        });
        score.innerText = "You won";
    }
}

function draw(evt){
    scores++;
    score.innerText = "Score: " + scores.toString();
    let row = evt.currentTarget.id[0];
    let column = evt.currentTarget.id[1];
    console.log(row.toString() + " " + column.toString());
    btn.forEach(button => {
        if (button.id[0] === row || button.id[1] === column){
            if (button.style.background === "red") {
                button.style.background = "black";
            } else{
                button.style.background = "red";
            }
        }
    })
    check();
}

function start_game() {
    btn.forEach(button => {
        button.addEventListener('click', draw);
        if (defPos.includes(button.id)){
            button.style.background = "black";
        }else{
            button.style.background = "red";
        }
    });
    score.innerText = "Score: 0";
    scores = 0;
}