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

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comment';
  commentButton.classList.add('comment-button');

  const likeCounter = document.createElement('span');
  likeCounter.textContent = '0 likes';
  likeCounter.classList.add('like-counter');

  const counterDiv = document.createElement('div');
  counterDiv.appendChild(likeCounter);

  const commentSection = document.createElement('div');
  commentSection.classList.add('comment-section');

  const commentHeading = document.createElement('small');
  commentHeading.textContent = 'Comment Section';
  commentHeading.classList.add('comment-heading');

  
  postElement.appendChild(userPosted);
  postElement.appendChild(postTextElement);
  postElement.appendChild(likeButton);
  postElement.appendChild(commentButton);
  postElement.appendChild(counterDiv);
  postElement.appendChild(commentSection);
  commentSection.appendChild(commentHeading);

  postCard.appendChild(postElement);

  // Attach event listeners to like and dislike buttons
  likeButton.addEventListener('click', () => {
    const currentLikes = parseInt(likeCounter.textContent);
    likeCounter.textContent = currentLikes + 1 + " likes";

    // TODO: Send updated post data to the server
  });

  commentButton.addEventListener('click', () => {


    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Write a comment...';
    commentInput.classList.add('comment-input-bar');

    const commentSubmitButton = document.createElement('button');
    commentSubmitButton.textContent = 'Submit';
    commentSubmitButton.classList.add('comment-submit-button');

    const commentCancelButton = document.createElement('button');
    commentCancelButton.textContent = 'Cancel';
    commentCancelButton.classList.add('comment-cancel-button');

    const commentForm = document.createElement('form');
    commentForm.classList.add('comment-form');
    commentForm.appendChild(commentInput);
    commentForm.appendChild(commentSubmitButton);
    commentForm.appendChild(commentCancelButton);
 
    commentSection.appendChild(commentForm);

    commentSubmitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const commentInputValue = commentInput.value.trim();

      if (commentInputValue !== '') {
        const comment = document.createElement('div');
        comment.classList.add('comment');
        comment.innerHTML = `<small>a user commented</small><br> ${commentInputValue}`;

        commentSection.appendChild(comment);
        commentForm.remove();

        // TODO: Send new comment to the server to be stored in the database
      }
    });

    commentCancelButton.addEventListener('click', () => {
      commentForm.remove();
    });
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
