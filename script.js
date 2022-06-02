$(document).on("click", ".border_theme", function() {

  $(this).toggleClass("border_theme_light");
  $(".body_content").toggleClass("content_light_theme");
  $(".logo_img").toggleClass("logo_light");
  $("body").toggleClass("main_light");

  var root = document.querySelector(':root');

  if ($(".body_content").hasClass("content_light_theme")) {
    root.style.setProperty('--black', '#fff');
    root.style.setProperty('--white', '#222151');
    root.style.setProperty('--white-opacity', 'rgba(34, 33, 81, 0.75)');
    root.style.setProperty('--black-hover', '#fff');
    root.style.setProperty('--section', '#fff');
  } else {
    root.style.setProperty('--black', '#020105');
    root.style.setProperty('--white', '#FFF');
    root.style.setProperty('--white-opacity', 'rgba(255, 255, 255, 0.7)');
    root.style.setProperty('--black-hover', '#0C0B0F');
    root.style.setProperty('--section', 'rgba(255, 255, 255, 0.04)');
  }
});

// cookies

function setCookie(lang, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


function checkCookies() {
  let cookieNote = document.querySelector('.popup_cookie');
  let cookieBtnAccept = cookieNote.querySelector('.cookie_accept');

  if (!getCookie('cookies_policy')) {
    gsap.fromTo(cookieNote, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 0.2,
      delay: 3
    });
  }

  cookieBtnAccept.addEventListener('click', function() {
    setCookie('cookies_policy', 'true', 365);
    gsap.fromTo(cookieNote, {
      autoAlpha: 1
    }, {
      autoAlpha: 0,
      duration: 0.2,
    });
  });
}

checkCookies();

// Animations

document.addEventListener("DOMContentLoaded", function(event) {

  window.onload = function() {

    gsap.registerPlugin(ScrollTrigger);

    const blocks = gsap.utils.toArray(".flex_section");
    blocks.forEach(block => {

      gsap.fromTo(block.querySelector(".flex_block").querySelector(".flex_block_image").querySelector(".img_shadow_light"), {
        autoAlpha: 0,
      }, {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: block,
          start: "center 80%",
          end: "+=500",
          scrub: 1,
        }
      });

      gsap.fromTo(block.querySelector(".flex_block").querySelector(".flex_block_image").querySelector(".icon_cart"), {
        autoAlpha: 0,
        y: -60
      }, {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "+=500",
          scrub: 1,
        }
      });

      gsap.fromTo(block.querySelector(".flex_block").querySelector(".flex_block_image").querySelector(".lines_bottom"), {
        autoAlpha: 0,
        y: 60
      }, {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "+=500",
          scrub: 1,
        }
      });

      gsap.fromTo(block.querySelector(".flex_block").querySelector(".flex_block_image").querySelector(".lines_middle"), {
        autoAlpha: 0,
        y: -20
      }, {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "+=500",
          scrub: 1,
        }
      });

      gsap.fromTo(block.querySelector(".flex_block").querySelector(".flex_block_text"), {
        autoAlpha: 0,
      }, {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "+=500",
          scrub: 1,
        }
      });

      gsap.fromTo(block.querySelector(".image_glow"), {
        autoAlpha: 0,
      }, {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          end: "+=500",
          scrub: 1,
        }
      });
    });

    gsap.fromTo(document.querySelector(".animate_sub").querySelector("h4"), {
      y: 50,
    }, {
      y: 0,
      scrollTrigger: {
        trigger: ".subscribe_block",
        start: "20% 80%",
        end: "+=300",
        scrub: 1,
      }
    });

    gsap.fromTo(document.querySelector(".subscribe_text").querySelector("span"), {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".subscribe_block",
        start: "30% 80%",
        end: "+=200",
        scrub: 1,
      }
    });

    gsap.fromTo(document.querySelector(".subscribe_text").querySelector(".block_subscribe"), {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".subscribe_block",
        start: "30% 80%",
        end: "+=200",
        scrub: 1,
      }
    });

    gsap.fromTo(".subscribe_block_illustr", {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: ".subscribe_block",
        start: "30% 80%",
        end: "+=200",
        scrub: 1,
      }
    });

  };
});
