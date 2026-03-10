const STORAGE_KEYS = {
  language: "loopmart_language",
  token: "loopmart_token",
  user: "loopmart_user",
};

const API = {
  register: "/api/auth/register",
  login: "/api/auth/login",
  logout: "/api/auth/logout",
  me: "/api/auth/me",
  listings: "/api/listings",
};

const translations = {
  en: {
    brandTagline: "pre-owned goods, re-listed well",
    navBrowse: "Browse",
    navSell: "Sell",
    navTrust: "Trust",
    navFit: "Project Fit",
    navFaq: "FAQ",
    guestStatus: "Guest mode",
    signIn: "Sign In",
    logout: "Log out",
    adminPortal: "Admin",
    heroEyebrow: "Campus and local resale prototype",
    heroTitle: "Buy and sell second-hand items with less friction.",
    heroText:
      "A finished web prototype for a Xianyu-style marketplace. Users can browse listings, filter by category, view seller trust signals, and simulate publishing an item for sale.",
    heroActionExplore: "Explore Listings",
    heroActionPublish: "Publish Demo Item",
    statListings: "active listings",
    statReply: "same-day replies",
    statReputation: "seller reputation",
    trendingLabel: "Trending",
    trendingTitle: "Used iPad Air",
    trendingMeta: "¥1,850 • 2 hours ago",
    miniPickup: "Dorm pickup available",
    miniTitle: "Gaming Chair",
    miniCondition: "Condition: lightly used",
    miniBadgeVerified: "Verified student",
    miniBadgeNegotiable: "Price negotiable",
    miniBadgeSafe: "Safe meetup",
    feature1Title: "Smart discovery",
    feature1Text: "Search and filter listings by keywords and category in one flow.",
    feature2Title: "Trust first",
    feature2Text: "Built-in seller badges and meetup suggestions help reduce risk.",
    feature3Title: "Quick publish",
    feature3Text: "Post a demo listing in seconds and see it appear instantly in feed.",
    searchLabel: "Search items",
    searchPlaceholder: "Search for laptop, desk, bike...",
    sortLabel: "Sort by",
    sortLatest: "Latest",
    sortLow: "Price: Low to High",
    sortHigh: "Price: High to Low",
    feedEyebrow: "Marketplace feed",
    feedTitle: "Fresh listings",
    savedSearches: "Saved searches",
    trustEyebrow: "Trust and safety",
    trustTitle: "Built for lower-risk trades",
    trustItem1: "Seller badges for verified student accounts",
    trustItem2: "Meetup suggestions in staffed campus locations",
    trustItem3: "Condition labels and quick dispute notes",
    sellEyebrow: "Quick publish",
    sellTitle: "Post a demo listing",
    fieldTitle: "Item title",
    titlePlaceholder: "e.g. Sony Headphones",
    fieldPrice: "Price (¥)",
    fieldCategory: "Category",
    fieldDescription: "Description",
    descriptionPlaceholder:
      "State condition, pickup location, and whether the price is negotiable.",
    publishButton: "Publish Listing",
    scopeEyebrow: "Project scope",
    scopeTitle: "What this prototype demonstrates",
    fit1Title: "Functional requirements",
    fit1Text:
      "Product browsing, search, category filtering, listing cards, seller information, and listing submission flow.",
    fit2Title: "Non-functional requirements",
    fit2Text:
      "Responsive layout, readable UI, clear visual hierarchy, and maintainable front-end structure.",
    fit3Title: "Evaluation-ready features",
    fit3Text:
      "Interactive components, realistic marketplace content, and an interface ready for showcase.",
    faqEyebrow: "Need help?",
    faqTitle: "Frequently asked questions",
    faq1Q: "Do I need a real account?",
    faq1A: "No. Registration and login are local demo features stored in this browser only.",
    faq2Q: "Will listings be uploaded to server?",
    faq2A: "No. Listings are now stored by the LoopMart backend on this server.",
    faq3Q: "How does language switching work?",
    faq3A: "Use the language switcher in the top bar to toggle between English and Chinese instantly.",
    footerText: "LoopMart prototype · Built for interaction demo and architecture showcase.",
    close: "Close",
    authTitleLogin: "Sign in to LoopMart",
    authTitleRegister: "Create your LoopMart account",
    authEmail: "Email",
    authPassword: "Password",
    authSignInAction: "Sign In",
    authRegisterAction: "Register",
    authSwitchToRegister: "No account? Register",
    authSwitchToLogin: "Already have an account? Sign In",
    authRequired: "Please enter a valid email and password (at least 6 characters).",
    authRegisterSuccess: "Registration successful. You are now signed in.",
    authLoginSuccess: "Welcome back! Signed in successfully.",
    authEmailExists: "This email is already registered.",
    authInvalidCredentials: "Invalid credentials. Please try again.",
    authSignedOut: "You have signed out.",
    publishInvalid: "Please complete all fields with valid values.",
    publishNeedLogin: "Please sign in before publishing a listing.",
    publishSuccess: "Listing published and saved to backend.",
    noListingsTitle: "No listings found",
    noListingsText: "Try another keyword or switch back to a broader category.",
    viewButton: "View",
    catAll: "All",
    catElectronics: "Electronics",
    catFurniture: "Furniture",
    catBooks: "Books",
    catFashion: "Fashion",
    catSports: "Sports",
  },
  zh: {
    brandTagline: "优质二手，循环上新",
    navBrowse: "浏览",
    navSell: "出售",
    navTrust: "保障",
    navFit: "项目说明",
    navFaq: "常见问题",
    guestStatus: "游客模式",
    signIn: "登录",
    logout: "退出登录",
    adminPortal: "后台",
    heroEyebrow: "校园与本地二手交易原型",
    heroTitle: "更顺滑地完成二手买卖。",
    heroText: "这是一个类似闲鱼的完整前后端原型，支持浏览、筛选、发布、登录与后台管理。",
    heroActionExplore: "查看商品",
    heroActionPublish: "发布演示商品",
    statListings: "在售商品",
    statReply: "当天回复率",
    statReputation: "卖家信誉",
    trendingLabel: "热门",
    trendingTitle: "二手 iPad Air",
    trendingMeta: "¥1,850 • 2小时前",
    miniPickup: "支持宿舍自提",
    miniTitle: "电竞椅",
    miniCondition: "成色：轻度使用",
    miniBadgeVerified: "学生认证",
    miniBadgeNegotiable: "价格可议",
    miniBadgeSafe: "安全见面",
    feature1Title: "智能发现",
    feature1Text: "关键字 + 分类筛选，一步找到目标商品。",
    feature2Title: "交易保障优先",
    feature2Text: "卖家标识与见面建议，帮助降低交易风险。",
    feature3Title: "快速发布",
    feature3Text: "几秒发布商品，并立即写入后端。",
    searchLabel: "搜索商品",
    searchPlaceholder: "搜索笔记本、书桌、自行车...",
    sortLabel: "排序方式",
    sortLatest: "最新发布",
    sortLow: "价格：从低到高",
    sortHigh: "价格：从高到低",
    feedEyebrow: "交易动态",
    feedTitle: "最新上架",
    savedSearches: "已保存搜索",
    trustEyebrow: "信任与安全",
    trustTitle: "为低风险交易而设计",
    trustItem1: "学生实名认证卖家标识",
    trustItem2: "推荐校内有人值守见面地点",
    trustItem3: "成色标签与纠纷提示",
    sellEyebrow: "快速发布",
    sellTitle: "发布演示商品",
    fieldTitle: "商品标题",
    titlePlaceholder: "例如：索尼耳机",
    fieldPrice: "价格（¥）",
    fieldCategory: "分类",
    fieldDescription: "描述",
    descriptionPlaceholder: "填写成色、取货地点、是否可议价等信息。",
    publishButton: "发布商品",
    scopeEyebrow: "项目范围",
    scopeTitle: "该原型展示了什么",
    fit1Title: "功能需求",
    fit1Text: "商品浏览、搜索、分类筛选、卡片展示、卖家信息与发布流程。",
    fit2Title: "非功能需求",
    fit2Text: "响应式布局、可读 UI、清晰视觉层级与可维护前端结构。",
    fit3Title: "可展示特性",
    fit3Text: "交互完整、内容真实，可直接用于答辩或演示。",
    faqEyebrow: "帮助中心",
    faqTitle: "常见问题",
    faq1Q: "需要真实账号吗？",
    faq1A: "不需要。注册和登录是本地演示流程，但数据由后端接口处理。",
    faq2Q: "商品会上传到服务器吗？",
    faq2A: "会。发布的商品会保存到当前项目后端的 db.json 中。",
    faq3Q: "如何切换语言？",
    faq3A: "使用顶部导航栏的语言切换器，可实时切换中英文。",
    footerText: "LoopMart 原型 · 用于交互演示与架构展示。",
    close: "关闭",
    authTitleLogin: "登录 LoopMart",
    authTitleRegister: "创建 LoopMart 账号",
    authEmail: "邮箱",
    authPassword: "密码",
    authSignInAction: "登录",
    authRegisterAction: "注册",
    authSwitchToRegister: "没有账号？去注册",
    authSwitchToLogin: "已有账号？去登录",
    authRequired: "请输入有效邮箱和密码（至少6位）。",
    authRegisterSuccess: "注册成功，已自动登录。",
    authLoginSuccess: "欢迎回来，登录成功。",
    authEmailExists: "该邮箱已注册。",
    authInvalidCredentials: "账号或密码错误，请重试。",
    authSignedOut: "你已退出登录。",
    publishInvalid: "请完整填写并确保输入内容有效。",
    publishNeedLogin: "请先登录再发布商品。",
    publishSuccess: "发布成功，已写入后端。",
    noListingsTitle: "未找到商品",
    noListingsText: "试试其他关键词，或切换到更宽泛的分类。",
    viewButton: "查看",
    catAll: "全部",
    catElectronics: "电子产品",
    catFurniture: "家具",
    catBooks: "图书",
    catFashion: "服饰",
    catSports: "运动",
  },
};

