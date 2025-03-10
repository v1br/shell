// Permanently enable focus-mode on prompt
const input = document.getElementById('always-focus');
input.addEventListener("blur", () => {
  setTimeout(() => input.focus(), 10);
});

const run = () => {
    console.log("Input detected!");
    input.value = "";
}

// Initialize application
window.onload = () => input.focus();