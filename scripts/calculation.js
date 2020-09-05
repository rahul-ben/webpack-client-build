let {
  numberDiv,
  addActionReference,
  subtractActionReference,
} = require('./elementReference');
numberDiv.textContent = 0;

addActionReference.onclick = () => {
  numberDiv.textContent = parseInt(numberDiv.textContent) + 1; 
}

subtractActionReference.onclick = () => {
  numberDiv.textContent = parseInt(numberDiv.textContent) - 1;
}