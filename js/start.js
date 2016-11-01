start();
function start () {
  'use strict';
  
  // listeners
  $( document ).ready( main );

  swal.setDefaults({ 
    // Window config
    title: "", // Throws an error if it is not declared
    imageUrl: "images/pirate-icon.ico",
    // text: "Do ye like yer drinks strong?",
    animation: "slide-from-top",
    allowEscapeKey: false,
    allowOutsideClick: false,
    // Confirm button config
    showConfirmButton: true,
    // closeOnConfirm: false,
    confirmButtonText: "Yes",
    confirmButtonColor: "#00ff00",
    // Cancel button config
    showCancelButton: true,
    // closeOnCancel: false,
    cancelButtonText: "No",
    cancelButtonColor: "ff0000",
  });

  const Questions = {
    strong: "Do ye like yer drinks strong?",
    salty: "Do ye like it with a salty tang?",
    bitter: "Are ye a lubber who likes it bitter?",
    sweet: "Would ye like a bit of sweetness with yer poison?",
    fruity: "Are ye one for a fruity finish?",
  };

  const Ingredients = {
    strong: ['glug of rum', 'slug of whisky', 'splash of gin'],
    salty: ['olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
    bitter: ['shake of bitters', 'splash of tonic',
             'twist of lemon peel'],
    sweet: ['sugar cube', 'spoonful of honey', 'splash of cola'],
    fruity: ['slice of orange', 'dash of cassis', 'cherry on top'],
  };

  const Patron = {};

  class Bartender {
    constructor (Patron) {
      // Question 1:
      let question = Questions.strong;
      let questionObj = { title: question };
      swal(questionObj).then(function(result) {
        Patron.strong = result;
        console.log(Patron);
        nextQuestion();
      }, function(dismiss) {
        // dismiss can be 'cancel', 'overlay', 'close', or 'timer'
        if (dismiss === 'cancel') {
          Patron.strong = false;
          console.log(Patron);
          nextQuestion();
        } else {
          console.log("Expected true or 'cancle'");
          console.log("User Input was: ", dismiss);
          console.log(
            "Posible vals: 'cancel', 'overlay', 'close', or 'timer'");
        }
      });
      function nextQuestion () {
        // Question 2:
        question = Questions.salty;
        questionObj = { title: question };
        swal(questionObj).then(function(result) {
          Patron.salty = result;
          console.log(Patron);
          question3();
        }, function(dismiss) {
          // dismiss can be 'cancel', 'overlay', 'close', and 'timer'
          if (dismiss === 'cancel') {
            Patron.salty = false;
            console.log(Patron);
          question3();
          }
        });
      }
      function question3 () {
        // Question 3:
        question = Questions.bitter;
        questionObj = { title: question };
        swal(questionObj).then(function(result) {
          Patron.bitter = result;
          console.log(Patron);
          question4();
        }, function(dismiss) {
          // dismiss can be 'cancel', 'overlay', 'close', and 'timer'
          if (dismiss === 'cancel') {
            Patron.salty = false;
            console.log(Patron);
          question4();
          }
        });
      }
      function question4 () {
        // Question 4:
        question = Questions.sweet;
        questionObj = { title: question };
        swal(questionObj).then(function(result) {
          Patron.sweet = result;
          console.log(Patron);
          question5();
        }, function(dismiss) {
          // dismiss can be 'cancel', 'overlay', 'close', and 'timer'
          if (dismiss === 'cancel') {
            Patron.sweet = false;
            console.log(Patron);
          question5();
          }
        });
      }
      function question5 () {
        // Question 5:
        question = Questions.fruity;
        questionObj = { title: question };
        swal(questionObj).then(function(result) {
          Patron.fruity = result;
          console.log(Patron);
          makeDrink();
        }, function(dismiss) {
          // dismiss can be 'cancel', 'overlay', 'close', and 'timer'
          if (dismiss === 'cancel') {
            Patron.fruity = false;
            console.log(Patron);
          makeDrink();
          }
        });
      }
      function makeDrink () {
        const str = "Here is your drink:\n\"Old Man & The Sea\"";
        const type = 'success';
        const obj = {
          title: str,
          type: type,
          imageUrl: "images/pirate-icon.ico",
        };
        swal.resetDefaults();
        swal(obj);
      }
    }
  }
  function main () {
    let bart = new Bartender(Patron);
  }
}
