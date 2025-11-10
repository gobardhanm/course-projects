import { tweetsData } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
// const tweetBtn = document.getElementById('tweet-btn')

// tweetBtn.addEventListener('click', function(){
//     console.log(tweetInput.value)
// })

document.addEventListener("click", function(e){
    // console.log(e.target.dataset.likes)
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }

    if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }

    if(e.target.dataset.reply){
        handleRepliesClick(e.target.dataset.reply)
    }

    if(e.target.id === "tweet-btn"){
        handleTweetBtnClick()
    }
})

function handleLikeClick(tweetId){
    // console.log(tweetId)
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
        // targetTweetObj.isLiked = false
    }
    else{
        targetTweetObj.likes++
        // targetTweetObj.isLiked = true     
    }

    targetTweetObj.isLiked = ! targetTweetObj.isLiked  // Boolean fliping

    render()
}

function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }else{
        targetTweetObj.retweets++
    }

    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted

    render()
}

function handleRepliesClick(tweetId){
    document.getElementById(`replies-${tweetId}`).classList.toggle("hidden")
}

function handleTweetBtnClick(){
    // console.log(tweetInput.value)
    const tweetInput = document.getElementById('tweet-input')
    if(tweetInput.value){
        tweetsData.unshift({
            handle: `Tweeter🕊️`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
    render()
    tweetInput.value = ""
    }
    
}

function getFeedHtml(){

    let feedHtml = ``

    tweetsData.forEach(function(data){

        let likeIconClass = ""
        let retweetIconClass = ""

        if(data.isLiked){
            likeIconClass = "liked"
        }
        if(data.isRetweeted){
            retweetIconClass = "retweeted"
        }

        let repliesHtml = ''

        if(data.replies.length > 0){
            data.replies.forEach(function(reply){
               repliesHtml += `
            <div class="tweet-reply">
               <div class="tweet-inner">
                   <img src="${reply.profilePic}" class="profile-pic">
                       <div>
                           <p class="handle">${reply.handle}</p>
                           <p class="tweet-text">${reply.tweetText}</p>
                       </div>
                   </div>
            </div>`
            })
        }

        feedHtml += 
        `<div class="tweet">
            <div class="tweet-inner">
                <img src="${data.profilePic}" class="profile-pic">
                <div>
                    <p class="handle">${data.handle}</p>
                    <p class="tweet-text">${data.tweetText}</p>
                    <div class="tweet-details">
                        <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots" data-reply="${data.uuid}"></i>
                            ${data.replies.length}
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-heart ${likeIconClass}" data-like="${data.uuid}"></i>
                            ${data.likes} 
                        </span>
                        <span class="tweet-detail">
                            <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet="${data.uuid}"></i>
                            ${data.retweets}
                        </span>
                    </div>   
                </div>            
            </div>
            <div class="hidden" id="replies-${data.uuid}">
                ${repliesHtml}
            </div> 
        </div>`
        
        
    })
    return feedHtml
}

function render(){
    document.getElementById("feed").innerHTML = getFeedHtml()
}

render()

