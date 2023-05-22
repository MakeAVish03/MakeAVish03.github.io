function calculateHeartRate() {
    var age = parseInt(document.getElementById('age').value);
    var restingHeartRate = parseInt(document.getElementById('resting-heart-rate').value);
  
    if (isNaN(age) || isNaN(restingHeartRate)) {
      alert('Please enter valid numbers for age and resting heart rate.');
      return;
    }
  
    var maxHeartRate = 220 - age;
    var targetHeartRate = Math.round((maxHeartRate - restingHeartRate) * 0.6 + restingHeartRate);
  
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Your target heart rate is ' + targetHeartRate + ' beats per minute.';
  }
  