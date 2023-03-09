window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);

})

window.addEventListener("scroll", function(){
    var header = document.querySelector("header")
    header.classList.toggle("dos",window.scrollY > 700)
})