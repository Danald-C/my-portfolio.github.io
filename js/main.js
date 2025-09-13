function includeHTML() {
  fetch('nav.html').then(response => response.text()).then(data => {
    const navElement = document.querySelector('.menu-nav'), li = navElement.children;
    navElement.innerHTML = data;
    
        const url = window.location.pathname.split('.')[0].split('/');
        const pageName = url[url.length-1];
        for (let i = 0; i < li.length; i++) {
          const aTag = li[i].children[0]
          const navName = aTag.getAttribute('href').split('.')[0];
          li[i].classList.remove('current')
          if(pageName == navName)
            li[i].classList.add('current')
          // console.log(navName, li[i].getAttribute('class'));
        }
  
    // Select DOM Items
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const menuNav = document.querySelector(".menu-nav");
    // const navItem = Array.from(document.querySelector(".nav-item"));
    const navItem = Array.from(document.getElementsByClassName("nav-item"));
    const menuBranding = document.querySelector(".menu-branding");

    // Set Initial State Of Menu
    let showMenu = false;

    menuBtn.addEventListener("click", toggleMenu);
    function toggleMenu() {
      // navItem.forEach((item) => console.log(item));
      if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");

        navItem.forEach((item) => item.classList.add("show"));
        showMenu = true;
      } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");

        navItem.forEach((item) => item.classList.remove("show"));
        showMenu = false;
      }
    }
});

  /* var z, i, elmnt, file, xhttp;
  // Loop through a collection of all HTML elements:
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      // search for elements with a certain atrribute:
      file = elmnt.getAttribute("include-nav-html");
      if (file) {
          // Make an HTTP request using the attribute value as the file name:
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                  if (this.status == 200) {
                    elmnt.innerHTML = this.responseText;
                    // console.log(elmnt)
                }
                  if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          // Remove the attribute, and call this function once more:
          elmnt.removeAttribute("include-nav-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      // Exit the function:
      return;
    }
  }
  
  // Select DOM Items
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  const menuNav = document.querySelector(".menu-nav");
  // const navItem = Array.from(document.querySelector(".nav-item"));
  const navItem = Array.from(document.getElementsByClassName("nav-item"));
  const menuBranding = document.querySelector(".menu-branding");
  
  // Set Initial State Of Menu
  let showMenu = false;
  
  menuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
  
    // navItem.forEach((item) => console.log(item));
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
  
      navItem.forEach((item) => item.classList.add("show"));
      showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
  
      navItem.forEach((item) => item.classList.remove("show"));
      showMenu = false;
    }
  } */
}
includeHTML()
