import React, { useState, useEffect } from 'react';
import $ from "jquery"
import './styles/main.css';


function MorpionComp() {
    
    useEffect(() => {
        console.log('it work');
        var cells = document.querySelectorAll('.cell');
        var replay = document.getElementById('replay');
        var currentPlayerDisplay = document.getElementById('currentPlayer')
        function init() {
            currentPlayerDisplay.innerText = "Joueur 1"
            console.log(currentPlayerDisplay)
            var round = 0;
            var finished = 0;
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
            var currentPlayer = round%2
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
        
        function checkVictory(round) {
            horizontalCheck(round);
            verticalCheck(round);
            diagonalCheck(round);
            drawCheck(round);
        }
        
        function horizontalCheck(round) {
            var lines = document.querySelectorAll('#grid .row .cell')
            var lineTop = [lines[0].innerText, lines[1].innerText, lines[2].innerText];
            var lineMid = [lines[3].innerText, lines[4].innerText, lines[5].innerText];
            var lineBot = [lines[6].innerText, lines[7].innerText, lines[8].innerText];
            
            var ans = arrayCheck(lineTop, round)
            if (ans == true) {
                lines[0].style.background = 'green'
                lines[1].style.background = 'green'
                lines[2].style.background = 'green'
            }
            ans =arrayCheck(lineMid, round)
            if (ans == true) {
                lines[3].style.background = 'green'
                lines[4].style.background = 'green'
                lines[5].style.background = 'green'
            }
            ans = arrayCheck(lineBot,round)
            if (ans == true) {
                lines[6].style.background = 'green'
                lines[7].style.background = 'green'
                lines[8].style.background = 'green'
            }
        }
        
        function verticalCheck(round) {
            var lines = document.querySelectorAll('#grid .row .cell')
            var columns = document.querySelectorAll('#grid .row .cell')
            var colFirst = [lines[0].innerText, lines[3].innerText, lines[6].innerText];
            var colMid = [lines[1].innerText, lines[4].innerText, lines[7].innerText];
            var colLast = [lines[2].innerText, lines[5].innerText, lines[8].innerText];
        
            var ans = arrayCheck(colFirst, round)
            if (ans == true) {
                lines[0].style.background = 'green'
                lines[3].style.background = 'green'
                lines[6].style.background = 'green'
            }
            ans = arrayCheck(colMid, round)
            if (ans == true) {
                lines[1].style.background = 'green'
                lines[4].style.background = 'green'
                lines[7].style.background = 'green'
            }
            ans = arrayCheck(colLast, round)
            if (ans == true) {
                lines[2].style.background = 'green'
                lines[5].style.background = 'green'
                lines[8].style.background = 'green'
            }
        }
        
        function diagonalCheck(round) {
            var lines = document.querySelectorAll('#grid .row .cell')
            var diagonals = document.querySelectorAll('#grid .row .cell')
            var diagBotToTop = [lines[0].innerText, lines[4].innerText, lines[8].innerText];
            var diagTopToBot = [lines[6].innerText, lines[4].innerText, lines[2].innerText];
        
            var ans = arrayCheck(diagBotToTop, round)
            if (ans == true) {
                lines[0].style.background = 'green'
                lines[4].style.background = 'green'
                lines[8].style.background = 'green'
            }
            ans = arrayCheck(diagTopToBot, round)
            if (ans == true) {
                lines[6].style.background = 'green'
                lines[4].style.background = 'green'
                lines[2].style.background = 'green'
            }
        }
        
        function drawCheck(round) {
            if (round >= 9) {
                var WinDisplay = document.getElementsByClassName('win-display')
                WinDisplay[0].innerText = "Egalité, personne ne gagne !"
                $('#grid').addClass("won");
            }
        }
        
        function arrayCheck(array, round) {
            if (array[0] != "" && array[1] != "" && array[2] != "") {
                if (array[0] == array[1] && array[1] == array[2]) {
                    var player = (round-1)%2
                    win(player+1)
                    var finished = 1;
                    return true;
                }
            }
        }
        
        function win(player) {
            var P1 = document.getElementById('playerOne')
            var P2 = document.getElementById('playerTwo')
            var WinDisplay = document.getElementsByClassName('win-display')
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
      }, []);
      
        
    
    
    return (
        
          <div class='myBody'>
            <div class='myHeader'>
              <h1>Morpion</h1>
              <div id="currentPlayer">Joueur ??</div>
            </div>
        
            <div id="grid">
              <div class="row">
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
              </div>
              <div class="row">
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
              </div>
              <div class="row">
                <div class="cell"></div>
                <div class="cell"></div>
                <div class="cell"></div>
              </div>
        
              <span class="win-display">Joueur ?? a gagné !</span>
            </div>
        
            <div class="controls">
              <div class="scores">
                <div>
                  <span>Joueur 1</span>
                  <span id="playerOne">0</span>
                </div>
                <div>
                  <span>Joueur 2</span>
                  <span id="playerTwo">0</span>
                </div>
              </div>
        
              <button type="button" id="replay">Rejouer</button>
            </div>
            
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> */}
            {/* <script type='text/javascript' src="./scripts/morpion.js" defer></script> */}
          </div>

    );
    
}



export default MorpionComp;