document.querySelectorAll(".menuItem").forEach((item) => {
  item.addEventListener("click", function (e) {
    const text = e.target.innerText.trim();

    if (text === "Filtrera") {
      window.location.href = "filtrera.html";
    } else if (text === "Recept") {
      window.location.href = "recept.html";
    } else if (text === "Favoriter") {
      window.location.href = "favoriter.html";
    }
  });
});
