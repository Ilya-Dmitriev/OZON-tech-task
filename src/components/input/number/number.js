function initValueInput({ elementClassName, changeCallback, initValue }) {
  const valueInput = document.querySelector(elementClassName);

  valueInput.value = initValue;

  valueInput.addEventListener("input", (event) => {
    valueInput.value = changeCallback(event.target.value);
  });
}
