/**
 * Created by Muggi on 19-03-2015.
 */
var http = require("http");
var url = "http://www.mieliestronk.com/corncob_lowercase.txt";


var readline = require("readline");

function startGuessWord() {

    http.get(url, function (response) {
        var buffer = "";
        response.setEncoding("UTF8");
        response.on("data", function (data) {
            buffer = data;


        });
        response.on("end", function () {
                var words = buffer.split("\n");
                for (var i = 0; i < words.length - 1; i++) {
                    words[i] = words[i].substring(0, words[i].length - 1)
                }
                //console.log(words);
                var word = words[Math.floor((Math.random() * words.length ))];
                console.log(word);
                var rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });

                function guessWord(howmanyguessed, turn) {

                    if (howmanyguessed == word.length) {
                        console.log("Word guessed! Game finished in " + turn + " turns, exiting")
                        rl.close();
                        process.exit();
                    }
                    else {
                        console.log("Turn:" + turn);
                        console.log("Word length is: " + word.length);
                        console.log("Words guessed so far: " + word.substring(0, howmanyguessed))
                        rl.question("Guess the next letter or whole the word", function (guess) {
                            if (guess == word) {
                                console.log("Word guessed in turn " + turn + "! Congratulations!");
                                rl.close();
                                process.exit();
                                turn = turn + 1;
                            } else {
                                if (guess == word.charAt(howmanyguessed)) {
                                    howmanyguessed = howmanyguessed + 1;
                                    turn = turn + 1;
                                    console.log("Letter was correct!");
                                    guessWord(howmanyguessed, turn);
                                } else {
                                    console.log("Letter was not correct");
                                    turn = turn + 1;
                                    guessWord(howmanyguessed, turn);
                                }
                            }

                        })
                    }


                }

                guessWord(1, 1);
            }
        )

    });


}

startGuessWord();