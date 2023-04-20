// Add event listeners to buttons
document.getElementById("happy-btn").addEventListener("click", function () {
  showFeedbackTab(1, "happy-btn");
});
document.getElementById("neutral-btn").addEventListener("click", function () {
  showFeedbackTab(1, "neutral-btn");
});
document.getElementById("sad-btn").addEventListener("click", function () {
  showFeedbackTab(1, "sad-btn");
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
      pages[i].style.display = 'none';
  }
  document.getElementById('page' + pageNumber).style.display = 'block';

  if (pageNumber === 3) {
      var performanceRating = document.querySelector('input[name="performance"]:checked').value;
      var clarityRating = document.querySelector('input[name="clarity"]:checked').value;
      var easeRating = document.querySelector('input[name="ease"]:checked').value;
      // Code to send the ratings to a server or store them in local storage goes here

      // Send the ratings to the server or do something with them
      console.log('Performance rating:', performanceRating);
      console.log('Clarity rating:', clarityRating);
      console.log('Ease rating:', easeRating);

      document.querySelector('form').reset();
  }
}
