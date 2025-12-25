const screens = {
  start: document.getElementById("screen-start"),
  teams: document.getElementById("screen-teams"),
};

const startGameBtn = document.getElementById("startGameBtn");
const teamCountInput = document.getElementById("teamCount");
const teamsContainer = document.getElementById("teamsContainer");

function showScreen(name) {
  Object.values(screens).forEach(screen =>
    screen.classList.remove("active")
  );
  screens[name].classList.add("active");
}

// переход с пролога
startGameBtn.addEventListener("click", () => {
  showScreen("teams");
  renderTeams();
});

// генерация полей команд
function renderTeams() {
  teamsContainer.innerHTML = "";
  const count = Number(teamCountInput.value);

  for (let i = 0; i < count; i++) {
    const input = document.createElement("input");
    input.placeholder = `Команда ${i + 1}`;
    input.style.marginBottom = "12px";
    teamsContainer.appendChild(input);
  }
}

teamCountInput.addEventListener("change", renderTeams);
