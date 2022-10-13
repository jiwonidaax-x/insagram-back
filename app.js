// app.js

//Users data
const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

//posts Data
const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 2,
  },
];

//edit post
const editPost = (req, res) => {
  const data = [];
  const newPost = req.body;
  console.log(newPost);
  posts.forEach((e) => {
    if (e.id === newPost.id) {
      e.title = newPost.title;
      e.content = newPost.content;
      e.userId = newPost.userId;
    }
  });

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === newPost.userId) {
      data.push({
        userID: newPost.userId,
        userName: users[i].name,
        postingId: newPost.id,
        postingTitle: newPost.title,
        postingContent: newPost.content,
      });
    }
  }
  console.log(res.statusCode);
  //res.send(data);
  res.status(200).json(data);
};

//deleteData
const deleteData = (req, res) => {
  posts.length = 0;
  console.log(posts);
  res.status(200).json({ message: "postingDeleted" });

}

//queryData
const returnData = (req, res) => {
  const data = [];
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < posts.length; j++) {
      if (users[i].id === posts[j].userId) {
        data.push({
          userID: users[i].id,
          userName: users[i].name,
          postingId: posts[j].id,
          postingTitle: posts[j].title,
          postingContent: posts[j].content,
        });
      }
    }
  }

  console.log(res.statusCode);
  res.status(200).send(data);
};

//createUser
const createUser = (req, res) => {
  const user = req.body;
  users.push({
    id: users.length + 1,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  console.log(JSON.stringify(users, null, 2));
  res.status(200).json({ message: "userCreated" });
};

//createPost
const createPost = (req, res) => {
  const post = req.body;
  posts.push({
    id: posts.length + 1,
    title: post.title,
    content: post.content,
    userId: post.userId,
  });

  console.log(JSON.stringify(posts, null, 2));
  res.status(200).json({ message: "postCreated" });
};

module.exports = { createUser, createPost, returnData, editPost, deleteData };
