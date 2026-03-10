const categories = [
  "All",
  "Electronics",
  "Furniture",
  "Books",
  "Fashion",
  "Sports",
];

const listings = [
  {
    title: "iPhone 13 128GB",
    category: "Electronics",
    price: 2350,
    seller: "Mia Chen • Verified Student",
    time: "1 hour ago",
    description: "No repairs, 90% battery health, includes original cable and case.",
  },
  {
    title: "Solid Wood Study Desk",
    category: "Furniture",
    price: 260,
    seller: "Jun Li • Dorm Zone A",
    time: "3 hours ago",
    description: "Wide desktop, stable legs, ideal for dorm study setup. Pickup only.",
  },
  {
    title: "Data Structures Textbook",
    category: "Books",
    price: 45,
    seller: "Tina Xu • Fast Reply",
    time: "Today",
    description: "Highlighted lightly in pencil. Good for second-year computer science.",
  },
  {
    title: "Nike Running Shoes",
    category: "Fashion",
    price: 180,
    seller: "Ryan Wu • Trusted Seller",
    time: "Yesterday",
    description: "Size 42, worn twice, clean sole, suitable for everyday running.",
  },
  {
    title: "Yonex Badminton Racket",
    category: "Sports",
    price: 220,
    seller: "Ella Gao • Verified Student",
    time: "2 days ago",
    description: "Fresh grip tape, frame in great shape, includes protective bag.",
  },
  {
    title: "Dell 24-inch Monitor",
    category: "Electronics",
    price: 420,
    seller: "Leo Fang • Same-day meetup",
    time: "2 hours ago",
    description: "1080p display, HDMI cable included, no dead pixels.",
  },
];

const categoryChips = document.querySelector("#categoryChips");
const listingGrid = document.querySelector("#listingGrid");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const template = document.querySelector("#listingTemplate");
const sellForm = document.querySelector("#sellForm");
const formFeedback = document.querySelector("#formFeedback");

let activeCategory = "All";
let dynamicListings = [...listings];

function renderCategoryChips() {
  categoryChips.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${category === activeCategory ? " is-active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategoryChips();
      renderListings();
    });
    categoryChips.appendChild(button);
  });
}

function getVisibleListings() {
  const term = searchInput.value.trim().toLowerCase();
  const sorted = [...dynamicListings].filter((listing) => {
    const matchesCategory =
      activeCategory === "All" || listing.category === activeCategory;
    const matchesTerm =
      !term ||
      listing.title.toLowerCase().includes(term) ||
      listing.description.toLowerCase().includes(term) ||
      listing.category.toLowerCase().includes(term);

    return matchesCategory && matchesTerm;
  });

  const sortMode = sortSelect.value;

  if (sortMode === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortMode === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  return sorted;
}

function renderListings() {
  const visible = getVisibleListings();
  listingGrid.innerHTML = "";

  if (!visible.length) {
    const empty = document.createElement("div");
    empty.className = "listing-card";
    empty.innerHTML =
      '<div class="listing-body"><h3>No listings found</h3><p class="listing-description">Try another keyword or switch back to a broader category.</p></div>';
    listingGrid.appendChild(empty);
    return;
  }

  visible.forEach((listing, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.style.animationDelay = `${index * 80}ms`;
    node.querySelector(".listing-category").textContent = listing.category;
    node.querySelector(".listing-time").textContent = listing.time;
    node.querySelector(".listing-title").textContent = listing.title;
    node.querySelector(".listing-description").textContent = listing.description;
    node.querySelector(".listing-price").textContent = `¥${listing.price}`;
    node.querySelector(".listing-seller").textContent = listing.seller;
    listingGrid.appendChild(node);
  });
}

function handlePublish(event) {
  event.preventDefault();
  const formData = new FormData(sellForm);
  const title = formData.get("title").toString().trim();
  const price = Number(formData.get("price"));
  const category = formData.get("category").toString();
  const description = formData.get("description").toString().trim();

  if (!title || !description || Number.isNaN(price) || price <= 0) {
    formFeedback.textContent = "Please complete all fields with valid values.";
    return;
  }

  dynamicListings.unshift({
    title,
    category,
    price,
    seller: "You • Newly listed",
    time: "Just now",
    description,
  });

  activeCategory = "All";
  sellForm.reset();
  formFeedback.textContent = "Demo listing published successfully.";
  renderCategoryChips();
  renderListings();
}

searchInput.addEventListener("input", renderListings);
sortSelect.addEventListener("change", renderListings);
sellForm.addEventListener("submit", handlePublish);

renderCategoryChips();
renderListings();
