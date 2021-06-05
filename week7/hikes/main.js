import Hikes from './hikes.js';
import Comment from './comments.js';


const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});

const comments = new Comment();
window.addEventListener('load', () => {
  comments.renderCommentList();
});

const submitbtn = document.querySelector("#submit");
submitbtn.addEventListener("click", comments.addComment);