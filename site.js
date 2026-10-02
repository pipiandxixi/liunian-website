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

// Respect "reduce motion": the preview video then waits for a tap instead of autoplaying.
const reel = document.getElementById("reel");
if (reel && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  reel.removeAttribute("autoplay"); reel.pause(); reel.controls = true;
}
