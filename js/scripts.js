function openMenu() {
  var x = document.getElementById("topMenu");
  var btnOpen = document.getElementById("btnOpen");
  var btnClose = document.getElementById("btnClose");
  if (x.className === "header__menu") {
    x.className += " responsive";
    btnOpen.className = "header__menu-button btn-close";
    btnClose.className = "header__menu-button btn-open";
  } else {
    x.className = "header__menu";
    btnOpen.className = "header__menu-button btn-open";
    btnClose.className = "header__menu-button";
  }
}

function openContentAboutUs() {
  var x = document.getElementById("about-us-content");
  var btnOpen = document.getElementById("btnOpenAboutUs");
  var btnClose = document.getElementById("btnCloseAboutUs");
  if (x.className === "content-block__content") {
    x.className += " unhide";
    btnOpen.className = "arrow-expand hide";
    btnClose.className = "arrow-rollup unhide";
  } else {
    x.className = "content-block__content";
    btnOpen.className = "arrow-expand unhide";
    btnClose.className = "arrow-rollup hide";
  }
}

function openContentServices() {
  var x = document.getElementById("services-content");
  var btnOpen = document.getElementById("btnOpenServices");
  var btnClose = document.getElementById("btnCloseServices");
  if (x.className === "content-block__content") {
    x.className += " unhide";
    btnOpen.className = "arrow-expand hide";
    btnClose.className = "arrow-rollup unhide";
  } else {
    x.className = "content-block__content";
    btnOpen.className = "arrow-expand unhide";
    btnClose.className = "arrow-rollup hide";
  }
}

function openContentPrice() {
  var x = document.getElementById("price-content");
  var btnOpen = document.getElementById("btnOpenPrice");
  var btnClose = document.getElementById("btnClosePrice");
  if (x.className === "content-block__content") {
    x.className += " unhide";
    btnOpen.className = "arrow-expand hide";
    btnClose.className = "arrow-rollup unhide";
  } else {
    x.className = "content-block__content";
    btnOpen.className = "arrow-expand unhide";
    btnClose.className = "arrow-rollup hide";
  }
}