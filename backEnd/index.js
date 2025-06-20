const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { email: 'user@example.com', password: 'user123' },
];

const managers = [
  { email: 'manager@example.com', password: 'manager123' },
];

app.post('/api/login/user', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and Password Required!!' });
  }

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: "Login Is Success" });
  } else {
    res.status(401).json({ message: "Login Credential Wrong" });
  }
});

app.post('/api/login/manager', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password Required!!" });
  }

  const manager = managers.find(m => m.email === email && m.password === password);

  if (manager) {
    res.json({ message: "Login Is Success Mamae" });
  } else {
    res.status(401).json({ message: "Login Credential Wrong" });
  }
});

app.listen(PORT, () => {
  console.log("Running Ma");
});
