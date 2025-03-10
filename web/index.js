// Enable focus-mode on prompt
const input = document.getElementById('always-focus');
input.addEventListener("blur", () => {
  setTimeout(() => input.focus(), 10);
});

// Read input from prompt & clean prompt
const run = () => {
    Bash(input.value);
    input.value = "";
}

// Initialize application
window.onload = () => input.focus();