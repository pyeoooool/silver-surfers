import { fetchUser } from "../../backend/data/user-object.js";

const user = fetchUser();

export function generateProfileHTML() {
  let profileHTML = '';
  document.title = `Profile - ${user.username}`;
  profileHTML = `
    <div class="profile-page">
      <div class="cover-photo-container">
        <img class="cover-photo" src="${user.cover}">
      </div>

      <div class="profile-feed">
        <div class="profile-content-container">
          <div class="profile-picture-container">
            <img class="profile-picture" src="${user.photo}">
          </div>
          <div class="profile-name">
            ${user.firstName} ${user.lastName}
          </div>
          <div class="hometown">
            ${user.country}, ${user.age} years old
          </div>

          <div class="profile-bio-container">
            <div class="profile-bio">
              ${user.description}
            </div> 
          </div>

          <div class="stats-container">
            <div class="stats-sub-container">
              <div class="stats-count">
              ${user.stats.diariesCount}
              </div>
              <div>
                Diaries
              </div>
            </div>
            
            <div class="stats-sub-container">
              <div class="stats-count">
                ${user.stats.reviewsCount}
              </div>
              <div>
                Reviews
              </div>
            </div>
            
          </div>

          <div class="wall-button-container">
            <button class="wall-button">
              Profile Wall
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  return profileHTML;
}