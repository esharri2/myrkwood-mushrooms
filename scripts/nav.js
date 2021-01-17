// Nav current page
const observeLinks = () => {
  const targetIds = ["#splash", "#about", "#how-it-works", "#contact"];
  const body = document.querySelector("body");
  const links = document.querySelectorAll("nav a");
  let lastY = null;
  let callback = (entries) => {
    for (const entry of entries) {
      const id = entry.target.closest("section").id;
      const link = document.querySelector(`a[href='#${id}']`);
      if (entry.isIntersecting === true && link) {
        if (!link.classList.contains("active")) {
          links.forEach((link) => link.classList.remove("active"));
          link.classList.add("active");
          // check here...
        }
      }

      const newY = entry.boundingClientRect.y;
      if (lastY < newY) {
        //Scrolling up, remove active on first link if it's active.
        if (links[0].classList.contains("active")) {
          links[0].classList.remove("active");
        }
      }
      lastY = newY;
    }
  };
  let observer = new IntersectionObserver(callback, {
    threshold: 1,
  });
  for (const id of targetIds) {
    const target = document.querySelector(`${id} h2`);
    if (target) {
      observer.observe(target);
    }
  }
};

const observeNav = () => {
  // could add animate-slide-down here.
  const activeNavClasses = ["fixed", "shadow-lg", "animate-slide-down"];
  const nav = document.querySelector("header");

  const callback = (entries) => {
    const { isIntersecting } = entries[0];
    if (isIntersecting === true) {
      nav.classList.remove(...activeNavClasses);
    } else {
      nav.classList.add(...activeNavClasses);
    }
  };

  const observer = new IntersectionObserver(callback);

  observer.observe(document.querySelector("#splash > *:first-child"));
};

const nav = () => {
  observeLinks();
  observeNav();
};

export default nav;
