// Reset the game
function resetGame(){
    for(let i = 1; i <= 9; i++) {
		clearBoard(i);
	}
    document.turn = "X"; // First turn
    document.winner = null; // winner is null
    setMessage("Player " + document.turn + ", please start the game.");
}

// Reset squares
function clearBoard(number) {
	document.getElementById("s" + number).innerText = "";
}

// Setting message
function setMessage(message){
    document.querySelector('#message').innerText = message;
}

// Determining next move
function nextMove(squar){
    // this will allow users not go further once player has won the game
    if (document.winner != null) {
		setMessage("Player " + document.turn + " has already won. Please reset the game to play again!");
    // Checking if squar is empty or already used
    }else if(squar.innerText == ""){
        squar.innerText = document.turn;
    swaptTurn(); // Calling function
    }else{
        setMessage("No cheating, choose another square.");
    } 
}

// Swaping user's turn setting messages accordingly
function swaptTurn(){
    if(checkForWinner(document.turn)){
        setMessage("Contratulations! Player " + document.turn + " has won!");
        document.winner = document.turn; // this will allow users not go further once player has won the game
    }else if(checkForDraw(document.turn)) {
		setMessage("Its a draw, Play again!");
    }else if(document.turn == "X"){
        document.turn = "O";
        setMessage("Player " + document.turn + ", it's your turn."); // Setting messsage when each player enter in the squar
    } else {
        document.turn = "X";
        setMessage("Player " + document.turn + ", it's your turn."); // Setting messsage when each player enter in the squar
    }
}

// Checking for winner with all the permutations and combinations
function checkForWinner(move) {
	let result = false;
	if(checkRow(1,2,3, move) ||
	   checkRow(4,5,6, move) ||
	   checkRow(7,8,9, move) ||
	   checkRow(1,4,7, move) ||
	   checkRow(2,5,8, move) ||
	   checkRow(3,6,9, move) ||
	   checkRow(1,5,9, move) ||
	   checkRow(3,5,7, move)) {
	   	result = true;
	   }
	   return result;
}

// Checking for draw
function checkForDraw(move) {
	let draw = false;
	if (((getBox(1) == "X") || (getBox(1) == "O")) && 
		((getBox(2) == "X") || (getBox(2) == "O")) && 
		((getBox(3) == "X") || (getBox(3) == "O")) && 
		((getBox(4) == "X") || (getBox(4) == "O")) && 
		((getBox(5) == "X") || (getBox(5) == "O")) && 
		((getBox(6) == "X") || (getBox(6) == "O")) && 
		((getBox(7) == "X") || (getBox(7) == "O")) && 
		((getBox(8) == "X") || (getBox(8) == "O")) && 
		((getBox(9) == "X") || (getBox(9) == "O"))) {
         draw = true;
        }
         return draw;  
}

// Checking row
function checkRow(a, b, c, move) {
	let result = false;
	if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
		result = true;
	}
	return result;
}

// Finding exact squar
function getBox(number) {									
	return document.getElementById("s" + number).innerText;	
}

