const SUPABASE_URL = "YOUR_URL";
const SUPABASE_KEY = "YOUR_KEY";

async function calculate() {
let name = document.getElementById("yourName").value;
let crush = document.getElementById("crushName").value;

if(!name || !crush){
alert("Enter both names!");
return;
}

await fetch(SUPABASE_URL + "/rest/v1/love_data", {
method: "POST",
headers: {
"Content-Type": "application/json",
"apikey": SUPABASE_KEY,
"Authorization": "Bearer " + SUPABASE_KEY
},
body: JSON.stringify({ name, crush })
});

window.location.href = "result.html";
}
