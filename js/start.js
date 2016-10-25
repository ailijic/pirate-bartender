'use strict'

function Questions () {
  this.strong = "Do ye like yer drinks strong?"
  this.salty = "Do ye like it with a salty tang?"
  this.bitter = "Are ye a lubber who likes it bitter?"
  this.sweet = "Would ye like a bit of sweetness with yer poison?"
  this.fruity = "Are ye one for a fruity finish?"
}

function Ingredients () {
  this.strong = ['glug of rum', 'slug of whisky', 'splash of gin']
  this.salty = ['olive on a stick', 'salt-dusted rim', 'rasher of bacon']
  this.bitter = ['shake of bitters', 'splash of tonic', 'twist of lemon peel']
  this.sweet = ['sugar cube', 'spoonful of honey', 'splash of cola']
  this.fruity = ['slice of orange', 'dash of cassis', 'cherry on top']
}

function Pantry () {
  this.ingredients = new Ingredients()
}

function Bartender () {
  this.questions = new Questions()
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
})

$( document ).ready( function start () {
  let question1 = {title: "Do ye like yer drinks strong?"} 
  swal(question1, function (inputValue) {
      if (inputValue === false) return false;
      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }
      swal("Nice!", "You wrote: " + inputValue, "success");
  })
})
/////////////////////////////
// Create ask() method and have it use sawl()