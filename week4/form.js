const form = document.querySelector("#form");
const n = document.querySelector("#name");
const password = document.querySelector("#password");
const errorEl = document.querySelector("#error");

form.addEventListener("submit", (e) => {
    let messages = [];
    if (n.value === "" || n.value == null) {
        messages.push("Name is required")
    }

    if (password.value.length <= 6) {
        messages.push("Password must be at least 6 characters long")
    }

    if (password.value.length >= 20) {
        messages.push("Password must be less than 20 characters")
    }

    if (password.value === "password") {
        messages.push("Password can not be password")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorEl.innerText = messages.join(", ")
    }
});