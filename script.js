const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const reveals = document.querySelectorAll(".reveal");

if (toggle && header) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  }
);

reveals.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 60, 300)}ms`;
  observer.observe(item);
});
