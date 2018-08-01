!function(t){var e={};function s(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e){let s=new class{getUser(t){return fetch("https://jsonplaceholder.typicode.com/users/"+t).then(t=>t.json()).then(t=>new n(t,"images/avatar.jpg"))}};class n{constructor(t,e){this.fullName=t.name,this.id=t.id,this.userName=t.username,this.avatar=e}getName(t){return"name"===t?this.fullName.split(" ")[0]:"last"===t?this.fullName.split(" ")[1]:"full"===t?this.fullName:"user"===t?this.userName:void 0}getSrcImage(){return this.avatar}}class a{constructor(t,e,s,n){this.idPost=t,this.user=e,this.text=s,this.dateTime=n,this.views=0,this.html=document.createElement("div"),this.html.className="feed-post",this.html.innerHTML=`<div class = "fp-header">\n            <a class = "fp-header-link" href="#">\n                <img class="fp-header-avtr" src="${this.user.getSrcImage()}">   \n            </a> \n            <div class="fp-header-profile">\n                <h5 class="fp-hp">\n                <span class="fp-hp-1">\n                    <span class="fp-hp-2">\n                        <span class="fp-hp-3">    \n                        <a href="https://www.facebook.com/${this.user.getName("user")}/">\n                        ${this.user.getName("full")}</a>\n                        </span>\n                         shared a \n                        <a href="https://www.facebook.com/bbcearth/videos/1589316244435259/?hc_ref=ARTTbHRukuBwtNBPZY5AgI1BaPLKZNUqqpt_2E3oSoUOz6vw0ZPyQM4XNKITnWesq24">video</a>\n                        .\n                    </span>    \n                </span>              \n                </h5>\n                <span class="fp-hp-time">${this.dateTime}</span>\n            </div>\n            <div class = "fp-header-menu">\n                <div class = "fp-post-menu">\n                    <ul class = "fp-post-items">\n                        <li class = "fp-post-del">\n                            <a href = "">\n                                <span class = "fp-del">Save post</span>\n                            </a>\n                        </li>\n                        <li class = "fp-post-edit">\n                            <a href = "">\n                                <span class = "fp-edit">Edit post</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div> \n        <div class = "fp-header-post">  \n            <p>${this.text}</p>  \n        </div>    \n        <div class = "fp-cont"></div>\n        <div class = "fp-footer">\n            <div class="fp-vl"></div>\n            <div class = "fp-foo-descr">\n                    <span class="fp-foo-views">${this.views}Views</span>\n                            <h5 class="fp-fd">\n                            <span class="fp-fd-1">\n                                <span class="fp-fd-2">\n                                    <span class="fp-fd-3">    \n                                    <a href="">\n                                    BBC Earth</a>\n                                    </span>\n                                     is with \n                                    <a href="">\n                                    Global Goals for Sustainable Development</a>\n                                    .\n                                </span>    \n                            </span>              \n                            </h5>\n                            <span class="fp-fd-time">${this.dateTime}</span>\n            </div>\n        </div>\n        <div>\n            <span class = "postLikes"></span>\n        </div>\n        <div class = "fp-footer-btn">\n            <button type = "button" class = "fp-footer-like">\n                    <img class = "fp-footer-ico" src="https://png.icons8.com/windows/96/666666/facebook-like.png"> \n                    <div class = "fp-button-text">Like</div>\n            </button>\n            <button type = "button" class = "fp-footer-com">\n                     <img class = "fp-footer-ico" src="https://png.icons8.com/small/32/666666/speech-bubble.png"> \n                     <div class = "fp-button-text">Comment</div>       \n            </button>\n            <button type = "button" class = "fp-footer-sha">\n                    <img class = "fp-footer-ico" src="https://png.icons8.com/android/32/666666/right2.png"> \n                    <div class = "fp-button-text">Share</div>       \n            </button>\n        </div> \n        <div class = "fp-comments-cont"></div>\n        <div class = "fp-comments">\n            <div class="fp-avtr-com">\n                <img class = "fp-com-pic" src="images/avatar.jpg" alt = "">\n            </div>\n            <div class="fp-post-com">\n                <input type = "text" class="fp-com-txt" placeholder="Write a comment...">\n            </div>\n        </div>\n        `}}new class{constructor(t){this.postEl=t,this.user=s.getUser(2).then(t=>{this.tmp=t,logUser=t,this.user=this.tmp.getName("full")}),this.input=t.querySelector(".txt-post"),this.postButton=t.querySelector(".cfp-button-post"),this.postsArea=t.querySelector(".posts-area"),this.postButton.addEventListener("click",()=>{this.createPost(),new PostLikes(this.postHtml.querySelector(".postLikes"),this.postHtml.querySelector(".fp-footer-like")),this.postHtml.querySelector(".fp-com-txt").addEventListener("keydown",function(t){13===t.keyCode&&(new Comment(logUser,this.value).addComment(document.querySelector(".fp-comments-cont")),this.value="")})})}createPost(){let t=this.postsArea.querySelector(".feed-post:first-child");this.postHtml=new a(this.tmp.getName("user")+new Date,this.tmp,this.input.value,new Date).html,this.postsArea.insertBefore(this.postHtml,t)}}(document.querySelector(".feed"))}]);
//# sourceMappingURL=app.js.map