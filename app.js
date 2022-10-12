// app.js
// 아래에 코드를 작성해 주세요.
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

//queryData
const returnData = (req, res) => {
  const data = [];
  //유저랑 포스트 맞춰서 data에 푸쉬
  //if(users[i].id===posts[j].userID)=>for뤂 두번 돌아서 다 매칭 시키기
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < posts.length; j++) {
      console.log(users[i].id);
      console.log(posts[j].userId);
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
  res.json({ statusCode: res.statusCode });
  console.log(JSON.stringify(data, null, 2));
};

//createUser
const createUser = (req, res) => {
  const user = req.body;

  console.log(user);

  users.push({
    id: users.length + 1,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  users.forEach((e) => {
    console.log(e);
  });

  res.json({ message: "userCreated" });
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

  //for check
  posts.forEach((e) => {
    console.log(e);
  });

  res.json({ message: "postCreated" });
};

module.exports = { createUser, createPost, returnData };
