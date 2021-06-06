export default class Comment {
  constructor(hike, comment) {
    this.hike = hike;
    this.comment = comment;
    this.date = new Date();
    this.array = [];
  }

  renderCommentList() {
    document.querySelector('#displayComments').innerHTML = this.array;
  }

  addComment() {
    const commentObj = {
      hike: document.querySelector("#hike").value,
      comment: document.querySelector("#comment").value,
      date: new Date().toDateString(), 
      sarray: this.sarray = []
      
    };
    console.log(commentObj); 
    this.sarray.push(commentObj);
     this.array.push(commentObj);
     console.log(this.array);
  }
  
   setLocalStorage(sarray) {
    localStorage.setItem(sarray, JSON.stringify(sarray));
    
  }
  

}