const defaultListings = [
  { title: "iPhone 13 128GB", category: "Electronics", price: 2350, seller: "Mia Chen", time: "2026-03-10T00:00:00.000Z", description: "No repairs, 90% battery health." },
  { title: "Solid Wood Study Desk", category: "Furniture", price: 260, seller: "Jun Li", time: "2026-03-09T00:00:00.000Z", description: "Wide desktop, stable legs, pickup only." },
  { title: "Data Structures Textbook", category: "Books", price: 45, seller: "Tina Xu", time: "2026-03-08T00:00:00.000Z", description: "Light pencil marks, good for CS students." },
];

const categoryKeyMap = { All: "catAll", Electronics: "catElectronics", Furniture: "catFurniture", Books: "catBooks", Fashion: "catFashion", Sports: "catSports" };
const categoryOrder = ["All", "Electronics", "Furniture", "Books", "Fashion", "Sports"];

const categoryChips = document.querySelector("#categoryChips");
const listingGrid = document.querySelector("#listingGrid");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const template = document.querySelector("#listingTemplate");
const sellForm = document.querySelector("#sellForm");
const formFeedback = document.querySelector("#formFeedback");
const languageSelect = document.querySelector("#languageSelect");
const authModal = document.querySelector("#authModal");
const openAuthModalButton = document.querySelector("#openAuthModal");
const closeAuthModalButton = document.querySelector("#closeAuthModal");
const authModeToggle = document.querySelector("#authModeToggle");
const authSubmit = document.querySelector("#authSubmit");
const authTitle = document.querySelector("#authTitle");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const authFeedback = document.querySelector("#authFeedback");
const authStatus = document.querySelector("#authStatus");
const logoutButton = document.querySelector("#logoutButton");
const adminPortalLink = document.querySelector("#adminPortalLink");

