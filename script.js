const elements = [
  {
    id: "text-1",
    jsCode: `
    const text1 = new SplitText("#text-1", {
    type: "chars"
    }).chars;

    text1.forEach((char, i) => {

    const charTL = gsap.timeline({
        repeat: -1,
        yoyo: true
    });

    charTL.to(char, {
        yPercent: 4,
        rotateY: 25,
        duration: 0.3,
        ease: "power1.inOut"
    }).to(char, {
        yPercent: 0,
        rotateY: -25,
        duration: 0.3,
        ease: "power1.inOut"
    });

    text1TL.add(charTL, i * -0.05);
    });

    text1TL.play()`,
  },
];

// Iterate through the elements array
const container = document.createElement("div");

elements.forEach((element) => {
  // Create a <p> element
  const p = document.createElement("p");
  p.id = element.id;
  p.textContent = `Split me baby one more time!`;
  container.appendChild(p);

  // use a script tag or an external JS file
  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(SplitText);
    // Animate the <p> element with GSAP
    const text1 = new SplitText("#text-1", {
      type: "chars",
    }).chars;

    text1TL = gsap.timeline();

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
  });

  // Create a <textarea> element
  const textarea = document.createElement("textarea");
  textarea.value = element.jsCode;
  textarea.style.width = "100%";
  textarea.style.height = "100px";
  container.appendChild(textarea);

  // Create a copy button
  const copyButton = document.createElement("button");
  copyButton.textContent = "Copy Code";
  copyButton.addEventListener("click", () => {
    textarea.select();
    document.execCommand("copy");
    alert("Code copied to clipboard!");
  });
  container.appendChild(copyButton);

  // Add some spacing
  const spacer = document.createElement("div");
  spacer.style.height = "20px";
  container.appendChild(spacer);
});

document.body.appendChild(container);
