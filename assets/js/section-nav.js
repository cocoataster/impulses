(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var links = document.querySelectorAll(".pill-link");
  var sections = [];
  links.forEach(function (link) {
    var id = link.getAttribute("href");
    if (!id || id.charAt(0) !== "#") return;
    var el = document.querySelector(id);
    if (el) sections.push({ link: link, el: el });
  });
  if (!sections.length) return;

  function setActive() {
    var y = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (s) {
      if (s.el.offsetTop <= y) current = s;
    });
    links.forEach(function (l) {
      l.classList.remove("is-active");
    });
    current.link.classList.add("is-active");
  }

  setActive();
  window.addEventListener("scroll", setActive, { passive: true });
})();
