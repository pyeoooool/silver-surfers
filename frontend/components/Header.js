import { fetchUser } from '../../backend/data/user-object.js';

const user = fetchUser();

export function generateHeaderHTML() {
  let headerHTML = '';

  headerHTML = `
    <div class="header-left-section">
      <div class="header-title">
        Silver Surfers
      </div>
    </div>

    <div class="header-center-section">
      <img id="open-modal" class="header-add-post-icon" src="../public/assets/icons/square-plus.svg">
      <img class="header-home-icon js-home-icon" src="../public/assets/icons/home.svg">
      <img class="header-notification-icon" src="../public/assets/icons/bell.svg">
      <img class="header-settings-icon js-settings-icon" src="../public/assets/icons/settings.svg">
    </div>

    <div class="menu-container">
      <img class="header-menu-icon" src="../public/assets/icons/menu-burger.svg">
    </div>

    <div class="header-right-section">
        <img class="profile-picture-icon js-profile-icon" src="${user.photo}" />
    </div>
  `;

  return headerHTML;
}