const avatar = document.getElementById("avatar")
const postSec = document.getElementById("post-sec")
const icons = document.getElementById("icons")
const likes = document.getElementById("likes")
const username = document.getElementById("username")
const caption = document.getElementById("caption")
const artistName = document.getElementById("name")
const add = document.getElementById("add")

const Savatar = document.getElementById("Savatar")
const SpostSec = document.getElementById("Spost-sec")
const Sicons = document.getElementById("Sicons")
const Slikes = document.getElementById("Slikes")
const Susername = document.getElementById("Susername")
const Scaption = document.getElementById("Scaption")
const SartistName = document.getElementById("Sname")
const Sadd = document.getElementById("Sadd")

const Tavatar = document.getElementById("Tavatar")
const TpostSec = document.getElementById("Tpost-sec")
const Ticons = document.getElementById("Ticons")
const Tlikes = document.getElementById("Tlikes")
const Tusername = document.getElementById("Tusername")
const Tcaption = document.getElementById("Tcaption")
const TartistName = document.getElementById("Tname")
const Tadd = document.getElementById("Tadd")


const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853 ",
        location: "Zundert, Netherlands",
        avatar: "imgs/avatar-vangogh.jpg",
        post: "imgs/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        heartIcon: "imgs/icon-heart.png",
        commentIcon: "imgs/icon-comment.png",
        shareIcon: "imgs/icon-dm.png"

    },
    {
        name: "Gustave Courbet",
        username: "gus1819 ",
        location: "Ornans, France",
        avatar: "imgs/avatar-courbet.jpg",
        post: "imgs/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        heartIcon: "imgs/icon-heart.png",
        commentIcon: "imgs/icon-comment.png",
        shareIcon: "imgs/icon-dm.png"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735 ",
        location: "Paris, France",
        avatar: "imgs/avatar-ducreux.jpg",
        post: "imgs/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        heartIcon: "imgs/icon-heart.png",
        commentIcon: "imgs/icon-comment.png",
        shareIcon: "imgs/icon-dm.png"
    }
]

    // First post

        avatar.innerHTML = `<img src="${posts[0].avatar}" alt="avatar" class="avatar-img">`
    
        artistName.textContent = `${posts[0].name}`
    
        add.textContent = `${posts[0].location}`
    
        postSec.innerHTML = `<img src="${posts[0].post}" alt="the-post" class="the-post" id="the-post">`
    
        icons.innerHTML = 
        `
        <img src="${posts[0].heartIcon}" alt="like-btn" class="like-btn" id="like-btn">
                        
        <img src="${posts[0].commentIcon}" alt="comment-btn" class="comment-btn">
                        
        <img src="${posts[0].shareIcon}" alt="share-btn" class="share-btn">
        `
    
        likes.textContent = `${posts[0].likes} likes`
    
        username.innerHTML = `${posts[0].username}`
    
        caption.innerHTML += `${posts[0].comment}`

    
        // Second post

        Savatar.innerHTML = `<img src="${posts[1].avatar}" alt="avatar" class="avatar-img">`
    
        SartistName.textContent = `${posts[1].name}`
    
        Sadd.textContent = `${posts[1].location}`
    
        SpostSec.innerHTML = `<img src="${posts[1].post}" alt="the-post" class="the-post" id="the-post">`
    
        Sicons.innerHTML = 
        `
        <img src="${posts[1].heartIcon}" alt="like-btn" class="like-btn" id="like-btn">
                        
        <img src="${posts[1].commentIcon}" alt="comment-btn" class="comment-btn">
                        
        <img src="${posts[1].shareIcon}" alt="share-btn" class="share-btn">
        `
    
        Slikes.textContent = `${posts[1].likes} likes`
    
        Susername.innerHTML = `${posts[1].username}`
    
        Scaption.innerHTML += `${posts[1].comment}`


        // Third post


        Tavatar.innerHTML = `<img src="${posts[2].avatar}" alt="avatar" class="avatar-img">`
    
        TartistName.textContent = `${posts[2].name}`
    
        Tadd.textContent = `${posts[2].location}`
    
        TpostSec.innerHTML = `<img src="${posts[2].post}" alt="the-post" class="the-post" id="the-post">`
    
        Ticons.innerHTML = 
        `
        <img src="${posts[2].heartIcon}" alt="like-btn" class="like-btn" id="like-btn">
                        
        <img src="${posts[2].commentIcon}" alt="comment-btn" class="comment-btn">
                        
        <img src="${posts[2].shareIcon}" alt="share-btn" class="share-btn">
        `
    
        Tlikes.textContent = `${posts[2].likes} likes`
    
        Tusername.innerHTML = `${posts[2].username}`
    
        Tcaption.innerHTML += `${posts[2].comment}`

        
        