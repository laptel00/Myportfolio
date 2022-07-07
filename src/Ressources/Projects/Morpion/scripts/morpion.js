console.log('it work');
function init() {
    var cells = document.querySelectorAll('.cell');
    replay = document.getElementById('replay');
    currentPlayerDisplay = document.getElementById('currentPlayer')
    currentPlayerDisplay.innerText = "Joueur 1"
    console.log(currentPlayerDisplay)
    round = 0;
    finished = 0;
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.value = i
        cell.addEventListener('click', (e) => {
            if (cell.innerText == "" && finished == 0) {
                round = play(round, cell);
                checkVictory(round);
            }
        })
    }

    replay.addEventListener('click', (e)=> {
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            cell.innerText = "";
            cell.style.background = "white"
            round = 0;
            finished = 0;
            $('#grid').removeClass("won");
        }
    })
}
  
function play(round, cell) {
    currentPlayer = round%2
    currentPlayerDisplay.innerText ="Joueur "+(currentPlayer+1)
    if (currentPlayer == 0) {
        cell.innerText = ('X')
        round ++
    } else {
        cell.innerText = ('O')
        round ++
    }
    return round;
}

function checkVictory() {
    horizontalCheck();
    verticalCheck();
    diagonalCheck();
    drawCheck();
}

function horizontalCheck() {
    lines = document.querySelectorAll('#grid .row .cell')
    lineTop = [lines[0].innerText, lines[1].innerText, lines[2].innerText];
    lineMid = [lines[3].innerText, lines[4].innerText, lines[5].innerText];
    lineBot = [lines[6].innerText, lines[7].innerText, lines[8].innerText];
    
    ans = arrayCheck(lineTop)
    if (ans == true) {
        lines[0].style.background = 'green'
        lines[1].style.background = 'green'
        lines[2].style.background = 'green'
    }
    ans =arrayCheck(lineMid)
    if (ans == true) {
        lines[3].style.background = 'green'
        lines[4].style.background = 'green'
        lines[5].style.background = 'green'
    }
    ans = arrayCheck(lineBot)
    if (ans == true) {
        lines[6].style.background = 'green'
        lines[7].style.background = 'green'
        lines[8].style.background = 'green'
    }
}

function verticalCheck() {
    columns = document.querySelectorAll('#grid .row .cell')
    colFirst = [lines[0].innerText, lines[3].innerText, lines[6].innerText];
    colMid = [lines[1].innerText, lines[4].innerText, lines[7].innerText];
    colLast = [lines[2].innerText, lines[5].innerText, lines[8].innerText];

    ans = arrayCheck(colFirst)
    if (ans == true) {
        lines[0].style.background = 'green'
        lines[3].style.background = 'green'
        lines[6].style.background = 'green'
    }
    ans = arrayCheck(colMid)
    if (ans == true) {
        lines[1].style.background = 'green'
        lines[4].style.background = 'green'
        lines[7].style.background = 'green'
    }
    ans = arrayCheck(colLast)
    if (ans == true) {
        lines[2].style.background = 'green'
        lines[5].style.background = 'green'
        lines[8].style.background = 'green'
    }
}

function diagonalCheck() {
    diagonals = document.querySelectorAll('#grid .row .cell')
    diagBotToTop = [lines[0].innerText, lines[4].innerText, lines[8].innerText];
    diagTopToBot = [lines[6].innerText, lines[4].innerText, lines[2].innerText];

    ans = arrayCheck(diagBotToTop)
    if (ans == true) {
        lines[0].style.background = 'green'
        lines[4].style.background = 'green'
        lines[8].style.background = 'green'
    }
    ans = arrayCheck(diagTopToBot)
    if (ans == true) {
        lines[6].style.background = 'green'
        lines[4].style.background = 'green'
        lines[2].style.background = 'green'
    }
}

function drawCheck() {
    if (round >= 9) {
        WinDisplay = document.getElementsByClassName('win-display')
        WinDisplay[0].innerText = "Egalité, personne ne gagne !"
        $('#grid').addClass("won");
    }
}

function arrayCheck(array) {
    if (array[0] != "" && array[1] != "" && array[2] != "") {
        if (array[0] == array[1] && array[1] == array[2]) {
            player = (round-1)%2
            win(player+1)
            finished = 1;
            return true;
        }
    }
}

function win(player) {
    P1 = document.getElementById('playerOne')
    P2 = document.getElementById('playerTwo')
    WinDisplay = document.getElementsByClassName('win-display')
    if (player == 1) {
        P1.innerText = parseInt(P1.innerText) + 1
        WinDisplay[0].innerText = "Joueur "+player+" a gagné !"
        $('#grid').addClass("won");
    } else {
        P2.innerText = parseInt(P2.innerText) + 1
        WinDisplay[0].innerText = "Joueur "+player+" a gagné !"
        $('#grid').addClass("won");
    }   
}


if (document.querySelectorAll('.cell')) {

    init()
}