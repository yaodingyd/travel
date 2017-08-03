document.addEventListener('DOMContentLoaded', function(){
  var wordStates = document.querySelectorAll(".list-of-states li");
  var svgStates = document.querySelectorAll("#states > *");

  function addOnFromList(el) {
    var stateCode = el.getAttribute("data-state");
    var svgState = document.querySelector("#" + stateCode);
    el.classList.add("on");
    svgState.classList.add("on");
  }

  function addOnFromState(el) {
    var stateId = el.getAttribute("id");
        console.log('enter ' + stateId);
    var wordState = document.querySelector("[data-state='" + stateId + "']");
    //el.classList.remove("on");
    wordState.classList.add("on");
  }

  function removeOnFromState(el) {
    var stateId = el.getAttribute("id");
        console.log('leave ' + stateId);

    var wordState = document.querySelector("[data-state='" + stateId + "']");
    //el.classList.add("on");
    wordState.classList.remove("on");
  }

  svgStates.forEach(function(el) {
    el.addEventListener("mouseenter", function() {
      addOnFromState(el);
    });
    el.addEventListener("mouseleave", function() {
      removeOnFromState(el);
    });
    
    el.addEventListener("touchstart", function() {
      removeOnFromState(el);
      addOnFromState(el);
    });
  });



  var states = shuffle(['NY', 'PA', 'DC', 'MA', 'WI']);
  
  for(var i = 0; i < states.length; i++) {
    var state = document.getElementById(states[i]);

    (function (state) {
      setTimeout(function(){
        state.classList.add('on');
      }, (i + 1) * 200);
    } (state));
  }

})

function shuffle (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}