let activeCategory = "All";
let dynamicListings = [...defaultListings];
let authMode = "login";
let currentUser = null;
const storedLanguage = localStorage.getItem(STORAGE_KEYS.language);
let currentLanguage = storedLanguage && translations[storedLanguage] ? storedLanguage : "en";

const t = (key) => translations[currentLanguage][key] || translations.en[key] || key;

function isPageReady() {
  return [categoryChips, listingGrid, searchInput, sortSelect, template, sellForm, formFeedback, languageSelect, authModal, openAuthModalButton, closeAuthModalButton, authModeToggle, authSubmit, authTitle, authEmail, authPassword, authFeedback, authStatus, logoutButton, adminPortalLink].every(Boolean);
}

function authHeader() {
  const token = localStorage.getItem(STORAGE_KEYS.token);
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}), ...authHeader() },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Request failed");
  return data;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
}

function localizeCategory(category) {
  return t(categoryKeyMap[category] || category);
}

function renderAuthUI() {
  if (currentUser) {
    authStatus.textContent = `${currentUser.email} (${currentUser.role})`;
    openAuthModalButton.hidden = true;
    logoutButton.hidden = false;
    adminPortalLink.hidden = currentUser.role !== "admin";
  } else {
    authStatus.textContent = t("guestStatus");
    openAuthModalButton.hidden = false;
    logoutButton.hidden = true;
    adminPortalLink.hidden = true;
  }
}

