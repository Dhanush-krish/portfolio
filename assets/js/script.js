(function () {
  "use strict"; // Start of use strict

  var scrollToTop = document.querySelector('.scroll-to-top');

  if (scrollToTop) {

    // Scroll to top button appear
    window.addEventListener('scroll', function () {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    var navbarCollapse = mainNav.querySelector('.navbar-collapse');

    if (navbarCollapse) {

      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });

      var navbarItems = navbarCollapse.querySelectorAll('a');

      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function () {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

})(); // End of use strict


// <!-- typed js effect start -->
var typed = new Typed(".typed", {
  strings: ["Software Engineer.", "Back-End Developer.", "Competitive Programmer."],
  // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
  stringsElement: null,
  // typing speed
  typeSpeed: 100,
  // time before typing starts
  startDelay: 1200,
  // backspacing speed
  backSpeed: 100,
  // time before backspacing
  backDelay: 500,
  // loop
  loop: true,
  // false = infinite
  loopCount: 10,
  // show cursor
  showCursor: false,
  // character for cursor
  cursorChar: "|",
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function () { },
  // starting callback function before each string
  preStringTyped: function () { },
  //callback for every typed string
  onStringTyped: function () { },
  // callback for reset
  resetCallback: function () { }
});
// <!-- typed js effect end -->


// <!-- skills start -->
async function fetchData(type = "skills") {
  let response
  type === "skills" ?
    response = await fetch("skills.json")
    :
    response = await fetch("./projects/projects.json")
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach(skill => {
    skillHTML += `
      <div class="bar">
            <div class="info">
              <img src=${skill.icon} alt="skill" />
              <span>${skill.name}</span>
            </div>
          </div>`
  });
  skillsContainer.innerHTML = skillHTML;
}


fetchData().then(data => {
  showSkills(data);
});
// <!-- skills end -->
