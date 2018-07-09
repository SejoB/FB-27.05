class User {
  constructor(name, lastname){
    this.name = name;
    this.lastname = lastname;
  }

  getfullName() {
    return `${this.name} ${this.lastName}`;
  }
}

class Feed {
  constructor(postEl){
    this.postEl = postEl;
    this.user = new User(getfullName());
    this.input = postEl.querySelector('.txt-post textarea');
    this.postButton = postEl.querySelector('.cfp-button-post'); 
    this.postsArea = postEl.querySelector('.posts-area');
    this.postButton = addEventListener('click', () => this.createPost());
  }
  createPost() {
    let userInput = this.input.value;
    this.input.value = '';
    let post = new Post(this.user, userInput);
    this.postsArea.insertBefore(post.div, this.postsArea.firstChild);

  }
}

class Post {
  constructor(user, userInput, lang = ''){
    this.user = user;
    this.userInput = userInput;
    this.lang = lang; 
    this.date = new Date;
    this.div = document.createElement('div');
    this.div.innerHTML = `<div class="feed-post">  
    <div class="fp-header">
        <a class = "fp-header-link" href="#">
            <img class="fp-header-avtr" src="https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-1/p160x160/19990343_1382987295125463_2614242156320044896_n.jpg?_nc_cat=0&oh=27bb0f076fb484be04e5ce32b7e87f01&oe=5B770690">   
        </a> 
        <div class="fp-header-profile">
            <h5 class="fp-hp">
            <span class="fp-hp-1">
                <span class="fp-hp-2">
                    <span class="fp-hp-3">    
                    ${this.user = fullName}
                    </span>
                     shared a 
                    <a href="https://www.facebook.com/bbcearth/videos/1589316244435259/?hc_ref=ARTTbHRukuBwtNBPZY5AgI1BaPLKZNUqqpt_2E3oSoUOz6vw0ZPyQM4XNKITnWesq24">video</a>
                    .
                </span>    
            </span>              
            </h5>
            <span class="fp-hp-time">${this.date.getTime()}</span>
        </div>
    </div> 
    <div class = "fp-header-post ${this.lang} ">  
        <p>${this.userInput}</p>  
    </div>    
    <div class="fp-cont">
    </div>
    <div class="fp-footer">
        <div class="fp-vl"></div>
        <div class = "fp-foo-descr">
                <span class="fp-foo-views">1,288,962 Views</span>
                        <h5 class="fp-fd">
                        <span class="fp-fd-1">
                            <span class="fp-fd-2">
                                <span class="fp-fd-3">    
                                <a href="https://www.facebook.com/bluedotfestival/?hc_ref=ARTeLn36vynaEJNqvbb7uXDhWo9Z4OPuWu_s0RzAHwNhfI9U0zY-8kdbbRDkSpBhw6w">
                                BBC Earth</a>
                                </span>
                                 is with 
                                <a href="https://www.facebook.com/bbcearth/videos/1589316244435259/?hc_ref=ARTTbHRukuBwtNBPZY5AgI1BaPLKZNUqqpt_2E3oSoUOz6vw0ZPyQM4XNKITnWesq24">
                                Global Goals for Sustainable Development</a>
                                .
                            </span>    
                        </span>              
                        </h5>
                        <span class="fp-fd-time">${this.date.getTime()}</span>
        </div>
    </div>
    <div class="fp-footer-btn">
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
     </div>`

  }
  
}


new Feed(document.querySelector('.feed-post'));