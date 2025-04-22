document.addEventListener("DOMContentLoaded", function () {
    console.log("Adding button");
  document.querySelectorAll("pre > code").forEach(function (codeBlock) {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.innerText = "Copy";

    button.addEventListener("click", function () {
      navigator.clipboard
        .writeText(codeBlock.textContent)
        .then(() => {
          button.innerText = "Copied!";
          setTimeout(() => {
            button.innerText = "Copy";
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });

    const pre = codeBlock.parentNode;
    pre.parentNode.insertBefore(button, pre);
  });
});
