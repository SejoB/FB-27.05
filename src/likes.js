export default  class Likes {
      constructor(divOuter, likeBtn){
        this.likes = 0;
        this.divOuter = divOuter;
        likeBtn.addEventListener('click', () => this.displayLikes());
      }
    
    displayLikes() {
      this.likes++; 
      this.divOuter.innerHTML = '<img src="https://png.icons8.com/ultraviolet/80/666666/good-quality.png">' + this.likes;
        
        }
  }

        
    
    