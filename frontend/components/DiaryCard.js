import { diaries } from '../../backend/data/diaries.js';

export function generateDiariesHTML() {
  let diariesHTML = '';
  document.title = `Silver Surfers - Diary Feed`;
  diaries.forEach((diary) => {
    diariesHTML += `
      <div class="news-feed-grid">
        <div class="feed-post js-feed-post-${diary.id}">
            <div class="post-header">
              <img class="profile-picture-icon" src="${diary.author.photo}">
              <div class="post-detail">
                <div class="header-self-name">
                  ${diary.title}
                </div>
                <div class="js-place-time">
                  ${diary.author.location}, ${diary.author.age} years old
                </div>
              </div>
              <div class="bookmark-container">
                <img class="bookmark-icon" src="../../public/assets/icons/circle-bookmark.svg">
              </div>
            </div>
    
            <div class="image-container">
              <img class="post-image" src="${diary.cover}">
            </div>
    
            <div class="reader-count-container">
              <img class="reader-count-icon" src="../../public/assets/icons/sunglasses-alt.svg">
              <span class="reader-count">
                  ${diary.stats.readerCount} readers
              </span>
            </div>
    
            <div class="liked-by-container">
              <div class="liked-by-images">
                <img class="image-icon" src="../../public/user-uploads/profile-pictures/random-woman-1.jpg">
                <img class="image-icon" src="../../public/user-uploads/profile-pictures/random-woman-1.jpg">
                <img class="image-icon" src="../../public/user-uploads/profile-pictures/random-woman-1.jpg">
              </div>
            
              <div class="liked-by-texts">
                Bookmarked by
                  <span class="self-name">
                    dionela
                  </span>
                and
                  <span class="like-count">
                    ${diary.stats.bookmarkCount} others
                  </span>
              </div>
            </div>
    
            <div class="post-caption-container">
              <span class="self-name">
                ${diary.author.name}
              </span>
              <span class="caption">
                ${diary.description}
              </span>
            </div>
    
            <div class="show-comments-container">
              View all
                <span class="js-comment-list">
                  ${diary.stats.reviewCount} reviews
                </span>
            </div>
    
            <div class="comment-container">
              <input type="text" id="commentInput" class="comment-box" placeholder="Write a review">
              <button class="comment-button" onclick="addComment()">
                <img class="send-icon" src="../../public/assets/icons/paper-plane-top.svg">
              </button>
            </div>
          </div>
      </div>
  `;
  });

  return diariesHTML;
}