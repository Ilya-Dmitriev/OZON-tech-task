function initCheckboxInput({ elementClassName, changeCallback }) {
  const checkboxInput = document.querySelector(elementClassName);

  checkboxInput.addEventListener("change", (event) => {
    changeCallback(event.target.checked);
  });
}

function generateCheckboxCallback() {
  let isAnimated = false;
  let isHidden = false;

  function getNewStatus() {
    if (isHidden) return progressMeta.status.hidden;
    if (isAnimated) return progressMeta.status.animated;
    setState(progressMeta.status.normal);
  }

  return {
    controlAnimate: (isChecked) => {
      isAnimated = isChecked;
      setState(getNewStatus());
    },
    controlHide: (isChecked) => {
      isHidden = isChecked;
      setState(getNewStatus());
    },
  };
}
