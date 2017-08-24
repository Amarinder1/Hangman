var wordButton = $('#start').find('#inputB');
var wordInput = $('#start').find('.input');
var guessButton = $('#start').find('#guessB');
var guessInput = $('#start').find('.guess');
var finalAnswer = $('.gameBoard').find('.revealWord');
var body = $('body');
var numWrong = $('.numberWrong');
var rematchButton = $('#start').find('#rematch');
var vicTag = $('.scoreboard').find('#win');
var lossTag = $('.scoreboard').find('#loss');
var hardButton = $('#start').find('#hardB');
var hard = ['Hard Pill to Swallow', 'Throw in the Towel', 'Jumping the Gun', 'Back to Square One',
'Elvis has left the Building', 'The Jig is Up', 'A Chip on Your Shoulder', 'Love Birds','Fit as a fiddle',
'Every Cloud Has a silver Lining', 'Hands Down', 'Heads Up', 'Down for the Count', 'Burst Your Bubble',
'Knuckle Down', 'Needle in a haystack, Down to the Wire', 'Top Drawer', 'Foaming at the Mouth',
'If you cannot stand the heat get out of the kitchen', 'Back to the Drawing Board', 'Go Out on a Limb',
'Beating around the Bush', 'Wild Goose Chase', 'Money does not grow on trees', 'Raining cats and dogs',
'Man of a few words', 'Elephant in the Room', 'No Brainer', 'My cup of tea', 'On the Ropes',
'Bless Up', 'I love you Asahd', 'Stay away from THEY', 'Making my way downtown', 'It is time to Duel',
'Pikachu I Choose You', 'I am a Barbie Girl in a Barbie World'];

var guess = '';
var answer = '';
var arrayAnswer = [];//what user inputs as word to be guessed
var arrayGuess = [];//what second person guesses
var arrayFinal = [];//used to create the game board
var wrong = 0;//counter for wrong guesses
var final;
var loss = 0;//number of game losses
var victory = 0;//number of games wins
var numGames = 0;//counter for games won in a row

function begin(){
  rematchButton.addClass('disabled');
  guessInput.addClass('disabled');
  guessButton.addClass('disabled');
  wordButton.removeClass('disabled');
  wordInput.removeClass('disabled');
  guessInput.prop('disabled', true);
  guessButton.prop('disabled', true);
  rematchButton.prop('disabled', true);
  wordInput.prop('disabled', false);
  hardMode();
}

begin();
//getting word(s) to guess from user, splits it into charcters and put them in an array
//also checks if word is a space
function getWord(){
  wordButton.addClass('disabled');
  wordInput.addClass('disabled');
  wordInput.prop('disabled', true);
  guessButton.removeClass('disabled');
  guessInput.removeClass('disabled');
  guessInput.prop('disabled', false);
  answer = wordInput.val().toLowerCase();
  if(answer.trim() == ''){
    alert('Enter a word');
    begin();
    return false;
  }
  else{
    arrayAnswer = answer.split('');
    console.log(arrayAnswer);
    createGameBoard();
    wordInput.val('');
    return true;
  }
}

//checking if the guess the user makes is a new letter or a letter that was already guessed
function checkGuess(){
  for (var i = arrayGuess.length; i > 0; i --){
    if (arrayGuess[i] === arrayGuess[0]){
      alert('You already guessed this letter...');
      i = -1;
      return true;
    }
  }
}

//going to take letter that user inputs and compare it to letters in the word
function compareLetter(){
  if(!checkGuess()){
    for (var i = 0; i < arrayAnswer.length; i++){
      if (arrayAnswer[i] == arrayGuess[0]){
        revealLetter();
        win();
      }
    }
    if (!arrayAnswer.includes(arrayGuess[0])){
      wrong++;
      numWrong.text('Missed Guesses: ' + wrong);
      if (wrong < 5){
        alert('Ha! Wrong letter');
      }
      else{
        lose();
      }
    }
  }
}

