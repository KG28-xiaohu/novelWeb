<template>
  <div class="changepwd">
    <h1>Change Password</h1>
    <form id="changePasswordForm">
      <label for="oldPassword">Old Password:</label>
      <input type="password" id="oldPassword" name="oldPassword" required />

      <label for="newPassword">New Password:</label>
      <input type="password" id="newPassword" name="newPassword" required />

      <label for="confirmPassword">Confirm New Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required
      />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("changePasswordForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let oldPassword = document.getElementById("oldPassword").value;
      let newPassword = document.getElementById("newPassword").value;
      let confirmPassword = document.getElementById("confirmPassword").value;

      // 在此添加验证逻辑
      if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
      }

      // 发送密码更改请求至后端的代码
      console.log("Submitting password change request...");
    });
});
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>