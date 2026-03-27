const searchForm = document.getElementById("searchForm");
const addressInput = document.getElementById("addressInput");

if (searchForm && addressInput) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const address = addressInput.value.trim();
    if (!address) return;

    alert(`Searching halal restaurants near: ${address}`);
  });
}
