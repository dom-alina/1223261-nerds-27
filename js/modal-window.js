var link = document.querySelector(".contacts-btn");
console.log(link);
var popup = document.querySelector(".feedback-window");
var close = document.querySelector(".feedback-close");
var button = document.querySelector(".feedback-btn");
var form = popup.querySelector(".feedback-form");


console.log(form);
console.log(name);
console.log(mail);
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
    console.log(popup);
     popup.style.display="block";
    });

close.addEventListener ("click", function (evt) {
    popup.style.display="none"; 
    });