function renderCategoryChips() {
  categoryChips.innerHTML = "";
  categoryOrder.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${category === activeCategory ? " is-active" : ""}`;
    button.textContent = localizeCategory(category);
    button.addEventListener("click", () => {
      activeCategory = category;
      renderCategoryChips();
      renderListings();
    });
    categoryChips.appendChild(button);
  });
}

function formatTime(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return String(iso);
  return d.toLocaleString(currentLanguage === "zh" ? "zh-CN" : "en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function getVisibleListings() {
  const term = searchInput.value.trim().toLowerCase();
  const sorted = [...dynamicListings].filter((listing) => {
    const matchesCategory = activeCategory === "All" || listing.category === activeCategory;
    const hay = `${listing.title} ${listing.description} ${localizeCategory(listing.category)}`.toLowerCase();
    return matchesCategory && (!term || hay.includes(term));
  });
  if (sortSelect.value === "low") sorted.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "high") sorted.sort((a, b) => b.price - a.price);
  return sorted;
}

function renderListings() {
  const visible = getVisibleListings();
  listingGrid.innerHTML = "";
  if (!visible.length) {
    const empty = document.createElement("div");
    empty.className = "listing-card";
    empty.innerHTML = `<div class="listing-body"><h3>${t("noListingsTitle")}</h3><p class="listing-description">${t("noListingsText")}</p></div>`;
    listingGrid.appendChild(empty);
    return;
  }
  visible.forEach((listing, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.style.animationDelay = `${index * 80}ms`;
    node.querySelector(".listing-category").textContent = localizeCategory(listing.category);
    node.querySelector(".listing-time").textContent = formatTime(listing.time);
    node.querySelector(".listing-title").textContent = listing.title;
    node.querySelector(".listing-description").textContent = listing.description;
    node.querySelector(".listing-price").textContent = `¥${listing.price}`;
    node.querySelector(".listing-seller").textContent = listing.seller;
    node.querySelector(".card-button").textContent = t("viewButton");
    listingGrid.appendChild(node);
  });
}

async function loadListings() {
  try {
    const { listings } = await api(API.listings, { method: "GET", headers: {} });
    dynamicListings = listings.length ? listings : [...defaultListings];
  } catch {
    dynamicListings = [...defaultListings];
  }
  renderListings();
}

async function handlePublish(event) {
  event.preventDefault();
  if (!currentUser) {
    formFeedback.textContent = t("publishNeedLogin");
    return;
  }

  const formData = new FormData(sellForm);
  const payload = {
    title: String(formData.get("title") || "").trim(),
    category: String(formData.get("category") || "").trim(),
    price: Number(formData.get("price")),
    description: String(formData.get("description") || "").trim(),
  };

  if (!payload.title || !payload.category || !payload.description || payload.price <= 0 || Number.isNaN(payload.price)) {
    formFeedback.textContent = t("publishInvalid");
    return;
  }

  try {
    await api(API.listings, { method: "POST", body: JSON.stringify(payload) });
    formFeedback.textContent = t("publishSuccess");
    sellForm.reset();
    activeCategory = "All";
    renderCategoryChips();
    await loadListings();
  } catch (error) {
    formFeedback.textContent = error.message;
  }
}

function syncAuthModeUI() {
  if (authMode === "login") {
    authTitle.textContent = t("authTitleLogin");
    authSubmit.textContent = t("authSignInAction");
    authModeToggle.textContent = t("authSwitchToRegister");
  } else {
    authTitle.textContent = t("authTitleRegister");
    authSubmit.textContent = t("authRegisterAction");
    authModeToggle.textContent = t("authSwitchToLogin");
  }
}

function openAuthModal() {
  authFeedback.textContent = "";
  authEmail.value = "";
  authPassword.value = "";
  authModal.showModal();
}

async function handleAuthSubmit() {
  const email = authEmail.value.trim().toLowerCase();
  const password = authPassword.value;
  if (!email.includes("@") || password.length < 6) {
    authFeedback.textContent = t("authRequired");
    return;
  }

  try {
    const endpoint = authMode === "login" ? API.login : API.register;
    const data = await api(endpoint, { method: "POST", body: JSON.stringify({ email, password }) });
    localStorage.setItem(STORAGE_KEYS.token, data.token);
    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(data.user));
    currentUser = data.user;
    authFeedback.textContent = authMode === "login" ? t("authLoginSuccess") : t("authRegisterSuccess");
    renderAuthUI();
    setTimeout(() => authModal.close(), 400);
  } catch (error) {
    if (String(error.message).includes("exists")) authFeedback.textContent = t("authEmailExists");
    else authFeedback.textContent = t("authInvalidCredentials");
  }
}

async function tryRestoreSession() {
  const rawUser = localStorage.getItem(STORAGE_KEYS.user);
  if (!rawUser || !localStorage.getItem(STORAGE_KEYS.token)) return;
  try {
    const data = await api(API.me, { method: "GET", headers: {} });
    currentUser = data.user;
  } catch {
    localStorage.removeItem(STORAGE_KEYS.token);
    localStorage.removeItem(STORAGE_KEYS.user);
  }
}

async function handleLogout() {
  try {
    await api(API.logout, { method: "POST", body: "{}" });
  } catch {
    // ignore network errors during logout cleanup
  }
  localStorage.removeItem(STORAGE_KEYS.token);
  localStorage.removeItem(STORAGE_KEYS.user);
  currentUser = null;
  formFeedback.textContent = t("authSignedOut");
  renderAuthUI();
}

function handleLanguageChange() {
  currentLanguage = languageSelect.value;
  localStorage.setItem(STORAGE_KEYS.language, currentLanguage);
  applyTranslations();
  syncAuthModeUI();
  renderAuthUI();
  renderCategoryChips();
  renderListings();
}

async function init() {
  if (!isPageReady()) {
    console.error("LoopMart initialization failed: required DOM nodes are missing.");
    return;
  }

  languageSelect.value = currentLanguage;
  applyTranslations();
  syncAuthModeUI();
  await tryRestoreSession();
  renderAuthUI();
  renderCategoryChips();
  await loadListings();

  searchInput.addEventListener("input", renderListings);
  sortSelect.addEventListener("change", renderListings);
  sellForm.addEventListener("submit", handlePublish);
  languageSelect.addEventListener("change", handleLanguageChange);
  openAuthModalButton.addEventListener("click", openAuthModal);
  closeAuthModalButton.addEventListener("click", (event) => {
    event.preventDefault();
    authModal.close();
  });
  authModeToggle.addEventListener("click", () => {
    authMode = authMode === "login" ? "register" : "login";
    authFeedback.textContent = "";
    syncAuthModeUI();
  });
  authSubmit.addEventListener("click", handleAuthSubmit);
  logoutButton.addEventListener("click", handleLogout);
}

init();
