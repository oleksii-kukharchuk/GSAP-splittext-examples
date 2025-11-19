const text1Animation = () => {
  const text1 = new SplitText("#text-1", {
    type: "chars",
  }).chars;

  let text1TL = gsap.timeline();

  text1.forEach((char, i) => {
    const charTL = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    charTL
      .to(char, {
        yPercent: 4,
        rotateY: 25,
        duration: 0.3,
        ease: "power1.inOut",
      })
      .to(char, {
        yPercent: 0,
        rotateY: -25,
        duration: 0.3,
        ease: "power1.inOut",
      });

    text1TL.add(charTL, i * -0.05);
  });

  text1TL.play();
};

const text2Animation = () => {
  const text2 = new SplitText("#text-2", {
    type: "chars",
  }).chars;

  const text2TL = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    paused: true,
  });

  text2.forEach((char, i) => {
    text2TL.fromTo(
      char,
      {
        yPercent: 0,
        scaleY: 1,
      },
      {
        keyframes: [
          {
            yPercent: 2,
            scaleY: 0.9,
            duration: 0.16,
            ease: "power1.inOut",
          },
          {
            yPercent: -100,
            scaleY: 1.2,
            duration: 0.16,
            ease: "power1.inOut",
          },
          {
            yPercent: 10,
            scaleY: 0.8,
            duration: 0.1,
            ease: "power1.inOut",
          },
          {
            yPercent: -5,
            scaleY: 1,
            duration: 0.2,
            ease: "power1.inOut",
          },
          {
            yPercent: 0,
            scaleY: 1,
            duration: 0.2,
            ease: "power1.out",
          },
        ],
        delay: i * 0.075,
      },
      0
    );
  });

  text2TL.play();
};

const text3Animation = () => {
  const text3 = new SplitText("#text-3", {
    type: "chars",
  }).chars;

  const text3TL = gsap.timeline({
    repeat: -1,
    paused: true,
  });

  text3.forEach((char, i) => {
    const isAlt = i % 2 === 1;

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to(char, {
      xPercent: isAlt ? 2 : -2,
      yPercent: isAlt ? 10 : 5,
      rotation: 3,
      duration: 1.8,
      ease: "sine.inOut",
    });

    text3TL.add(tl, i * -0.5);
  });

  text3TL.play();
};

export { text1Animation, text2Animation, text3Animation };
