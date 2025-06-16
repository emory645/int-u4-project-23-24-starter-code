// JavaScript goes here.
let position = document.querySelector(".Position")

let groupOneButtons = document.querySelectorAll(".button-group-one")

groupOneButtons.forEach(function(one) {
    one.addEventListener ('click', function(){
        position.style.display = "block";
    })
});


