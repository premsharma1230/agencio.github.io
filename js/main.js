$('.slide1').owlCarousel({
    loop: true,
    margin: 0,
 //   autoplay: true,
    // nav:true,
    autoplayTimeout: 2500,
    smartSpeed: 2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.slide2').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.slidethree').owlCarousel({
    loop: true,
    margin: 0,
    // autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.slidefour').owlCarousel({
    loop: true,
    margin: 0,
    // autoplay: true,
    autoplayTimeout: 2500,
    smartSpeed: 2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
  // sticky
  window.onscroll = function() {
    mFun()
};
var header = document.querySelector("#myHeader");
var sticky = header.offsetTop;

function mFun() {
    if (window.pageYOffset > 10) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};