//getting a letter guess from user and putting it into an array
//also checks if user puts in more than 1 charcter or a space
function getGuess(){
  guess = guessInput.val().toLowerCase();
  if(guess.trim() == ''){
    alert('Guess a letter!!');
  }
  else{
    if (guess.length == 1){
      arrayGuess.unshift(guess);
      console.log(arrayGuess);
      guessInput.val('');
      compareLetter();
    }
    else{
      alert("You can only guess 1 letter at a time");
    }
  }
}

//creates the game board
//will create game board that will take multiple words after!!!!!
function createGameBoard(){
  for (var i = 0; i < arrayAnswer.length; i++){
    if (answer[i] == ' '){
      arrayFinal.push(' ');
    }
    else{
      arrayFinal.push('-');
    }
  }
  finalAnswer.append(arrayFinal);
}

//will show the correct letter
function revealLetter(){
  for (var i = 0; i < arrayAnswer.length; i++){
    if (arrayAnswer[i] == arrayGuess[0]){
      arrayFinal[i] = arrayGuess[0];
      final = arrayFinal.join('');
    }
  }
  finalAnswer.text(final);
}

//happens if user has won the game
function win(){
  if(final == answer && wrong !=5){
    guessButton.addClass('disabled');
    guessInput.addClass('disabled');
    rematchButton.removeClass('disabled');
    rematchButton.prop('disabled', false);
    wordButton.prop('disabled', true);
    guessInput.prop('disabled', true);
    victory++;
    numGames++;
    finalAnswer.text('YOU WIN!!! THE WORD WAS ' answer.toUpperCase);
    finalAnswer.css('color', 'green');
    vicTag.text("Wins: " + victory);
  }
}

//happens when user has lost the game
function lose(){
    numWrong.text('Missed Guesses: ' + wrong);
    finalAnswer.text('YOU LOSE!!! THE WORD WAS ' + answer.toUpperCase());
    finalAnswer.css('color', 'red');
    loss++;
    numGames = 0;
    rematchButton.removeClass('disabled');
    rematchButton.prop('disabled', false);
    guessButton.addClass('disabled');
    guessInput.addClass('disabled');
    guessInput.prop('disabled', true);
    lossTag.text('Losses: ' + loss);
}

//resets the game
function rematch(){
  InARow();
  begin();
  guess = '';
  answer = '';
  arrayAnswer = [];
  arrayGuess = [];
  arrayFinal = [];
  wrong = 0;
  final = '';
  finalAnswer.text('');
  numWrong.text('Missed Guesses: ');
  finalAnswer.css('color', 'black');
}

// when user gets 10 wins, will show 'hard mode' button
function hardMode(){
  if(victory < 10){
    hardButton.css('visibility', 'hidden');
  }
  else{
    hardButton.css('visibility', 'visible');
    wordButton.addClass('disabled');
    wordInput.addClass('disabled');
    wordInput.prop('disabled', true);
    hardButton.removeClass('disabled');
  }
}

//when user clicks 'hard mode button', will generate random word to guess
function startHard(){
  guessButton.removeClass('disabled');
  guessInput.removeClass('disabled');
  guessInput.prop('disabled', false);
  hardButton.addClass('disabled', true);
  answer = hard[Math.floor(Math.random()*hard.length)].toLowerCase();
  arrayAnswer = answer.split('');
  createGameBoard();
  console.log(arrayAnswer);
  console.log()
}

//checks to see if user has won 3 or more games in a row
function InARow(){
  if(numGames >= 3){
    alert('WOOHOO!! YOU HAVE WON ' + numGames + ' GAMES IN A ROW!!');
  }
  else if(numGames == 0){
    alert('I thought you were good at this game. I guess I was wrong');
  }
}

//lets user press enter to submit word to be guessed
wordInput.keyup(function(event){
    if(event.keyCode == 13){
        wordButton.click();
    }
});

//allows user to press enter to submit letter for guess
guessInput.keyup(function(event){
    if(event.keyCode == 13){
        guessButton.click();
    }
});

wordButton.on('click', getWord);
guessButton.on('click', getGuess);
rematchButton.on('click', rematch);
hardButton.on('click', startHard);
