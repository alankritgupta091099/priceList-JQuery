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
  lenseGroup.style.display = "none";
  powerGroup.style.display = "block";
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "none";

  selectbar.innerHTML = `${lens.options[lens.selectedIndex].text}`;

  e.preventDefault();
}

function showT1(e) {
  lenseGroup.style.display = "none";
  powerGroup.style.display = "none";
  type1.style.display = "block";
  type2.style.display = "none";
  type3.style.display = "none";

  selectbar.innerHTML = `${lens.options[lens.selectedIndex].text} > ${
    power.options[power.selectedIndex].text
  }`;

  e.preventDefault();
}

function showT2(e) {
  lenseGroup.style.display = "none";
  powerGroup.style.display = "none";
  type1.style.display = "none";
  type2.style.display = "block";
  type3.style.display = "none";

  selectbar.innerHTML = `${lens.options[lens.selectedIndex].text} > ${
    power.options[power.selectedIndex].text
  } > ${type1s.options[type1s.selectedIndex].text}`;

  e.preventDefault();
}

function showT3(e) {
  lenseGroup.style.display = "none";
  powerGroup.style.display = "none";
  type1.style.display = "none";
  type2.style.display = "none";
  type3.style.display = "block";

  selectbar.innerHTML = `${lens.options[lens.selectedIndex].text} > ${
    power.options[power.selectedIndex].text
  } > ${type1s.options[type1s.selectedIndex].text} > ${
    type2s.options[type2s.selectedIndex].text
  }`;

  e.preventDefault();
}
