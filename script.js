// JavaScript goes here.
let position = document.querySelector(".Position")
let button0 = document.querySelector(".button0")
let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")
let button4 = document.querySelector(".button4")
let button5 = document.querySelector(".button5")
let button6 = document.querySelector(".button6")
let button7 = document.querySelector(".button7")
let button8 = document.querySelector(".button8")
let button9 = document.querySelector(".button9")
let button10 = document.querySelector(".button10")
let button11 = document.querySelector(".button11")
let button12 = document.querySelector(".button12")
let image1 = document.querySelector(".image1")
let image2 = document.querySelector(".image2")
let image3 = document.querySelector(".image3")
let image4 = document.querySelector('.image4')
let image5 = document.querySelector(".image5")

button1.addEventListener('click', function(){
    button6.addEventListener('click', function (){
        button7.addEventListener('click', function(){
            button9.addEventListener('click',function(){
                image1.style.display= "block";
            })
        })
    })
})

button2.addEventListener('click', function(){
    button4.addEventListener('click', function (){
        button8.addEventListener('click', function(){
            button9.addEventListener('click',function(){
                image2.style.display= "block";
            })
        })
    })
})

button3.addEventListener('click', function(){
    button4.addEventListener('click', function (){
        button7.addEventListener('click', function(){
            button10.addEventListener('click',function(){
                image3.style.display= "block";
            })
        })
    })
})

button1.addEventListener('click', function(){
    button5.addEventListener('click', function (){
        button8.addEventListener('click', function(){
            button11.addEventListener('click',function(){
                image4.style.display= "block";
            })
        })
    })
})

button1.addEventListener('click', function(){
    button5.addEventListener('click', function (){
        button7.addEventListener('click', function(){
            button9.addEventListener('click',function(){
                image1.style.display= "block";
            })
        })
    })
})

button0.addEventListener('click', function(){
    button5.addEventListener('click', function (){
        button7.addEventListener('click', function(){
            button12.addEventListener('click',function(){
                image5.style.display= "block";
            })
        })
    })
})







