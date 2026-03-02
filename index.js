const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// نقطة فحص النظام (Health Check)
app.get('/', (req, res) => {
    res.send('OMEGA SYSTEM STATUS: ONLINE 🟢');
});

// الاتصال بقاعدة البيانات (سنضبط الرابط لاحقاً)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log("DB Error", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Engine Running on port ${PORT}`));

