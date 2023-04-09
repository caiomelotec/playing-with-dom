function handleInputKey(event) {
  if (event.key === 'Enter') {
    getIputElement();
  }
}

function getIputElement() {
  const inputElement = document.querySelector('.input-name')
  let text = inputElement.value


  document.querySelector('.render-name').innerHTML = `Hello ${text}, Good morning!`
}