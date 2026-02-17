const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

/* statik dosya servisi */
app.use(express.static(__dirname));

/* basit login kontrol */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

/* panel verisi */
app.get("/panel", (req, res) => {
  res.json({ mesaj: "Admin paneline hoşgeldin kaptan." });
});

app.listen(3000, () => {
  console.log("Server çalışıyor: http://localhost:3000");
});
