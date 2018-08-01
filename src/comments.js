import Likes from './likes.js';
export default class Comment {
    constructor(user, text){
        this.user = user;
        this.text = text;  
    }

    addComment(wrapper){
        this.container = document.createElement('div');
        this.container.innerHTML = `
            <div class='comments-cont'>
                <img class ='comments-avtr' src = '${this.user.getSrcImage()}' alt = 'avatar'>
                <div class = 'comments-txt-cont'>
                    <div class = 'comments-user'>${this.user.getName('full')}</div>
                    <div class = 'comments-txt'>${this.text}</div>
                </div>
            </div>
            <div class = 'comments-likes-cont'>
                <div class = "comment-likes-btn">Like</div>
                <div class = "commentLikes"></div>  
            </div>
        `;
        new Likes(this.container.querySelector('.commentLikes'),
                  this.container.querySelector('.comment-likes-btn'));
        wrapper.appendChild(this.container);
    }
}

export function updExistCommentsEvents(logUser) {
    let commentsArr = document.querySelectorAll('.fp-com-txt');
    for (let i = 0; i < commentsArr.length; i++) {
        commentsArr[i].addEventListener('keydown', function(e) {
            if(e.keyCode === 13) {
                new Comment(logUser, this.value).addComment(this.parentNode.parentNode.parentNode.querySelector('.fp-comments-cont'));
                this.value = '';
            }
        });
    }
}
 