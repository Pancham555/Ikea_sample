// Initializing/catching the elements
let btn = document.querySelector("#hamIcon")
let close = document.querySelector("#close")
let menu = document.querySelector("#menuHolder")

// The below code is for menu list whether it will occupy some space or full page based on window size
if (window.screen.width < 800) {
    btn.addEventListener("click", function () {
        if (menu.style.width != "100%") {
            menu.style.width = "100%"
        }
        else {
            menu.style.width = "0%"
        }
    })
}
else {
    btn.addEventListener("click", function () {
        if (menu.style.width != "500px") {
            menu.style.width = "500px"
        }
        else {
            menu.style.width = "0%"
        }
    })
}


// The below code is of the button which scrolls the page to top
close.addEventListener("click", function () {
    menu.style.width = "0px"
})

let scrollTop = document.querySelector("#toTop")
scrollTop.addEventListener("click", function () {
    document.documentElement.scrollTop = 0
})


/* The below code is of the scroll-top button,this below code code will make
 the button visible or invisible based the amount of page scrolled*/

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 2500, document.documentElement.scrollTop > 2500) {
        document.getElementById("toTop").style.opacity = "1"
        document.getElementById("toTop").style.bottom = "2rem"
        document.getElementById("toTop").style.visibility = "visible"

    } else {
        document.getElementById("toTop").style.opacity = "0"
        document.getElementById("toTop").style.bottom = "100%"
        document.getElementById("toTop").style.visibility = "hidden"

    }

}

// The below codes are footer links for small screens which will open/close the link set
let opener1 = document.querySelector("#openItems1")
let opener2 = document.querySelector("#openItems2")
let opener3 = document.querySelector("#openItems3")
let opener4 = document.querySelector("#openItems4")
let opening1 = document.querySelector("#openItems1")
let opening2 = document.querySelector("#openItems2")
let opening3 = document.querySelector("#openItems3")
let opening4 = document.querySelector("#openItems4")
let openerBox = [opener1, opener2, opener3, opener4]
let openingBox = [opening1, opening2, opening3, opening4]

openerBox[0].addEventListener("click", function () {
    if (openingBox[0].style.height != "auto") {
        openingBox[0].style.height = "auto"
    }
    else {
        openingBox[0].style.height = "30px"
    }
})

openerBox[1].addEventListener("click", function () {
    if (openingBox[1].style.height != "auto") {
        openingBox[1].style.height = "auto"
    }
    else {
        openingBox[1].style.height = "30px"
    }
})

openerBox[2].addEventListener("click", function () {
    if (openingBox[2].style.height != "auto") {
        openingBox[2].style.height = "auto"
    }
    else {
        openingBox[2].style.height = "30px"
    }
})

openerBox[3].addEventListener("click", function () {
    if (openingBox[3].style.height != "auto") {
        openingBox[3].style.height = "auto"
    }
    else {
        openingBox[3].style.height = "30px"
    }
})

