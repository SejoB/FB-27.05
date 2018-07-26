  class Likes {
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

  class PostLikes  {
        constructor(out, btn){
          new Likes(out, btn);
        }
  }

  class CommentLikes {
        constructor(out, btn){
          new Likes(out, btn);
        }
  }
    
    let postsArr = document.querySelectorAll('.postLikes'),
    footerLikesArr = document.querySelectorAll('.fp-footer-like');
    for (let i = 0; i < postsArr.length; i++) {
        new PostLikes(postsArr[i], footerLikesArr[i]);
    }
    
    let comLikesArr = document.querySelectorAll('.commentLikes'),
    btnLikesArr = document.querySelectorAll('.commentBtn');
    for (let i = 0; i < comLikesArr.length; i++) {
        new CommentLikes(comLikesArr[i], btnLikesArr[i]);
    }
        