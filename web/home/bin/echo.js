const Echo = (input) => {
    const response = document.createElement("div");
    response.innerHTML = `
    <div class = "ml-4">
        ${input.trim().replace("echo ", "")}
    </div>
    `
    history.appendChild(response);
}