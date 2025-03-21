import { generateHeaderHTML } from '../../frontend/components/Header.js';
import { generateDiariesHTML } from '../../frontend/components/DiaryCard.js';
import { generateSettingsHTML } from '../../frontend/components/Settings.js';
import { generateProfileHTML } from '../../frontend/components/UserProfile.js';

document.title = `Silver Surfers - Diary Feed`;

document.querySelector('.header')
  .innerHTML = generateHeaderHTML();

document.querySelector('.news-feed')
  .innerHTML = generateDiariesHTML();

document.querySelector('.js-home-icon')
  .addEventListener('click', () => {
    const diaryFeed = generateDiariesHTML();
    document.querySelector('.news-feed').innerHTML = diaryFeed;
  });

document.querySelector('.js-settings-icon')
  .addEventListener('click', () => {
    const settingsFeed = generateSettingsHTML();
    document.querySelector('.news-feed').innerHTML = settingsFeed;
  });


document.querySelector('.js-profile-icon')
  .addEventListener('click', () => {
    const profileFeed = generateProfileHTML();
    document.querySelector('.news-feed').innerHTML = profileFeed;
  })

/*
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const modalContainer = document.querySelector('.create-diary-modal-container');


openModal.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
})

closeModal.addEventListener('click', () => {
  modalContainer.style.display = 'none';
})

window.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});
*/


/*
const addImageIcon = document.querySelector(".add-image-icon");
const imageUpload = document.getElementById("imageUpload");

addImageIcon.addEventListener("click", () => {
  imageUpload.click(); // Trigger the hidden file input
})


const addVideoIcon = document.querySelector(".add-video-icon");
const videoUpload = document.getElementById("videoUpload");
addVideoIcon.addEventListener("click", () => {
  videoUpload.click(); // Trigger the hidden file input
})
*/