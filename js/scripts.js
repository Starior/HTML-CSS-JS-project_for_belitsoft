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