const SUPABASE_URL = "YOUR_URL";
const SUPABASE_KEY = "YOUR_KEY";

function startCalculation() {
let name = document.getElementById("yourName").value;
let crush = document.getElementById("crushName").value;

if(!name || !crush){
alert("Enter both names!");
return;
}

// Save to database
fetch(SUPABASE_URL + "/rest/v1/love_data", {
method: "POST",
headers: {
"Content-Type": "application/json",
"apikey": SUPABASE_KEY,
"Authorization": "Bearer " + SUPABASE_KEY
},
body: JSON.stringify({ name, crush })
});

// Show loading
showLoading(name, crush);
}

function showLoading(name, crush) {

let loadingHTML = `
<div id="loadingScreen">
<h2>Analyzing love…</h2>

<div class="progress-bar">
<div class="progress" id="progress"></div>
</div>

<h3 id="resultText"></h3>
</div>
`;

document.body.insertAdjacentHTML("beforeend", loadingHTML);

let screen = document.getElementById("loadingScreen");
let progress = document.getElementById("progress");
let resultText = document.getElementById("resultText");

screen.style.display = "flex";

let width = 0;

let interval = setInterval(() => {
width += 2;
progress.style.width = width + "%";

if(width >= 100){
clearInterval(interval);

// Fake result (your custom one)
resultText.innerText = "Gad ❤️ Antoinette = 87%";

setTimeout(() => {
window.location.href = "result.html";
}, 2000);
}

}, 50);
}
