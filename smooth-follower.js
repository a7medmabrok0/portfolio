// Smooth Cursor Follower adapted from the Cursify example for a static page.
(() => {
  if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const follower = document.querySelector('#smoothFollower');
  if (!follower) return;
  document.documentElement.classList.add('smooth-follower-enabled');
  const dot = follower.querySelector('.smooth-follower-dot');
  const ring = follower.querySelector('.smooth-follower-ring');
  const target = { x: 0, y: 0 };
  const dotPosition = { x: 0, y: 0 };
  const ringPosition = { x: 0, y: 0 };
  let started = false;
  let animating = false;

  function updateHover() {
    const element = document.elementFromPoint(target.x, target.y);
    follower.classList.toggle('is-hovering', Boolean(element?.closest('a, button, img, input, textarea, select')));
  }

  function draw() {
    dotPosition.x += (target.x - dotPosition.x) * 0.2;
    dotPosition.y += (target.y - dotPosition.y) * 0.2;
    ringPosition.x += (target.x - ringPosition.x) * 0.1;
    ringPosition.y += (target.y - ringPosition.y) * 0.1;
    dot.style.left = `${dotPosition.x}px`;
    dot.style.top = `${dotPosition.y}px`;
    ring.style.left = `${ringPosition.x}px`;
    ring.style.top = `${ringPosition.y}px`;

    const remaining = Math.abs(target.x - dotPosition.x) + Math.abs(target.y - dotPosition.y)
      + Math.abs(target.x - ringPosition.x) + Math.abs(target.y - ringPosition.y);
    if (remaining > 0.2) requestAnimationFrame(draw);
    else animating = false;
  }

  window.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse') return;
    target.x = event.clientX;
    target.y = event.clientY;
    if (!started) {
      dotPosition.x = ringPosition.x = target.x;
      dotPosition.y = ringPosition.y = target.y;
      started = true;
    }
    follower.classList.add('is-visible');
    updateHover();
    if (!animating) {
      animating = true;
      requestAnimationFrame(draw);
    }
  }, { passive: true });

  window.addEventListener('scroll', updateHover, { passive: true, capture: true });
  window.addEventListener('mouseout', event => {
    if (!event.relatedTarget) follower.classList.remove('is-visible');
  });
})();
