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