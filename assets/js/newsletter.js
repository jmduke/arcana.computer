const formElements = document.querySelector("form");
if (formElements) {
  formElements.addEventListener("submit", (e) => {
    e.preventDefault();

    const request = new XMLHttpRequest();
    request.open("POST", e.target.action);
    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        alert("You're all signed up!");
      } else {
        alert("Mind double checking your email? That appears incorrect.");
        Array.from(e.target.children).map((child) => {
          child.disabled = false;
        });
      }
    };
    request.send(new FormData(e.target));
    Array.from(e.target.children).map((child) => {
      child.disabled = true;
    });
  });
}
