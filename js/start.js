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
    closeOnConfirm: false,
    confirmButtonText: "Yes",
    confirmButtonColor: "#00ff00",
    // Cancel button config
    showCancelButton: true,
    closeOnCancel: false,
    cancelButtonText: "No",
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
  
  let Pantry = function constructor (Ingredients) {
    let that = {};
    let Array.prototype.rand = 
    // What does this need to do?
    // // A: Return a random ingrediant based on the type the bartender
    // // // wants?
    let fetchIngredient = function (ingredientType) {
      // Return a random ingredint from the list of indredientType
      const ret = rand
      return Ingredients
  };

  function Bartender () {
    // What does this need to do?
    // createDrink method
  }
    
  function UI (obj) {
    // declare questions to ask
    const questionDict = obj.hasOwnProperty('questions') 
      ? obj.questions : obj
    
    this.ask = askQuestionsFunction
    
    function askQuestionsFunction () {
      for (let question in questionDict) {
        console.log(questionDict[question])
      }
    }
  }

  function main () {
    // Define bartender
    // Define patron
    // Bartender asks questions
    // Bartender makes drink 
    let question1 = {title: "Do ye like yer drinks strong?"};
    swal(question1, function (inputValue) {
        if (inputValue === false) return false;
        if (inputValue === "") {
          swal.showInputError("You need to write something!");
          return false;
        }
        swal("Nice!", "You wrote: " + inputValue, "success");
    });
  }
}
  /////////////////////////////
  // Create ask() method and have it use sawl()
