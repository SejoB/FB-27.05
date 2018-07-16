class UserService{
    getUser(id) {
        return fetch('https://jsonplaceholder.typicode.com/users/' + id)
          .then(res => res.json())
          .then(user => new User(user, "images/avatar.jpg"))
      }
}

let userService = new UserService();

class User {
    constructor(user, avatar){
        this.fullName = user.name;
        this.id = user.id;
        this.userName = user.username;
        this.avatar = avatar;
    }
    getName(typeOfName){
        if(typeOfName === 'name'){
            return this.fullName.split(' ')[0];
        }
        if(typeOfName === 'last'){
            return this.fullName.split(' ')[1];
        }
        if(typeOfName === 'full'){
            return this.fullName;
        }
        if(typeOfName === 'user'){
            return this.userName;
        }
    } 
    getSrcImage(){
        return this.avatar;
    }
}

class Feed{
    constructor(postEl){
        this.postEl = postEl;
        this.user = userService.getUser(2).then(user => { 
        this.tmp = user;
        this.user = this.tmp.getName('full');
        console.log(this.user);
        });

        this.input = postEl.querySelector('.txt-post');
        this.postButton = postEl.querySelector('.cfp-button-post'); 
        this.postsArea = postEl.querySelector('.posts-area');
        this.postButton.addEventListener('click', () => this.createPost());
    }

    createPost(){
        let firstPost = this.postsArea.querySelector('.feed-post:first-child');
        this.postsArea.insertBefore(new Post(this.tmp.getName('user') + new Date(), this.tmp, this.input.value, new Date()).html, firstPost);
    }
}

class Post {
    constructor(idPost, user, text, dateTime){
        this.idPost = idPost;
        console.log(idPost);
        this.user = user;
        this.text = text; 
        this.dateTime = dateTime;
        this.views = 0;
        this.html = document.createElement('div');
        this.html.className = 'feed-post';
        this.html.innerHTML = `<div class = "fp-header">
            <a class = "fp-header-link" href="#">
                <img class="fp-header-avtr" src="${this.user.getSrcImage()}">   
            </a> 
            <div class="fp-header-profile">
                <h5 class="fp-hp">
                <span class="fp-hp-1">
                    <span class="fp-hp-2">
                        <span class="fp-hp-3">    
                        <a href="https://www.facebook.com/${this.user.getName('user')}/">
                        ${this.user.getName('full')}</a>
                        </span>
                         shared a 
                        <a href="https://www.facebook.com/bbcearth/videos/1589316244435259/?hc_ref=ARTTbHRukuBwtNBPZY5AgI1BaPLKZNUqqpt_2E3oSoUOz6vw0ZPyQM4XNKITnWesq24">video</a>
                        .
                    </span>    
                </span>              
                </h5>
                <span class="fp-hp-time">${this.dateTime}</span>
            </div>
            <div class = "fp-header-menu">
                <div class = "fp-post-menu">
                    <ul class = "fp-post-items">
                        <li class = "fp-post-del">
                            <a href = "">
                                <span class = "fp-del">Save post</span>
                            </a>
                        </li>
                        <li class = "fp-post-edit">
                            <a href = "">
                                <span class = "fp-edit">Edit post</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
        <div class = "fp-header-post">  
            <p>${this.text}</p>  
        </div>    
        <div class = "fp-cont"></div>
        <div class = "fp-footer">
            <div class="fp-vl"></div>
            <div class = "fp-foo-descr">
                    <span class="fp-foo-views">${this.views} Views</span>
                            <h5 class="fp-fd">
                            <span class="fp-fd-1">
                                <span class="fp-fd-2">
                                    <span class="fp-fd-3">    
                                    <a href="">
                                    BBC Earth</a>
                                    </span>
                                     is with 
                                    <a href="">
                                    Global Goals for Sustainable Development</a>
                                    .
                                </span>    
                            </span>              
                            </h5>
                            <span class="fp-fd-time">${this.dateTime}</span>
            </div>
        </div>
        <div class = "fp-footer-btn">
            <button type = "button" class = "fp-footer-like">
                    <img class = "fp-footer-ico" src="https://png.icons8.com/windows/96/666666/facebook-like.png"> 
                    <div class = "fp-button-text">Like</div>
            </button>
            <button type = "button" class = "fp-footer-com">
                     <img class = "fp-footer-ico" src="https://png.icons8.com/small/32/666666/speech-bubble.png"> 
                     <div class = "fp-button-text">Comment</div>       
            </button>
            <button type = "button" class = "fp-footer-sha">
                    <img class = "fp-footer-ico" src="https://png.icons8.com/android/32/666666/right2.png"> 
                    <div class = "fp-button-text">Share</div>       
            </button>
        </div> 
        <div class = "fp-comments">
            <div class="fp-avtr-com">
                <img class = "fp-com-pic" src="images/avatar.jpg" alt = "">
            </div>
            <div class="fp-post-com">
                <input type = "text" class="fp-com-txt" placeholder="Write a comment...">
            </div>
        </div>`;
    }
}


class Comment {
    constructor(idComment, idUser, text){
        this.idComment = idComment;
        this.idUser = idUser;
        this.text = text;   
    }
}

new Feed(document.querySelector('.feed'));

/*document.querySelector('.fp-footer-like'); 
addEventListener('click', () => console.log("one like"));
document.createElement('div');
        innerHTML = 
        `<div class = "post-likes">
             <span><img class = "img-likes" src = "https://png.icons8.com/ultraviolet/80/666666/good-quality.png">${this.count}</span>
        </div>`;
     fp-footer.insertBefore('div');

/*class Likes {
    constructor(like){
        this.like = like;
        this.likeBtn = document.querySelector('.fp-footer-like'); 
        this.likesButton.addEventListener('click', () => console.log("one like"));
        this.div = document.createElement('div');
        this.html = document.createElement('div.post-likes');
        this.html.className = 'post-likes';
        this.html.innerHTML = 

            `<span><img class = "img-likes" src = "https://png.icons8.com/ultraviolet/80/666666/good-quality.png">0</span>
        `;
    }
    
}*/