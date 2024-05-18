document.addEventListener("DOMContentLoaded", () => {
  const selectMonth = document.querySelector("#month_select");
  const selectTheme = document.querySelector("#selectTheme");
  const list = document.querySelector("ul");
  const h1 = document.querySelector("h1");
  const html = document.querySelector("html");

  function updateTheme(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }

  function createCalendar(days, choice) {
    list.innerHTML = "";
    h1.textContent = choice;
    for (let i = 1; i <= days; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = i;
      list.appendChild(listItem);
    }
  }

  selectMonth.addEventListener("change", () => {
    const choice = selectMonth.value;

    let days = 31;
    if (choice === "February") {
      days = 28;
    } else if (
      choice === "April" ||
      choice === "June" ||
      choice === "September" ||
      choice === "November"
    ) {
      days = 30;
    }

    createCalendar(days, choice);
  });

  selectTheme.addEventListener("change", () => {
    const theme = selectTheme.value;

    if (theme === "black") {
      updateTheme("#000", "#fff");
    } else if (theme === "white") {
      updateTheme("#fff", "#000");
    } else {
      updateTheme("teal", "#fff");
    }
  });

  // Initial Calendar Setup
  createCalendar(31, "January");
});
