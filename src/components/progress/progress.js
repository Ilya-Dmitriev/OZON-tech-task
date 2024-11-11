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
      progressElement.style.setProperty(
        progressMeta.value.variableName,
        newValue + "%"
      );
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
