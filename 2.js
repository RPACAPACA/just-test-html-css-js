function animateOnScroll() {
  var elements = document.querySelectorAll(".animate-on-scroll");
  
  function showElement(element) {
    element.classList.add("show");
  }
  
  function hideElement(element) {
    element.classList.remove("show");
  }
  
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    elements.forEach(function(element) {
      if (isElementInViewport(element)) {
        showElement(element);
      } else {
        hideElement(element);
      }
    });
  }
  
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  
  handleScroll();
}

animateOnScroll();
