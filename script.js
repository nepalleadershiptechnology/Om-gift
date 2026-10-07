const WHATSAPP_NUMBER = "9779768579570";

const products = [
  {
    id: 1,
    name: "Deep Ocean Blossom & Seed Bead Bouquet Earrings",
    price: 499,
    stock: 14.8,
    inStock: true,
    categories: ["drop"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779621870429.webp",
    description:
      "A handcrafted bouquet of deep-ocean resin blossoms and colorful seed beads. These statement earrings add an artistic splash of color—perfect for everyday sparkle or a thoughtful gift.",
  },
  {
    id: 2,
    name: "Elegant Mint Green Marquise Crystal Sunburst Earrings",
    price: 500,
    stock: 14.6,
    inStock: true,
    categories: ["drop"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779621832290.webp",
    description:
      "Radiant mint-green marquise crystals arranged in a sunburst silhouette. Light-catching, elegant, and designed to brighten both casual and evening looks.",
  },
  {
    id: 3,
    name: "Elegant Pastel Pink Resin Blossom & Crystal Stud Earrings",
    price: 499,
    stock: 15.0,
    inStock: true,
    categories: ["stud"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779621794977.webp",
    description:
      "Delicate pastel-pink resin blossoms paired with crystal centers. A sweet, feminine stud that adds a soft floral touch to any outfit.",
  },
  {
    id: 4,
    name: "Elegant Gold-Plated Crystal Blossom Stud Earrings",
    price: 599,
    stock: 14.9,
    inStock: true,
    categories: ["stud"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779621241219.webp",
    description:
      "Gold-plated blossom studs set with sparkling crystals. A classic floral silhouette with a warm, luxurious finish for daily wear or special occasions.",
  },
  {
    id: 5,
    name: "Elegant Mint Green Blossom Bouquet Stud Earrings",
    price: 600,
    stock: 14.9,
    inStock: true,
    categories: ["stud"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779621147316.webp",
    description:
      "A petite bouquet of mint-green blossoms in a compact stud design. Fresh, feminine, and easy to wear from day to night.",
  },
  {
    id: 6,
    name: "Elegant Mint Green Marquise Crystal Cluster Earrings",
    price: 599,
    stock: 13.5,
    inStock: true,
    categories: ["drop"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779621076597.webp",
    description:
      "A luminous cluster of mint-green marquise crystals for refined sparkle. Elegant enough for celebrations, light enough for everyday.",
  },
  {
    id: 7,
    name: "Elegant Rose Quartz Pink Teardrop Cascade Earrings",
    price: 599,
    stock: 14.9,
    inStock: true,
    categories: ["drop"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779620982358.webp",
    description:
      "Add a soft, romantic touch to your style with these beautiful pastel pink statement earrings. Featuring a stunning cascade of faceted teardrop gems that catch the light from every angle, they offer a classy look for dinners, parties, or festive events. Light, elegant, and perfect for making a subtle yet gorgeous impression.",
  },
  {
    id: 8,
    name: "Traditional Gold-Plated Kundan & Pearl Jhumka Drop Earrings",
    price: 599,
    stock: 15.0,
    inStock: true,
    categories: ["drop", "traditional"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779620856687.webp",
    description:
      "Make a statement with these gorgeous ethnic-style drop earrings featuring premium Kundan stones and a rich cluster of hanging white pearls. Designed with a textured, stone-finish center and a classic gold-plated base, they add instant royal elegance to any traditional outfit. Perfect for weddings, festivals, or special celebrations.",
  },
  {
    id: 9,
    name: "Pastel Blossom & Seed Bead Bouquet Earrings",
    price: 599,
    stock: 15.0,
    inStock: true,
    categories: ["drop"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779620730297.webp",
    description:
      "Embrace a fresh, whimsical vibe with these beautiful handcrafted bouquet earrings featuring pastel blue, purple, and white resin blossoms. Intricately accented with vibrant, colorful seed beads, they bring a fun and artistic pop of color to your style. Perfect for a cheerful daily look or a unique gift.",
  },
  {
    id: 10,
    name: "Elegant Gold-Plated Sakura Flower & Pearl Stud Earrings",
    price: 599,
    stock: 14.9,
    inStock: true,
    categories: ["stud"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779620451610.webp",
    description:
      "Gold-plated sakura blossoms paired with a lustrous pearl. A graceful, romantic stud that feels both delicate and refined.",
  },
  {
    id: 11,
    name: "Vintage Gold-Plated Teal & Crystal Pinwheel Stud Earrings",
    price: 350,
    stock: 0,
    inStock: false,
    categories: ["stud"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779620214992.webp",
    description:
      "Bring a beautiful swirl of color to your style with these eye-catching pinwheel earrings featuring deep teal and clear sparkling crystals. Set on a textured gold-plated base, their unique floral design radiates elegance and charm.",
  },
  {
    id: 12,
    name: "Elegant Royal Blue & Crystal Floral Stud Earrings",
    price: 349,
    stock: 14.8,
    inStock: true,
    categories: ["stud"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779620042739.webp",
    description:
      "Catch everyone’s eye with these vibrant royal blue and clear crystal flower earrings. Sleek, shiny, and full of effortless sparkle, they are the perfect finish for any outfit.",
  },
  {
    id: 13,
    name: "Light Blue Floral Bouquet Stud Earrings",
    price: 650,
    stock: 0,
    inStock: false,
    categories: ["stud"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779115975072.webp",
    description:
      "Beautiful, eye-catching statement stud earrings designed to look like a mini bouquet of flowers. They feature clusters of soft, light blue matte petals with sparkling crystal rhinestones at the center of each tiny flower.",
    features: [
      "Detailed floral design",
      "Sparkling crystal centers",
      "925 Silver Post",
      "Light blue / sky blue color",
      "Gold-tone base",
      "Resin/acrylic flowers",
      "Rhinestones",
    ],
    care: "Keep dry and clean with a soft cloth. Avoid perfumes and water to preserve the colors.",
  },
  {
    id: 14,
    name: "Classic Teal Blue Pearl Stud Earrings",
    price: 300,
    stock: 0,
    inStock: false,
    categories: ["stud"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779115793211.webp",
    description:
      "A simple and elegant pair of round pearl stud earrings in a unique teal blue color. These oversized studs add a cool pop of color while keeping a timeless, classy look.",
    features: [
      "Unique teal blue pearl shade",
      "Round stud design",
      "925 Silver Post",
      "Faux pearl",
      "Alloy base",
    ],
    care: "Avoid water and perfume to keep the color shiny and bright.",
  },
  {
    id: 15,
    name: "Minimalist Off-White Shimmer C-Hoop Earrings",
    price: 400,
    stock: 14.4,
    inStock: true,
    categories: ["hoop"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779115329182.webp",
    description:
      "Classic and simple small C-shaped hoop earrings featuring a smooth off-white enamel finish with a subtle glittery shimmer and thin gold-colored edge.",
    features: [
      "Minimalist design",
      "Subtle shimmer",
      "Lightweight",
      "Comfortable for daily wear",
      "Gold-plated alloy and enamel",
    ],
  },
  {
    id: 16,
    name: "Elegant Pearl and Crystal Leaf Drop Earrings",
    price: 600,
    stock: 0,
    inStock: false,
    categories: ["drop"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779114562490.webp",
    description:
      "Elegant Korean-style dangle earrings featuring a classic faux pearl stud with a sparkling crystal leaf branch hanging below.",
    features: [
      "Crystal leaf design",
      "Faux pearl",
      "Gold-plated alloy",
      "925 Silver Needle",
      "Suitable for parties, weddings, birthdays, and gifting",
    ],
  },
  {
    id: 17,
    name: "Korean-Style Rose Quartz Diamond-Border Earrings",
    price: 550,
    stock: 14.4,
    inStock: true,
    categories: ["stud"],
    image:
      "https://pub-5c14c7bf14c24192a42873acb5330b7c.r2.dev/job-portal/product-images/product-img-0b2f61db-2583-4163-b800-d597e2466980-1779114087333.webp",
    description:
      "Elegant Korean-style geometric stud earrings featuring a square-cut pink stone with a subtle cat-eye sheen, surrounded by a border of sparkling micro-rhinestones.",
    features: [
      "Chic Korean-inspired design",
      "Square geometric shape",
      "Pink central stone",
      "Crystal border",
      "Silver-plated posts",
      "Lightweight",
      "Suitable for casual, office, and evening wear",
    ],
  },
];

const WHATSAPP_ICON = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.04 2C6.5 2 2 6.36 2 11.74c0 1.72.46 3.4 1.34 4.88L2 22l5.54-1.44a10.2 10.2 0 0 0 4.5 1.04h.01c5.54 0 10.04-4.36 10.04-9.74C22.09 6.36 17.58 2 12.04 2zm5.84 13.86c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.14-1.82-.12-.42-.16-.96-.32-1.66-.62-2.92-1.26-4.82-4.2-4.96-4.4-.14-.2-1.16-1.54-1.16-2.94s.74-2.08 1-2.36c.24-.28.54-.34.72-.34h.52c.16 0 .4-.06.62.48.24.56.8 1.94.86 2.08.08.14.12.3.02.48-.1.2-.16.32-.3.5-.14.16-.3.36-.42.48-.14.14-.28.28-.12.54.16.28.7 1.16 1.5 1.88 1.04.94 1.9 1.24 2.18 1.38.28.14.44.12.6-.06.16-.2.7-.82.88-1.1.18-.28.36-.24.62-.14.24.1 1.54.72 1.8.86.26.14.44.2.5.32.08.12.08.68-.16 1.36z"></path>
  </svg>
`;

function orderOnWhatsApp(productName, price) {
  const message = `Hi OmgiftStoresindhuli, I want to order:
Product: ${productName}
Price: Rs ${price}
Please provide availability and delivery details.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function formatStock(product) {
  if (!product.inStock) return "Out of Stock";
  return `In Stock · ${Number(product.stock).toFixed(1)}`;
}

function shortDescription(text) {
  const first = text.split(". ")[0].trim();
  return first.endsWith(".") ? first : `${first}.`;
}

function whatsappButton(product, extraClass = "") {
  if (!product.inStock) {
    return `<button class="btn ${extraClass}" type="button" disabled>Out of Stock</button>`;
  }
  return `<button class="btn btn-whatsapp js-order ${extraClass}" type="button" data-id="${product.id}">${WHATSAPP_ICON} Order on WhatsApp</button>`;
}

function renderProducts(list) {
  const grid = document.getElementById("product-grid");
  const empty = document.getElementById("empty-state");
  const meta = document.getElementById("results-meta");

  if (!list.length) {
    grid.innerHTML = "";
    empty.hidden = false;
    meta.textContent = "0 pieces found";
    return;
  }

  empty.hidden = true;
  meta.textContent = `${list.length} ${list.length === 1 ? "piece" : "pieces"}`;
  grid.innerHTML = list
    .map(
      (product) => `
      <article class="product-card" tabindex="0" data-id="${product.id}" aria-label="${product.name}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.name}" loading="lazy" width="600" height="600" />
          <span class="badge ${product.inStock ? "" : "oos"}">${product.inStock ? "In Stock" : "Out of Stock"}</span>
        </div>
        <div class="product-body">
          <h3>${product.name}</h3>
          <p class="product-desc">${shortDescription(product.description)}</p>
          <div class="product-meta">
            <span class="price">Rs ${product.price}</span>
            <span class="stock-text">${formatStock(product)}</span>
          </div>
          ${whatsappButton(product)}
        </div>
      </article>
    `
    )
    .join("");
}

function getFilteredProducts() {
  const query = document.getElementById("product-search").value.trim().toLowerCase();
  const active = document.querySelector(".chip.is-active");
  const filter = active ? active.dataset.filter : "all";

  return products.filter((product) => {
    const matchesQuery =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    let matchesFilter = true;
    if (filter === "oos") matchesFilter = !product.inStock;
    else if (filter !== "all") matchesFilter = product.categories.includes(filter);

    return matchesQuery && matchesFilter;
  });
}

function findProduct(id) {
  return products.find((item) => String(item.id) === String(id));
}

function openModal(product) {
  const overlay = document.getElementById("product-modal");
  const dialog = overlay.querySelector(".modal");
  const image = document.getElementById("modal-image");
  const stock = document.getElementById("modal-stock");
  const title = document.getElementById("modal-title");
  const price = document.getElementById("modal-price");
  const desc = document.getElementById("modal-desc");
  const featuresWrap = document.getElementById("modal-features");
  const care = document.getElementById("modal-care");
  const actions = document.getElementById("modal-actions");

  image.src = product.image;
  image.alt = product.name;
  stock.textContent = formatStock(product);
  stock.classList.toggle("is-oos", !product.inStock);
  title.textContent = product.name;
  price.textContent = `Rs ${product.price}`;
  desc.textContent = product.description;

  if (product.features && product.features.length) {
    featuresWrap.innerHTML = `<h3>Features</h3><ul class="modal-features">${product.features
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>`;
  } else {
    featuresWrap.innerHTML = "";
  }

  if (product.care) {
    care.hidden = false;
    care.innerHTML = `<strong>Care:</strong> ${product.care}`;
  } else {
    care.hidden = true;
    care.textContent = "";
  }

  actions.innerHTML = whatsappButton(product);
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  dialog.focus();
}

function closeModal() {
  const overlay = document.getElementById("product-modal");
  overlay.hidden = true;
  document.body.style.overflow = "";
}

function initNav() {
  const toggle = document.getElementById("menu-toggle");
  const header = document.querySelector(".site-header");
  const nav = document.getElementById("primary-nav");

  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  });
}

function initShop() {
  const grid = document.getElementById("product-grid");
  const search = document.getElementById("product-search");
  const chips = document.querySelectorAll(".chip");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((item) => item.classList.remove("is-active"));
      chip.classList.add("is-active");
      renderProducts(getFilteredProducts());
    });
  });

  search.addEventListener("input", () => renderProducts(getFilteredProducts()));

  grid.addEventListener("click", (event) => {
    const orderBtn = event.target.closest(".js-order");
    if (orderBtn) {
      event.stopPropagation();
      const product = findProduct(orderBtn.dataset.id);
      if (product && product.inStock) orderOnWhatsApp(product.name, product.price);
      return;
    }

    const card = event.target.closest(".product-card");
    if (card) openModal(findProduct(card.dataset.id));
  });

  grid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".product-card");
    if (!card || event.target.closest(".js-order")) return;
    event.preventDefault();
    openModal(findProduct(card.dataset.id));
  });
}

function initModal() {
  const overlay = document.getElementById("product-modal");
  overlay.querySelector(".modal-close").addEventListener("click", closeModal);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal();
      return;
    }
    const orderBtn = event.target.closest(".js-order");
    if (orderBtn) {
      const product = findProduct(orderBtn.dataset.id);
      if (product && product.inStock) orderOnWhatsApp(product.name, product.price);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) closeModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  initNav();
  initShop();
  initModal();
});
