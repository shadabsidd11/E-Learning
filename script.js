var navItems = document.querySelectorAll(".header-nav-area .header-nav-menu-area ul>li a.active");
var windowPath = window.location.pathname;

navItems.forEach(function(navI) {
  if (navI.href.includes(windowPath)) {
    navI.style.color = "#ffc600"; 
  }
});


 