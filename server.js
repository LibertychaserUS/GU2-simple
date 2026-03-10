const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'db.json');

app.use(express.json());
app.use(express.static(__dirname));

function sha256(input) {
  return crypto.createHash('sha256').update(input).digest('hex');
}

function readDb() {
  if (!fs.existsSync(DB_PATH)) {
    const seed = {
      users: [
        {
          id: 'u-admin',
          email: 'admin@loopmart.com',
          passwordHash: sha256('admin123456'),
          role: 'admin',
          createdAt: new Date().toISOString(),
        },
      ],
      listings: [],
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(seed, null, 2));
    return seed;
  }
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
}

function writeDb(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

const sessions = new Map();

function authRequired(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '').trim();
  if (!token || !sessions.has(token)) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  req.user = sessions.get(token);
  next();
}

function adminRequired(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin permission required' });
  }
  next();
}

app.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password || password.length < 6) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const db = readDb();
  const normalizedEmail = String(email).trim().toLowerCase();
  if (db.users.some((user) => user.email === normalizedEmail)) {
    return res.status(409).json({ message: 'Email already exists' });
  }

  const user = {
    id: crypto.randomUUID(),
    email: normalizedEmail,
    passwordHash: sha256(password),
    role: 'user',
    createdAt: new Date().toISOString(),
  };

  db.users.push(user);
  writeDb(db);

  const token = crypto.randomBytes(24).toString('hex');
  const session = { id: user.id, email: user.email, role: user.role };
  sessions.set(token, session);

  return res.json({ token, user: session });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const db = readDb();
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const user = db.users.find((item) => item.email === normalizedEmail);

  if (!user || user.passwordHash !== sha256(String(password || ''))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = crypto.randomBytes(24).toString('hex');
  const session = { id: user.id, email: user.email, role: user.role };
  sessions.set(token, session);

  return res.json({ token, user: session });
});

app.post('/api/auth/logout', authRequired, (req, res) => {
  const token = req.headers.authorization.replace('Bearer ', '').trim();
  sessions.delete(token);
  return res.json({ message: 'ok' });
});

app.get('/api/auth/me', authRequired, (req, res) => {
  res.json({ user: req.user });
});

app.get('/api/listings', (req, res) => {
  const db = readDb();
  res.json({ listings: db.listings });
});

app.post('/api/listings', authRequired, (req, res) => {
  const { title, category, price, description } = req.body;
  if (!title || !category || !description || Number(price) <= 0) {
    return res.status(400).json({ message: 'Invalid listing data' });
  }

  const db = readDb();
  const listing = {
    id: crypto.randomUUID(),
    title: String(title).trim(),
    category: String(category).trim(),
    price: Number(price),
    description: String(description).trim(),
    seller: req.user.email,
    time: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };

  db.listings.unshift(listing);
  writeDb(db);

  res.status(201).json({ listing });
});

app.get('/api/admin/overview', authRequired, adminRequired, (req, res) => {
  const db = readDb();
  res.json({
    summary: {
      users: db.users.length,
      listings: db.listings.length,
      admins: db.users.filter((u) => u.role === 'admin').length,
    },
    users: db.users.map((u) => ({ id: u.id, email: u.email, role: u.role, createdAt: u.createdAt })),
    listings: db.listings,
  });
});

app.get('/admin', (_req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, () => {
  console.log(`LoopMart server running at http://localhost:${PORT}`);
  console.log('Admin account: admin@loopmart.com / admin123456');
});
