const express=require("express");
const app=express();
const port=3000;


app.get("/",(request, response)=>{
    response.send("<h1>Home Root</h1>"); 
})

app.get("/About", function(req, res){
    res.send("<h1>About</h1>");
});


app.listen(port, ()=>{
    console.log("Server is running on Port No -> 3000");
});
