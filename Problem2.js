/**
 * Created by Muggi on 19-03-2015.
 */
var readline = require("readline");
function startGuessNumber() {
    var number = Math.floor((Math.random() * 100) + 1);
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var startcount = 0;
    function guess(count) {
        if (count == 5) {
            console.log("Not correct. 5 tries used. Game over");
            rl.close();
            process.exit(); //i am exiting this way, since rl.close still keeps the program running
        }else{
        rl.question("Guess the magic number (1-100)", function (answer) {
            count = count +1;
                if (answer < number) {
                    console.log("Too low. You have guessed " + count + " times");
                    guess(count);
                }
                if (answer > number) {
                    console.log("Too high. You have guessed " + count + " times");
                    guess(count);
                }
                if (answer == number) {
                    console.log("Correct");
                    rl.close();
                    process.exit();//i am exiting this way, since rl.close still keeps the program running
                }
            });
        }

    }

    guess(startcount);
}
startGuessNumber();

