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