let count = 0;
let cards = document.querySelectorAll(".content");

function toggleTheme() {
  count++;
  let themeRow = document.getElementById("themeRow");
  let themeImage = document.getElementById("themeImage");

  if (count % 2 !== 0) {
    document.querySelector("body").classList.remove("bg-black", "text-white");
    document.querySelector("body").classList.add("bg-white", "text-black");

    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      card.classList.remove("bg-dark", "text-white");
      card.classList.add("bg-white", "text-black");
    }

    document.querySelector("#acaTable").classList.remove("border-white", "table-dark");
    themeRow.classList.remove("black");
    themeRow.classList.add("white");

    // Change image source for white theme
    themeImage.src = "./images/RAJ_5470-Photoroom_1 (1).png";
  } else {
    document.querySelector("body").classList.remove("bg-white", "text-black");
    document.querySelector("body").classList.add("bg-black", "text-white");

    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      card.classList.remove("bg-white", "text-black");
      card.classList.add("bg-dark", "text-white");
    }

    document.querySelector("#acaTable").classList.add("border-white", "table-dark");
    themeRow.classList.remove("white");
    themeRow.classList.add("black");

    // Change image source for black theme
    themeImage.src = "./images/RAJ_5470-Photoroom.png";
  }
}

document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
