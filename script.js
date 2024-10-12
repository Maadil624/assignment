function selectUnits(event, ID, amount) {
  let radio = document.getElementById("radio" + ID);
  let allContents = document
    .querySelectorAll(".units-content-section")
    .forEach((eachContent) => {
      eachContent.style.display = "none";
    });
  let allSections = document
    .querySelectorAll(".units-section")
    .forEach((eachSelection) => {
      eachSelection.classList.remove("highlight-border");
    });

  let unitsSection = document.getElementById("units-section" + ID);
  unitsSection.classList.add("highlight-border");

  let content = document.getElementById("content" + ID);
  content.style.display = "block";
  if (radio) radio.checked = true;
  let amountElement = document.getElementById("amount");
  if (amountElement) amountElement.innerText = ` Total : $${amount}.00 USD `;
  console.log("units clicked", content);
}
