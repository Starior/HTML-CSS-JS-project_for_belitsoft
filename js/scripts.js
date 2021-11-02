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


var servicesBtns = document.getElementsByClassName("services__block-button");

for (var i = 0; i < servicesBtns.length; i++) {
  servicesBtns[i].addEventListener("click", function() {
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
  }, 2500);
}

var priceBtns = document.getElementsByClassName("price__block-button");

for (var i = 0; i < priceBtns.length; i++) {
  priceBtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-serv-price-blog-btn");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active-serv-price-blog-btn", "");
    }
    this.className += " active-serv-price-blog-btn";
  });
}

function expandBlog() {
  var blogBtn = document.getElementById("blog__button");
  blogBtn.className += " active-serv-price-blog-btn";
  var blogBlocks = document.getElementById("blog__blocks");
  if (blogBlocks.className === "blog__blocks") {
    blogBlocks.className += " blog__blocks-vision";
    blogBtn.value = "Roll up";
  } else {
    blogBlocks.className = "blog__blocks";
    blogBtn.value = "View all";
  }
  setTimeout(function() {
    blogBtn.className = "blog__button";
  }, 2500);
}

(function() {
  var throttle = function(type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function() {
      if (running) { return; }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();

window.addEventListener("optimizedResize", function() {
  let teamBlocks = document.getElementsByClassName("team__block");
  let sliders = document.querySelectorAll('.team__slider-button');
  if (window.matchMedia("(min-width: 1000px)").matches) {
    // console.log("больше 1000");
    for (var i = 0; i < sliders.length; i++) {
      if (i < Math.ceil(teamBlocks.length / 3)) {
        sliders[i].className = "team__slider-button unhide";
      } else {
        sliders[i].className = "team__slider-button";
      }

    }
    for (var i = 0; i < teamBlocks.length; i++) {
      if (i < Math.ceil(teamBlocks.length / 3)) {
        teamBlocks[i].className = "team__block unhide";
      } else {
        teamBlocks[i].className = "team__block hide";
      }

    }
  }
  if (window.matchMedia("(min-width: 700px) and (max-width: 999px)").matches) {
    // console.log("от 700 до 999");
    for (var i = 0; i < sliders.length; i++) {
      if (i < Math.ceil(teamBlocks.length / 2)) {
        sliders[i].className = "team__slider-button unhide";
      } else {
        sliders[i].className = "team__slider-button";
      }
    }
    for (var i = 0; i < teamBlocks.length; i++) {
      if (i < Math.ceil(teamBlocks.length / 3) - 1) {
        teamBlocks[i].className = "team__block unhide";
      } else {
        teamBlocks[i].className = "team__block hide";
      }
    }
  }
  if (window.matchMedia("(max-width: 699px)").matches) {
    // console.log("меньше 699");
    for (var i = 0; i < sliders.length; i++) {
      if (i < Math.ceil(teamBlocks.length / 1)) {
        sliders[i].className = "team__slider-button unhide";
      } else {
        sliders[i].className = "team__slider-button";
      }
    }
    for (var i = 0; i < teamBlocks.length; i++) {
      if (i < Math.ceil(teamBlocks.length / 3) - 2) {
        teamBlocks[i].className = "team__block unhide";
      } else {
        teamBlocks[i].className = "team__block hide";
      }
    }
  }

});

function nextPage(element) {
  console.log(element);
  let teamBlocks = document.getElementsByClassName("team__block");
  let sliders = document.querySelectorAll('.team__slider-button');
  if (window.matchMedia("(min-width: 1000px)").matches) {
    // console.log("больше 1000");
    for (var i = 0; i < teamBlocks.length; i++) {
      if (i >= element * Math.ceil(teamBlocks.length / 3) && i < element * Math.ceil(teamBlocks.length / 3) + Math.ceil(teamBlocks.length / 3)) {
        teamBlocks[i].className = "team__block unhide";
      } else {
        teamBlocks[i].className = "team__block hide";
      }
    }
  }
  if (window.matchMedia("(min-width: 700px) and (max-width: 999px)").matches) {
    // console.log("больше 1000");
    for (var i = 0; i < teamBlocks.length; i++) {
      if (i >= element * 2 && i < element * 2 + 2) {
        teamBlocks[i].className = "team__block unhide";
      } else {
        teamBlocks[i].className = "team__block hide";
      }
    }
  }
  if (window.matchMedia("(max-width: 699px)").matches) {
    // console.log("больше 1000");
    for (var i = 0; i < teamBlocks.length; i++) {
      if (i === element) {
        teamBlocks[i].className = "team__block unhide";
      } else {
        teamBlocks[i].className = "team__block hide";
      }
    }
  }


}
// let teamBlocks = document.getElementsByClassName("team__block");
// console.log(teamBlocks.length);
// console.log(Math.ceil(teamBlocks.length / 3));

// let sliders = document.querySelectorAll('.team__slider-button:not(.hide)');
// console.log(sliders);





window.onload = function() {

  // console.log("Page loaded");

  let teamBlocks = document.getElementsByClassName("team__block");
  let sliders = document.querySelectorAll('.team__slider-button');
  sliders[0].autofocus = true;
  if (window.matchMedia("(min-width: 1000px)").matches) {
    // console.log("больше 1000");

    for (var i = 0; i < sliders.length; i++) {
      if (i < Math.ceil(teamBlocks.length / 3)) {
        sliders[i].className = "team__slider-button unhide";
      } else {
        sliders[i].className = "team__slider-button";
      }

    }
  }
  if (window.matchMedia("(min-width: 700px) and (max-width: 999px)").matches) {
    // console.log("от 700 до 999");

    for (var i = 0; i < sliders.length; i++) {
      if (i < Math.ceil(teamBlocks.length / 2)) {
        sliders[i].className = "team__slider-button unhide";
      } else {
        sliders[i].className = "team__slider-button";
      }

    }
  }
  if (window.matchMedia("(max-width: 699px)").matches) {
    // console.log("меньше 699");

    for (var i = 0; i < sliders.length; i++) {
      if (i < Math.ceil(teamBlocks.length / 1)) {
        sliders[i].className = "team__slider-button unhide";
      } else {
        sliders[i].className = "team__slider-button";
      }

    }
  }




};