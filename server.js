var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
const { createUser, createPost,returnData ,editPost , deleteData} = require("./app");

//instead of Body-Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * @path {get} http://localhost:8080/
 * @description Main page
 */
app.get("/", (req,res)=>{
  res.send("main page");
})

/**
 * @path {get} http://localhost:8080/data
 * @description query data(userID and posts)
 */
app.get("/data", returnData);

/**
 * @path {delete} http://localhost:8080/deleteData
 * @description delete data(userID and posts)
 */
 app.delete("/deleteData", deleteData);

/**
 * @path {post} http://localhost:8080/join
 * @description add User
 */
app.post("/join", createUser);

/**
 * @path {post} http://localhost:8080/post
 * @description add Post
 */
app.post("/post", createPost); 

//patch 와 put 차이
/**
 * @path {patch} http://localhost:8080/postid
 * @description update post
 */
 app.patch("/update", editPost); 

//print server running port 
onHttpServer = () => {
  console.log(`server running on ${HTTP_PORT}`);
};


app.listen(HTTP_PORT, onHttpServer());
