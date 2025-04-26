window.addEventListener("load", function () {
  const tag = document.querySelectorAll(".filter-tag");

  tag.forEach((item) => {
    const text = item.textContent.trim().toLowerCase();

    switch (text) {
      case "fisk":
        item.classList.add("red");
        break;
      case "huvudrätt":
      case "asiatisk":
        item.classList.add("purple");
        break;
      case "glutenfritt":
      case "gluten":
        item.classList.add("yellow");
        break;
      case "kan göras vegetarisk":
        item.classList.add("green");
        break;
      default:
        break;
    }
  });
});

document.querySelectorAll(".menuItem").forEach((item) => {
  item.addEventListener("click", function (e) {
    const text = e.target.innerText.trim().toLowerCase();

    if (text === "filtrera") {
      window.location.href = "filtrera.html";
    } else if (text.includes("recept")) {
      window.location.href = "recept.html";
    } else if (text === "favoriter") {
      window.location.href = "favoriter.html";
    }
  });
});
