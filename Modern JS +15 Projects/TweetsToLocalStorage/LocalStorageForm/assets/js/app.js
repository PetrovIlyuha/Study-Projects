// Variables
const tweetList = document.getElementById('tweet-list');

// Event Listeners
eventListeners();

function eventListeners() {
    // Form submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    // Remove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    // Document
    document.addEventListener('DOMContentLoaded', localStorageOnload);
}
// Functions
function newTweet(e) {
    e.preventDefault();

    //  read the textarea value;
    const tweet = document.getElementById('tweet').value;

    // Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    // Creating an <li> element
    const li = document.createElement('li');
    li.textContent = tweet;

    // Add the remove button to the tweet
    li.appendChild(removeBtn);
    // Add to the list
    tweetList.appendChild(li);
    // Add tweet to local storage
    addTweetLocalStorage(tweet);

    // Print the alert
    alert('Tweet Added!');

    this.reset();
}

// Removes the Tweets from the DOM
function removeTweet(e) {
    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }
    // Remove from Storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
}

// Adds the Tweets to the LS
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    //    Add the tweet into the array
    tweets.push(tweet);

    // Convert an array of tweets into a string
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    // Get the values, if null is returned than create an empry array;
    if (tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

// Prints LS Tweets on Load
function localStorageOnload() {
    let tweets = getTweetsFromStorage();
    // Loop through storage and then print the values
    tweets.forEach(function (tweet) {
        // Create the remove button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        // Creating an <li> element
        const li = document.createElement('li');
        li.textContent = tweet;

        // Add the remove button to the tweet
        li.appendChild(removeBtn);
        // Add to the list
        tweetList.appendChild(li);
    });
}

// Removes the Tweet from LS
function removeTweetLocalStorage(tweet) {
    //    Get Tweets grom storage
    let tweets = getTweetsFromStorage();
    // Remove the X from the tweet
    const tweetDelete = tweet.substring(0, tweet.length - 1);
    // Loop Through the Tweets and remove the tweet that's equal
    tweets.forEach(function (tweetLS, index) {
        if (tweetDelete === tweetLS) {
            tweets.splice(index, 1);
        }
    });

    // Save the data after the removal of the tweets
    localStorage.setItem('tweets', JSON.stringify(tweets));
}