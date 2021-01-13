const navigation = document.querySelector(".header .container nav")
const bars = document.querySelector(".header .container .fa-bars")
const times = document.querySelector(".header .container nav ul li i.fa-times");
bars.addEventListener("click",function(){
    toggles();
});
times.addEventListener("click",function(){
    toggles();
});
function toggles(){
    navigation.classList.toggle("kaydir");
    document.body.classList.toggle("overflow-hidden");
}