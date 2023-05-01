const happy = document.getElementById("happy-btn");
const neutral = document.getElementById("neutral-btn");
const sad = document.getElementById("sad-btn");

function buttonClick(buttonType) {
  let body = document.body;
  let backgroundColor = "";
  let feedbackTab = "";
  let rotation = "";

  if (buttonType === "happy") {
    backgroundColor = "#D1EFB5";
    feedbackTab = "happy-btn";
    rotation = "180deg";
  } else if (buttonType === "neutral") {
    backgroundColor = "#C9B6BE  ";
    feedbackTab = "neutral-btn";
    rotation = "90deg";
  } else if (buttonType === "sad") {
    backgroundColor = "#F4796B";
    feedbackTab = "sad-btn";
    rotation = "0deg";
  }

  body.style.backgroundColor = backgroundColor;
  body.style.transition =
    "transform 1s ease-in-out, background-color 1s ease-in-out";
  body.style.transform = "rotate(" + rotation + ")";
  showFeedbackTab(1, feedbackTab);

  setTimeout(function () {
    body.style.transform = "rotate(0deg)";
  }, 500);
}

happy.addEventListener("click", function () {
  buttonClick("happy");
});

neutral.addEventListener("click", function () {
  buttonClick("neutral");
});

sad.addEventListener("click", function () {
  buttonClick("sad");
});

// Show the specified feedback tab and hide the others
function showFeedbackTab(tabIndex, buttonId) {
  console.log("Clicked button:", buttonId);
  // Get all feedback tab divs
  var tabs = document.getElementsByTagName("div");

  // Hide all feedback tabs
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  // Show the specified feedback tab
  tabs[tabIndex].style.display = "block";
}

function showPage(pageNumber) {
  var pages = document.querySelectorAll('[id^="page"]');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  document.getElementById("page" + pageNumber).style.display = "block";

  if (pageNumber === 3) {
    var performanceRating = document.querySelector(
      'input[name="performance"]:checked'
    ).value;
    var clarityRating = document.querySelector(
      'input[name="clarity"]:checked'
    ).value;
    var easeRating = document.querySelector('input[name="ease"]:checked').value;
    // Code to send the ratings to a server or store them in local storage goes here

    // Send the ratings to the server or do something with them
    console.log("Performance rating:", performanceRating);
    console.log("Clarity rating:", clarityRating);
    console.log("Ease rating:", easeRating);

    document.querySelector("form").reset();
  }
}

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");
  loader.addEventListener("transitionend", () => {
    if (document.querySelector(".loader")) {
      document.body.removeChild(loader);
    }
  });
});
