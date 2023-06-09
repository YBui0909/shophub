// share to social

function shareOnFacebook() {
  var url = 'http://www.your-domain.com/your-page.html';
  var shareWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), 'Share', 'width=500,height=400,scrollbars=yes,resizable=yes,top=50%,left=50%');
  shareWindow.focus();
}

function shareOnTwitter() {
  var url = 'http://www.your-domain.com/your-page.html';
  var text = 'Your tweet text';
  window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '_blank');
}

function shareOnReddit() {
  var url = 'http://www.your-domain.com/your-page.html';
  window.open('https://www.reddit.com/submit?url=' + encodeURIComponent(url), '_blank');
}

function shareOnLinkedIn() {
  var url = 'http://www.your-domain.com/your-page.html';
  var title = 'Your share title';
  window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title), '_blank');
}

function shareOnTelegram() {
  var url = 'http://www.your-domain.com/your-page.html';
  var text = 'Your share text';
  window.open('https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '_blank');
}

// Scrollbar
const scrollableList = document.querySelector('.js-scrollable');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

let isDown = false;
let startX;
let scrollLeft;
let requestId;

scrollableList.addEventListener('mousedown', handleMouseDown);
scrollableList.addEventListener('mouseleave', handleMouseLeave);
scrollableList.addEventListener('mouseup', handleMouseUp);
scrollableList.addEventListener('mousemove', handleMouseMove);

scrollLeftButton.addEventListener('click', handleScrollLeft);
scrollRightButton.addEventListener('click', handleScrollRight);

function handleMouseDown(e) {
  isDown = true;
  scrollableList.style.cursor = 'grabbing';
  scrollableList.style.userSelect = 'none';
  startX = e.pageX - scrollableList.offsetLeft;
  scrollLeft = scrollableList.scrollLeft;
}

function handleMouseLeave() {
  isDown = false;
  scrollableList.style.removeProperty('cursor');
  scrollableList.style.removeProperty('user-select');
}

function handleMouseUp() {
  isDown = false;
  scrollableList.style.removeProperty('cursor');
  scrollableList.style.removeProperty('user-select');
}

function handleMouseMove(e) {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollableList.offsetLeft;
  const distance = x - startX;
  scrollableList.scrollLeft = scrollLeft - distance;
}

function handleScrollLeft() {
  scrollSmoothly(-297);
}

function handleScrollRight() {
  scrollSmoothly(297);
}

function scrollSmoothly(distance) {
  const start = scrollableList.scrollLeft;
  const end = start + distance;
  const duration = 500; // Thời gian di chuyển (ms)
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);
    const easing = easeInOutCubic(percentage);
    scrollableList.scrollLeft = start + distance * easing;

    if (progress < duration) {
      requestId = requestAnimationFrame(step);
    }
  }

  cancelAnimationFrame(requestId);
  requestId = requestAnimationFrame(step);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Click to place
document.addEventListener('DOMContentLoaded', function () {
  var liElement = document.querySelector('.header__navbar-contact--place');

  liElement.addEventListener('click', function () {
    var coordinates = "15.617515906417466, 108.2217307123455"; // Tọa độ địa điểm

    var url = "https://www.google.com/maps/search/?api=1&query=" + coordinates;
    window.open(url, "_blank");
  });
});

// Modal

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

// Change product

var currentBlockId = null;

function showBlock(blockId) {
  var defaultBlock = document.querySelector('.app-content-block');
  defaultBlock.style.display = 'none';

  if (currentBlockId) {
    var currentBlock = document.getElementById(currentBlockId);
    currentBlock.style.display = 'none';
  }

  var block = document.getElementById(blockId);
  block.style.display = 'flex';

  currentBlockId = blockId;
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 01 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

// Go to block
document.addEventListener('DOMContentLoaded', function () {
  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var targetBlock = document.querySelector(this.getAttribute('href'));
      if (targetBlock) {
        window.scrollTo({
          top: targetBlock.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});


// Search history
let input = document.getElementById("search-on-t-m-input");
let list = document.querySelectorAll(".search-on-t-m-container-list li");
let maxVisibleResults = 4;

function search() {
  let count = 0;
  for (let i = 0; i < list.length; i += 1) {
    if (
      list[i].innerText.toLowerCase().includes(input.value.toLowerCase()) &&
      count < maxVisibleResults
    ) {
      list[i].style.display = "block";
      count += 1;
    } else {
      list[i].style.display = "none";
    }
  }

  let visibleHeight = count * 34;
  document.querySelector(".search-on-t-m-container-list").style.height = `${visibleHeight}px`;
}

input.addEventListener("input", search);


// Display search

var searchHistory = document.querySelector('.search-on-t-m-icon');
var containerHistory = document.querySelector('.search-on-t-m-container');
var searchHistoryInput = document.getElementById('search-on-t-m-input');
var containerHistoryList = document.querySelector('.search-on-t-m-container-list');
searchHistory.addEventListener('click', function (event) {
  containerHistory.style.display = 'block';
  event.stopPropagation();
});

searchHistoryInput.addEventListener('click', function (event) {
  containerHistoryList.style.display = 'block';
  event.stopPropagation();
});

document.addEventListener('click', function (event) {
  var target = event.target;
  var isClickInsideSearch = searchHistory.contains(target);
  var isClickInsideSearchInput = searchHistoryInput.contains(target);
  var isClickInsideContainerList = containerHistoryList.contains(target);

  if (!isClickInsideSearch && !isClickInsideSearchInput && !isClickInsideContainerList) {
    containerHistory.style.display = 'none';
    containerHistoryList.style.display = 'none';
  }
});

// Bar
var headerIconBar = document.getElementById("header__search-feature-icon-bar");
var headerBarList = document.querySelector(".header__search-feature-icon-bar-list");

headerIconBar.addEventListener("click", function (event) {
  event.stopPropagation();

  var isListDisplayed = headerBarList.style.display === "block";

  if (isListDisplayed) {
    headerBarList.style.display = "none";
  } else {
    headerBarList.style.display = "block";
  }
});

document.addEventListener("click", function (event) {
  if (!headerIconBar.contains(event.target)) {
    headerBarList.style.display = "none";
  }
});




