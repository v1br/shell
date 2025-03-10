const history = document.getElementById("history");

const Bash = (input) => {

  const prompt = document.createElement("div");
  prompt.innerHTML = `
    <div id="prompt" class="mt-4 ml-4 font-semibold">
    <span class="cgreen">┌── (</span><span class="cblue"> v1br🔸Vibhor </span><span class="cgreen">) -
        [~]</span><br />
    <span class="cgreen">└─ </span><span class="cblue">$</span>
    <span class="w-[100ch] ml-1 font-normal bg-transparent border-none outline-none">${input}</span><br />
    </div>
  `
  history.appendChild(prompt);

  if (input.toLowerCase().startsWith("echo")) {
    Echo(input);
  }

}