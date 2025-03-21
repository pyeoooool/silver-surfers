import { fetchUser } from "../../backend/data/user-object.js";

const user = fetchUser();

export function generateSettingsHTML() {
  document.title = `Settings - ${user.username}`;
  const formattedDate = user.birthdate.toISOString().split("T")[0];

  let settingsHTML = '';

  settingsHTML = `
    <div class="settings-page">
        <h1>Edit your account</h1>
        <div class="settings-container">
            <form>
              <div class="form-group">
                  <label for="full-name">First Name</label>
                  <input type="text" id="full-name" placeholder="${user.firstName}">
              </div>

              <div class="form-group">
                  <label for="last-name">Last Name</label>
                  <input type="text" id="last-name" placeholder="${user.lastName}">
              </div>

              <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" id="username" placeholder="${user.username}">
              </div>

              <div class="form-group">
                  <label for="email">Change your email</label>
                  <input type="email" id="email" name="email" placeholder="${user.email}" required>
              </div>

              <div class="form-group">
                  <label for="birthday">Birthdate</label>
                  <input type="date" id="birthday" value="${formattedDate}">
              </div>

              <div class="form-group">
                  <label for="age">Age</label>
                  <input type="number" id="age" value="${user.age}" readonly>
              </div>

              <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" value="${user.password}">
              </div>

              <button class="save-button" type="submit">Save Changes</button>
            </form>
        </div>
    </div>
  `;

  return settingsHTML;
}