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

const btnScrollToTop = document.querySelector("#scroll-to-top-btn");

const handleScroll = function () {
  const ratio = 0.5;
  const scrollTop = document.documentElement.scrollTop;
  const scrolledVSClientHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  if (scrollTop / scrolledVSClientHeight > ratio) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
};
document.addEventListener("scroll", handleScroll);

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
