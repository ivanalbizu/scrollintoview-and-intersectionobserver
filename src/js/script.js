document.addEventListener('DOMContentLoaded', () => {

  const bottom = document.querySelector('.js-btn-bottom');
  bottom?.addEventListener('click', toBottom, false);

  const top = document.querySelector('.js-btn-top');
  top?.addEventListener('click', toTop, false);


  const downBtn = document.querySelector('.js-btn-down');
  downBtn?.addEventListener('click', down, false);

  const upBtn = document.querySelector('.js-btn-up');
  upBtn?.addEventListener('click', up, false);

  const markups = document.querySelectorAll('.box > * > *');
  const markupAnimate = new IntersectionObserver(ioHandlerMarkup, ioConfigMarkup);

  markups.forEach(markup => markupAnimate.observe(markup));

})

const down = () => {
  const inViewPort = document.querySelectorAll('.in-view-port');
  const last = inViewPort[inViewPort.length - 1];

  last?.nextElementSibling?.scrollIntoView({block: "end", behavior: "smooth"});
}

const up = () => {
  const first = document.querySelector('.in-view-port');

  first?.previousElementSibling?.scrollIntoView({block: "start", behavior: "smooth"});
}

const toTop = () => {
  const top = document.querySelector('.box > *');
  top.scrollIntoView({block: "start", behavior: "smooth"});
}
const toBottom = () => {
  const bottom = document.querySelector('.box > *');
  bottom.scrollIntoView({block: "end", behavior: "smooth"});
}

const ioHandlerMarkup = entries => {
  for (let entry of entries) {
    const target = entry.target;
    if (entry.intersectionRatio >= .9) target.classList.add('in-view-port');
    else target.classList.remove('in-view-port');
  }
}

const ioConfigMarkup = {
  threshold: .9
}
