const screens = {
  start: document.getElementById("screen-start"),
  teams: document.getElementById("screen-teams"),
};

const startGameBtn = document.getElementById("startGameBtn");
const teamCountInput = document.getElementById("teamCount");
const teamsContainer = document.getElementById("teamsContainer");
const toSettingsBtn = document.getElementById("toSettingsBtn");

let teams = [];

function showScreen(name) {
  Object.values(screens).forEach(screen =>
    screen.classList.remove("active")
  );
  screens[name].classList.add("active");
}

// старт → команды
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
    input.dataset.index = i;
    input.style.marginBottom = "12px";
    teamsContainer.appendChild(input);
  }
}

teamCountInput.addEventListener("change", renderTeams);

// КНОПКА "ДАЛЕЕ"
toSettingsBtn.addEventListener("click", () => {
  const inputs = teamsContainer.querySelectorAll("input");

  teams = Array.from(inputs).map((input, i) => ({
    name: input.value.trim() || `Команда ${i + 1}`,
    score: 0,
  }));

  console.log("Команды сохранены:", teams);

  alert(
    "Команды сохранены:\n" +
    teams.map(t => t.name).join("\n")
  );
});
