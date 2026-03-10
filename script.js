const STORAGE_KEYS = {
  users: "loopmart_users",
  currentUser: "loopmart_current_user",
  language: "loopmart_language",
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
    faq2A: "No. Demo listings are stored only in memory and reset on page refresh.",
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
    publishSuccess: "Demo listing published successfully.",
    noListingsTitle: "No listings found",
    noListingsText: "Try another keyword or switch back to a broader category.",
    sellerYou: "You • Newly listed",
    timeJustNow: "Just now",
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
    heroEyebrow: "校园与本地二手交易原型",
    heroTitle: "更顺滑地完成二手买卖。",
    heroText: "这是一个类似闲鱼的完整前端原型，支持浏览、筛选、查看卖家信号并模拟发布商品。",
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
    feature3Text: "几秒发布演示商品，并即时出现在列表中。",
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
    faq1A: "不需要。注册和登录是本地演示功能，仅保存在当前浏览器。",
    faq2Q: "商品会上传到服务器吗？",
    faq2A: "不会。演示发布的数据只在内存中，刷新页面会重置。",
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
    publishSuccess: "演示商品发布成功。",
    noListingsTitle: "未找到商品",
    noListingsText: "试试其他关键词，或切换到更宽泛的分类。",
    sellerYou: "你 · 刚刚发布",
    timeJustNow: "刚刚",
    viewButton: "查看",
    catAll: "全部",
    catElectronics: "电子产品",
    catFurniture: "家具",
    catBooks: "图书",
    catFashion: "服饰",
    catSports: "运动",
  },
};

const baseListings = [
  {
    title: { en: "iPhone 13 128GB", zh: "iPhone 13 128GB" },
    category: "Electronics",
    price: 2350,
    seller: { en: "Mia Chen • Verified Student", zh: "Mia Chen • 学生认证" },
    time: { en: "1 hour ago", zh: "1小时前" },
    description: {
      en: "No repairs, 90% battery health, includes original cable and case.",
      zh: "无拆修，电池健康 90%，含原装数据线和保护壳。",
    },
  },
  {
    title: { en: "Solid Wood Study Desk", zh: "实木学习桌" },
    category: "Furniture",
    price: 260,
    seller: { en: "Jun Li • Dorm Zone A", zh: "Jun Li • A区宿舍" },
    time: { en: "3 hours ago", zh: "3小时前" },
    description: {
      en: "Wide desktop, stable legs, ideal for dorm study setup. Pickup only.",
      zh: "桌面宽、结构稳，适合宿舍学习；仅支持自提。",
    },
  },
  {
    title: { en: "Data Structures Textbook", zh: "数据结构教材" },
    category: "Books",
    price: 45,
    seller: { en: "Tina Xu • Fast Reply", zh: "Tina Xu • 回复快" },
    time: { en: "Today", zh: "今天" },
    description: {
      en: "Highlighted lightly in pencil. Good for second-year computer science.",
      zh: "有少量铅笔标注，适合计算机专业大二课程。",
    },
  },
  {
    title: { en: "Nike Running Shoes", zh: "Nike 跑鞋" },
    category: "Fashion",
    price: 180,
    seller: { en: "Ryan Wu • Trusted Seller", zh: "Ryan Wu • 可信卖家" },
    time: { en: "Yesterday", zh: "昨天" },
    description: {
      en: "Size 42, worn twice, clean sole, suitable for everyday running.",
      zh: "42码，仅穿两次，鞋底干净，适合日常跑步。",
    },
  },
  {
    title: { en: "Yonex Badminton Racket", zh: "YONEX 羽毛球拍" },
    category: "Sports",
    price: 220,
    seller: { en: "Ella Gao • Verified Student", zh: "Ella Gao • 学生认证" },
    time: { en: "2 days ago", zh: "2天前" },
    description: {
      en: "Fresh grip tape, frame in great shape, includes protective bag.",
      zh: "新缠手胶，拍框状态良好，含保护拍套。",
    },
  },
  {
    title: { en: "Dell 24-inch Monitor", zh: "Dell 24英寸显示器" },
    category: "Electronics",
    price: 420,
    seller: { en: "Leo Fang • Same-day meetup", zh: "Leo Fang • 当天可交易" },
    time: { en: "2 hours ago", zh: "2小时前" },
    description: {
      en: "1080p display, HDMI cable included, no dead pixels.",
      zh: "1080p 屏幕，含 HDMI 线，无坏点。",
    },
  },
];

const categoryKeyMap = {
  All: "catAll",
  Electronics: "catElectronics",
  Furniture: "catFurniture",
  Books: "catBooks",
  Fashion: "catFashion",
  Sports: "catSports",
};

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

let activeCategory = "All";
let dynamicListings = [...baseListings];
let authMode = "login";

const storedLanguage = localStorage.getItem(STORAGE_KEYS.language);
let currentLanguage = storedLanguage && translations[storedLanguage] ? storedLanguage : "en";

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function isPageReady() {
  const requiredElements = [
    categoryChips,
    listingGrid,
    searchInput,
    sortSelect,
    template,
    sellForm,
    formFeedback,
    languageSelect,
    authModal,
    openAuthModalButton,
    closeAuthModalButton,
    authModeToggle,
    authSubmit,
    authTitle,
    authEmail,
    authPassword,
    authFeedback,
    authStatus,
    logoutButton,
  ];

  return requiredElements.every(Boolean);
}

