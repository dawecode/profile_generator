const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question("What's an activity you like?", (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
    rl.question("What do you listen to while doing that?", (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);
      rl.question("Which meal is your favorite? (eg: dinner,brunch..etc)", (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`);
        rl.question("What's your favorite thing to eat for that meal?", (answer5) => {
          console.log(`Thank you for your valuable feedback: ${answer5}`);
          rl.question("What is your favorite sport?", (answer6) => {
            console.log(`Thank you for your valuable feedback: ${answer6}`);
            rl.question("What is your superpower? In a few words", (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer7}`);
              ///PROFILE
              const profile = (`${answer} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
              console.log(profile);
              rl.close();
            });
          });
        });
      });
    });
  });
});