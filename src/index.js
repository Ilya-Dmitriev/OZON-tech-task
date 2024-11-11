const { changeValue, setState } = initProgress({
  elementClassName: ".progress",
});

initValueInput({
  elementClassName: ".value",
  changeCallback: changeValue,
  min: progressMeta.value.min,
  max: progressMeta.value.max,
});

const { controlAnimate, controlHide } = generateCheckboxCallback();

const checkIsAnimated = initCheckboxInput({
  elementClassName: ".animate",
  changeCallback: controlAnimate,
});

const checkIsHidden = initCheckboxInput({
  elementClassName: ".hide",
  changeCallback: controlHide,
});
