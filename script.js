const postText = document.getElementById('post-text');
const postButton = document.getElementById('post-button');
const postsContainer = document.querySelector('.posts');

// Function to create a new post element
function createPostElement(text) {
    const postCard = document.createElement('div');
    postCard.classList.add('post');
  
    const postElement = document.createElement('div');
    postElement.classList.add('post-content');
  
    const userPosted = document.createElement('small');
    userPosted.textContent = "a user posted";
    userPosted.classList.add('user-posted');

    const postTextElement = document.createElement('p');
    postTextElement.textContent = text;
    postTextElement.classList.add('post-text');
  
    const likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.classList.add('like-button');
  
    const dislikeButton = document.createElement('button');
    dislikeButton.textContent = 'Dislike';
    dislikeButton.classList.add('dislike-button');
  
    const likeCounter = document.createElement('span');
    likeCounter.textContent = '0 likes';
    likeCounter.classList.add('like-counter');
  
    const dislikeCounter = document.createElement('span');
    dislikeCounter.textContent = '0 dislikes';
    dislikeCounter.classList.add('dislike-counter');
  
    const counterDiv = document.createElement('div');
    counterDiv.appendChild(likeCounter);
    counterDiv.appendChild(dislikeCounter);
  
    postElement.appendChild(userPosted);
    postElement.appendChild(postTextElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(dislikeButton);
    postElement.appendChild(counterDiv);
  
    postCard.appendChild(postElement);
  
    // Attach event listeners to like and dislike buttons
    likeButton.addEventListener('click', () => {
      const currentLikes = parseInt(likeCounter.textContent);
      likeCounter.textContent = currentLikes + 1 + " likes";
  
      // TODO: Send updated post data to the server
    });
  
    dislikeButton.addEventListener('click', () => {
      const currentDislikes = parseInt(dislikeCounter.textContent);
      dislikeCounter.textContent = currentDislikes + 1 + " dislikes";
  
      // TODO: Send updated post data to the server
    });
  
    return postCard;
  }
  
// Function to handle new post submission
function handleNewPost() {
  const postTextValue = postText.value.trim();

  if (postTextValue !== '') {
    const newPost = createPostElement(postTextValue);
    postsContainer.prepend(newPost);
    postText.value = '';

    // TODO: Send new post to the server to be stored in the database
  }
}

// Attach event listener to the post button
postButton.addEventListener('click', handleNewPost);

// Load existing posts from the server
// TODO: Use fetch() to retrieve existing posts from the server and display them on the page
