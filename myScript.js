function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup1() {
  document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup2() {
  document.getElementById("popup-3").classList.toggle("active");
}

function togglePopup3() {
  document.getElementById("popup-4").classList.toggle("active");
}

// Scroll to the top button
const btnScrollToTop = document.querySelector("#scroll-to-top-btn");

const handleScroll = function () {
  const ratio = 0.5;
  const scrollTop = document.documentElement.scrollTop;
  const scrolledVSClientHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  scrollTop / scrolledVSClientHeight > ratio
    ? (btnScrollToTop.style.display = "block")
    : (btnScrollToTop.style.display = "none");
};
document.addEventListener("scroll", handleScroll);

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Fade in animation
const items = document.querySelectorAll(".appear2");

const active = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview2");
    } else {
      entry.target.classList.remove("inview2");
    }
  });
};
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
  io2.observe(items[i]);
}
//  Image appearance
