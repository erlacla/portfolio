import Hikes from './hikesModel.js';
import Comment from './comments.js';

const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});

const comments = new Comment();
window.addEventListener('load', () => {
  comments.renderCommentList(comments);
});

const submitbtn = document.querySelector("#submit");
submitbtn.addEventListener("click", comments.addComment);
comment.value = "";
console.log(comments);

