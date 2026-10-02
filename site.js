// Fades sections in as they scroll into view. Without it everything is simply visible.
const els = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
} else {
  els.forEach((e) => e.classList.add("in"));
}
