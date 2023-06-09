document.addEventListener("DOMContentLoaded", function () {
    var formButton = document.getElementById("form_button");
    var modal = document.getElementById("my-modal");

    formButton.addEventListener("click", function () {
        var nameInput = document.getElementById("name_input");
        var emailInput = document.getElementById("email_input");
        var telephoneInput = document.getElementById("telephone_input");
        var subjectInput = document.getElementById("subject_input");
        var messageInput = document.getElementById("message_input");

        var inputsValid = true;

        if (nameInput.value.trim() === "") {
            nameInput.classList.add("error-input");
            nameInput.placeholder = "Please enter your name";
            inputsValid = false;
        } else {
            nameInput.classList.remove("error-input");
        }

        if (emailInput.value.trim() === "") {
            emailInput.classList.add("error-input");
            emailInput.placeholder = "Please enter your email";
            inputsValid = false;
        } else {
            emailInput.classList.remove("error-input");
        }

        if (telephoneInput.value.trim() === "") {
            telephoneInput.classList.add("error-input");
            telephoneInput.placeholder = "Please enter your telephone number";
            inputsValid = false;
        } else {
            telephoneInput.classList.remove("error-input");
        }

        if (subjectInput.value === "Subject line") {
            subjectInput.classList.add("error-input");
            subjectInput.placeholder = "Please select a subject";
            inputsValid = false;
        } else {
            subjectInput.classList.remove("error-input");
        }

        if (messageInput.value.trim() === "") {
            messageInput.classList.add("error-input");
            messageInput.placeholder = "Please enter your message";
            inputsValid = false;
        } else {
            messageInput.classList.remove("error-input");
        }

        if (inputsValid) {
            modal.style.display = "flex";
        }
    });
});

var modal = document.getElementById("my-modal_sign");

var signUpButton = document.querySelector(".auth-form-main-signup-form button");
var loginButton = document.querySelector(".auth-form-main-login-form button");

function areAllFieldsFilled(form) {
    var inputs = form.querySelectorAll("input");
    var allFieldsFilled = true;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            inputs[i].setAttribute("placeholder", "Vui lòng điền vào trường này");
            allFieldsFilled = false;
        }
    }

    return allFieldsFilled;
}

function hideModalIfFieldsFilled(event) {
    event.preventDefault();
    var form = event.target.closest("form");

    if (areAllFieldsFilled(form)) {
        modal.style.display = "none";

        if (form.classList.contains("auth-form-main-signup-form")) {
            showAlert("Đăng ký thành công!");
        } else if (form.classList.contains("auth-form-main-login-form")) {
            showAlert("Đăng nhập thành công!");
        }
    }
}

function showAlert(message) {
    alert(message);
}

signUpButton.addEventListener("click", hideModalIfFieldsFilled);
loginButton.addEventListener("click", hideModalIfFieldsFilled);

document.addEventListener('DOMContentLoaded', function () {
    var headerIconSign = document.querySelector('#header__search-feature-icon-sign');
    headerIconSign.addEventListener('click', function () {
        modal.style.display = 'flex';
    });
});

window.addEventListener("click", function (event) {
    if (!event.target.closest(".auth-form-main") && !event.target.closest('#header__search-feature-icon-sign')) {
        modal.style.display = "none";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var liElement = document.querySelector('.header__navbar-contact--place');

    liElement.addEventListener('click', function () {
        var coordinates = "15.617515906417466, 108.2217307123455"; // Tọa độ địa điểm

        var url = "https://www.google.com/maps/search/?api=1&query=" + coordinates;
        window.open(url, "_blank");
    });
});