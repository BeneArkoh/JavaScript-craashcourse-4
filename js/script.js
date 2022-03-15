fetch("http://localhost:3000/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
const url = "http://localhost:3000/Users";
async function getAllUser() {
  const response = await fetch("http://localhost:3000/Users");
  const data = await response.json();
  console.log(data);
}
getAllUser();

async function getUser(userId) {
  const response = await fetch(`${url}/${userId}`);
  const data = await response.json();
  console.log(data);
}
getUser(2);

let user = {
  firstName: "Bene",
  lastName: "Otoo",
  Username: "BeneOtoo",
  email: "beneotoo@gmail.com",
  gender: "Female",
};
async function createUser(userInfo) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
// createUser(user);
const data = {
  email: "beneOtoo@email.com",
};
async function updateUser(userId, userData) {
  const response = await fetch(`${url}/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(userData),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}
updateUser(51, data);

async function deleteUser(userId) {
  const response = await fetch(`${url}/${userId}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
}
