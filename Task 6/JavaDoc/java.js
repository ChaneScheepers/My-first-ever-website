//DOM docs for button and where to display saved items.
const saveForLaterButtons = document.querySelectorAll(".saveButton");
const saveForLaterPage = document.getElementById("printHere");

//collects data from Session and converts to correct form.
function getSavedItems() {
  const safeForLaterData = sessionStorage.getItem("SAVE_FOR_LATER");
  return safeForLaterData !== null ? JSON.parse(safeForLaterData) : [];
}
const savedItems = getSavedItems();

//Function to save data in SessionStorage.
function saveItems(items) {
  sessionStorage.setItem("SAVE_FOR_LATER", JSON.stringify(items));
}

//Remove duplicates from array
function setSaveForLater(name) {
  let saved = getSavedItems();
  saved = saved.filter((v) => v !== name);
  saved.push(name);
  saveItems(saved);
}

//Added a switch loop for each button. If the button is clicked it saves the name of the recipe to storage. The name will be used later to identify which pic needs to be collected and shown on HTML.
for (let i = 0; i < saveForLaterButtons.length; i++) {
  saveForLaterButtons[i].addEventListener("click", () => {
    console.log("test");
    switch (i) {
      case 0:
        setSaveForLater("risotto");
        alert(
          `Saved. You have ${
            Object.keys(JSON.parse(sessionStorage.getItem("SAVE_FOR_LATER")))
              .length
          } in your saved for later page`
        );
        saveForLaterButtons[i].innerHTML = "SAVED!!";
        console.log("risotto");
        break;

      case 1:
        setSaveForLater("ravioli");
        alert(
          `Saved. You have ${
            Object.keys(JSON.parse(sessionStorage.getItem("SAVE_FOR_LATER")))
              .length
          } in your saved for later page`
        );
        saveForLaterButtons[i].innerHTML = "SAVED!!";
        console.log("ravioli");
        break;

      case 2:
        setSaveForLater("sweetpotato");
        alert(
          `Saved. You have ${
            Object.keys(JSON.parse(sessionStorage.getItem("SAVE_FOR_LATER")))
              .length
          } in your saved for later page`
        );
        saveForLaterButtons[i].innerHTML = "SAVED!!";
        console.log("sweetpotato");
        break;
    }
  });
}

const displayData = [];

//If the item is stored, collect picture from internal file. It only collects the recipe pic.
if (savedItems.indexOf("risotto") >= 0) {
  let listTwo = document.createElement("li");
  let image = document.createElement("img");
  image.src = "../Images/RisottRep.png";
  listTwo.innerHTML = "Reuben's Winter Risotto from UCook";
  saveForLaterPage.appendChild(listTwo);
  listTwo.appendChild(image);
}
if (savedItems.indexOf("sweetpotato") >= 0) {
  let listOne = document.createElement("li");
  let image = document.createElement("img");
  image.src = "../Images/NatchoRec.png";
  listOne.innerHTML = "Sweet Potato Nacho Fest from UCook";
  displayData.push(listOne);
  saveForLaterPage.appendChild(listOne);
  listOne.appendChild(image);
}

if (savedItems.indexOf("ravioli") >= 0) {
  let list = document.createElement("li");
  let image = document.createElement("img");
  image.src = "../Images/RaviRep.png";
  list.innerHTML = "Mamma Mia Ravioli from UCook";
  displayData.push(list);
  saveForLaterPage.appendChild(list);
  list.appendChild(image);
}


//The below ads a heart to something that was clicked/liked.
const likeButtons = document.querySelectorAll(".like");

for (let i = 0; 0 < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", () => {
    alert("Thank you for liking this recipe ;)");
    likeButtons[i].innerHTML = "💗";
  });
}
