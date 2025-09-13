// Template for one row
const rowTemplate = `
  <div class="row">
    <div class="cell">
      <select>
        <option>S</option>
        <option>M</option>
      </select>
    </div>
    <div class="cell">
      <select>
        <option>Black</option>
        <option>White</option>
      </select>
    </div>
  </div>
`;

// inject 2 rows into each bundle
document.querySelectorAll(".bundle-box .table").forEach((table) => {
  table.insertAdjacentHTML("beforeend", rowTemplate.repeat(2));
});

function selectBundle(radio) {
  document
    .querySelectorAll(".bundle-box")
    .forEach((box) => box.classList.remove("active"));

  let selectedBox = radio.closest(".bundle-box");
  selectedBox.classList.add("active");

  let price = selectedBox.getAttribute("data-price");
  document.getElementById("total").innerText =
    "Total: DKK " + Number(price).toFixed(2);
}
