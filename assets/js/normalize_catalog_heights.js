window.addEventListener("load", () => {
Array.from(document.getElementsByClassName("tabular-content-item")).map(item => item.style.minHeight = Math.max(item.children[0].clientHeight, item.children[1].clientHeight) + "px")
});