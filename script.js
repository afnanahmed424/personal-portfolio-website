var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

var links = navLinks.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
}

var myForm = document.getElementById("contactForm");
myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    alert("Thank you, " + name + "! Your message has been received.");
    myForm.reset();
});
