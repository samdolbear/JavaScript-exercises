// Exercise 1 START = Swap the values
      //     var a = "3";
      //     var b = "8";

      //     var c = a;
      //     a = b;
      //     b = c;

      //     console.log("a is " + a);
      //     console.log("b is " + b);
      // Exercise 1 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 2 START = String Concatenation
      // var firstName = prompt("What's your name? ");
      // var secondName = prompt("What's your last name? ");

      // Commented out to not get int eh way of future exercises

      // alert("Hi, " + firstName + " " + secondName + "!")
      // Exercise 2 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 3 START = Return back to the user how many characters they wrote in the prompt
      // var userInput = prompt("What's on your mind? ");
      // totalLength = 240;
      // var charLengthOfInput = userInput.length;
      // var remainingLength = 240 - charLengthOfInput
      // alert("You used " + charLengthOfInput + " characters! You have " + remainingLength + " characters remaining!")

      // In less lines
      // alert("You have written " + userInput.length + " characters, you've got " + (240 - userInput.length) + " characters remaining!")
      // Exercise 3 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 4 START = Use slice function to force 240 character limit on exercise 3
      // var userInput = prompt("What's on your mind? ");
      // var userInputRestricted = userInput.slice(0, 50)
      // alert(userInputRestricted)

      // In less lines
      // alert(prompt("What's on your mind? ").slice(0, 50));
      // Exercise 4 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 5 START = Ask for name and return it in alert with only first letter capitalized
      // var name = prompt("What's your name? ");
      // var lowerCaseName = name.toLowerCase();
      // var firstLetter = lowerCaseName.slice(0, 1).toUpperCase();
      // var restOfName = lowerCaseName.slice(1, name.length);

      // alert("Hi " + firstLetter + restOfName);
      // Exercise 5 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 6 START = Calculate human age of dogs
      // prompt user for age of dog
      // convert the dog age to human age
      // alert the answer

      // var dogAge = prompt("How old is your dog? ");
      // var humanAge = ((dogAge - 2) * 4) + 21;
      // alert("The human age of your dog is " + humanAge + "!");
      // Exercise 6 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 7 START = Life in Weeks Coding Exercise
      // ask age and store value
      // function lifeLeft(age){
      //         // Return days, weeks and months left assuming 90 year life span and 365 days in year.
      //         var lifeSpan = 90 - age;
      //         var remainginLifeInMonths = lifeSpan * 12;
      //         var remainginLifeInweeks = lifeSpan * 52;
      //         var remainginLifeIndays = lifeSpan * 365;
      //         console.log("You have " + remainginLifeIndays + " days, " + remainginLifeInweeks + " weeks, and " + remainginLifeInMonths + " months left.");
      // }
      // Exercise 7 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 8 START = BMI calculator
      function bmiCalculator(weight, height) {
        var bmi = weight / Math.pow(height, 2);
        return Math.round(bmi);
      }
      // Exercise 8 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 9 START = Love calculator
      // var name1 = prompt("What's your name? ")
      // var name2 = prompt("What's the crushes name? ")
      // if ((rng = love()) > 70) {
      //         alert("You have " + rng + "% love strength it's gonna work out!");
      // } else {
      //         alert("You have a " + rng + "% chance of love working out!");
      // }

      // // alert("You have a " + love() + "% chance of love working out!")
      // function love(){
      //         var rng = Math.random();
      //         rng = rng * 100;
      //         rng = Math.floor(rng) + 1;
      //         return rng;
      // }
      // Exercise 9 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 10 START = bmi 2
      function bmiCalculator(weight, height) {
        var bmi = weight / Math.pow(height, 2);
        bmi = Math.round(bmi);
        if (bmi >= 25) {
          return "Your BMI is " + bmi + ", so you are overweight.";
        } else if (bmi >= 18.5 && bmi < 25) {
          return "Your BMI is " + bmi + ", so you have a normal weight.";
        } else {
          return "Your BMI is " + bmi + ", so you are underweight.";
        }
      }
      // Exercise 10 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 11 START = Leap year
      function isLeap(year) {
        if (year % 4 !== 0) {
          return "Not leap year.";
        } else if (year % 4 == 0 && year % 100 !== 0) {
          return "Leap year.";
        } else if (year % 4 == 0 && year % 100 == 0 && year % 400 !== 0) {
          return "Not leap year.";
        } else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
          return "Leap year.";
        }
      }
      // Exercise 11 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 12 START = Guests
      // var guestList = ["Phill", "Amy", "Bill", "Nameless Athenian", ]
      // name = prompt("What's your name? ")
      // if (guestList.includes(name)) {
      //         alert("Welcome, " + name + "!");
      // } else {
      //          alert("Sorry, you're not on the guest list.");
      // }
      // Exercise 12 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 13 START = FizzBuzz

      // Then add in a while loop
      var output = [];
      var count = 1;
      function fizzbuzz() {
        while (count <= 100) {
          if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
          } else if (count % 3 === 0) {
            output.push("Fizz");
          } else if (count % 5 === 0) {
            output.push("Buzz");
          } else {
            output.push(count);
          }

          count++;
        }
        console.log(output);
      }
      // Exercise 13 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 14 START = Who's paying?

      // Select random name from list of names
      // person selected pays the bill
      // No console log or alert do it like the exercise 11
      // Make array with names
      // rng for population of array which will then be the position we select
      // return the object in that poosition as the one who is paying etc

      function whosPaying() {
        var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
        var rng = Math.floor(Math.random() * names.length);
        var payer = names[rng];
        return payer + " is going to buy launch today!";
      }
      // Exercise 14
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 15 START = beer song
      // https://www.99-bottles-of-beer.net/lyrics.html
      function beer() {
        var i = 99;
        while (i >= 2) {
          console.log(
            i + " bottles of beer on the wall, " + i + " bottles of beer."
          );
          i--;
          console.log(
            "Take one down and pass it around, " +
              i +
              " bottles of beer on the wall."
          );
        }
        while (i == 1) {
          console.log(
            i + " bottle of beer on the wall, " + i + " bottle of beer."
          );
          i--;
          console.log(
            "Take one down and pass it around, no more bottles of beer on the wall."
          );
        }
        return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
      }
      // Exercise 15 END
      //-----------------------------------------------------------------------------------------------------------
      // Exercise 16 START = Fibonacci
      // Goal = output array of the fib sequence of size n
      // define initial array
      // is n=1? out 0
      // is n=2 out 1
      // for n > 2 sum precious 2 up to limit
      // push each iteration to array
      // output array to console

      function fibonacci(n) {
        var sequence = [];
        if (n === 1) {
          return [0];
        } else if (n === 2) {
          return [0, 1];
        } else if (n >= 3) {
          sequence = [0, 1];
          for (var i = 2; i < n; i++) {
            // var sum = sequence[i - 1] + sequence[i - 2];
            // sequence.push(sum);
            sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
          }
        }
        return sequence;
      }
      // Exercise 16 END
//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
// Document Object Model




