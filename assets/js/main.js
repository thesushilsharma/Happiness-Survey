const ratings = {
  happy: {
    technicalPerformance: null,
    presentationClarity: null,
    easeOfUse: null,
  },
  neutral: {
    technicalPerformance: null,
    presentationClarity: null,
    easeOfUse: null,
  },
  sad: {
    technicalPerformance: null,
    presentationClarity: null,
    easeOfUse: null,
  },
};

function setRating(category, rating) {
  // Remove the previously selected button
  const prevSelected = document.querySelector(`#${category} .selected`);
  if (prevSelected) {
    prevSelected.classList.remove("selected");
  }

  // Add the "selected" class to the newly selected button
  const selectedButton = event.target;
  selectedButton.classList.add("selected");

  // Update the ratings object
  ratings[rating][category] = true;
  console.log("Thank you for rating our service!");
  console.log(ratings);

  // Check if all ratings are complete
  const isComplete =
    Object.keys(ratings.happy).every(
      category =>
        ratings.happy[category] !== null &&
        ratings.neutral[category] !== null &&
        ratings.sad[category] !== null
    );

  if (isComplete) {
    console.log("All ratings are complete!");
  }
}

function rateService(rating) {
  const ratingContainer = document.createElement("div");
  ratingContainer.id = `rating-${rating}`;

  const technicalPerformanceRating = document.createElement("div");
  technicalPerformanceRating.innerHTML = `
  <div class="p-4">
  <p class="text-lg font-medium mb-2">How was the technical performance?</p>
  <div class="flex space-x-2">
<button class="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 focus:outline-none" onclick="setRating('technicalPerformance', 'happy')">😀</button>
<button class="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 focus:outline-none" onclick="setRating('technicalPerformance', 'neutral')">😐</button>
<button class="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 focus:outline-none" onclick="setRating('technicalPerformance', 'sad')">😞</button>
</div>
</div>`;
  ratingContainer.appendChild(technicalPerformanceRating);

  const presentationClarityRating = document.createElement("div");
  presentationClarityRating.innerHTML = `
  <div class="p-4">
  <p class="text-lg font-medium mb-2">How was the presentation clarity?</p>
  <div class="flex space-x-2">
<button class="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 focus:outline-none" onclick="setRating('presentationClarity', 'happy')">😀</button>
<button class="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 focus:outline-none" onclick="setRating('presentationClarity', 'neutral')">😐</button>
<button class="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 focus:outline-none" onclick="setRating('presentationClarity', 'sad')">😞</button>
</div>
</div> 
`;
  ratingContainer.appendChild(presentationClarityRating);
  const easeOfUseRating = document.createElement("div");
  easeOfUseRating.innerHTML = `
  <div class="p-4">
<p class="text-lg font-medium mb-2">How was the ease of use?</p>
<div class="flex space-x-2">
<button class="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 focus:outline-none" onclick="setRating('easeOfUse', 'happy')">😀</button>
<button class="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 focus:outline-none" onclick="setRating('easeOfUse', 'neutral')">😐</button>
<button class="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 focus:outline-none" onclick="setRating('easeOfUse', 'sad')">😞</button>
</div>
</div>
`;
  ratingContainer.appendChild(easeOfUseRating);

  document.body.appendChild(ratingContainer);
}