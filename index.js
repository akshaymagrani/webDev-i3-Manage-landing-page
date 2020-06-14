//function myFunction(x) {
//if (x.matches) { // If media query matches
function mobileNavigationAppear() {
    var appear = document.getElementById("mobile-nav");
    var iconDisappear = document.getElementById("hamburger");
    var iconAppear = document.getElementById("close");
    var element = document.getElementById("Navigation");
    element.classList.add("bg-gradient");
    appear.style.display = "block";
    iconDisappear.style.display = "none";
    iconAppear.style.display = "block";
}
function mobileNavigationDisappear() {
    var disappear = document.getElementById("mobile-nav");
    var iconAppear = document.getElementById("close");
    var iconDisappear = document.getElementById("hamburger");
    var element = document.getElementById("Navigation");
    element.classList.remove("bg-gradient");
    disappear.style.display = "none";
    iconAppear.style.display = "none";
    iconDisappear.style.display = "block";
}
    //}
//}

//var x = window.matchMedia("(max-width: 768px)");
//myFunction(x);// Call listener function at run time