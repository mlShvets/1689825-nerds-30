const feedbackLink = document.querySelector(".contacts-button");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackName = feedbackPopup.querySelector("[name=name]");
const feedbackEmail = feedbackPopup.querySelector("[name=email]");
const feedbackTextarea = feedbackPopup.querySelector("[name=message]");
const dotFirst = document.querySelector(".dot-1");
const dotSecond = document.querySelector(".dot-2");
const dotThird = document.querySelector(".dot-3");
const slideFirst = document.querySelector(".feature-slide-1");
const slideSocond = document.querySelector(".feature-slide-2");
const slideThird = document.querySelector(".feature-slide-3");
let isStorageSupport = true;
let storagename = "";
let storageemail = "";

try {
  storagename = localStorage.getItem("name");
  storageemail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  if (storagename || storageemail) {
    feedbackName.value = storagename;
    feedbackEmail.value = storageemail;
    feedbackTextarea.focus()
  } else { feedbackName.focus() }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error")
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackTextarea.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error")
    }
  }
});

dotFirst.addEventListener("click", function (_evt) {
  slideFirst.classList.add("slide-current");
  slideSocond.classList.remove("slide-current");
  slideThird.classList.remove("slide-current");
  dotFirst.classList.add("current");
  dotSecond.classList.remove("current");
  dotThird.classList.remove("current");
});
dotSecond.addEventListener("click", function (_evt) {
  slideFirst.classList.remove("slide-current");
  slideSocond.classList.add("slide-current");
  slideThird.classList.remove("slide-current");
  dotFirst.classList.remove("current");
  dotSecond.classList.add("current");
  dotThird.classList.remove("current");
});
dotThird.addEventListener("click", function (_evt) {
  slideFirst.classList.remove("slide-current");
  slideSocond.classList.remove("slide-current");
  slideThird.classList.add("slide-current");
  dotFirst.classList.remove("current");
  dotSecond.classList.remove("current");
  dotThird.classList.add("current");
});


