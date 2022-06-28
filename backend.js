const express=require('express')
const app=express()
const Connect=require('./connect')

app.use(express.json())
const port = process.env.PORT || 5000;
const userRoute=require('./routes/userRoute')
const path = require("path");
app.use('/api/user/',userRoute)

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static("frontend/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
    });
  }
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(port, () => console.log(`Server started on port  ${port}!`));