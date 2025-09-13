function selectBundle(radio, price) {
  document.querySelectorAll(".bundle-box").forEach((box) => {
    box.classList.remove("active");
  });
  const bundleBox = radio.closest(".bundle-box");
  bundleBox.classList.add("active");
  document.getElementById("total").textContent =
    "Total: DKK " + price.toFixed(2);
}
