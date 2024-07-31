const userName = document.getElementById("name");
const userPost = document.getElementById("post");
const submit = document.getElementById("submit");
const posts = document.getElementsByClassName("posts")[0];

submit.addEventListener("click", onSubmit);

function onSubmit() {
  if (userName.value === "" || userPost.value === "") {
    alert("Please fill out both fields before submitting");
  } else {
    const post = document.createElement("div");
    const postText = document.createElement("p");
    const comments = document.createElement("div");
    const displayComments = document.createElement("a");
    const removePost = document.createElement("a");

    displayComments.textContent = "comments";
    removePost.textContent = "remove";
    postText.textContent = `${userPost.value} - Posted By: ${userName.value}`;
    post.classList.add("border-bottom");
    posts.appendChild(post);
    post.appendChild(displayComments);
    post.appendChild(removePost);
    post.appendChild(postText);
    post.appendChild(comments);
    userName.value = "";
    userPost.value = "";

    displayComments.addEventListener("click", function () {
      if (commentsForm.classList.contains("hide")) {
        commentsForm.classList.remove("hide");
      } else {
        commentsForm.classList.add("hide");
      }
    });

    removePost.addEventListener("click", function () {
      post.remove();
    });

    const commentsForm = document.createElement("form");
    const commentTextContainer = document.createElement("div");
    const commentNameContainer = document.createElement("div");
    const commentText = document.createElement("input");
    const commentName = document.createElement("input");
    const commentSubmit = document.createElement("button");

    commentText.type = "text";
    commentName.type = "text";
    commentText.setAttribute("placeholder", "Comment Text");
    commentName.setAttribute("placeholder", "Your Name");
    commentTextContainer.classList.add("form-group");
    commentNameContainer.classList.add("form-group");
    commentSubmit.textContent = "Submit Comment";
    commentText.classList.add("form-control");
    commentName.classList.add("form-control");
    commentSubmit.classList.add("btn");
    commentSubmit.classList.add("btn-primary");

    commentSubmit.addEventListener("click", function (event) {
      event.preventDefault();
      const comment = document.createElement("p");
      comment.textContent = `${commentText.value} - Posted By: ${commentName.value}`;
      comments.appendChild(comment);
    });

    post.appendChild(commentsForm);
    commentsForm.appendChild(commentTextContainer);
    commentsForm.appendChild(commentNameContainer);
    commentTextContainer.appendChild(commentText);
    commentNameContainer.appendChild(commentName);
    commentsForm.appendChild(commentSubmit);
  }
}
