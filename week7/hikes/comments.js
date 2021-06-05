export default class Comment {
  constructor() {
    this.hike = hike;
    this.comment = comment;
    this.date = new Date();
    this.comments = [];
  }

  renderCommentList() {
    return this.comments;
  }

  addComment() {
    const commentObj = {
      hike: document.querySelector("#hike").value,
      comment: document.querySelector("#comment").value,
      date: new Date().toDateString(),
    };
    console.log(commentObj);
    this.comments.push(commentObj);
    }
  
    setLocalStorage(content) {
    localStorage.setItem(key, JSON.stringify(content));
  }
}
