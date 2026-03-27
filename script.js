const searchForm = document.getElementById("searchForm");
const addressInput = document.getElementById("addressInput");
const revealElements = document.querySelectorAll(".reveal");

if (searchForm && addressInput) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const address = addressInput.value.trim();
    if (!address) return;

    alert(`Searching halal restaurants near: ${address}`);
  });
}

if (revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => observer.observe(element));
}
