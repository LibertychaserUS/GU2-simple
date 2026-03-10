const tokenKey = 'loopmart_token';

const adminLoginCard = document.querySelector('#adminLoginCard');
const adminPanel = document.querySelector('#adminPanel');
const adminEmail = document.querySelector('#adminEmail');
const adminPassword = document.querySelector('#adminPassword');
const adminLoginBtn = document.querySelector('#adminLoginBtn');
const adminLogoutBtn = document.querySelector('#adminLogoutBtn');
const adminFeedback = document.querySelector('#adminFeedback');
const adminSummary = document.querySelector('#adminSummary');
const adminUsers = document.querySelector('#adminUsers');
const adminListings = document.querySelector('#adminListings');

function authHeader() {
  const token = localStorage.getItem(tokenKey);
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request(path, options = {}) {
  const res = await fetch(path, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}), ...authHeader() },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data;
}

function renderOverview(data) {
  adminSummary.innerHTML = `
    <article><strong>Users</strong><p>${data.summary.users}</p></article>
    <article><strong>Listings</strong><p>${data.summary.listings}</p></article>
    <article><strong>Admins</strong><p>${data.summary.admins}</p></article>
  `;
  adminUsers.textContent = JSON.stringify(data.users, null, 2);
  adminListings.textContent = JSON.stringify(data.listings, null, 2);
  adminLoginCard.hidden = true;
  adminPanel.hidden = false;
}

async function loadOverview() {
  try {
    const data = await request('/api/admin/overview', { method: 'GET', headers: {} });
    renderOverview(data);
  } catch (err) {
    adminFeedback.textContent = `后台访问失败: ${err.message}`;
    adminLoginCard.hidden = false;
    adminPanel.hidden = true;
  }
}

adminLoginBtn.addEventListener('click', async () => {
  try {
    const data = await request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: adminEmail.value.trim(), password: adminPassword.value }),
    });
    if (data.user.role !== 'admin') throw new Error('Not an admin account');
    localStorage.setItem(tokenKey, data.token);
    adminFeedback.textContent = 'Admin login success';
    await loadOverview();
  } catch (err) {
    adminFeedback.textContent = `登录失败: ${err.message}`;
  }
});

adminLogoutBtn.addEventListener('click', async () => {
  try { await request('/api/auth/logout', { method: 'POST', body: '{}' }); } catch {}
  localStorage.removeItem(tokenKey);
  adminPanel.hidden = true;
  adminLoginCard.hidden = false;
  adminFeedback.textContent = 'Logged out';
});

loadOverview();
