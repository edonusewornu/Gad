function calculate(){
let name=document.getElementById("yourName").value;
let crush=document.getElementById("crushName").value;

fetch("https://api.jsonbin.io/v3/b/YOUR_BIN_ID",{
method:"PUT",
headers:{
"Content-Type":"application/json",
"X-Master-Key":"YOUR_API_KEY"
},
body:JSON.stringify([{name,crush}])
});

window.location.href="result.html";
}
