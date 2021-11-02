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

function openContentTeam() {
  var x = document.getElementById("team-content");
  var btnOpen = document.getElementById("btnOpenTeam");
  var btnClose = document.getElementById("btnCloseTeam");
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

function openContentBlog() {
  var x = document.getElementById("blog-content");
  var btnOpen = document.getElementById("btnOpenBlog");
  var btnClose = document.getElementById("btnCloseBlog");
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

function openContentContact() {
  var x = document.getElementById("contact-content");
  var btnOpen = document.getElementById("btnOpenContact");
  var btnClose = document.getElementById("btnCloseContact");
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


function openPriceFree() {
  var x = document.getElementById("benifitsPriceFree");
  var btnOpen = document.getElementById("btnOpenPriceFree");
  var btnClose = document.getElementById("btnClosePriceFree");
  if (x.className === "bottom-group") {
    x.className += " unhide";
    btnOpen.className = "arrow-expand hide";
    btnClose.className = "arrow-rollup unhide";
  } else {
    x.className = "bottom-group";
    btnOpen.className = "arrow-expand unhide";
    btnClose.className = "arrow-rollup hide";
  }
}

function openPriceBasic() {
  var x = document.getElementById("benifitsPriceBasic");
  var btnOpen = document.getElementById("btnOpenPriceBasic");
  var btnClose = document.getElementById("btnClosePriceBasic");
  if (x.className === "bottom-group") {
    x.className += " unhide";
    btnOpen.className = "arrow-expand hide";
    btnClose.className = "arrow-rollup unhide";
  } else {
    x.className = "bottom-group";
    btnOpen.className = "arrow-expand unhide";
    btnClose.className = "arrow-rollup hide";
  }
}

function openPriceUltimates() {
  var x = document.getElementById("benifitsPriceUltimates");
  var btnOpen = document.getElementById("btnOpenPriceUltimates");
  var btnClose = document.getElementById("btnClosePriceUltimates");
  if (x.className === "bottom-group") {
    x.className += " unhide";
    btnOpen.className = "arrow-expand hide";
    btnClose.className = "arrow-rollup unhide";
  } else {
    x.className = "bottom-group";
    btnOpen.className = "arrow-expand unhide";
    btnClose.className = "arrow-rollup hide";
  }
}

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("masthead").style.background = "#F4EC98";
    document.getElementById("header-logo").src = "img/logo-beige.png";
  } else {
    document.getElementById("masthead").style.background = "#FFFFFF";
    document.getElementById("header-logo").src = "img/logo.png";
  }
}

document.getElementById("services-button").onclick = function() {
  this.style.background = "#00897B";
  this.style.borderColor = "#00897B";
  document.getElementById("hire-button").style.background = "transparent";
  document.getElementById("hire-button").style.borderColor = "#FFFFFF";
};

document.getElementById("hire-button").onclick = function() {
  this.style.background = "#00897B";
  this.style.borderColor = "#00897B";
  document.getElementById("services-button").style.backgroundColor = "transparent";
  document.getElementById("services-button").style.borderColor = "#FFFFFF";
};


var btns = document.getElementsByClassName("services__block-button");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-service-button");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active-service-button", "");
    }
    this.className += " active-service-button";
  });
}

function expandServices() {
  var servicesBtn = document.getElementById("services__button");
  servicesBtn.className += " active-serv-price-blog-btn";
  var servicesBlocks = document.getElementById("services__blocks");
  if (servicesBlocks.className === "services__blocks") {
    servicesBlocks.className += " services__blocks-vision";
    servicesBtn.value = "Roll up";
  } else {
    servicesBlocks.className = "services__blocks";
    servicesBtn.value = "View all";
  }

  setTimeout(function() {
    servicesBtn.className = "services__button";
  }, 5000);
}