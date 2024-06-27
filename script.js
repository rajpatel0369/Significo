function homepageAnimation() {
  gsap.set(".slidesm", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  tl.to(
    ".videodiv",
    {
      "--clip": "0%",
      ease: Power3,
    },
    "a"
  )
    .to(
      ".slidesm",
      {
        scale: 1,
        ease: Power3,
      },
      "a"
    )
    .to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.2,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.2,
        ease: Power4,
      },
      "b"
    );
}
function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4,
  });
}
function teamAnimation() {
  var listElem = document.querySelectorAll(".listelem");
  listElem.forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        eas: Power4,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        duration: 0.3,
      });
    });
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        eas: Power4,
        duration: 0.3,
      });
    });
  });
}
function paraAnimation() {
  var textPara = document.querySelector(".textpara");
  var clutter = "";
  textPara.textContent.split("").forEach(function (e) {
    if (e === "") clutter += `<span>&nbsp;</span>`;
    clutter += `<span>${e}</span>`;
  });
  textPara.innerHTML = clutter;
  gsap.set(".textpara span", { opacity: 0.1 });
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 80%",
      scrub: 2,
    },
    opacity: 1,
    stagger: 0.3,
    ease: Power4,
  });
}
function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
function capsuleAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 2,
    },
    y: 0,
    ease: Power4,
  });
}
function bodyColorChange() {
  document.querySelectorAll(".section").forEach((e) => {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}
bodyColorChange();
capsuleAnimation();
loco();
paraAnimation();
teamAnimation();
homepageAnimation();
realPageAnimation();
