const inputField = document.getElementById("yourInputId");

inputField.addEventListener("focus", function () {
    this.setAttribute("data-placeholder", this.placeholder);
    this.placeholder = "";
});

inputField.addEventListener("blur", function () {
    this.placeholder = this.getAttribute("data-placeholder");
});
