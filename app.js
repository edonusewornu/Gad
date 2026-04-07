function calculate() {
  let name = document.getElementById("yourName").value;
  let crush = document.getElementById("crushName").value;
window.calculate = calculate;
window.loadData = loadData;
  if (name === "" || crush === "") {
    alert("Fill all fields!");
    return;
  }

  // Play sound
  const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
  audio.play();

  push(ref(db, "submissions"), {
    name: name,
    crush: crush
  });

  setTimeout(() => {
    window.location.href = "prank.html";
  }, 500);
}

function loadData() {
  const table = document.getElementById("dataTable");

  onValue(ref(db, "submissions"), (snapshot) => {
    table.innerHTML = "";

    snapshot.forEach((child) => {
      let data = child.val();

      let row = `
        <tr>
          <td>${data.name}</td>
          <td>${data.crush}</td>
        </tr>
      `;

      table.innerHTML += row;
    });
  });
}
