var link = document.querySelector(".contacts-btn");
console.log(link);
var popup = document.querySelector(".feedback-window");
var close = document.querySelector(".feedback-close");
var button = document.querySelector(".feedback-btn");
var form = popup.querySelector(".feedback-form");
var btn = popup.querySelector(".feedback-btn");
var all = document.querySelectorAll(".feedback-field")
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
      all.forEach(function(input_form) {
          input_form.classList.remove("feedback-field-invalid");
          input_form.classList.add("feedback-field");
      });
     popup.style.display="block";
    });

close.addEventListener ("click", function (evt) {
    popup.style.display="none"; 
    popup.classList.remove("feedback-error");
    });

form.addEventListener("submit", function (evt) {
    popup.classList.remove("feedback-error");
    var name = popup.querySelector("[name=name]");
    var message = popup.querySelector("[name=message]");
    var mail = popup.querySelector("[name=mail]");
    if (!name.value || !mail.value||!message.value) {
        evt.preventDefault();
        if (!name.value){
            all[0].classList.remove("feedback-field");
          all[0].classList.add("feedback-field-invalid");
        }
        if(!mail.value){
            all[1].classList.remove("feedback-field");
            all[1].classList.add("feedback-field-invalid");
        }
        if(!message.value){
            all[2].classList.remove("feedback-field");
            all[2].classList.add("feedback-field-invalid");
        }
        popup.classList.add("feedback-error");
    }else{
        console.log("ok");
    }
    },false); 