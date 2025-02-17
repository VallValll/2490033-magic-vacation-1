let overlay = document.querySelector(`.js-overlay`);

function show(cb) {
  if (location.hash === `#prizes`) {
    overlay.classList.add(`show`);
    setTimeout(cb, 300);
    setTimeout(() => {
      overlay.classList.remove(`show`);
    }, 500);
  } else {
    cb();
  }
}

export default {
  show,
};
