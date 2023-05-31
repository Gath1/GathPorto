
const form = document.querySelector("form");
const ty = document.querySelector(".ty");
const inputname = document.querySelector('input[name="name"]');
const inputemail = document.querySelector('input[name="email"]');
const inputphone = document.querySelector('input[name="phone"]');
const inputcheckbox = document.querySelector('input[name="agreement"]');
// const select = document.querySelector('input[name="preference"]');

let isFormValid = false;
let boxvalid = false;
let selectvalid = false;

const inputvalidation = () => {
    inputname.classList.remove("invalid");
    inputname.nextElementSibling.classList.add("hidden");

    inputemail.classList.remove("invalid");
    inputemail.nextElementSibling.classList.add("hidden");
    
    inputphone.classList.remove("invalid");
    inputphone.nextElementSibling.classList.add("hidden");

    isFormValid = true;

    if (!inputname.value) {
        inputname.classList.add("invalid");
        inputname.nextElementSibling.classList.remove("hidden");
        
        isFormValid = false;
    }

    if (!inputemail.value) {
        inputemail.classList.add("invalid");
        inputemail.nextElementSibling.classList.remove("hidden");
   
        isFormValid = false;
    }

    if (!inputphone.value) {
        inputphone.classList.add("invalid");
        inputphone.nextElementSibling.classList.remove("hidden");
    
        isFormValid = false;
    }
};

const pref = () => {
    var selectval = document.getElementById("preference").value;
    selectvalid = false;
    console.log(selectval);

    if (document.getElementById("preference").value == 'sc') {
        selectvalid = true;
    }
    else if (document.getElementById("preference").value == 'bc') {
        selectvalid = true;
    }
    else {
        alert("Please select one in the preference field");
        return false;
    }
}

const checkbox = () => {
    boxvalid = false;

    if (document.getElementById("agreement").checked) {
        
        boxvalid = true;
    }
    else {
        alert("Please check the agreement box");
        return false;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputvalidation();
    pref();
    checkbox();

    if (isFormValid && boxvalid && selectvalid) {
        form.remove();
        ty.classList.remove("hidden");
    }
}); 

inputname.addEventListener, inputemail.addEventListener, inputphone.addEventListener("input", () => {
    inputvalidation();
})