function getFieldValue(formData, key) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getUsers() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.users) || "[]");
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

function getCurrentUser() {
  return localStorage.getItem(STORAGE_KEYS.currentUser);
}

function setCurrentUser(email) {
  localStorage.setItem(STORAGE_KEYS.currentUser, email);
}

function clearCurrentUser() {
  localStorage.removeItem(STORAGE_KEYS.currentUser);
}

function localizeCategory(category) {
  return t(categoryKeyMap[category] || category);
}

function localizeListingText(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[currentLanguage] || value.en || "";
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    node.placeholder = t(key);
  });

  authEmail.placeholder = currentLanguage === "zh" ? "you@example.com" : "you@example.com";
  authPassword.placeholder = "******";
}

function renderAuthUI() {
  const currentUser = getCurrentUser();
  if (currentUser) {
    authStatus.textContent = `${currentUser}`;
    openAuthModalButton.hidden = true;
    logoutButton.hidden = false;
  } else {
    authStatus.textContent = t("guestStatus");
    openAuthModalButton.hidden = false;
    logoutButton.hidden = true;
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

function getVisibleListings() {
  const term = searchInput.value.trim().toLowerCase();
  const sorted = [...dynamicListings].filter((listing) => {
    const title = localizeListingText(listing.title).toLowerCase();
    const description = localizeListingText(listing.description).toLowerCase();
    const category = localizeCategory(listing.category).toLowerCase();

    const matchesCategory = activeCategory === "All" || listing.category === activeCategory;
    const matchesTerm = !term || title.includes(term) || description.includes(term) || category.includes(term);

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
    empty.innerHTML = `<div class="listing-body"><h3>${t("noListingsTitle")}</h3><p class="listing-description">${t("noListingsText")}</p></div>`;
    listingGrid.appendChild(empty);
    return;
  }

  visible.forEach((listing, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.style.animationDelay = `${index * 80}ms`;
    node.querySelector(".listing-category").textContent = localizeCategory(listing.category);
    node.querySelector(".listing-time").textContent = localizeListingText(listing.time);
    node.querySelector(".listing-title").textContent = localizeListingText(listing.title);
    node.querySelector(".listing-description").textContent = localizeListingText(listing.description);
    node.querySelector(".listing-price").textContent = `¥${listing.price}`;
    node.querySelector(".listing-seller").textContent = localizeListingText(listing.seller);
    node.querySelector(".card-button").textContent = t("viewButton");
    listingGrid.appendChild(node);
  });
}

function handlePublish(event) {
  event.preventDefault();
  const formData = new FormData(sellForm);
  const title = getFieldValue(formData, "title");
  const price = Number(formData.get("price"));
  const categoryLabel = getFieldValue(formData, "category");
  const description = getFieldValue(formData, "description");

  const category = Object.keys(categoryKeyMap).find(
    (key) => key !== "All" && localizeCategory(key) === categoryLabel,
  );

  if (!title || !description || Number.isNaN(price) || price <= 0 || !category) {
    formFeedback.textContent = t("publishInvalid");
    return;
  }

  dynamicListings.unshift({
    title: { [currentLanguage]: title, en: title, zh: title },
    category,
    price,
    seller: { en: t("sellerYou"), zh: translations.zh.sellerYou },
    time: { en: t("timeJustNow"), zh: translations.zh.timeJustNow },
    description: { [currentLanguage]: description, en: description, zh: description },
  });

  activeCategory = "All";
  sellForm.reset();
  formFeedback.textContent = t("publishSuccess");
  renderCategoryChips();
  renderListings();
}

function openAuthModal() {
  authFeedback.textContent = "";
  authEmail.value = "";
  authPassword.value = "";
  authModal.showModal();
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

function handleAuthSubmit() {
  const email = authEmail.value.trim().toLowerCase();
  const password = authPassword.value;

  if (!email.includes("@") || password.length < 6) {
    authFeedback.textContent = t("authRequired");
    return;
  }

  const users = getUsers();

  if (authMode === "register") {
    const exists = users.some((user) => user.email === email);
    if (exists) {
      authFeedback.textContent = t("authEmailExists");
      return;
    }

    users.push({ email, password });
    saveUsers(users);
    setCurrentUser(email);
    authFeedback.textContent = t("authRegisterSuccess");
  } else {
    const user = users.find((entry) => entry.email === email && entry.password === password);
    if (!user) {
      authFeedback.textContent = t("authInvalidCredentials");
      return;
    }

    setCurrentUser(email);
    authFeedback.textContent = t("authLoginSuccess");
  }

  renderAuthUI();
  setTimeout(() => authModal.close(), 450);
}

function handleLogout() {
  clearCurrentUser();
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

if (isPageReady()) {
  languageSelect.value = currentLanguage;
  applyTranslations();
  syncAuthModeUI();
  renderAuthUI();

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

  renderCategoryChips();
  renderListings();
} else {
  console.error("LoopMart initialization failed: required DOM nodes are missing.");
}
