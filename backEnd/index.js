const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const User = require('./Models/userSchema');
const Manager = require('./Models/managerSchema');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// User Login / Auto-Register
app.post('/api/login/user', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'Email and Password Required!!' });

  try {
    let user = await User.findOne({ email });

    if (!user) {
      // Auto-register
      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ email, password: hashedPassword });
      await user.save();
      return res.json({ message: "User Created and Login Success" });
    }

    // Validate password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Login Credential Wrong" });
    }

    res.json({ message: "Login Success" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Manager Login / Auto-Register
app.post('/api/login/manager', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: 'Email and Password Required!!' });

  try {
    let manager = await Manager.findOne({ email });

    if (!manager) {
      // Auto-register
      const hashedPassword = await bcrypt.hash(password, 10);
      manager = new Manager({ email, password: hashedPassword });
      await manager.save();
      return res.json({ message: "Manager Created and Login Success" });
    }

    // Validate password
    const isPasswordCorrect = await bcrypt.compare(password, manager.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Login Credential Wrong" });
    }

    res.json({ message: "Login Success Mamae" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
