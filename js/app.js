let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * 10 + 1),
    quessesLeft = 2;

    const game =  document.querySelector("#game"),
          minNum = document.querySelector(".min-num"),
          maxNum = document.querySelector(".max-num"),
          guessBtn = document.querySelector("#guess-btn"),
          guessInput = document.querySelector("#guess-input"),
          message = document.querySelector(".message");
    
minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value);

    // validation
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage('Нужно ввести число от ' + min + ' до ' + max, "red");
    }
    

    // check if won
    if (guess === winningNum) {
        guessInput.disabled = true;
        guessInput.style.border = "1px solid green";
        setMessage('Поздравляем!!! Вы угадали число ' + winningNum, "green");
        let newGame = guessBtn.innerHTML = "Новая игра";
        if (newGame) {
            guessBtn.addEventListener("click", function () {
                location.reload();
            })
        }
    } else {
        guessInput.style.border = "2px solid red";
        message.style.color = "red";
        message.textContent = `Вы не угадали число, у вас осталось ${quessesLeft} попытки(а)`;
        guessInput.value = "";
    }

    quessesLeft = quessesLeft - 1;
    if (quessesLeft == -1 && guessInput.value != winningNum) {
        message.textContent = `Игра окончена. Вы проиграли. Число было ${winningNum}`;
        guessBtn.innerHTML = "Новая игра";
        guessBtn.addEventListener("click", function () {
            location.reload();
        })
    }

})

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}
