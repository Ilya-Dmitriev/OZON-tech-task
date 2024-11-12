const progressMeta = {
  value: {
    variableName: "--percent",
    min: 0,
    max: 100,
  },
  status: {
    normal: "normal",
    animated: "animated",
    hidden: "hidden",
  },
};

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

function initClassActions({ element, className }) {
  function addClass() {
    if (!element.classList.contains(className))
      element.classList.add(className);
  }

  function removeClass() {
    if (element.classList.contains(className))
      element.classList.remove(className);
  }

  return [addClass, removeClass];
}

function initProgress({ elementClassName }) {
  const progressElement = document.querySelector(elementClassName);
  const { min, max, variableName } = progressMeta.value;
  const valueValidation = generateNumValidation({ min, max });

  const [setAnimation, removeAnimation] = initClassActions({
    element: progressElement,
    className: progressMeta.status.animated,
  });

  const [setHide, removeHide] = initClassActions({
    element: progressElement,
    className: progressMeta.status.hidden,
  });

  return {
    changeValue: (newValue) => {
      const value = valueValidation(newValue);
      progressElement.style.setProperty(variableName, value + "%");
      return value;
    },
    setState: (stateCode) => {
      switch (stateCode) {
        case progressMeta.status.animated:
          setAnimation();
          removeHide();
          break;
        case progressMeta.status.hidden:
          setHide();
          removeAnimation();
          break;
        case progressMeta.status.normal:
          removeAnimation();
          removeHide();
          break;
        default:
          break;
      }
    },
  };
}
