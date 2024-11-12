const { changeValue, setState } = initProgress({
  elementClassName: ".progress",
});

initValueInput({
  elementClassName: ".value",
  changeCallback: changeValue,
  initValue: progressMeta.value.min,
});

const { controlAnimate, controlHide } = generateCheckboxCallback();

const checkIsAnimated = initCheckboxInput({
  elementClassName: ".animate",
  changeCallback: controlAnimate,
  initValue: false,
});

const checkIsHidden = initCheckboxInput({
  elementClassName: ".hide",
  changeCallback: controlHide,
  initValue: false,
});
