import elements from "./elements.js";

// Iterate through the elements array
const container = document.createElement("div");
container.className = "container";

elements.forEach((element) => {
  // Create a <p> element
  const p = document.createElement("p");
  const container = document.querySelector("#container");
  p.id = element.id;
  p.textContent = `${
    elements.indexOf(element) + 1
  }. Split me baby one more time!`;
  container.appendChild(p);

  // use a script tag or an external JS file
  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(SplitText);

    element.animationCode();
  });

  // Create a <textarea> element
  const textarea = document.createElement("textarea");
  textarea.id = `text-area-${elements.indexOf(element) + 1}`;
  textarea.className = "text-area";
  // Convert the function to a string
  const functionString = element.animationCode.toString();

  // Remove the "() => {}" wrapper
  const functionBody = functionString
    .replace(/^\(\)\s*=>\s*{/, "")
    .replace(/}$/, "");
  textarea.value = functionBody;
  textarea.style.width = "500px";
  textarea.style.height = "100px";
  container.appendChild(textarea);

  // Create a div to hold the button and checkmark
  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.alignItems = "center";

  // Create a green checkmark element
  const checkmark = document.createElement("span");
  checkmark.textContent = "✔";
  checkmark.style.color = "green";
  checkmark.style.marginRight = "10px";
  checkmark.style.visibility = "hidden"; // Use visibility instead of display

  // Create a copy button
  const copyButton = document.createElement("button");
  copyButton.textContent = "Copy Code";
  copyButton.addEventListener("click", () => {
    textarea.select();
    document.execCommand("copy");

    // Show the checkmark
    checkmark.style.visibility = "visible";

    // Hide the checkmark after 2 seconds
    setTimeout(() => {
      checkmark.style.visibility = "hidden";
    }, 2000);
  });

  // Append the checkmark and button to the button container
  buttonContainer.appendChild(checkmark);
  buttonContainer.appendChild(copyButton);

  // Append the button container to the main container
  container.appendChild(buttonContainer);
});

document.body.appendChild(container);
