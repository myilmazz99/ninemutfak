const styleNavOnScrollEvent = (nav, expansion) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      nav.classList.remove("scroll-effect");
      expansion.classList.remove("scroll-effect");
    } else if (!nav.className.includes("nav-background")) {
      nav.classList.add("scroll-effect");
      expansion.classList.add("scroll-effect");
    }
  });
};

export default styleNavOnScrollEvent;
