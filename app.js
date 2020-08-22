// Form Groups
const lenseGroup = document.querySelector("#lense-group");
const powerGroup = document.querySelector("#power-group");
const type1 = document.querySelector("#type1-group");
const type2 = document.querySelector("#type2-group");
const type3 = document.querySelector("#type3-group");

// Next Buttons
const lenseN = document.querySelector("#lenseN");
const powerN = document.querySelector("#powerN");
const type1N = document.querySelector("#type1N");
const type2N = document.querySelector("#type2N");

// Prev Buttons
const powerP = document.querySelector("#powerP");
const type1P = document.querySelector("#type1P");
const type2P = document.querySelector("#type2P");
const type3P = document.querySelector("#type3P");

// Select Bar
const selectbar = document.querySelector("#selectbar");

// Selects
const lens = document.querySelector("#lens");
const power = document.querySelector("#power");
const type1s = document.querySelector("#type1");
const type2s = document.querySelector("#type2");
const type3s = document.querySelector("#type3");

// Event Listeners
lenseN.addEventListener("click", showPG);
powerN.addEventListener("click", showT1);
type1N.addEventListener("click", showT2);
type2N.addEventListener("click", showT3);
powerP.addEventListener("click", showLG);
type1P.addEventListener("click", showPG);
type2P.addEventListener("click", showT1);
type3P.addEventListener("click", showT2);

function showAlert() {
  const div = document.createElement("div");
  div.className = `alert text-center my-1`;
  div.appendChild(document.createTextNode("Please choose an option"));
  const container = document.querySelector("#main-form");
  const form = document.querySelector("#selectbar");
  container.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 2000);
}

function showLG(e) {
  lenseGroup.style.display = "block";
  powerGroup.style.display = "none";
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "none";

  selectbar.innerHTML = "";

  e.preventDefault();
}

function showPG(e) {
  if (lens.options[lens.selectedIndex].text !== "Select Option") {
    lenseGroup.style.display = "none";
    powerGroup.style.display = "block";
    type1.style.display = "none";
    type2.style.display = "none";
    type3.style.display = "none";

    selectbar.innerHTML = `<span class="category first">${
      lens.options[lens.selectedIndex].text
    }</span>`;
  } else {
    showAlert();
  }

  e.preventDefault();
}

function showT1(e) {
  if (power.options[power.selectedIndex].text !== "Select Option") {
    lenseGroup.style.display = "none";
    powerGroup.style.display = "none";
    type1.style.display = "block";
    type2.style.display = "none";
    type3.style.display = "none";

    selectbar.innerHTML = `<span class="category first">${
      lens.options[lens.selectedIndex].text
    }</span> <i class="fas fa-caret-right"></i> <span class="category second">${
      power.options[power.selectedIndex].text
    }</span>`;
  } else {
    showAlert();
  }

  e.preventDefault();
}

function showT2(e) {
  if (type1s.options[type1s.selectedIndex].text !== "Select Option") {
    lenseGroup.style.display = "none";
    powerGroup.style.display = "none";
    type1.style.display = "none";
    type2.style.display = "block";
    type3.style.display = "none";

    selectbar.innerHTML = `<span class="category first">${
      lens.options[lens.selectedIndex].text
    }</span> <i class="fas fa-caret-right"></i> <span class="category second">${
      power.options[power.selectedIndex].text
    }</span> <i class="fas fa-caret-right"></i> <span class="category third">${
      type1s.options[type1s.selectedIndex].text
    }</span>`;

    document.querySelector("#priceSection").style.display = "none";
  } else {
    showAlert();
  }

  e.preventDefault();
}

function showT3(e) {
  if (type2s.options[type2s.selectedIndex].text !== "Select Option") {
    lenseGroup.style.display = "none";
    powerGroup.style.display = "none";
    type1.style.display = "none";
    type2.style.display = "none";
    type3.style.display = "block";

    selectbar.innerHTML = `<span class="category first">${
      lens.options[lens.selectedIndex].text
    }</span> <i class="fas fa-caret-right"></i> <span class="category second">${
      power.options[power.selectedIndex].text
    }</span> <i class="fas fa-caret-right"></i> <span class="category third">${
      type1s.options[type1s.selectedIndex].text
    }</span> <i class="fas fa-caret-right"></i> <span class="category fourth">${
      type2s.options[type2s.selectedIndex].text
    }</span>`;

    document.querySelector("#priceSection").style.display = "block";
  } else {
    showAlert();
  }

  e.preventDefault();
}
