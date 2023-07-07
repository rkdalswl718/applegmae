const gameBoard = document.querySelector('.gameBoard');
const scoreDisplay = document.querySelector('.score');
let score = 0;

gameBoard.addEventListener('click', (event) => {
    if (event.target.classList.contains('apple')) {
        event.target.remove(); //클릭되면 사과 제거
        score++;
        scoreDisplay.textContent = score;
        createApple();
    }
});

const createApple = () => {
    const apple = document.createElement('img');
    apple.src = 'https://emojigraph.org/media/apple/red-apple_1f34e.png';
    apple.classList.add('apple');
    const x = getRandomCoordinate();
    const y = getRandomCoordinate();
    apple.style.left = x + 'px';
    apple.style.top = y + 'px';

    gameBoard.appendChild(apple);
};

const getRandomCoordinate = () => {
    return Math.floor(Math.random() * 400); // 랜덤 좌표 400
  };
  

createApple();
