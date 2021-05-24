express = require("express")
app = express()

app.get('/',(req,res) => res.send("thalaver"))
app.listen(3000,()=>console.log("server on..."))
