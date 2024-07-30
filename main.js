const userName = document.getElementById("name");
const userPost = document.getElementById("post");
const submit = document.getElementById("submit");
const posts = document.getElementsByClassName("posts")[0];

submit.addEventListener("click", onSubmit);

function onSubmit() {
  let post = document.createElement("p");
  post.textContent = `${userPost.value} - Posted By: ${userName.value}`;
  post.classList.add("border-bottom");
  posts.appendChild(post);
  userName.value = "";
  userPost.value = "";
}
