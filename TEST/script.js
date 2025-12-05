function requestGAS(){
requestButton.disabled = true;
responseArea.innerText = "通信中...";
let requestTime = String(new Date());
let responseTime;
let fetchUrl = 'https://script.google.com/macros/s/AKfycbw4vQEha63oNlJzkNkgU3QmDK4PWqNqNRA9MXAeUAPJEKPlR5s2nL4sSOS5pvUX4ZaOTQ/exec';
let fetchUrl2 = 'https://ipinfo.io?callback';
return fetch(fetchUrl2, {
method: 'POST'
}).then((response) => {
  responseTime = String(new Date());
  return response.text();
}).then((response) => {
  responseArea.innerText = "FETCH START:" + requestTime;
  responseArea.innerText += "\n";
  responseArea.innerText += "→GAS:" + response;
  responseArea.innerText += "\n";
  responseArea.innerText += "FETCH END:" + responseTime;
  requestButton.disabled = false;
})
}
