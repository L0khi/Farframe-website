(() => {
  const button = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#mobile-navigation");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  if (!button || !menu || !main || !footer) return;

  const links = Array.from(menu.querySelectorAll("a"));

  const setOpen = (open, returnFocus = false) => {
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menu.dataset.open = String(open);
    menu.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);

    main.inert = open;
    footer.inert = open;

    if (open && links[0]) links[0].focus();
    if (!open && returnFocus) button.focus();
  };

  button.addEventListener("click", () => {
    const shouldOpen = button.getAttribute("aria-expanded") !== "true";
    setOpen(shouldOpen, !shouldOpen);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    const open = button.getAttribute("aria-expanded") === "true";
    if (!open) return;

    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false, true);
      return;
    }

    if (event.key === "Tab") {
      const focusable = [button, ...links];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) setOpen(false);
  });
})();

(() => {
  const objective = document.querySelector("#primary-objective");
  if (!objective) return;

  const map = new Set([
    "data-extraction",
    "inventory",
    "automation",
    "research",
    "general"
  ]);

  const requested = new URLSearchParams(window.location.search).get("objective");
  if (requested && map.has(requested)) {
    objective.value = requested;
  }
})();

(() => {
  const message = document.querySelector("#operational-challenge");
  const counter = document.querySelector("#message-count");
  if (!message || !counter) return;

  const update = () => {
    counter.textContent = `${message.value.length}/1000`;
  };

  message.addEventListener("input", update);
  update();
})();


// Reveal content and pause product motion until it is near the viewport.
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  const animations = Array.from(document.querySelectorAll('[data-product-animation]'));

  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((node) => node.classList.add('is-visible'));
    animations.forEach((node) => node.classList.add('is-active'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px' });

  reveals.forEach((node) => revealObserver.observe(node));

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('is-active', entry.isIntersecting));
  }, { threshold: 0.18 });

  animations.forEach((node) => animationObserver.observe(node));
})();
