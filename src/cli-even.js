import readlineSync from 'readline-sync';

const getRandomeNumber = () => Math.floor(Math.random() * 100);

const isNumberEven = (item) => {
    if (item % 2 === 0) {
        return true;
    }
    return false;
}

const getGame = () => {
    const name = readlineSync.question('May I have youre name?');
    console.log(`Hello ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for(let i = 1; i <= 3; i += 1) {
        const number = getRandomeNumber();
        console.log(`Question: ${number}`);
        const youAnswer = readlineSync.question('Your answer: ');
        
        if (number % 2 === 0) {
            if (youAnswer === 'yes') {
                console.log('Correct!');
                continue;
            } else {
                console.log(`${youAnswer} s wrong answer ;(. Correct answer was 'no'.`);
                console.log(`Let's try again, ${name}`);
                return;
            }
        }

        if (number % 2 !== 0) {
            if (youAnswer === 'no') {
                console.log('Correct!');
                continue;    
            } else {
                console.log(`${youAnswer} s wrong answer ;(. Correct answer was 'no'.`);
                console.log(`Let's try again, ${name}`);
                return;
            }
        }
    }

    console.log(`Congratulations, ${name}!`);

}

export default getGame;