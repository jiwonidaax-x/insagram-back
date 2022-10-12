var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
const { createUser, createPost,returnData } = require("./app");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/d", (req,res)=>{
  res.send("main page");
})

app.get("/data", returnData);
app.post("/join", createUser); //유저생성
app.post("/post", createPost); //게시글 생성

onHttpServer = () => {
  console.log(`server running on ${HTTP_PORT}`);
};

app.listen(HTTP_PORT, onHttpServer());
