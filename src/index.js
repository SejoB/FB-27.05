import Comment from './comments';
import Likes from './likes';
import { updExistCommentsEvents } from "./comments";


class UserService{
    getUser(id) {
        return fetch('https://jsonplaceholder.typicode.com/users/' + id)
          .then(res => res.json())
          .then(user => new User(user, "images/avatar.jpg"))
      }
}

let userService = new UserService();
var logUser;
//user = loging user;
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
            logUser = user;
            updExistCommentsEvents(user);
            this.user = this.tmp.getName('full');
        });

        this.input = postEl.querySelector('.txt-post');
        this.postButton = postEl.querySelector('.cfp-button-post'); 
        this.postsArea = postEl.querySelector('.posts-area');
        this.postButton.addEventListener('click', () => {
            this.createPost();
            let tmpThis = this;
            postEl.querySelector('.fp-post-del').addEventListener('click', function(){
                tmpThis.deletePost(this.parentNode.parentNode.parentNode.parentNode.parentNode);
            });
            postEl.querySelector('.fp-post-edit').addEventListener('click', function(){
                tmpThis.editPost(this.parentNode.parentNode.parentNode.parentNode.parentNode);
            });
            new Likes(this.postHtml.querySelector('.postLikes'), this.postHtml.querySelector('.fp-footer-like'));
            let tmpHtml = this.postHtml;
            this.postHtml.querySelector('.fp-com-txt').addEventListener('keydown', function(e) {
                if(e.keyCode === 13) {
                  new Comment(logUser, this.value).addComment(tmpHtml.querySelector('.fp-comments-cont'));
                    this.value = '';
                }
            });
        });
    }

    createPost(){
        let firstPost = this.postsArea.querySelector('.feed-post:first-child');
        this.postHtml = new Post(this.tmp.getName('user') + new Date(), this.tmp, this.input.value, new Date()).html;
        this.postsArea.insertBefore(this.postHtml, firstPost);
    }

    deletePost(el){
        el.remove();
    }

    editPost(el){
        let newText = prompt('Write new text', el.querySelector('.fp-header-post p').innerHTML);
        if  (newText && newText != '') el.querySelector('.fp-header-post p').innerHTML = newText;
    }
}

class Post {
    constructor(idPost, user, text, dateTime){
        this.idPost = idPost;
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
                            <span class = "fp-del">Delete</span>
                        </li>
                        <li class = "fp-post-edit">
                            <span class = "fp-edit">Edit</span>
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
                    <span class="fp-foo-views">${this.views}Views</span>
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
        <div>
            <span class = "postLikes"></span>
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
        <div class = "fp-comments-cont"></div>
        <div class = "fp-comments">
            <div class="fp-avtr-com">
                <img class = "fp-com-pic" src="images/avatar.jpg" alt = "">
            </div>
            <div class="fp-post-com">
                <input type = "text" class="fp-com-txt" placeholder="Write a comment...">
            </div>
        </div>
        `;
    }
}



 new Feed(document.querySelector('.feed'));
 
 






   