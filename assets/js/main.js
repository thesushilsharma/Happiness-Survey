// Initialize survey response count
var happyCount = 0;
var normalCount = 0;
var sadCount = 0;

// Function to record survey response
function recordSurveyResponse(response) {
  switch (response) {
    case 'happy':
      happyCount++;
      document.getElementById('happyCount').innerHTML = happyCount;
      openQuestionsModal();
      break;
    case 'normal':
      normalCount++;
      document.getElementById('normalCount').innerHTML = normalCount;
      break;
    case 'sad':
      sadCount++;
      document.getElementById('sadCount').innerHTML = sadCount;
      break;
    default:
      console.log('Invalid response');
      break;
  }
}

// Function to open the questions modal
function openQuestionsModal() {
    document.getElementById('questionsModal').classList.remove('hidden');
}

// Function to close the questions modal
function closeQuestionsModal() {
    document.getElementById('questionsModal').classList.add('hidden');
}

// Function to record survey response
function recordSurveyResponse() {
    var question1 = document.querySelector('input[name="question1"]:checked').value;
    var question2 = document.querySelector('input[name="question2"]:checked').value;
    var question3 = document.querySelector('input[name="question3"]:checked').value;

    // You can use the values of question1, question2, and question3
    // to submit the survey response to your server or perform any other action
    
    // Close the questions modal
    closeQuestionsModal();
}
