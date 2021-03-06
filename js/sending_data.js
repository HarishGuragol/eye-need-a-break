let eyeData = []

function sendDataToBackend() {
  fetch('/send_eye_data', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eyeData)
  });
}

setInterval(() => {
  if (eyeData.length) {
    sendDataToBackend()
    eyeData = []
  }
}, 5000)

function sendData(x, y, timestamp) {
  eyeData.push({x: x, y: y, timestamp: timestamp})
}

function sendSensitivity(value) {
  fetch('/send_sensitivity', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: value})
  });
}