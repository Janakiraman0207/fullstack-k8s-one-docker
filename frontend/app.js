async function loadProducts() {
  try {
    const res = await fetch("/api/products");
    const data = await res.json();

    const container = document.getElementById("products");
    container.innerHTML = "";

    data.forEach(p => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${p.name}</h3><p>₹${p.price}</p>`;
      container.appendChild(div);
    });
  } catch (err) {
    console.error("Error loading products", err);
  }
}

loadProducts();
