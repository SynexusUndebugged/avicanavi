const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Site çalışıyor kaptan 🚀");
});

app.listen(3000, () => {
  console.log("Server çalışıyor: http://localhost:3000");
});

app.post("/login", (req,res)=>{

  const {user, pass} = req.body;

  if(user==="admin" && pass==="1234"){
    res.json({message:"Giriş başarılı"});
  } else {
    res.json({message:"Hatalı giriş"});
  }

});
app.get("/admin",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","admin.html"));
});
