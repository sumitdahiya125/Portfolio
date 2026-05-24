// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll reveal — add .reveal then observe
const revealTargets = document.querySelectorAll(
  ".section, .hero__meta, .tl-item, .project, .skill-group, .contact__card"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
);
revealTargets.forEach((el) => io.observe(el));

// Tilt glow on the brand mark (subtle delight)
const brand = document.querySelector(".nav__brand-mark");
if (brand) {
  brand.addEventListener("mouseenter", () => {
    brand.style.transition = "transform 0.4s cubic-bezier(.2,.8,.2,1)";
    brand.style.transform = "rotate(-8deg) scale(1.08)";
  });
  brand.addEventListener("mouseleave", () => {
    brand.style.transform = "";
  });
}
