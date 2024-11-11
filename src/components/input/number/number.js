function generateNumValidation({ min, max }) {
  let oldNum = min;
  return (newNum) => {
    if (newNum > max) return oldNum;
    oldNum = min;
    if (newNum < min) return min;
    oldNum = newNum;
    return newNum * 1;
  };
}

function initValueInput({ elementClassName, changeCallback, min, max }) {
  const valueInput = document.querySelector(elementClassName);
  const valueValidation = generateNumValidation({ min, max });

  valueInput.value = min;

  valueInput.addEventListener("input", (event) => {
    const value = valueValidation(event.target.value);
    valueInput.value = value;
    changeCallback(value);
  });
}
